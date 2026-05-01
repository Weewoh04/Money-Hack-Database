import Link from "next/link";
import type { Category } from "@/data/categories";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/hacks?category=${encodeURIComponent(category.name)}`}
      className="group rounded-3xl border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <span className="text-3xl" aria-hidden="true">
        {category.icon}
      </span>
      <h3 className="mt-4 text-xl font-black text-ink group-hover:text-moss">{category.name}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/70">{category.description}</p>
    </Link>
  );
}
