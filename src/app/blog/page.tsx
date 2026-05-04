import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Money Saving Guides",
  description:
    "Pinterest-friendly money saving guide ideas for budgeting, groceries, emergency help, cashback, and side income planning.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">Guides</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Money guides and checklists</h1>
        <p className="mt-4 leading-7 text-ink/70">
          Practical, verification-first guides for saving money, finding help, using tools wisely, and stretching your
          budget without relying on guaranteed outcomes.
        </p>
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {blogPosts.map((post, index) => (
          <article
            key={post.title}
            className="mb-5 break-inside-avoid rounded-3xl border border-ink/10 bg-white p-5 shadow-sm"
          >
            <div
              className={`mb-4 h-36 rounded-3xl ${
                index % 3 === 0 ? "bg-leaf" : index % 3 === 1 ? "bg-honey/40" : "bg-clay/20"
              }`}
            />
            <h2 className="text-xl font-black text-ink">{post.title}</h2>
            <p className="mt-2 text-sm font-black uppercase tracking-wide text-moss">
              {post.category} · {post.readTime}
            </p>
            <p className="mt-3 leading-7 text-ink/70">{post.description}</p>
            <Link className="mt-4 inline-flex font-black text-moss hover:text-ink" href={`/blog/${post.slug}`}>
              Read guide
            </Link>
          </article>
        ))}
      </div>
      <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">How these guides are different</h2>
          <p>
            The guides on Money Hack Database are built for practical decisions, not vague motivation. Each one focuses
            on a common budget pressure point: groceries, emergency assistance, cashback, no-spend resets, side hustle
            math, or free community resources. The goal is to help you understand what to check, what to prepare, and
            how to avoid choices that look helpful online but cost more in real life.
          </p>
          <p>
            A good money guide should leave you with a next action. That might be checking your pantry before shopping,
            gathering documents before applying for help, comparing net side hustle pay, reviewing cashback payout
            thresholds, or setting a small no-spend rule for the weekend. None of those actions guarantees a specific
            result, but each one gives you better information than guessing.
          </p>
          <p>
            Use the guides alongside the money hack pages. The guides explain the thinking behind a topic, while the
            hack pages give you a focused checklist and related resources. Together, they are meant to make the site
            easier to use when you need both context and a concrete next step.
          </p>
        </div>
        <div className="space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">What to do after reading</h2>
          <p>
            Choose one idea and test it with real numbers. If a guide is about groceries, compare this week's actual
            receipt with last week's. If it is about a side hustle, subtract expenses and divide by total hours. If it
            is about assistance, record the official provider, application deadline, documents needed, and follow-up
            date. Measurement keeps advice honest.
          </p>
          <p>
            Also watch for emotional friction. A system that technically saves money but requires too much tracking may
            not last. A budget reset that ignores medication, transportation, or required bills is not useful. A reward
            offer that makes you buy more than planned is not a win. The best guide is the one you can adapt to your
            actual household, schedule, and priorities.
          </p>
          <p>
            Revisit guides when circumstances change. A new bill, job change, benefit deadline, school schedule, move,
            or price increase can make a previously irrelevant option worth checking again. Verification and follow-up
            are part of the process, especially for programs and offers that change over time.
          </p>
          <p>
            If a guide points you toward a tool or resource, pair it with a simple record. Save the provider name,
            official website, phone number, application date, receipt total, account balance, or payout threshold. Those
            notes make it easier to compare what you expected with what actually happened.
          </p>
          <p>
            The site intentionally repeats reminders about scams, fees, and official sources because budget pressure can
            make rushed decisions feel tempting. Slowing down to verify a rule or calculate the real cost is not wasted
            time. It is part of protecting the money you are trying to save.
          </p>
          <p>
            For best results, pair each guide with one small deadline. Decide when you will make the call, check the
            receipt, update the spreadsheet, compare the plan, or review the account. Money advice becomes more useful
            when it has a date attached to it, because follow-through is where the savings, clarity, or correction
            actually happens.
          </p>
          <p>
            You do not need to read the guides in order. Start with the pressure point that is closest to your life
            today. A grocery guide can help this week, an assistance checklist can help before an application, a side
            hustle guide can help before signing up, and a no-spend reset can help when spending feels scattered.
          </p>
        </div>
      </section>
      <div className="mt-8">
        <AdSlot label="Advertisement" />
      </div>
    </section>
  );
}
