import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import { spreadsheets } from "@/data/spreadsheets";

export const metadata: Metadata = {
  title: "Budget Spreadsheets",
  description:
    "Download free Excel-compatible budget spreadsheets for debt payoff, grocery budgeting, monthly budgets, bill tracking, savings goals, and emergency budget resets.",
};

export default function SpreadsheetsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">Downloadable tools</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Budget spreadsheets you can use today</h1>
        <p className="mt-4 leading-7 text-ink/70">
          Download simple Excel-compatible spreadsheet templates for planning bills, groceries, debt payoff, savings,
          and emergency budget resets. These files are educational planning tools, not financial advice.
        </p>
      </div>

      <div className="mt-8">
        <AdSlot label="Advertisement" />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {spreadsheets.map((sheet) => (
          <article key={sheet.id} className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wide">
              <span className="rounded-full bg-leaf px-3 py-1 text-moss">{sheet.category}</span>
              <span className="rounded-full bg-cream px-3 py-1 text-ink/60">Excel-ready CSV</span>
            </div>
            <h2 className="mt-4 text-2xl font-black text-ink">{sheet.title}</h2>
            <p className="mt-3 leading-7 text-ink/70">{sheet.description}</p>
            <p className="mt-4 rounded-2xl bg-cream p-3 text-sm leading-6 text-ink/70">
              <span className="font-black text-ink">Best for:</span> {sheet.bestFor}
            </p>
            <a
              href={`/downloads/${sheet.fileName}`}
              download
              className="mt-auto inline-flex pt-5 font-black text-moss transition hover:text-ink"
            >
              Download spreadsheet
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-clay/20 bg-clay/10 p-5">
        <h2 className="text-xl font-black text-ink">Quick note before using these</h2>
        <p className="mt-2 leading-7 text-ink/75">
          Open the file in Excel, Google Sheets, or Numbers, then save your own copy before editing. Always verify bills,
          rates, account balances, benefit rules, and payoff details directly with official providers or account portals.
        </p>
      </div>
    </section>
  );
}
