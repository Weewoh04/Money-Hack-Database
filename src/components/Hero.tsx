import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-[radial-gradient(circle_at_top_left,#dcefd8,transparent_32%),linear-gradient(135deg,#fbf4e8_0%,#fff9ef_55%,#f7e3bf_100%)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-moss shadow-sm">
            Practical savings, assistance, and earning ideas
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Find Legit Ways to Save Money, Get Help, and Stretch Your Budget
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            A searchable database of practical money hacks, assistance programs, cashback tools, side income ideas,
            and everyday savings strategies.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/hacks"
              className="rounded-full bg-moss px-6 py-3 text-center font-black text-white shadow-soft transition hover:bg-ink"
            >
              Browse Money Hacks
            </Link>
            <Link
              href="/categories"
              className="rounded-full border-2 border-ink px-6 py-3 text-center font-black text-ink transition hover:bg-ink hover:text-white"
            >
              View Categories
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-ink/10 bg-white/75 p-5 shadow-soft">
          <div className="grid gap-3">
            {["Emergency help", "Weekly savings", "Cashback wins", "Extra income"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-cream p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf font-black text-moss">
                  {index + 1}
                </span>
                <span className="font-black text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
