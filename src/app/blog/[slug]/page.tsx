import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import { blogPosts } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Money Hack Database`,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link className="font-black text-moss hover:text-ink" href="/blog">
        Back to all guides
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
        <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="font-black uppercase tracking-wide text-moss">
            {post.category} · {post.readTime}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">{post.description}</p>

          <div className="mt-8">
            <AdSlot label="Advertisement" />
          </div>

          <div className="mt-8 space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-black text-ink">{section.heading}</h2>
                <div className="mt-3 space-y-4 leading-8 text-ink/75">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-2xl bg-cream px-4 py-3 font-bold text-ink/75">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-3xl border border-clay/20 bg-clay/10 p-5">
            <h2 className="text-xl font-black text-ink">Friendly disclaimer</h2>
            <p className="mt-2 leading-7 text-ink/75">
              This guide is educational and does not provide financial, legal, tax, or benefits advice. Verify program
              rules, account details, costs, and terms directly with official providers.
            </p>
          </section>

          <Link
            href={post.relatedHref}
            className="mt-8 inline-flex rounded-full bg-moss px-6 py-3 font-black text-white transition hover:bg-ink"
          >
            {post.relatedLabel}
          </Link>
        </div>

        <aside className="grid gap-5">
          <AdSlot label="Advertisement" size="rectangle" />
          <div className="rounded-3xl border border-ink/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-ink">More guides</h2>
            <div className="mt-4 grid gap-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  className="rounded-2xl bg-cream p-4 font-black text-ink transition hover:bg-leaf hover:text-moss"
                  href={`/blog/${item.slug}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/spreadsheets"
            className="rounded-3xl border border-ink/10 bg-leaf p-5 font-black text-moss transition hover:border-moss hover:bg-white"
          >
            Download budget spreadsheets
          </Link>
        </aside>
      </div>
    </article>
  );
}
