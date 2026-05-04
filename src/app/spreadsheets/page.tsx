import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import { spreadsheets } from "@/data/spreadsheets";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Free Budget Spreadsheets for Bills, Debt, and Savings",
  description:
    "Download free budget spreadsheets for monthly planning, debt payoff, grocery tracking, bill payments, savings goals, and emergency budget resets today.",
  keywords: [
    "budget spreadsheets",
    "free Excel budget template",
    "debt payoff planner",
    "bill tracker",
    "grocery budget tracker",
    "savings goal planner",
  ],
  path: "/spreadsheets",
});

export default function SpreadsheetsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">Downloadable tools</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Budget spreadsheets you can use today</h1>
        <p className="mt-4 leading-7 text-ink/70">
          Download simple Excel-compatible spreadsheet templates for planning bills, groceries, debt payoff, savings,
          and emergency budget resets. These Excel workbooks are educational planning tools, not financial advice.
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
              <span className="rounded-full bg-cream px-3 py-1 text-ink/60">Excel workbook</span>
            </div>
            <h2 className="mt-4 text-2xl font-black text-ink">{sheet.title}</h2>
            <p className="mt-3 leading-7 text-ink/70">{sheet.description}</p>
            <p className="mt-4 rounded-2xl bg-cream p-3 text-sm leading-6 text-ink/70">
              <span className="font-black text-ink">Best for:</span> {sheet.bestFor}
            </p>
            <div className="mt-auto flex flex-col gap-2 pt-5">
              <a
                href={`/downloads/${sheet.fileName}`}
                download
                className="inline-flex rounded-full bg-moss px-5 py-3 font-black text-white transition hover:bg-ink"
              >
                Download Excel workbook
              </a>
              <a
                href={`/downloads/${sheet.csvFileName}`}
                download
                className="inline-flex rounded-full border-2 border-moss px-5 py-3 font-black text-moss transition hover:bg-leaf"
              >
                Download CSV for Google Sheets
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">How to choose the right spreadsheet</h2>
          <p>
            Start with the question you need the spreadsheet to answer. If you are trying to see where a paycheck goes,
            use the monthly budget worksheet. If missed due dates are the problem, start with the bill payment tracker.
            If food costs keep surprising you, use the grocery budget tracker for one or two shopping trips before
            changing your whole routine.
          </p>
          <p>
            Debt payoff and savings goal worksheets are better when the numbers are current. Check account balances,
            interest rates, minimum payments, due dates, and contribution amounts directly in your account portals before
            treating the spreadsheet as a plan. A worksheet can organize decisions, but the source of truth should always
            be the lender, bank, biller, or official statement.
          </p>
          <p>
            The emergency budget reset worksheet is for short-term triage. Use it when cash is tight and you need to
            rank essentials, list bill calls, look for local help, and decide what can wait. It is not a long-term
            financial plan, but it can make a stressful week more organized.
          </p>
        </div>
        <div className="space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">A simple workflow for better numbers</h2>
          <p>
            Enter rough numbers first, then improve them as you verify. A spreadsheet becomes useful when it reflects
            what actually happened: the real grocery receipt, the bill amount after fees, the payment confirmation, the
            savings transfer, or the updated debt balance. Do not wait for perfect information before starting.
          </p>
          <p>
            Review the file on a schedule that matches the topic. Grocery trackers work best weekly, bill trackers work
            around due dates, monthly budgets need a beginning and end-of-month check, and payoff plans should be
            updated after payments post. Add a reminder so the worksheet does not become a forgotten download.
          </p>
          <p>
            If you import the CSV into Google Sheets, check formulas and formatting after upload. CSV files are plain
            data files, so they are convenient but do not preserve workbook styling the same way an Excel file does. The
            Excel workbook is better for formatting; the CSV is better for broad compatibility.
          </p>
          <p>
            Keep one clean copy of each template before editing heavily. That gives you a fresh version to return to if
            formulas are changed, rows are deleted, or a budget experiment does not work. For monthly files, save a new
            copy by month so you can compare how bills, groceries, savings, and debt payments changed over time.
          </p>
          <p>
            The most useful spreadsheet is the one you will actually update. If a worksheet has more detail than you
            need, simplify it. If a category is missing, add it. If a number is uncertain, mark it as an estimate and
            replace it later. The file should support your decisions, not become another chore.
          </p>
        </div>
      </section>

      <div className="mt-10 rounded-3xl border border-clay/20 bg-clay/10 p-5">
        <h2 className="text-xl font-black text-ink">Quick note before using these</h2>
        <p className="mt-2 leading-7 text-ink/75">
          The Excel workbook includes formatting and formulas. The CSV version is the most reliable option for importing
          into Google Sheets: open Google Sheets, choose File, Import, Upload, then select the CSV. Always verify bills,
          rates, account balances, benefit rules, and payoff details directly with official providers or account portals.
        </p>
      </div>
    </section>
  );
}
