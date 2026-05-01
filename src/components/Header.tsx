import Link from "next/link";

const navItems = [
  { href: "/hacks", label: "Hacks" },
  { href: "/categories", label: "Categories" },
  { href: "/spreadsheets", label: "Spreadsheets" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-tight text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-moss text-base text-white">
            $
          </span>
          Money Hack Database
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-2 text-sm font-bold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-ink/75 transition hover:bg-leaf hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
