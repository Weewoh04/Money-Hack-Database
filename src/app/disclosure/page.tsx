import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosure",
  description:
    "Read the educational disclaimer and affiliate disclosure for Money Hack Database.",
};

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
        </section>
        <section>
          <h2 className="text-2xl font-black text-ink">Program and eligibility disclaimer</h2>
          <p className="mt-2">
            Assistance programs, discounts, cashback offers, and side income opportunities may change, expire, or vary
            by location and individual circumstances. No savings, approval, benefit amount, or income is guaranteed.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-ink">Affiliate disclosure</h2>
          <p className="mt-2">
            Some links may be affiliate links. We may earn a commission at no extra cost to you. Affiliate relationships
            do not change the need to verify terms directly with the provider.
          </p>
        </section>
      </div>
    </section>
  );
}
