import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calculator, Wallet, Plane, Home, Utensils, Bus, Sparkles, Shield, Info, AlertCircle, MapPin, BookOpen, ExternalLink, Briefcase, TrendingUp } from "lucide-react";
import {
  countryBudgets,
  detectActivity,
  findCountry,
  whWages,
  isWorkingHoliday,
  type CostStyle,
} from "@/data/budgetData";
import { recommendedCities } from "@/data/recommendedCities";

const styles: { value: CostStyle; label: string; desc: string }[] = [
  { value: "budget", label: "Budget", desc: "Hostel, gatumat, kollektivt" },
  { value: "medel", label: "Medel", desc: "Eget rum, restaurang ibland" },
  { value: "komfort", label: "Komfort", desc: "Hotell, mer aktiviteter" },
];

const formatSEK = (n: number) =>
  new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(Math.round(n)) + " kr";

const Budget = () => {
  const [destination, setDestination] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState<number>(30);
  const [style, setStyle] = useState<CostStyle>("medel");
  const [submitted, setSubmitted] = useState(false);

  const country = useMemo(() => findCountry(destination), [destination]);
  const activityProfile = useMemo(() => detectActivity(activity), [activity]);

  const result = useMemo(() => {
    if (!country || !duration) return null;
    const days = Math.max(1, Math.min(365, duration));
    const months = days / 30;
    const c = country.data;

    const accommodation = c.accommodation[style] * days;
    const food = c.food[style] * days;
    const transport = c.transport[style] * days;
    const activitiesBase = c.activities[style] * days;
    const activities = activitiesBase * activityProfile.activityMultiplier;
    const flight = c.flight;
    const visa = c.visa;
    const insurance = c.insuranceMonthly * Math.max(1, months);
    const fixedExtra = activityProfile.fixedExtra;

    const subtotal = accommodation + food + transport + activities + flight + visa + insurance + fixedExtra;
    const buffer = subtotal * 0.12;
    const total = subtotal + buffer;

    return {
      accommodation,
      food,
      transport,
      activities,
      flight,
      visa,
      insurance,
      fixedExtra,
      buffer,
      total,
      days,
      months,
    };
  }, [country, duration, style, activityProfile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Budgetkalkylator för utlandsåret – räkna ut din reskostnad | Farway"
        description="Räkna ut vad ditt utlandsår kostar. Budget för Working Holiday, skidsäsong, backpacking och språkkurser i 20+ länder – flyg, boende, mat och försäkring."
        canonical="https://farway.se/budget"
      />
      <Header />
      <main className="pt-[calc(4rem+2.75rem+1px)] sm:pt-[calc(4rem+1px)]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border/40">
          <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
            <div className="flex items-center gap-2 text-primary mb-3">
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Budgeträknaren</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vad kommer din resa kosta?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Skriv in vart du ska, vad du ska göra och hur länge – så får du en realistisk budget
              baserad på genomsnittliga kostnader för svenska resenärer.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 max-w-4xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <Card className="lg:col-span-2 h-fit">
              <CardHeader>
                <CardTitle className="font-display text-xl">Dina förutsättningar</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="destination">Destination</Label>
                    <Input
                      id="destination"
                      placeholder="t.ex. Thailand, Bali, Australien..."
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      maxLength={100}
                      className="mt-1.5"
                    />
                    {destination && !country && (
                      <p className="text-xs text-destructive mt-1.5 flex items-start gap-1">
                        <AlertCircle className="w-3 h-3 mt-0.5 shrink-0" />
                        Vi har inte data för just det landet än. Prova ett annat.
                      </p>
                    )}
                    {country && (
                      <p className="text-xs text-primary mt-1.5">
                        ✓ Hittade {country.data.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="activity">Vad ska du göra där?</Label>
                    <Textarea
                      id="activity"
                      placeholder="t.ex. backpacka, working holiday, dyka, studera..."
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      maxLength={300}
                      rows={3}
                      className="mt-1.5"
                    />
                    {activity && (
                      <p className="text-xs text-muted-foreground mt-1.5">
                        Identifierat som: <span className="font-medium text-foreground">{activityProfile.label}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="duration">Hur länge? (dagar)</Label>
                    <Input
                      id="duration"
                      type="number"
                      min={1}
                      max={365}
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="mt-1.5"
                    />
                    <p className="text-xs text-muted-foreground mt-1.5">
                      ≈ {(duration / 30).toFixed(1)} månader
                    </p>
                  </div>

                  <div>
                    <Label>Resestil</Label>
                    <div className="grid grid-cols-3 gap-2 mt-1.5">
                      {styles.map((s) => (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => setStyle(s.value)}
                          className={`text-left px-3 py-2 rounded-md border text-xs transition-all ${
                            style === s.value
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border bg-background hover:bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          <div className="font-semibold text-sm">{s.label}</div>
                          <div className="text-[10px] mt-0.5 leading-tight">{s.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Calculator className="w-4 h-4" />
                    Räkna ut min budget
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Result */}
            <div className="lg:col-span-3">
              {!submitted || !result ? (
                <Card className="border-dashed bg-muted/20">
                  <CardContent className="py-16 text-center">
                    <Wallet className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                    <h3 className="font-display text-lg text-foreground mb-2">
                      Din budget visas här
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Fyll i formuläret och klicka på "Räkna ut min budget" för att se en
                      detaljerad uppdelning.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      {Object.values(countryBudgets)
                        .slice(0, 6)
                        .map((c) => (
                          <button
                            key={c.name}
                            type="button"
                            onClick={() => setDestination(c.name)}
                            className="text-xs px-3 py-1 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                          >
                            {c.name}
                          </button>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ) : !country ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-3" />
                    <h3 className="font-display text-lg text-foreground mb-2">
                      Vi behöver en destination
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Fyll i ett land vi har data för. Prova: Thailand, Australien, Bali, USA, Alperna.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {/* Total */}
                  <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground">
                        Uppskattad totalkostnad för {result.days} dagar i {country.data.name}
                      </p>
                      <p className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                        {formatSEK(result.total)}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        ≈ {formatSEK(result.total / result.months)} per månad
                      </p>
                    </CardContent>
                  </Card>

                  {/* Breakdown */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-display text-base">Så fördelas budgeten</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <BudgetRow icon={Plane} label="Flyg t/r från Sverige" value={result.flight} />
                      <BudgetRow icon={Home} label="Boende" value={result.accommodation} sub={`${result.days} dagar`} />
                      <BudgetRow icon={Utensils} label="Mat & dryck" value={result.food} sub={`${result.days} dagar`} />
                      <BudgetRow icon={Bus} label="Lokal transport" value={result.transport} />
                      <BudgetRow icon={Sparkles} label="Aktiviteter & nöjen" value={result.activities} />
                      <BudgetRow icon={Shield} label="Reseförsäkring" value={result.insurance} sub={`~${result.months.toFixed(1)} mån`} />
                      {result.visa > 0 && (
                        <BudgetRow icon={Info} label="Visum" value={result.visa} />
                      )}
                      {result.fixedExtra > 0 && (
                        <BudgetRow
                          icon={Sparkles}
                          label={`Tillägg: ${activityProfile.label}`}
                          value={result.fixedExtra}
                          accent
                        />
                      )}
                      <div className="border-t border-border pt-3">
                        <BudgetRow icon={AlertCircle} label="Buffert (12%)" value={result.buffer} muted />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recommended cities */}
                  {country && recommendedCities[country.slug] && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-display text-base flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          Rekommenderade städer i {country.data.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {recommendedCities[country.slug].map((city) => (
                            <li key={city.name} className="flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <div>
                                <p className="text-sm font-semibold text-foreground">{city.name}</p>
                                <p className="text-sm text-muted-foreground">{city.blurb}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-muted-foreground mt-4 italic">
                          Kostnaderna kan variera mellan städer – storstäder är ofta dyrare än småorter.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Activity note */}
                  {activityProfile.note && (
                    <Card className="bg-accent/5 border-accent/20">
                      <CardContent className="pt-6 flex gap-3">
                        <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground mb-1">
                            Tips för {activityProfile.label.toLowerCase()}
                          </p>
                          <p className="text-sm text-muted-foreground">{activityProfile.note}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <p className="text-xs text-muted-foreground italic px-2">
                    Siffrorna är genomsnittsvärden för {style}-resor och kan variera kraftigt beroende
                    på säsong, valutakurser och personliga val. Använd som riktlinje, inte facit.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sources & methodology */}
        <section className="border-t border-border/40 bg-muted/20">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="flex items-center gap-2 text-primary mb-3">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Källor & metod</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Var kommer siffrorna ifrån?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              All data är ett genomsnitt från flera oberoende källor (2024–2025). Vi uppdaterar löpande – men växelkurser, säsong och personliga val gör att din verkliga kostnad kan skilja sig 20–30 % åt båda håll.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  cat: "Boende, mat & transport",
                  desc: "Genomsnittliga dagskostnader per land och resestil (hostel/Airbnb/hotell).",
                  sources: [
                    { name: "Numbeo Cost of Living", url: "https://www.numbeo.com/cost-of-living/" },
                    { name: "Budget Your Trip", url: "https://www.budgetyourtrip.com/" },
                    { name: "Nomad List", url: "https://nomadlist.com/" },
                  ],
                },
                {
                  cat: "Flygpriser t/r från Sverige",
                  desc: "Median för ekonomi t/r från Stockholm/Köpenhamn under låg- och högsäsong.",
                  sources: [
                    { name: "Google Flights", url: "https://www.google.com/travel/flights" },
                    { name: "Skyscanner", url: "https://www.skyscanner.se/" },
                    { name: "Momondo", url: "https://www.momondo.se/" },
                  ],
                },
                {
                  cat: "Visum & arbetstillstånd",
                  desc: "Officiella avgifter från respektive lands migrationsmyndighet.",
                  sources: [
                    { name: "Australien (Home Affairs)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417" },
                    { name: "Nya Zeeland (INZ)", url: "https://www.immigration.govt.nz/" },
                    { name: "UK Student Visa (gov.uk)", url: "https://www.gov.uk/student-visa" },
                    { name: "Kanada (IRCC)", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html" },
                  ],
                },
                {
                  cat: "Reseförsäkring",
                  desc: "Snittpriser för månadsförsäkring för 18–35-åringar (utan hemförsäkring).",
                  sources: [
                    { name: "Gouda Reseförsäkring", url: "https://www.gouda-rf.se/" },
                    { name: "ERV", url: "https://www.erv.se/" },
                    { name: "If Reseförsäkring", url: "https://www.if.se/privat/forsakringar/reseforsakring" },
                  ],
                },
                {
                  cat: "Skidsäsong (liftkort, säsongspass)",
                  desc: "Säsongspriser för Alperna och Nordamerika 2024/25.",
                  sources: [
                    { name: "Skiresort.info", url: "https://www.skiresort.info/" },
                    { name: "Epic Pass (Vail)", url: "https://www.epicpass.com/" },
                    { name: "Ikon Pass", url: "https://www.ikonpass.com/" },
                  ],
                },
                {
                  cat: "Studier & språkkurser",
                  desc: "Avgifter från officiella universitetssidor och CSN:s utlandsbelopp.",
                  sources: [
                    { name: "CSN – studier utomlands", url: "https://www.csn.se/bidrag-och-lan/utlandsstudier-med-studiemedel.html" },
                    { name: "EF Education First", url: "https://www.ef.se/sprakresor/" },
                    { name: "Kilroy", url: "https://www.kilroy.se/" },
                  ],
                },
              ].map((cat) => (
                <Card key={cat.cat}>
                  <CardContent className="pt-5">
                    <h3 className="font-semibold text-foreground mb-1.5">{cat.cat}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{cat.desc}</p>
                    <ul className="space-y-1.5">
                      {cat.sources.map((s) => (
                        <li key={s.name}>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                          >
                            {s.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-background/60">
              <CardHeader>
                <CardTitle className="font-display text-base">Så räknar vi</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2.5 leading-relaxed">
                <p><strong className="text-foreground">Resestil:</strong> "Budget" = hostel/delat rum, gatumat, kollektivt. "Medel" = privatrum/Airbnb, restaurang ibland. "Komfort" = hotell, taxi, mer aktiviteter.</p>
                <p><strong className="text-foreground">Aktivitetsjustering:</strong> Skidsäsong drar upp aktivitetsbudgeten 50 % + 8 000 kr för säsongskort. Au pair sänker boende/mat (värdfamilj betalar). Working holiday räknar uppstart i 2–3 månader eftersom du tjänar pengar på plats.</p>
                <p><strong className="text-foreground">Buffert:</strong> 12 % läggs på allt för oväntade kostnader – tappad telefon, bot, extra resa hem osv. Erfarna resenärer rekommenderar 10–15 %.</p>
                <p><strong className="text-foreground">Vad som inte ingår:</strong> Kostnader hemma i Sverige (Spotify, mobil, försäkringar du behåller), shopping, present till familj, kostsamma incidenter (sjukhus utan försäkring).</p>
                <p className="text-xs italic pt-2 border-t border-border/40">Senast uppdaterat: våren 2025. Hör av dig till <a href="mailto:farwaytravelling@gmail.com" className="text-primary hover:underline">farwaytravelling@gmail.com</a> om du hittar siffror som ser fel ut.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface BudgetRowProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  sub?: string;
  muted?: boolean;
  accent?: boolean;
}

const BudgetRow = ({ icon: Icon, label, value, sub, muted, accent }: BudgetRowProps) => (
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-3 min-w-0">
      <div
        className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${
          accent ? "bg-accent/15 text-accent" : muted ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"
        }`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <p className={`text-sm ${muted ? "text-muted-foreground" : "text-foreground"} truncate`}>{label}</p>
        {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
      </div>
    </div>
    <p className={`font-mono text-sm tabular-nums shrink-0 ${muted ? "text-muted-foreground" : "text-foreground font-semibold"}`}>
      {formatSEK(value)}
    </p>
  </div>
);

export default Budget;
