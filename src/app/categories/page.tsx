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
      <section className="mt-12 space-y-8">
        <div className="max-w-3xl space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">Choosing the right category</h2>
          <p>
            Categories help you start in the part of the budget that needs attention first. If you are short on
            essentials, emergency help, food resources, utility assistance, and housing support should come before
            optional savings ideas. If the urgent bills are covered, grocery planning, budgeting tools, freebies,
            discounts, and cautious cashback strategies can help reduce everyday spending.
          </p>
          <p>
            Side hustle ideas belong in a separate mental bucket because earning extra money has costs as well as
            upside. Time, taxes, supplies, mileage, platform fees, childcare, and schedule stress can change the real
            value of the work. Use those pages when you want to compare net income instead of headline pay.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3 leading-7 text-ink/75">
            <h3 className="text-2xl font-black text-ink">For urgent needs</h3>
            <p>
              Start with categories tied to basic needs: food, housing, utilities, transportation, and safety. Gather
              documents early and use official providers or 211-style referral sources to confirm what is open locally.
            </p>
          </div>
          <div className="space-y-3 leading-7 text-ink/75">
            <h3 className="text-2xl font-black text-ink">For weekly savings</h3>
            <p>
              Focus on repeatable habits such as meal planning, coupon matching, no-spend resets, library resources,
              subscription checks, and simple budget reviews. Small recurring savings can matter more than one big tip.
            </p>
          </div>
          <div className="space-y-3 leading-7 text-ink/75">
            <h3 className="text-2xl font-black text-ink">For extra income</h3>
            <p>
              Compare opportunities by net pay, not optimism. Track the total hours, direct expenses, taxes, fees, and
              energy required. Stop any idea that creates more pressure than progress.
            </p>
          </div>
        </div>
        <div className="max-w-3xl space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">Why verification matters by category</h2>
          <p>
            Every category changes in a different way. Assistance programs may run out of funding, grocery prices and
            coupon policies can shift weekly, cashback terms can expire, and side hustle demand can vary by city and
            season. That is why the site repeats a simple rule: use the page as a starting point, then confirm the
            current details with the official source before you act.
          </p>
          <p>
            Good verification protects both your money and your time. It can help you avoid application scams, expired
            discounts, unnecessary purchases, unrealistic income claims, and missed deadlines. It also helps you find
            better local options, because many useful resources are city, county, library-system, utility-provider, or
            nonprofit specific.
          </p>
          <p>
            If more than one category fits, choose the one with the nearest deadline first. A shutoff notice, rent
            deadline, empty pantry, medication need, or court date should move ahead of lower-stakes optimization. Once
            the urgent issue is handled, return to the categories that can improve the month more gradually, such as
            budgeting, grocery planning, free resources, and cautious rewards strategies.
          </p>
          <p>
            You can also use categories as a monthly review list. Pick one area to check each week: bills, food,
            housing, income, or free resources. That rhythm keeps the site from becoming a one-time browse and turns it
            into a practical maintenance tool for finding options before a small problem becomes harder to manage.
          </p>
        </div>
        <div className="max-w-3xl space-y-4 leading-8 text-ink/75">
          <h2 className="text-3xl font-black text-ink">A monthly category checkup</h2>
          <p>
            A simple monthly checkup can keep the categories useful without turning budgeting into a second job. During
            the first week, review essentials like rent, utilities, food, transportation, and medication. During the
            second week, look for grocery and household savings. During the third week, check free resources, library
            perks, community events, and discount programs. During the fourth week, review side income, subscriptions,
            and any bills that could be negotiated or moved.
          </p>
          <p>
            This rhythm gives every part of the budget a little attention while still respecting limited time. It also
            helps you catch changes earlier: a promotion ending, a utility increase, a food price jump, a benefit
            deadline, or a side hustle that no longer pays enough after expenses. Use the categories as signposts, then
            choose the one page that matches the next decision you actually need to make.
          </p>
          <p>
            When a category feels too broad, narrow it to one question. What bill is due next? Which store trip is
            coming up? Which application has the nearest deadline? Which recurring charge can be reviewed today? A clear
            question turns a broad savings category into a manageable action.
          </p>
        </div>
      </section>
      <div className="mt-10">
        <AdSlot label="Advertisement" />
      </div>
    </section>
  );
}
