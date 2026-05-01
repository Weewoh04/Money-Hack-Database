import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-ink/75 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-lg font-black text-ink">Money Hack Database</p>
          <p>
            Money Hack Database is for educational purposes only and does not provide financial, legal, tax, or
            benefits advice. Always verify details with official sources.
          </p>
          <p>Some links may be affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link className="font-bold text-moss hover:text-ink" href="/disclosure">
            Disclosure
          </Link>
          <Link className="font-bold text-moss hover:text-ink" href="/resources">
            Resources
          </Link>
          <Link className="font-bold text-moss hover:text-ink" href="/hacks">
            Browse Hacks
          </Link>
        </div>
      </div>
    </footer>
  );
}
