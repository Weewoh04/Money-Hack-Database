import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import SearchFilter from "@/components/SearchFilter";
import { hacks } from "@/data/hacks";

export const metadata: Metadata = {
  title: "Browse Money Hacks",
  description:
    "Search and filter money-saving resources, assistance programs, cashback tools, side hustle ideas, and budget help by category and difficulty.",
};

type HacksPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function HacksPage({ searchParams }: HacksPageProps) {
  const params = await searchParams;
  const categories = Array.from(new Set(hacks.map((hack) => hack.category))).sort();
  const initialCategory = params?.category && categories.includes(params.category) ? params.category : "All";

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">Money hacks database</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Search practical ways to save, get help, and earn</h1>
        <p className="mt-4 leading-7 text-ink/70">
          Results are educational starting points. Verify eligibility, program details, fees, deadlines, and terms
          directly with official providers before applying or spending money.
        </p>
      </div>
      <div className="mb-8">
        <AdSlot label="Advertisement" />
      </div>
      <SearchFilter hacks={hacks} categories={categories} initialCategory={initialCategory} />
      <div className="mt-10">
        <AdSlot label="Sponsored resource space" />
      </div>
    </section>
  );
}
