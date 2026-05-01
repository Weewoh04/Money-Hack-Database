"use client";

import { useMemo, useState } from "react";
import HackCard from "@/components/HackCard";
import type { Hack, Difficulty } from "@/data/hacks";

type SearchFilterProps = {
  hacks: Hack[];
  categories: string[];
  initialCategory?: string;
};

const difficulties: Array<Difficulty | "All"> = ["All", "Easy", "Medium", "Hard"];

export default function SearchFilter({ hacks, categories, initialCategory = "All" }: SearchFilterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");

  const filteredHacks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return hacks.filter((hack) => {
      const matchesQuery =
        !normalizedQuery ||
        [hack.title, hack.category, hack.summary, hack.estimatedBenefit].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        );
      const matchesCategory = category === "All" || hack.category === category;
      const matchesDifficulty = difficulty === "All" || hack.difficulty === difficulty;

      return matchesQuery && matchesCategory && matchesDifficulty;
    });
  }, [category, difficulty, hacks, query]);

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-ink/10 bg-white p-4 shadow-sm md:p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_220px_180px]">
          <label className="grid gap-2 text-sm font-black text-ink">
            Search money hacks
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try groceries, rent, cashback..."
              className="min-h-12 rounded-2xl border border-ink/15 bg-cream px-4 text-base font-normal outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf"
            />
          </label>
          <label className="grid gap-2 text-sm font-black text-ink">
            Category
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="min-h-12 rounded-2xl border border-ink/15 bg-cream px-4 text-base font-normal outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf"
            >
              <option>All</option>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black text-ink">
            Difficulty
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value as Difficulty | "All")}
              className="min-h-12 rounded-2xl border border-ink/15 bg-cream px-4 text-base font-normal outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf"
            >
              {difficulties.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="font-bold text-ink/70">{filteredHacks.length} resources found</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredHacks.map((hack) => (
          <div id={hack.slug} key={hack.id}>
            <HackCard hack={hack} />
          </div>
        ))}
      </div>
    </section>
  );
}
