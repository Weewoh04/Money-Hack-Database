import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import CategoryCard from "@/components/CategoryCard";
import HackCard from "@/components/HackCard";
import Hero from "@/components/Hero";
import { categories } from "@/data/categories";
import { hacks } from "@/data/hacks";

export const metadata: Metadata = {
  title: "Money Hack Database",
  description:
    "Find practical money-saving resources, assistance programs, side hustle ideas, cashback tools, couponing strategies, and budget help.",
};

const startHere = [
  {
    title: "Need help fast?",
    text: "Start with 211, food resources, utility assistance, and local emergency programs.",
  },
  {
    title: "Want to save weekly?",
    text: "Use meal planning, coupon stacking, library perks, and cashback tools carefully.",
  },
  {
    title: "Want extra income?",
    text: "Compare realistic side hustles, small services, selling items, and research panels.",
  },
  {
    title: "Want free resources?",
    text: "Check libraries, community programs, unclaimed money searches, and discount directories.",
  },
];

export default function Home() {
  const featuredHacks = hacks.slice(0, 6);

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-black uppercase tracking-wide text-moss">Featured categories</p>
            <h2 className="mt-2 text-3xl font-black text-ink">Pick the kind of help you need</h2>
          </div>
          <Link className="font-black text-moss hover:text-ink" href="/categories">
            Browse Categories
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="bg-white/45">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <AdSlot />
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-black uppercase tracking-wide text-moss">Featured hacks</p>
              <h2 className="mt-2 text-3xl font-black text-ink">Useful places to start</h2>
            </div>
            <Link className="font-black text-moss hover:text-ink" href="/hacks">
              Find Money Hacks
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHacks.map((hack) => (
              <HackCard key={hack.id} hack={hack} />
            ))}
          </div>
          <div className="mt-8">
            <AdSlot label="Sponsored savings tools" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8">
          <p className="font-black uppercase tracking-wide text-honey">Start here</p>
          <h2 className="mt-2 text-3xl font-black">Choose the next right move</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {startHere.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/10 p-5">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-white/75">{item.text}</p>
                <Link
                  href={
                    item.title === "Need help fast?"
                      ? "/hacks?category=Emergency%20Help"
                      : item.title === "Want to save weekly?"
                        ? "/hacks?category=Food%20%26%20Grocery%20Savings"
                        : item.title === "Want extra income?"
                          ? "/hacks?category=Side%20Hustles"
                          : "/hacks?category=Freebies%20%26%20Discounts"
                  }
                  className="mt-4 inline-flex font-black text-honey hover:text-white"
                >
                  Open matching hacks
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4 leading-8 text-ink/75">
            <h2 className="text-3xl font-black text-ink">A calmer way to search for money help</h2>
            <p>
              Money Hack Database is built around practical next steps. Instead of treating every tip as a miracle fix,
              the site separates ideas into categories you can actually compare: emergency help, food and grocery
              savings, utility bill support, rent and housing resources, cashback and rewards, budgeting tools,
              freebies, discounts, and side hustles.
            </p>
            <p>
              The best place to start depends on the pressure you are feeling right now. If an essential bill or basic
              need is urgent, look for official assistance resources first. If the budget is mostly stable but stretched,
              focus on weekly habits like meal planning, bill tracking, subscription checks, and free local resources.
              If extra income is the goal, compare net pay after expenses rather than headline numbers.
            </p>
            <p>
              Every page is meant to be a starting point, not a guarantee. Programs, prices, eligibility rules, app
              terms, funding, payout thresholds, and local availability can change. Use the site to find the right
              question, then verify the answer with the provider that controls the program or offer.
            </p>
          </div>
          <div className="space-y-4 leading-8 text-ink/75">
            <h2 className="text-3xl font-black text-ink">How to make the site useful today</h2>
            <p>
              Choose one action before opening multiple tabs. Call 211, check a food resource, download a bill tracker,
              compare one phone plan, list five unused items, or plan three low-cost meals. A small completed action is
              more valuable than a huge list of tips that leaves you overwhelmed.
            </p>
            <p>
              As you test an idea, write down the result. Track dollars saved, dollars earned after expenses, hours
              spent, applications submitted, calls completed, due dates changed, or purchases avoided. The notes do not
              need to be fancy. They simply help you decide whether to repeat the idea, adjust it, or move on.
            </p>
            <p>
              If you are in a cash crunch, focus first on food, housing, utilities, transportation, medication, and
              safety. Contact billers early, gather documents before applying for programs, and be careful with any site
              that asks for fees or promises guaranteed results. Good money help should make the next step clearer, not
              pressure you into a rushed decision.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-ink/10 bg-leaf p-6 sm:p-8">
          <div className="grid gap-5 md:grid-cols-[1fr_360px] md:items-center">
            <div>
              <h2 className="text-3xl font-black text-ink">Get new money hacks weekly</h2>
              <p className="mt-2 leading-7 text-ink/70">
                Email signup placeholder for future updates, guides, and new resource roundups.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]" action="#">
              <input
                aria-label="Email address"
                placeholder="you@example.com"
                className="min-h-12 rounded-full border border-ink/15 bg-white px-4 outline-none focus:border-moss focus:ring-4 focus:ring-white"
              />
              <button className="min-h-12 rounded-full bg-moss px-5 font-black text-white hover:bg-ink" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
