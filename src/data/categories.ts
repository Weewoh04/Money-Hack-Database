export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "emergency-help",
    name: "Emergency Help",
    slug: "emergency-help",
    icon: "🧰",
    description: "Fast-start places to look for food, bills, benefits, and local support.",
  },
  {
    id: "food-grocery-savings",
    name: "Food & Grocery Savings",
    slug: "food-grocery-savings",
    icon: "🛒",
    description: "Programs and routines that may reduce weekly food costs.",
  },
  {
    id: "utility-bill-help",
    name: "Utility Bill Help",
    slug: "utility-bill-help",
    icon: "💡",
    description: "Assistance programs and energy-saving options for home bills.",
  },
  {
    id: "rent-housing-help",
    name: "Rent & Housing Help",
    slug: "rent-housing-help",
    icon: "🏠",
    description: "Search tools and local resources for housing stability support.",
  },
  {
    id: "cashback-rewards",
    name: "Cashback & Rewards",
    slug: "cashback-rewards",
    icon: "💵",
    description: "Simple ways to compare rewards, cashback, and everyday discounts.",
  },
  {
    id: "side-hustles",
    name: "Side Hustles",
    slug: "side-hustles",
    icon: "🧩",
    description: "Flexible ideas for earning extra income based on time and skills.",
  },
  {
    id: "budgeting-tools",
    name: "Budgeting Tools",
    slug: "budgeting-tools",
    icon: "📒",
    description: "Practical systems for organizing cash flow and finding breathing room.",
  },
  {
    id: "freebies-discounts",
    name: "Freebies & Discounts",
    slug: "freebies-discounts",
    icon: "🎟️",
    description: "Free community resources, perks, and discounts worth checking.",
  },
];
