import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import StateMap from "@/components/StateMap";
import { hacks } from "@/data/hacks";

type HackDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return hacks.map((hack) => ({
    slug: hack.slug,
  }));
}

export async function generateMetadata({ params }: HackDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hack = hacks.find((item) => item.slug === slug);

  if (!hack) {
    return {
      title: "Money Hack Not Found",
    };
  }

  return {
    title: hack.title,
    description: hack.summary,
    openGraph: {
      title: `${hack.title} | Money Hack Database`,
      description: hack.summary,
      type: "article",
    },
  };
}

export default async function HackDetailPage({ params }: HackDetailPageProps) {
  const { slug } = await params;
  const hack = hacks.find((item) => item.slug === slug);

  if (!hack) {
    notFound();
  }

  const relatedHacks = hacks.filter((item) => item.category === hack.category && item.id !== hack.id).slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link className="font-black text-moss hover:text-ink" href="/hacks">
        Back to all money hacks
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
        <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wide">
            <Link
              className="rounded-full bg-cream px-3 py-1 text-ink/70 hover:bg-leaf hover:text-moss"
              href={`/hacks?category=${encodeURIComponent(hack.category)}`}
            >
              {hack.category}
            </Link>
            <span className="rounded-full bg-leaf px-3 py-1 text-moss">{hack.difficulty}</span>
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-ink sm:text-5xl">{hack.title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">{hack.summary}</p>

          <dl className="mt-6 grid gap-4 rounded-3xl bg-cream p-5 sm:grid-cols-2">
            <div>
              <dt className="font-black text-ink">Time to start</dt>
              <dd className="mt-1 text-ink/70">{hack.timeToStart}</dd>
            </div>
            <div>
              <dt className="font-black text-ink">Estimated benefit</dt>
              <dd className="mt-1 text-ink/70">{hack.estimatedBenefit}</dd>
            </div>
          </dl>

          <section className="mt-8">
            <h2 className="text-3xl font-black text-ink">Step-by-step checklist</h2>
            <ol className="mt-5 grid gap-4">
              {hack.steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-3xl border border-ink/10 bg-cream p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-moss font-black text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 leading-7 text-ink/75">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8 rounded-3xl border border-clay/20 bg-clay/10 p-5">
            <h2 className="text-xl font-black text-ink">Important verification note</h2>
            <p className="mt-2 leading-7 text-ink/75">{hack.warning}</p>
            <p className="mt-3 leading-7 text-ink/75">
              This page is educational and does not provide financial, legal, tax, or benefits advice. Confirm
              eligibility, deadlines, fees, program details, and terms directly with official providers.
            </p>
          </section>
        </div>

        <aside className="grid gap-5">
          <AdSlot label="Advertisement" size="rectangle" />
          <div className="rounded-3xl border border-ink/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-ink">Related money hacks</h2>
            <div className="mt-4 grid gap-3">
              {relatedHacks.map((item) => (
                <Link
                  key={item.id}
                  className="rounded-2xl bg-cream p-4 font-black text-ink transition hover:bg-leaf hover:text-moss"
                  href={`/hacks/${item.slug}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-10">
        <StateMap hackTitle={hack.title} />
      </div>

      <div className="mt-10">
        <AdSlot label="Sponsored resource space" />
      </div>
    </article>
  );
}
