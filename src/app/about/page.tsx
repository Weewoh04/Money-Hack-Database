import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Money Hack Database, an educational directory for money-saving resources, assistance programs, cashback tools, and budget help.",
};

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
      </div>
    </section>
  );
}
