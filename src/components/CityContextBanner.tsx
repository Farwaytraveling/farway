import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";

/**
 * Visas högst upp på programsidor (Au Pair, Working Holiday, Skidsäsong, Studera)
 * när användaren kommit hit via en stadslänk. Behåller stadens kontext och
 * erbjuder en snabb väg tillbaka till destinationssidan för staden.
 */
export const CityContextBanner = ({ programLabel }: { programLabel: string }) => {
  const [params] = useSearchParams();
  const city = params.get("city");
  const country = params.get("country");
  const countrySlug = params.get("countrySlug");

  if (!city) return null;

  const backHref = countrySlug
    ? `/destination/${countrySlug}?city=${encodeURIComponent(city)}`
    : "/karta";

  return (
    <div className="bg-primary/5 border-b border-primary/15">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-foreground">
          <MapPin className="w-4 h-4 text-primary shrink-0" />
          <span>
            Du tittar på <strong>{programLabel}</strong> kopplat till{" "}
            <strong>
              {city}
              {country ? `, ${country}` : ""}
            </strong>
            .
          </span>
        </div>
        <Link
          to={backHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Tillbaka till {city}
        </Link>
      </div>
    </div>
  );
};
