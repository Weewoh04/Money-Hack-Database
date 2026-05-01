export type BlogSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  readTime: string;
  relatedHref: string;
  relatedLabel: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "grocery-savings-plan",
    title: "How to Build a 7-Day Grocery Savings Plan",
    slug: "seven-day-grocery-savings-plan",
    description:
      "A simple weekly grocery planning routine that helps reduce waste, avoid duplicate purchases, and make sale items easier to use.",
    category: "Food Savings",
    readTime: "5 min read",
    relatedHref: "/hacks/meal-planning-savings",
    relatedLabel: "Open meal planning hack",
    sections: [
      {
        heading: "Start with what you already have",
        body: [
          "Before making a grocery list, check your pantry, fridge, and freezer. The fastest grocery savings often come from using food you already paid for.",
          "Write down proteins, grains, vegetables, sauces, and easy snack items. Build the first few meals around those ingredients instead of starting from scratch.",
        ],
        bullets: ["Check freezer items first", "Use opened pantry items", "Plan around food that expires soon"],
      },
      {
        heading: "Pick a few flexible meals",
        body: [
          "Choose meals that can share ingredients. For example, rice can support stir fry, burrito bowls, soup, and leftovers.",
          "Keep the plan realistic. A useful grocery plan beats a perfect one that takes too much time to follow.",
        ],
        bullets: ["Three dinners", "Two easy lunches", "One backup meal", "Simple breakfast options"],
      },
      {
        heading: "Shop with a planned list",
        body: [
          "Compare your list with store sales and digital coupons, but avoid adding items just because they are discounted.",
          "After shopping, note the actual total. This gives you a better estimate for next week and helps spot which categories are driving costs up.",
        ],
      },
    ],
  },
  {
    id: "assistance-application-checks",
    title: "What to Check Before Applying for Assistance",
    slug: "what-to-check-before-applying-for-assistance",
    description:
      "A verification-first checklist for reviewing assistance programs, eligibility rules, documents, deadlines, and official provider details.",
    category: "Emergency Help",
    readTime: "6 min read",
    relatedHref: "/resources",
    relatedLabel: "Open resource directory",
    sections: [
      {
        heading: "Confirm the source is official",
        body: [
          "Assistance programs can vary by state, county, city, and provider. Always start with the official agency, nonprofit, utility provider, or local referral source.",
          "Avoid any site that charges a fee to apply for public benefits or pressures you to share sensitive information before explaining the program.",
        ],
        bullets: ["Look for official agency pages", "Call the provider directly", "Use 211 for local referrals"],
      },
      {
        heading: "Read eligibility rules carefully",
        body: [
          "Eligibility may depend on income, household size, immigration status, location, hardship, age, disability, veteran status, or current funding availability.",
          "If a rule is unclear, ask the provider before submitting. A short phone call can save time and reduce the chance of missing important documents.",
        ],
      },
      {
        heading: "Prepare documents before applying",
        body: [
          "Many applications ask for ID, proof of address, income documents, recent bills, lease details, or household information.",
          "Keep copies of confirmations, dates, case numbers, and the name of anyone you speak with.",
        ],
      },
    ],
  },
  {
    id: "cashback-mistakes",
    title: "Cashback Mistakes That Can Cost More Than They Save",
    slug: "cashback-mistakes-that-cost-money",
    description:
      "Cashback tools can help, but only when they support planned purchases instead of encouraging extra spending.",
    category: "Cashback",
    readTime: "4 min read",
    relatedHref: "/hacks/use-cashback-apps",
    relatedLabel: "Open cashback hack",
    sections: [
      {
        heading: "Do not buy for the rebate alone",
        body: [
          "The simplest cashback rule is also the most important: only use offers on items you already planned to buy.",
          "A small rebate does not help if it pushes your total spending higher or adds products that will go unused.",
        ],
      },
      {
        heading: "Watch payout thresholds",
        body: [
          "Some apps require a minimum balance before you can cash out. Check the payout method, timing, and account requirements before counting the money.",
          "Track rebates like a bonus, not guaranteed income. Offers can expire, reject, or change.",
        ],
        bullets: ["Check minimum payout", "Save receipts", "Read store eligibility", "Track pending rebates"],
      },
      {
        heading: "Stack carefully",
        body: [
          "Cashback, store rewards, gift cards, and coupons can sometimes be combined, but rules vary. Verify terms before assuming a stack will work.",
        ],
      },
    ],
  },
  {
    id: "no-spend-weekend",
    title: "A Gentle No-Spend Weekend Reset",
    slug: "gentle-no-spend-weekend-reset",
    description:
      "A low-pressure no-spend weekend plan that focuses on pausing nonessential purchases without skipping real needs.",
    category: "Budgeting",
    readTime: "5 min read",
    relatedHref: "/hacks/no-spend-challenge",
    relatedLabel: "Open no-spend challenge",
    sections: [
      {
        heading: "Define the rules before the weekend",
        body: [
          "A no-spend reset works best when the rules are clear. Essentials like medicine, transportation, required bills, and groceries should not be ignored.",
          "The goal is to pause impulse purchases and use what you already have, not to make life harder.",
        ],
        bullets: ["List allowed essentials", "Choose free activities", "Plan meals from home"],
      },
      {
        heading: "Make friction your friend",
        body: [
          "Remove saved carts, unsubscribe from promotional emails, and move shopping apps off your home screen for the weekend.",
          "Small barriers can give you enough time to decide whether a purchase actually matters.",
        ],
      },
      {
        heading: "Review what you avoided spending",
        body: [
          "At the end of the weekend, write down purchases you skipped. If money was truly saved, assign it to a bill, savings goal, or debt payment.",
        ],
      },
    ],
  },
  {
    id: "side-hustle-math",
    title: "Side Hustle Math: Track Net Pay, Not Gross Pay",
    slug: "side-hustle-math-net-pay",
    description:
      "A practical guide to comparing side hustle income after expenses, taxes, fees, mileage, and time.",
    category: "Side Hustles",
    readTime: "6 min read",
    relatedHref: "/hacks?category=Side%20Hustles",
    relatedLabel: "Browse side hustle hacks",
    sections: [
      {
        heading: "Gross pay is not the final number",
        body: [
          "A side hustle may advertise a high hourly rate, but your real number is what remains after platform fees, supplies, taxes, mileage, fuel, and unpaid admin time.",
          "Track income and expenses from the start so you can compare opportunities honestly.",
        ],
      },
      {
        heading: "Calculate a simple net hourly rate",
        body: [
          "Add up money earned, subtract direct expenses, then divide by total time spent. Include setup, driving, messaging, shopping, editing, or waiting time.",
        ],
        bullets: ["Total earnings", "Minus direct expenses", "Minus estimated taxes", "Divide by total hours"],
      },
      {
        heading: "Know when to stop",
        body: [
          "If a gig repeatedly produces low net pay or adds too much stress, it may not be the right fit. A smaller, steadier option can be better than a flashy one.",
        ],
      },
    ],
  },
  {
    id: "library-perks",
    title: "Free Library Perks Most People Miss",
    slug: "free-library-perks-most-people-miss",
    description:
      "Libraries often offer more than books, including digital media, museum passes, classes, tools, and research resources.",
    category: "Free Resources",
    readTime: "4 min read",
    relatedHref: "/hacks/use-library-perks",
    relatedLabel: "Open library perks hack",
    sections: [
      {
        heading: "Check digital resources first",
        body: [
          "Many library systems offer ebooks, audiobooks, streaming media, language learning, magazines, and research databases through your library card.",
          "These perks can replace small subscriptions or paid one-off resources if your local system offers them.",
        ],
      },
      {
        heading: "Ask about passes and lending programs",
        body: [
          "Some libraries lend museum passes, park passes, tools, instruments, hotspots, or equipment. Availability varies, so check your local library website or ask a librarian.",
        ],
        bullets: ["Museum passes", "Tool lending", "Free classes", "Career resources", "Printing or computer access"],
      },
      {
        heading: "Use reminders to avoid fees",
        body: [
          "Free is only free if you return items on time and follow borrowing rules. Turn on library notices and calendar reminders when checking out physical items.",
        ],
      },
    ],
  },
];
