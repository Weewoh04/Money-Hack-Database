import Link from "next/link";
import { states } from "@/data/states";

type StateMapProps = {
  hackTitle: string;
  hackSlug: string;
};

const programResourceConfigs: Record<
  string,
  {
    label: string;
    description: string;
    getUrl: (state: (typeof states)[number]) => string;
  }
> = {
  "apply-snap-benefits": {
    label: "State SNAP application info",
    description:
      "State buttons open the USDA SNAP directory page for that state, which includes official state SNAP websites and application links when available.",
    getUrl: (state) => `https://www.fns.usda.gov/snap-directory-entry/${state.slug}`,
  },
  "find-local-food-banks": {
    label: "Find local food resources",
    description:
      "State buttons open Feeding America's official food finder. Enter your ZIP code there to find the food bank or pantry network serving your area.",
    getUrl: () => "https://www.feedingamerica.org/need-help-find-food",
  },
  "liheap-utility-assistance": {
    label: "State LIHEAP contact and application info",
    description:
      "State buttons open the official ACF LIHEAP state and territory contact listing, which includes state program websites and public inquiry contacts.",
    getUrl: () => "https://acf.gov/ocs/liheap-state-and-territory-contact-listing",
  },
  "weatherization-assistance": {
    label: "Weatherization application info",
    description:
      "State buttons open the Department of Energy's official Weatherization application page, which explains how to find your state administrator and local provider.",
    getUrl: () => "https://www.energy.gov/cmei/scep/wap/how-apply-weatherization-assistance",
  },
  "rent-relief-search": {
    label: "State housing and rental assistance info",
    description:
      "State buttons open HUD's state housing page, which explains rental assistance options and how to contact local Public Housing Authorities.",
    getUrl: (state) => `https://www.hud.gov/states/${state.slug}`,
  },
  "211-local-help-line": {
    label: "Find your local 211",
    description:
      "State buttons open the official United Way 211 local search page. Enter your ZIP code there to find local rent, food, utility, and emergency resources.",
    getUrl: () => "https://www.211.org/about-us/your-local-211",
  },
  "check-unclaimed-money": {
    label: "State unclaimed property search",
    description:
      "State buttons open the National Association of Unclaimed Property Administrators search page, which links to official state unclaimed property programs.",
    getUrl: () => "https://unclaimed.org/search/",
  },
  "emergency-budget-reset": {
    label: "Emergency help by location",
    description:
      "State buttons open the official United Way 211 local search page. Enter your ZIP code there to find immediate local help for essentials.",
    getUrl: () => "https://www.211.org/about-us/your-local-211",
  },
};

const defaultResourceConfig = {
  label: "Official state resource starting point",
  description:
    "State buttons open official state government pages. For this topic, also verify terms directly with the provider, app, or local agency.",
  getUrl: (state: (typeof states)[number]) => `https://www.usa.gov/states/${state.slug}`,
};

export default function StateMap({ hackTitle, hackSlug }: StateMapProps) {
  const resourceConfig = programResourceConfigs[hackSlug] ?? defaultResourceConfig;

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white p-5 shadow-sm sm:p-6">
      <div className="max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">State resource map</p>
        <h2 className="mt-2 text-3xl font-black text-ink">{resourceConfig.label}</h2>
        <p className="mt-3 leading-7 text-ink/70">
          {resourceConfig.description} Always confirm current eligibility, documents, deadlines, and terms directly
          with the official provider for {hackTitle.toLowerCase()}.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl bg-cream p-3 sm:p-5">
        <div className="relative mx-auto aspect-[16/10] max-w-4xl rounded-[2rem] border border-ink/10 bg-[radial-gradient(circle_at_20%_25%,#dcefd8,transparent_20%),linear-gradient(135deg,#fff9ef,#f3e1be)]">
          <div className="absolute left-[7%] top-[13%] h-[62%] w-[83%] rounded-[45%_55%_48%_52%] border-2 border-dashed border-moss/30 bg-white/35" />
          {states.map((state) => (
            <Link
              key={state.abbr}
              href={resourceConfig.getUrl(state)}
              target="_blank"
              rel="noopener noreferrer"
              title={`${state.name}: ${resourceConfig.label}`}
              className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-moss/20 bg-white text-[10px] font-black text-moss shadow-sm transition hover:z-10 hover:scale-125 hover:bg-moss hover:text-white focus:z-10 focus:scale-125 focus:bg-moss focus:text-white focus:outline-none focus:ring-4 focus:ring-leaf sm:h-9 sm:w-9 sm:text-xs"
              style={{ left: `${state.x}%`, top: `${state.y}%` }}
            >
              {state.abbr}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {states.map((state) => (
          <Link
            key={state.name}
            href={resourceConfig.getUrl(state)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm font-black text-ink transition hover:border-moss hover:text-moss"
          >
            {state.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
