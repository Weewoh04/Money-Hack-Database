import Link from "next/link";
import { states } from "@/data/states";

type StateMapProps = {
  hackTitle: string;
};

export default function StateMap({ hackTitle }: StateMapProps) {
  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white p-5 shadow-sm sm:p-6">
      <div className="max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">State resource map</p>
        <h2 className="mt-2 text-3xl font-black text-ink">Find official resources by state</h2>
        <p className="mt-3 leading-7 text-ink/70">
          Choose a state to open its USA.gov state government page, then search official state agencies for current
          details related to {hackTitle.toLowerCase()}.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl bg-cream p-3 sm:p-5">
        <div className="relative mx-auto aspect-[16/10] max-w-4xl rounded-[2rem] border border-ink/10 bg-[radial-gradient(circle_at_20%_25%,#dcefd8,transparent_20%),linear-gradient(135deg,#fff9ef,#f3e1be)]">
          <div className="absolute left-[7%] top-[13%] h-[62%] w-[83%] rounded-[45%_55%_48%_52%] border-2 border-dashed border-moss/30 bg-white/35" />
          {states.map((state) => (
            <Link
              key={state.abbr}
              href={`https://www.usa.gov/states/${state.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`${state.name} official state resources`}
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
            href={`https://www.usa.gov/states/${state.slug}`}
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
