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
    href: "/hacks/211-local-help-line",
  },
  {
    title: "Food banks and community pantries",
    href: "/hacks/find-local-food-banks",
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
      <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">How to verify a resource</h2>
          <p>
            A resource page is useful only if it leads you back to the organization that can confirm the current rules.
            For public benefits, look for the official state, county, or agency website. For utility help, check the
            utility provider, state energy office, community action agency, or program administrator. For housing,
            confirm details with local housing agencies, legal aid, city programs, or established nonprofits.
          </p>
          <p>
            Watch for signals that a page may not be reliable: no clear organization name, pressure to pay a fee,
            promises of guaranteed approval, outdated dates, vague eligibility language, or forms that request sensitive
            information before explaining the program. A legitimate program can still ask for documents, but it should
            clearly explain why those documents are needed and how the application is reviewed.
          </p>
          <p>
            When possible, call or message the provider directly. Ask whether the program is open, who qualifies, what
            documents are required, how long review usually takes, and whether there are related programs if you do not
            qualify. Keep notes so you do not have to start from scratch if you follow up later.
          </p>
        </div>
        <div className="space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">What to gather before applying</h2>
          <p>
            Many assistance programs ask for similar documents: photo identification, proof of address, income records,
            recent bills, household size, lease information, notices, account numbers, or proof of hardship. You may not
            need all of them, but collecting the likely items ahead of time makes applications less frustrating.
          </p>
          <p>
            Create a simple folder for screenshots, PDFs, photos, confirmation emails, and case numbers. If you speak
            with someone by phone, write down the date, time, phone number, and name of the person who helped you. These
            small details are especially helpful when programs have waitlists, document reviews, or multiple agencies
            involved.
          </p>
          <p>
            If your need is urgent, say that clearly when contacting providers. Ask about crisis options, same-day
            referrals, temporary holds, emergency food distributions, legal deadlines, and whether another agency can
            help faster. Availability is never guaranteed, but clear information gives the provider a better chance of
            routing you correctly.
          </p>
          <p>
            If you are turned away, ask why and write down the reason. Sometimes the answer is final, but sometimes it
            points to a missing document, a different income period, a county boundary, a closed funding window, or a
            better-matched program. A polite follow-up question can uncover the next door to try.
          </p>
          <p>
            Be careful with unofficial lists that copy program names without updating the details. They can be useful
            for discovery, but the official provider should decide what is true today. When deadlines, benefits,
            housing, utilities, or personal documents are involved, current information matters more than convenience.
          </p>
          <p>
            If you are helping someone else search, ask permission before sharing their information with a provider.
            Benefits, housing, medical, debt, and income details can be sensitive. It is better to sit with the person
            while they call or apply than to submit forms without clear consent. Keep copies only when they are needed
            and store them somewhere private.
          </p>
          <p>
            Resource searches often take more than one attempt. A provider may have limited hours, a full voicemail, a
            closed funding window, or a referral to another agency. That does not always mean the search is over. Work
            through the most official sources first, keep notes, and return to the resource list when you have a clearer
            answer about what is missing.
          </p>
          <p>
            When you find a useful provider, save more than the homepage. Keep the direct application link, phone number,
            office hours, document checklist, and follow-up instructions. Those details are often what matter when you
            need to act quickly or return to the resource later.
          </p>
        </div>
      </section>
      <div className="mt-10">
        <AdSlot label="Advertisement" />
      </div>
    </section>
  );
}
