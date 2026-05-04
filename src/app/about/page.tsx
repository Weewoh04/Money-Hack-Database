import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "About Money Hack Database and Budget Help Resources",
  description:
    "Learn how Money Hack Database organizes money-saving resources, assistance programs, budgeting tools, cashback ideas, and side income tips for readers.",
  keywords: [
    "about Money Hack Database",
    "budget resources",
    "money saving resources",
    "assistance programs",
    "cashback ideas",
    "side income tips",
  ],
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="font-black uppercase tracking-wide text-moss">About</p>
      <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">A practical database for stretching a budget</h1>
      <div className="mt-6 space-y-5 rounded-3xl border border-ink/10 bg-white p-6 leading-8 text-ink/75 shadow-sm">
        <p>
          Money Hack Database collects educational starting points for people looking for legitimate ways to save money,
          find assistance, compare discounts, and explore flexible income ideas.
        </p>
        <p>
          The goal is simple: make useful options easier to discover while reminding readers to verify every program,
          eligibility rule, deadline, fee, and term directly with the official provider.
        </p>
        <p>
          This site does not provide financial, legal, tax, or benefits advice, and it does not guarantee savings,
          approval, income, or availability.
        </p>
        <h2 className="pt-3 text-2xl font-black text-ink">Why the site exists</h2>
        <p>
          Budget pressure can make the internet feel noisy. One search can turn up public programs, coupon tricks,
          cashback apps, side hustle claims, debt opinions, social media shortcuts, and old articles that may no longer
          be accurate. Money Hack Database is meant to slow that process down and organize it into choices that are
          easier to understand.
        </p>
        <p>
          The site focuses on practical categories because different money problems need different next steps. Someone
          facing a utility shutoff needs official program information and provider contacts. Someone trying to lower a
          grocery bill may need meal planning, pantry checks, sales matching, or food resources. Someone testing a side
          hustle needs to compare real net pay after expenses. Those situations should not be treated like the same
          generic money tip.
        </p>
        <h2 className="pt-3 text-2xl font-black text-ink">How we think about useful money content</h2>
        <p>
          Useful money content should be specific enough to act on and cautious enough to verify. That is why the site
          emphasizes checklists, categories, warnings, resource pages, and downloadable worksheets. A page should help
          you figure out what to gather, what to compare, what to ask, and what to watch for before you make a decision.
        </p>
        <p>
          The site also avoids treating savings as guaranteed. A coupon stack can fail because store policy changed. A
          benefit application can depend on income, household size, location, documentation, and funding. A side hustle
          can look profitable before mileage, taxes, fees, supplies, and unpaid time are counted. A spreadsheet can make
          a plan clearer, but it cannot replace current account information or professional advice.
        </p>
        <h2 className="pt-3 text-2xl font-black text-ink">How readers should use it</h2>
        <p>
          Start with one goal and one page. If your goal is urgent help, look for official local resources and gather
          documents before applying. If your goal is weekly savings, choose a repeatable habit and measure the result on
          the next receipt or bill. If your goal is extra income, track net pay and stop any idea that creates more
          stress than progress.
        </p>
        <p>
          Verification is part of the workflow. Before relying on a program, discount, app, account, bill negotiation,
          or income opportunity, confirm the latest rules directly with the provider. Save dates, names, confirmation
          numbers, screenshots, and follow-up reminders. Those small records can protect your time and make it easier to
          continue if the first answer is incomplete.
        </p>
        <p>
          Money Hack Database is not here to make financial decisions for you. It is here to help you find possible next
          moves, organize your thinking, and approach money-saving ideas with a little more structure. The best result
          is not reading every page. The best result is finding one legitimate action that fits your situation and helps
          you move forward.
        </p>
        <h2 className="pt-3 text-2xl font-black text-ink">What the site is not</h2>
        <p>
          The site is not a lender, benefits office, legal service, tax service, social services agency, bank, utility
          provider, debt settlement company, or financial advisor. It does not process applications, decide eligibility,
          negotiate on your behalf, guarantee lower bills, or verify every third-party term in real time. Those limits
          are important because many money topics depend on facts that only the official provider or a qualified
          professional can confirm.
        </p>
        <p>
          It is also not meant to make budget pressure feel like a personal failure. Many people search for money help
          because prices changed, hours changed, benefits changed, debt became expensive, or an emergency interrupted a
          plan that used to work. The tone of the site is practical on purpose: find the next option, verify it, measure
          the result, and keep the parts that help.
        </p>
        <h2 className="pt-3 text-2xl font-black text-ink">What readers can expect over time</h2>
        <p>
          As the database grows, the goal is to keep adding pages that are useful in ordinary financial situations:
          lowering recurring bills, organizing due dates, checking local resources, comparing food strategies, testing
          flexible income, and finding free or low-cost tools. The best additions are the ones that help a reader take a
          real next step without overstating what the result will be.
        </p>
        <p>
          The site may also include downloadable templates, resource roundups, advertising, affiliate links, and guides
          connected to specific money topics. Those features should still fit the same standard: clear enough to use,
          cautious enough to verify, and honest about limits. Money content should make decisions feel more organized,
          not more confusing.
        </p>
      </div>
    </section>
  );
}
