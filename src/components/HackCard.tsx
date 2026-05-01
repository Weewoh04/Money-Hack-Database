import Link from "next/link";
import type { Hack } from "@/data/hacks";

type HackCardProps = {
  hack: Hack;
};

const difficultyStyles = {
  Easy: "bg-leaf text-moss",
  Medium: "bg-honey/40 text-ink",
  Hard: "bg-clay/20 text-ink",
};

export default function HackCard({ hack }: HackCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wide">
        <span className="rounded-full bg-cream px-3 py-1 text-ink/70">{hack.category}</span>
        <span className={`rounded-full px-3 py-1 ${difficultyStyles[hack.difficulty]}`}>{hack.difficulty}</span>
      </div>
      <h3 className="mt-4 text-xl font-black leading-snug text-ink">{hack.title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/70">{hack.summary}</p>
      <dl className="mt-4 grid gap-3 text-sm">
        <div>
          <dt className="font-black text-ink">Time to start</dt>
          <dd className="text-ink/70">{hack.timeToStart}</dd>
        </div>
        <div>
          <dt className="font-black text-ink">Estimated benefit</dt>
          <dd className="text-ink/70">{hack.estimatedBenefit}</dd>
        </div>
      </dl>
      <div className="mt-4">
        <h4 className="text-sm font-black text-ink">Steps</h4>
        <ol className="mt-2 grid gap-2 text-sm leading-6 text-ink/70">
          {hack.steps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf text-xs font-black text-moss">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-4 rounded-2xl bg-cream p-3 text-xs leading-5 text-ink/70">{hack.warning}</p>
      <Link
        href={`/hacks/${hack.slug}`}
        className="mt-auto inline-flex pt-5 font-black text-moss transition hover:text-ink"
      >
        View steps
      </Link>
    </article>
  );
}
