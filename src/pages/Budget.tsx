import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calculator, Wallet, Plane, Home, Utensils, Bus, Sparkles, Shield, Info, AlertCircle } from "lucide-react";
import {
  countryBudgets,
  detectActivity,
  findCountry,
  type CostStyle,
} from "@/data/budgetData";

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
                      <p className="text-xs text-amber-600 mt-1.5 flex items-start gap-1">
                        <AlertCircle className="w-3 h-3 mt-0.5 shrink-0" />
                        Vi har inte data för just det landet än. Prova ett annat.
                      </p>
                    )}
                    {country && (
                      <p className="text-xs text-emerald-600 mt-1.5">
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
                    <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
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
