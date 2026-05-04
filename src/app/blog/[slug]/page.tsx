import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import { blogPosts } from "@/data/blog";
import { absoluteUrl, pageSeo, siteName } from "@/lib/seo";

const guideDepthSections = [
  {
    heading: "How to turn this guide into an action plan",
    body: [
      "Start by choosing one outcome for the next week. A guide is easier to use when it becomes a short action plan instead of a long list of good intentions. Write down the specific number, bill, purchase, application, or decision you want to improve. Then pick the smallest step that moves the situation forward today.",
      "Keep the plan visible. A note on your phone, a printed checklist, or a spreadsheet can all work as long as you can update it quickly. The point is not to create a perfect system. The point is to make the next decision easier when you are busy, tired, or dealing with competing priorities.",
      "After you take the first step, record what happened. Did you save money, avoid a purchase, find a program, learn a rule, or realize the option was not worth it? That feedback is useful because it keeps the guide connected to your real budget instead of becoming another article you read and forget.",
    ],
  },
  {
    heading: "What to verify before relying on any money tip",
    body: [
      "Money-saving advice can become outdated quickly. Prices change, programs pause, funding runs out, apps update terms, and local resources may have different rules from one county to the next. Before you apply, buy, cancel, switch, or share personal information, confirm the details through the official provider or account portal.",
      "Look for dates, eligibility rules, fees, deadlines, payout requirements, cancellation rules, and documentation requirements. If the source is unclear, search for the official agency, company, nonprofit, utility provider, library, or city page instead of relying on a reposted summary. A few minutes of verification can prevent wasted time and protect you from avoidable fees or scams.",
    ],
  },
  {
    heading: "How to measure whether it worked",
    body: [
      "A practical money guide should leave you with evidence. That evidence might be a lower bill, a completed application, a meal plan that prevented takeout, a rebate that actually paid out, or a side hustle test that showed your real hourly rate. Use simple numbers whenever possible: dollars saved, dollars earned after expenses, hours spent, due dates avoided, or calls completed.",
      "If the result is not clear yet, schedule a follow-up date. Some decisions need a week or a full billing cycle before the value shows up. When the follow-up arrives, compare the result with the time and effort it took. Keep what works, adjust what almost worked, and drop anything that creates stress without producing a meaningful benefit.",
    ],
  },
  {
    heading: "When to revisit the plan",
    body: [
      "Revisit the plan whenever a bill changes, income changes, prices rise, a program deadline appears, or a new household need shows up. Money decisions are rarely one-and-done. A tip that was not worth your time last month may become useful after a move, job change, benefit notice, school schedule change, or price increase.",
      "It also helps to keep a short list of questions you still need answered. Who controls the rule? What is the deadline? What documents are required? What is the real cost after fees, taxes, time, or transportation? Those questions keep the guide practical and help you avoid relying on assumptions when current details matter.",
    ],
  },
];

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

  return pageSeo({
    title: post.title,
    description: post.description,
    keywords: [
      post.title.toLowerCase(),
      post.category.toLowerCase(),
      "money saving guide",
      "budget help",
      "financial assistance",
      "Money Hack Database",
    ],
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.id !== post.id).slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: siteName,
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: absoluteUrl("/"),
    },
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    url: absoluteUrl(`/blog/${post.slug}`),
    articleSection: post.category,
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
                {section.subsections ? (
                  <div className="mt-5 space-y-5">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.heading}>
                        <h3 className="text-xl font-black text-ink">{subsection.heading}</h3>
                        <div className="mt-2 space-y-3 leading-8 text-ink/75">
                          {subsection.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
            {guideDepthSections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-black text-ink">{section.heading}</h2>
                <div className="mt-3 space-y-4 leading-8 text-ink/75">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {post.internalLinks ? (
            <section className="mt-8 rounded-3xl border border-ink/10 bg-cream p-5">
              <h2 className="text-2xl font-black text-ink">Related money hack pages</h2>
              <div className="mt-4 grid gap-3">
                {post.internalLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl bg-white p-4 transition hover:bg-leaf"
                  >
                    <span className="font-black text-moss">{item.label}</span>
                    <span className="mt-1 block leading-7 text-ink/70">{item.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

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
