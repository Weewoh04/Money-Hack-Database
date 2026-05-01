import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Money Hack Categories",
  description:
    "Browse emergency help, grocery savings, utility bill help, rent assistance, cashback, side hustles, budgeting tools, freebies, and discounts.",
};

export default function CategoriesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">Categories</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Browse by savings goal</h1>
        <p className="mt-4 leading-7 text-ink/70">
          Use these categories to find resources that fit your situation, then confirm current rules with the official
          provider or program.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <div className="mt-10">
        <AdSlot label="Advertisement" />
      </div>
    </section>
  );
}
