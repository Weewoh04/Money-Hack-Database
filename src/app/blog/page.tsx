import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money Saving Guides",
  description:
    "Pinterest-friendly money saving guide ideas for budgeting, groceries, emergency help, cashback, and side income planning.",
};

const posts = [
  "How to Build a 7-Day Grocery Savings Plan",
  "What to Check Before Applying for Assistance",
  "Cashback Mistakes That Can Cost More Than They Save",
  "A Gentle No-Spend Weekend Reset",
  "Side Hustle Math: Track Net Pay, Not Gross Pay",
  "Free Library Perks Most People Miss",
];

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">Guides</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Money guides and checklists</h1>
        <p className="mt-4 leading-7 text-ink/70">
          Placeholder guide cards for future Pinterest-friendly articles, printable checklists, and resource roundups.
        </p>
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {posts.map((post, index) => (
          <article
            key={post}
            className="mb-5 break-inside-avoid rounded-3xl border border-ink/10 bg-white p-5 shadow-sm"
          >
            <div className={`mb-4 h-36 rounded-3xl ${index % 3 === 0 ? "bg-leaf" : index % 3 === 1 ? "bg-honey/40" : "bg-clay/20"}`} />
            <h2 className="text-xl font-black text-ink">{post}</h2>
            <p className="mt-3 leading-7 text-ink/70">
              A practical, verification-first guide outline ready for future content expansion.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
