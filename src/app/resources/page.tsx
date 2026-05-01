import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Financial Assistance Resources",
  description:
    "Helpful starting points for finding official benefits, food support, utility help, housing resources, and consumer protection information.",
};

const resources = [
  {
    title: "Official state benefit portals",
    href: "/hacks?category=Emergency%20Help",
  },
  {
    title: "211 local assistance referrals",
    href: "/hacks#211-local-help-line",
  },
  {
    title: "Food banks and community pantries",
    href: "/hacks#find-local-food-banks",
  },
  {
    title: "Local housing agencies and nonprofits",
    href: "/hacks?category=Rent%20%26%20Housing%20Help",
  },
  {
    title: "Utility provider hardship programs",
    href: "/hacks?category=Utility%20Bill%20Help",
  },
  {
    title: "Consumer protection and scam reporting offices",
    href: "/disclosure",
  },
];

export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">Resources</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Official places to verify details</h1>
        <p className="mt-4 leading-7 text-ink/70">
          Use Money Hack Database as a starting point, then verify applications, terms, fees, eligibility, and deadlines
          with official providers.
        </p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.title} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-ink">{resource.title}</h2>
            <p className="mt-3 leading-7 text-ink/70">
              Search for the official local or government source and check the latest requirements before acting.
            </p>
            <Link className="mt-4 inline-flex font-black text-moss hover:text-ink" href={resource.href}>
              View related page
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <AdSlot label="Advertisement" />
      </div>
    </section>
  );
}
