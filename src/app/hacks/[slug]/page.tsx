import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import StateMap from "@/components/StateMap";
import { hacks } from "@/data/hacks";

const categoryGuidance: Record<string, string[]> = {
  "Emergency Help": [
    "Emergency resources work best when you treat them like a short list of next calls, not a mystery maze. Start with the option most likely to match the urgent need, then keep notes as you move through each referral. Write down the date, phone number, website, case number, and the name of anyone you speak with. If a program is closed, ask whether there is a waitlist, another agency, or a different funding source that serves the same need.",
    "When money is tight, the order of operations matters. Food, housing, utilities, transportation, medication, and basic safety usually come before less urgent bills. That does not mean ignoring other obligations; it means giving yourself enough structure to make calls before deadlines pass. Contact billers early, explain the hardship clearly, and ask what options are available before an account becomes past due or moves to collections.",
  ],
  "Food & Grocery Savings": [
    "Food savings are most useful when they lower the grocery bill you already needed to pay. A good plan starts with inventory, a realistic list, and a few meals that can share ingredients. The goal is not to chase every sale; it is to prevent waste, reduce duplicate purchases, and avoid emergency takeout when the week gets busy. Keep the system simple enough that you can repeat it even on a tired week.",
    "If you use coupons, rebates, pantry support, or food banks, compare the practical cost as well as the sticker price. Consider transportation, time, storage space, dietary needs, and whether the food will actually be used. A free or discounted item is not helpful if it creates extra spending elsewhere or replaces something your household genuinely needs.",
  ],
  "Utility Bill Help": [
    "Utility help often depends on timing, location, seasonal funding, household size, and the type of bill involved. Before applying, gather the current bill, account number, shutoff notice if there is one, proof of address, and recent income documents. If a crisis program exists, ask whether the application must be filed before a disconnection date and whether the utility company can place a temporary hold while the application is reviewed.",
    "Also look for lower-cost usage changes that do not require a major purchase. Weatherization, payment arrangements, budget billing, energy audits, and hardship programs may all work differently. Verify whether a program pays the provider directly, reimburses you later, or only covers certain charges. That distinction matters when you are deciding which bill to prioritize first.",
  ],
  "Rent & Housing Help": [
    "Housing help is usually local, time sensitive, and documentation heavy. Keep a copy of the lease, landlord contact information, notices, rent ledger, proof of hardship, income records, and identification in one place before you apply. If you are behind, contact local legal aid or a tenant hotline early because deadlines can move quickly and the right next step can depend on your city, county, and court process.",
    "Avoid paying application fees to strangers who promise guaranteed rent relief. Real programs can still have waitlists or limited funds, but they should be able to explain eligibility, documentation, and the review process. If one agency cannot help, ask whether it coordinates with churches, community action agencies, housing nonprofits, or city emergency funds.",
  ],
  "Cashback & Rewards": [
    "Rewards tools should support planned purchases, not create new ones. Before using an app, card offer, portal, or discounted gift card, decide what you were already going to buy and what the full price would be without the reward. Then compare the real savings after minimum payout thresholds, excluded items, fees, shipping costs, and expiration dates.",
    "Keep a small tracking note for pending rebates and gift card balances. Rewards can be rejected, delayed, or changed, so treat them like a bonus rather than guaranteed cash. If an offer takes more time than it saves, creates clutter, or tempts you into buying more, it is perfectly reasonable to skip it.",
  ],
  "Budgeting Tools": [
    "Budgeting tools are useful when they make decisions clearer, not when they shame you with too many categories. Start with the next thirty days: income expected, bills due, flexible spending, debt payments, and any urgent shortfall. A rough but honest plan is more valuable than a perfect spreadsheet that never gets updated.",
    "Look for patterns rather than one-off mistakes. A budget can reveal subscriptions you forgot, bills that bunch up in the same week, categories that need a realistic cap, or expenses that should become sinking funds. Review the plan after money actually moves so the next version is based on real numbers instead of guesses.",
  ],
  "Freebies & Discounts": [
    "Free resources can quietly replace paid tools, small subscriptions, classes, entertainment, and one-time purchases. The key is to check what is available locally and then build reminders around the parts that have deadlines, pickup windows, or return dates. Library perks, community programs, discount passes, and official databases often change over time, so revisit them every few months.",
    "Be selective. A free offer still has a cost if it takes too much time, requires unnecessary personal information, or leads to add-on purchases. Favor official sources, clear terms, and resources you would genuinely use. When something asks for payment information, read cancellation rules before starting.",
  ],
  "Side Hustles": [
    "Side income is easiest to compare when you track net pay instead of headline pay. Include platform fees, supplies, taxes, mileage, fuel, equipment, unpaid waiting time, messaging, setup, and the mental load of fitting work around the rest of life. A small service with predictable demand can beat a flashy gig that produces uneven results after expenses.",
    "Start with a narrow test instead of building a complicated business overnight. Choose one offer, one market, and one tracking method. After a week or two, compare total hours, total expenses, total earnings, and whether the work still feels sustainable. The best side hustle for your budget is the one that leaves you with real money and does not create bigger problems elsewhere.",
  ],
};

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
  const guidance = categoryGuidance[hack.category] ?? [];

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

          <section className="mt-8">
            <h2 className="text-3xl font-black text-ink">How to use this money hack well</h2>
            <div className="mt-4 space-y-4 leading-8 text-ink/75">
              <p>
                {hack.title} is best used as a practical starting point, not a promise of a specific result. The main
                value is that it gives you a next action you can take today: {hack.summary.toLowerCase()} If the idea
                fits your situation, treat the checklist below like a short working plan and move one step at a time.
              </p>
              <p>
                Before you begin, write down the goal you want this page to help with. That might be lowering a bill,
                finding temporary support, reducing grocery spending, creating extra cash, or getting a clearer budget.
                A specific goal makes it easier to decide whether the action is worth your time and whether the result
                helped enough to repeat it.
              </p>
              <p>
                This page is also meant to keep the process grounded. Money tips can sound simple online, but real life
                includes eligibility rules, local availability, deadlines, fees, transportation, paperwork, and changing
                terms. Use the idea, then verify the details through official sources before you rely on it.
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-black text-ink">What to prepare before you start</h2>
            <div className="mt-4 space-y-4 leading-8 text-ink/75">
              <p>
                Set aside a small amount of focused time, even if the first step only takes {hack.timeToStart}. Open a
                note on your phone or computer and record the website, phone number, deadline, contact name, and any
                confirmation details you find. Keeping this information in one place prevents repeat work and makes it
                easier to follow up if the first attempt does not solve the problem.
              </p>
              <p>
                If the action involves an application, account, provider, or marketplace, gather the basics before you
                click around: identification, account numbers, bills, receipts, income details, household information,
                screenshots, or written terms. You may not need every item, but having the likely documents ready keeps
                the process from stalling halfway through.
              </p>
              <p>
                For savings and income ideas, decide your personal stop rule in advance. For example, you might stop if
                the task requires buying something extra, sharing sensitive information without a clear reason, driving
                farther than the savings are worth, or spending more time than the benefit justifies. That simple rule
                protects your budget from a tip that looks good on paper but does not fit your actual life.
              </p>
            </div>
          </section>

          {guidance.length ? (
            <section className="mt-8">
              <h2 className="text-3xl font-black text-ink">Extra notes for {hack.category.toLowerCase()}</h2>
              <div className="mt-4 space-y-4 leading-8 text-ink/75">
                {guidance.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-8">
            <h2 className="text-3xl font-black text-ink">Common mistakes to avoid</h2>
            <div className="mt-4 space-y-4 leading-8 text-ink/75">
              <p>
                The first mistake is assuming that a search result, social post, or old article is current. Programs,
                prices, cashback rates, eligibility rules, and local resources can change quickly. Always check dates
                and confirm the details with the organization that actually controls the program or offer.
              </p>
              <p>
                The second mistake is skipping the math. Compare the expected benefit, listed here as {hack.estimatedBenefit.toLowerCase()},
                with the time, paperwork, transportation, fees, and risk involved. A choice can be legitimate and still
                be the wrong fit if it costs more energy or money than it returns.
              </p>
              <p>
                The third mistake is waiting too long to follow up. If an application, bill negotiation, assistance
                request, rebate, or sale listing matters to your budget, set a reminder before you close the page. A
                follow-up call or email can be the difference between a useful result and a forgotten attempt.
              </p>
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-clay/20 bg-clay/10 p-5">
            <h2 className="text-xl font-black text-ink">Important verification note</h2>
            <p className="mt-2 leading-7 text-ink/75">{hack.warning}</p>
            <p className="mt-3 leading-7 text-ink/75">
              This page is educational and does not provide financial, legal, tax, or benefits advice. Confirm
              eligibility, deadlines, fees, program details, and terms directly with official providers.
            </p>
          </section>

          {hack.slug === "emergency-budget-reset" ? (
            <section className="mt-8 rounded-3xl border border-moss/20 bg-leaf p-5">
              <h2 className="text-2xl font-black text-ink">Download the emergency budget worksheet</h2>
              <p className="mt-2 leading-7 text-ink/75">
                Use the spreadsheet page to download the Emergency Budget Reset Worksheet and other planning templates.
              </p>
              <Link
                href="/spreadsheets"
                className="mt-4 inline-flex rounded-full bg-moss px-5 py-3 font-black text-white transition hover:bg-ink"
              >
                View budget spreadsheets
              </Link>
            </section>
          ) : null}
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
        <StateMap hackTitle={hack.title} hackSlug={hack.slug} />
      </div>

      <div className="mt-10">
        <AdSlot label="Sponsored resource space" />
      </div>
    </article>
  );
}
