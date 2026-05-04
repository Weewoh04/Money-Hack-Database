import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import SearchFilter from "@/components/SearchFilter";
import { hacks } from "@/data/hacks";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Browse Money Hacks for Savings and Budget Help Now",
  description:
    "Search practical money hacks for emergency help, grocery savings, utility bills, cashback rewards, budgeting tools, and side income ideas that fit real life.",
  keywords: [
    "money hacks",
    "budget help",
    "emergency assistance",
    "grocery savings",
    "utility bill help",
    "cashback rewards",
  ],
  path: "/hacks",
});

type HacksPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function HacksPage({ searchParams }: HacksPageProps) {
  const params = await searchParams;
  const categories = Array.from(new Set(hacks.map((hack) => hack.category))).sort();
  const initialCategory = params?.category && categories.includes(params.category) ? params.category : "All";

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">Money hacks database</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Search practical ways to save, get help, and earn</h1>
        <p className="mt-4 leading-7 text-ink/70">
          Results are educational starting points. Verify eligibility, program details, fees, deadlines, and terms
          directly with official providers before applying or spending money.
        </p>
      </div>
      <div className="mb-8">
        <AdSlot label="Advertisement" />
      </div>
      <SearchFilter hacks={hacks} categories={categories} initialCategory={initialCategory} />
      <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">How to use the money hacks database</h2>
          <p>
            Start with the problem you need to solve, then filter by category instead of reading everything at once.
            Emergency help, grocery savings, utility bills, housing resources, cashback, budgeting tools, free resources,
            and side hustles all require different decisions. A focused search keeps the list useful and helps you avoid
            spending time on tips that do not fit your situation.
          </p>
          <p>
            Each money hack is written as an educational starting point. That means it can help you find the next step,
            but it should not replace official rules, account terms, professional advice, or local program details. If a
            page mentions a benefit, discount, rebate, income idea, or assistance program, verify the current details
            before applying, buying, canceling, switching, or sharing personal information.
          </p>
          <p>
            When comparing options, look at the practical cost as well as the possible savings. Time, transportation,
            paperwork, fees, payout thresholds, eligibility rules, and follow-up calls all matter. A tip can be real and
            still be the wrong fit if it costs more effort than it returns.
          </p>
        </div>
        <div className="space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">A simple process for choosing what to try</h2>
          <p>
            Pick one goal for the next seven days: reduce one bill, find one local resource, lower one grocery trip,
            apply for one program, sell a few unused items, or build one basic budget worksheet. Small, finished actions
            are more useful than a long list of possibilities that never becomes a real plan.
          </p>
          <p>
            Before you act, write down what success would look like. It could be dollars saved, a completed application,
            a lower monthly payment, fewer missed due dates, a pantry plan for the week, or a side hustle test with
            clear net pay. Afterward, compare the result with the time and stress involved. Keep the ideas that produce
            value and skip the ones that make your budget more complicated.
          </p>
          <p>
            If you are dealing with an urgent shortfall, prioritize essentials first. Food, housing, utilities,
            transportation, medication, and safety usually need attention before optional savings tricks. Use the
            emergency and local resource pages as a first stop, then confirm availability directly with the provider.
          </p>
          <p>
            Save the hacks that need follow-up. Assistance applications, bill negotiations, rebates, marketplace
            listings, and plan switches often take more than one step. A reminder on your calendar can keep a useful
            idea from disappearing after the first search, especially when you are waiting for a call back or a payment
            to post.
          </p>
          <p>
            If a hack does not work, the attempt can still teach you something. You may learn which documents are
            missing, which provider controls the rule, which expense is driving the budget problem, or which offer is
            not worth repeating. Use that information to choose the next page with less guesswork.
          </p>
        </div>
      </section>
      <div className="mt-10">
        <AdSlot label="Sponsored resource space" />
      </div>
    </section>
  );
}
