import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Money Saving Guides",
  description:
    "Pinterest-friendly money saving guide ideas for budgeting, groceries, emergency help, cashback, and side income planning.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="font-black uppercase tracking-wide text-moss">Guides</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Money guides and checklists</h1>
        <p className="mt-4 leading-7 text-ink/70">
          Practical, verification-first guides for saving money, finding help, using tools wisely, and stretching your
          budget without relying on guaranteed outcomes.
        </p>
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {blogPosts.map((post, index) => (
          <article
            key={post.title}
            className="mb-5 break-inside-avoid rounded-3xl border border-ink/10 bg-white p-5 shadow-sm"
          >
            <div
              className={`mb-4 h-36 rounded-3xl ${
                index % 3 === 0 ? "bg-leaf" : index % 3 === 1 ? "bg-honey/40" : "bg-clay/20"
              }`}
            />
            <h2 className="text-xl font-black text-ink">{post.title}</h2>
            <p className="mt-2 text-sm font-black uppercase tracking-wide text-moss">
              {post.category} · {post.readTime}
            </p>
            <p className="mt-3 leading-7 text-ink/70">{post.description}</p>
            <Link className="mt-4 inline-flex font-black text-moss hover:text-ink" href={`/blog/${post.slug}`}>
              Read guide
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <AdSlot label="Advertisement" />
      </div>
    </section>
  );
}
