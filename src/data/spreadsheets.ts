export type SpreadsheetTemplate = {
  id: string;
  title: string;
  description: string;
  fileName: string;
  csvFileName: string;
  category: string;
  bestFor: string;
};

export const spreadsheets: SpreadsheetTemplate[] = [
  {
    id: "debt-payoff",
    title: "Debt Payoff Planner",
    description: "List balances, minimum payments, interest rates, payoff order, and monthly progress.",
    fileName: "debt-payoff-planner-v2.xlsx",
    csvFileName: "debt-payoff-planner.csv",
    category: "Debt",
    bestFor: "Comparing snowball or avalanche payoff plans",
  },
  {
    id: "grocery-budget",
    title: "Grocery Budget Tracker",
    description: "Plan grocery trips by category, estimate costs, track actual spending, and note savings.",
    fileName: "grocery-budget-tracker-v2.xlsx",
    csvFileName: "grocery-budget-tracker.csv",
    category: "Food",
    bestFor: "Weekly grocery planning and coupon stack tracking",
  },
  {
    id: "monthly-budget",
    title: "Monthly Budget Worksheet",
    description: "Map monthly income, fixed bills, flexible spending, savings, and leftover cash.",
    fileName: "monthly-budget-worksheet-v2.xlsx",
    csvFileName: "monthly-budget-worksheet.csv",
    category: "Budgeting",
    bestFor: "Building a simple monthly budget",
  },
  {
    id: "bill-tracker",
    title: "Bill Payment Tracker",
    description: "Track due dates, amounts, autopay status, confirmation numbers, and payment notes.",
    fileName: "bill-payment-tracker-v2.xlsx",
    csvFileName: "bill-payment-tracker.csv",
    category: "Bills",
    bestFor: "Avoiding missed due dates and late fees",
  },
  {
    id: "savings-goal",
    title: "Savings Goal Planner",
    description: "Set a target, deadline, starting balance, monthly contribution, and progress notes.",
    fileName: "savings-goal-planner-v2.xlsx",
    csvFileName: "savings-goal-planner.csv",
    category: "Savings",
    bestFor: "Emergency funds, sinking funds, and short-term goals",
  },
  {
    id: "emergency-budget-reset",
    title: "Emergency Budget Reset Worksheet",
    description: "Prioritize cash on hand, essentials, bill calls, local assistance, and short-term cuts.",
    fileName: "emergency-budget-reset-v2.xlsx",
    csvFileName: "emergency-budget-reset.csv",
    category: "Emergency",
    bestFor: "Making a short-term plan during a cash crunch",
  },
];
