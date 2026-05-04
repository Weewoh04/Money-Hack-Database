import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Money Hack Database Disclosure and Affiliate Terms",
  description:
    "Read Money Hack Database disclosures for educational content, affiliate links, advertising, third-party tools, downloads, and reader responsibility details.",
  keywords: [
    "Money Hack Database disclosure",
    "affiliate disclosure",
    "educational disclaimer",
    "advertising disclosure",
    "third-party links",
    "reader responsibility",
  ],
  path: "/disclosure",
});

export default function DisclosurePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="font-black uppercase tracking-wide text-moss">Disclosure</p>
      <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Disclaimers and affiliate disclosure</h1>
      <div className="mt-6 space-y-6 rounded-3xl border border-ink/10 bg-white p-6 leading-8 text-ink/75 shadow-sm">
        <section>
          <h2 className="text-2xl font-black text-ink">Educational disclaimer</h2>
          <p className="mt-2">
            Money Hack Database is for educational purposes only and does not provide financial, legal, tax, or benefits
            advice. Always verify details with official sources.
          </p>
          <p className="mt-2">
            The information on this site is general and may not fit your household, location, income, account terms,
            debts, taxes, benefits status, immigration situation, legal deadlines, or local program availability. A page
            may describe a budgeting idea, savings strategy, assistance starting point, spreadsheet, or side income
            concept, but that does not mean the idea is appropriate for every reader.
          </p>
          <p className="mt-2">
            Before making a financial decision, consider contacting the relevant official agency, provider, lender,
            utility company, landlord, employer, tax professional, legal aid organization, accredited counselor, or other
            qualified professional. The site is intended to help you ask better questions and find possible next steps,
            not to replace advice from someone who can review your specific facts.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-ink">Program and eligibility disclaimer</h2>
          <p className="mt-2">
            Assistance programs, discounts, cashback offers, and side income opportunities may change, expire, or vary
            by location and individual circumstances. No savings, approval, benefit amount, or income is guaranteed.
          </p>
          <p className="mt-2">
            Public benefits, nonprofit programs, utility assistance, rent relief, food resources, discounts, rebates,
            loyalty programs, and promotional offers can have rules that change without notice. Eligibility may depend
            on income, household size, address, hardship, documentation, immigration status, age, disability, veteran
            status, funding, account history, purchase category, store policy, or other factors outside this site's
            control.
          </p>
          <p className="mt-2">
            If a page links to or describes a program, that reference should be treated as a starting point. Always
            confirm whether the program is open, what documents are required, how applications are reviewed, whether
            there are fees, how payments or benefits are delivered, and what deadlines apply. Do not pay anyone who
            promises guaranteed approval for public benefits or assistance.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-ink">Affiliate disclosure</h2>
          <p className="mt-2">
            Some links may be affiliate links. We may earn a commission at no extra cost to you. Affiliate relationships
            do not change the need to verify terms directly with the provider.
          </p>
          <p className="mt-2">
            Affiliate links, display advertising, sponsored placements, or other monetization may appear on the site.
            Compensation can influence where links or ad units appear, but readers should still compare options
            independently. A paid relationship does not mean an offer is the best fit for your needs, and the absence of
            a paid relationship does not guarantee that a resource is complete or current.
          </p>
          <p className="mt-2">
            If you use a cashback app, financial tool, spreadsheet, marketplace, service provider, or promotional offer,
            read the provider's current terms before relying on it. Check fees, cancellation rules, renewal dates,
            payout thresholds, privacy practices, eligibility, taxes, and any purchase requirements. You are responsible
            for deciding whether a product, service, offer, or program is appropriate for your situation.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-ink">Accuracy and update disclaimer</h2>
          <p className="mt-2">
            We try to keep the site useful, but information can become outdated, incomplete, or inaccurate. Prices,
            rules, links, programs, funding windows, downloadable files, and third-party terms may change after a page
            is published. The date you read a page may be different from the date a provider last changed its rules.
          </p>
          <p className="mt-2">
            Readers should verify important details directly with official sources before acting. If you notice a broken
            link, outdated reference, or confusing description, treat the official provider as the source of truth. The
            site does not guarantee uninterrupted access, error-free content, particular savings, approval, income,
            reduced bills, or successful outcomes.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-ink">Reader responsibility</h2>
          <p className="mt-2">
            By using the site, you remain responsible for your own decisions, applications, purchases, account changes,
            downloads, communications, and use of third-party services. You should decide what information to share,
            which providers to trust, whether a program is appropriate, and whether a financial action fits your
            situation.
          </p>
          <p className="mt-2">
            Keep copies of important records such as receipts, screenshots, application confirmations, account terms,
            bill statements, cancellation notices, and correspondence with providers. If a topic could affect housing,
            utilities, taxes, credit, debt collection, legal rights, public benefits, or health and safety, consider
            getting help from an official source or qualified professional before relying on a general article.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-ink">Third-party links and downloads</h2>
          <p className="mt-2">
            The site may link to third-party websites, tools, providers, advertisers, marketplaces, agencies, nonprofits,
            or downloadable files. We do not control third-party websites and are not responsible for their content,
            privacy practices, security, availability, pricing, eligibility decisions, customer service, or terms of
            use. Review the current terms on the third-party site before acting.
          </p>
          <p className="mt-2">
            Downloads such as spreadsheets are provided as general planning tools. Check formulas, imported data,
            account balances, bills, payoff numbers, interest rates, and due dates before relying on any calculation.
            Back up important files and avoid entering sensitive account credentials into any template that does not
            require them. A worksheet can organize information, but it cannot verify that the information is current.
          </p>
        </section>
      </div>
    </section>
  );
}
