const fs = require("fs");
const path = require("path");
const ExcelJS = require("exceljs");

const outputDir = path.join(process.cwd(), "public", "downloads");

const templates = [
  {
    file: "debt-payoff-planner.xlsx",
    sheet: "Debt Payoff",
    title: "Debt Payoff Planner",
    note: "Use this original planning worksheet to compare payoff order, payments, and progress. Verify balances and rates with your lenders.",
    columns: [
      ["Debt Name", 24, "text"],
      ["Balance", 14, "currency"],
      ["Interest Rate", 14, "percentText"],
      ["Minimum Payment", 16, "currency"],
      ["Extra Payment", 16, "currency"],
      ["Due Date", 14, "text"],
      ["Payoff Priority", 18, "number"],
      ["Payoff Method", 18, "text"],
      ["Notes", 34, "text"],
    ],
    rows: [
      ["Credit Card 1", 1500, "24.99%", 50, 25, "15th", 1, "Avalanche", "Replace examples with your accounts"],
      ["Personal Loan", 3000, "12.50%", 120, 0, "1st", 2, "Avalanche", ""],
      ["Student Loan", 8000, "5.50%", 90, 0, "20th", 3, "Avalanche", ""],
    ],
    totals: ["Totals", { formula: "SUM(B4:B6)" }, "", { formula: "SUM(D4:D6)" }, { formula: "SUM(E4:E6)" }, "", "", "", ""],
  },
  {
    file: "grocery-budget-tracker.xlsx",
    sheet: "Grocery Budget",
    title: "Grocery Budget Tracker",
    note: "Plan trips before shopping, compare planned versus actual spending, and track coupon or rebate notes.",
    columns: [
      ["Week", 14, "text"],
      ["Store", 20, "text"],
      ["Category", 18, "text"],
      ["Planned Items", 36, "text"],
      ["Estimated Cost", 16, "currency"],
      ["Actual Cost", 14, "currency"],
      ["Savings", 14, "currency"],
      ["Notes", 30, "text"],
    ],
    rows: [
      ["Week 1", "Example Grocery", "Produce", "Bananas, lettuce, carrots", 18, 16, { formula: "E4-F4" }, "Replace examples with your list"],
      ["Week 1", "Example Grocery", "Pantry", "Rice, beans, pasta", 22, 20, { formula: "E5-F5" }, "Digital coupon"],
      ["Week 1", "Example Grocery", "Protein", "Eggs, chicken, tofu", 35, 34, { formula: "E6-F6" }, "Rebate app"],
    ],
    totals: ["Total", "", "", "", { formula: "SUM(E4:E6)" }, { formula: "SUM(F4:F6)" }, { formula: "SUM(G4:G6)" }, ""],
  },
  {
    file: "monthly-budget-worksheet.xlsx",
    sheet: "Monthly Budget",
    title: "Monthly Budget Worksheet",
    note: "Use planned and actual columns to spot gaps before the month gets away from you.",
    columns: [
      ["Category", 24, "text"],
      ["Planned Amount", 16, "currency"],
      ["Actual Amount", 16, "currency"],
      ["Due Date", 14, "text"],
      ["Status", 18, "text"],
      ["Notes", 34, "text"],
    ],
    rows: [
      ["Income 1", 2500, 2500, "", "Received", "Example row"],
      ["Income 2", 0, 0, "", "", ""],
      ["Rent or Mortgage", 1200, 1200, "1st", "Paid", ""],
      ["Utilities", 180, 165, "10th", "Paid", ""],
      ["Groceries", 450, 425, "", "In progress", ""],
      ["Transportation", 250, 240, "", "In progress", ""],
      ["Debt Payments", 200, 200, "15th", "Paid", ""],
      ["Savings", 100, 100, "", "Transferred", ""],
    ],
    totals: ["Leftover", { formula: "SUM(C4:C5)-SUM(C6:C11)" }, "", "", "", ""],
  },
  {
    file: "bill-payment-tracker.xlsx",
    sheet: "Bill Tracker",
    title: "Bill Payment Tracker",
    note: "Track due dates, payment status, confirmation numbers, and notes in one place.",
    columns: [
      ["Bill", 22, "text"],
      ["Provider", 22, "text"],
      ["Amount Due", 14, "currency"],
      ["Due Date", 14, "text"],
      ["Autopay", 12, "text"],
      ["Date Paid", 14, "text"],
      ["Confirmation #", 22, "text"],
      ["Notes", 32, "text"],
    ],
    rows: [
      ["Rent or Mortgage", "Provider Name", 1200, "1st", "No", "", "", ""],
      ["Electric", "Provider Name", 110, "10th", "Yes", "", "", ""],
      ["Water", "Provider Name", 45, "12th", "No", "", "", ""],
      ["Internet", "Provider Name", 70, "15th", "Yes", "", "", ""],
      ["Phone", "Provider Name", 60, "20th", "Yes", "", "", ""],
    ],
    totals: ["Monthly Total", "", { formula: "SUM(C4:C8)" }, "", "", "", "", ""],
  },
  {
    file: "savings-goal-planner.xlsx",
    sheet: "Savings Goals",
    title: "Savings Goal Planner",
    note: "Set targets, track balances, and update progress notes as you save.",
    columns: [
      ["Goal", 24, "text"],
      ["Target Amount", 16, "currency"],
      ["Starting Balance", 18, "currency"],
      ["Monthly Contribution", 22, "currency"],
      ["Target Date", 16, "text"],
      ["Current Balance", 18, "currency"],
      ["Progress Notes", 34, "text"],
    ],
    rows: [
      ["Emergency Fund", 1000, 100, 100, "12/31/2026", 100, "Example row"],
      ["Car Repair Fund", 600, 50, 50, "09/30/2026", 50, ""],
      ["Holiday Fund", 500, 0, 40, "11/30/2026", 0, ""],
    ],
    totals: ["Totals", { formula: "SUM(B4:B6)" }, { formula: "SUM(C4:C6)" }, { formula: "SUM(D4:D6)" }, "", { formula: "SUM(F4:F6)" }, ""],
  },
  {
    file: "emergency-budget-reset.xlsx",
    sheet: "Emergency Reset",
    title: "Emergency Budget Reset Worksheet",
    note: "Prioritize essentials, action steps, and provider calls during a short-term cash crunch.",
    columns: [
      ["Priority", 10, "number"],
      ["Item", 24, "text"],
      ["Amount Needed", 16, "currency"],
      ["Amount Available", 18, "currency"],
      ["Deadline", 14, "text"],
      ["Action Step", 36, "text"],
      ["Provider or Contact", 24, "text"],
      ["Status", 16, "text"],
      ["Notes", 34, "text"],
    ],
    rows: [
      [1, "Food and groceries", 150, 75, "This week", "Check pantry and food resources", "Local pantry", "Not started", ""],
      [2, "Housing", 1200, 600, "1st", "Contact landlord or housing agency", "Landlord", "Not started", ""],
      [3, "Utilities", 180, 80, "10th", "Ask about hardship plan", "Utility provider", "Not started", ""],
      [4, "Transportation", 80, 40, "This week", "Plan essential trips only", "", "Not started", ""],
      [5, "Phone or internet", 70, 30, "15th", "Ask about lower plan", "Provider", "Not started", ""],
      [6, "Local assistance", 0, 0, "Today", "Call 211 or search local resources", "211", "Not started", ""],
    ],
    totals: ["Totals", "", { formula: "SUM(C4:C9)" }, { formula: "SUM(D4:D9)" }, "", "Gap to solve", "", "", { formula: "C10-D10" }],
  },
];

function styleCell(cell, style) {
  cell.font = style.font;
  cell.fill = style.fill;
  cell.border = style.border;
  cell.alignment = style.alignment;
  if (style.numFmt) cell.numFmt = style.numFmt;
}

async function buildWorkbook(template) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Money Hack Database";
  workbook.created = new Date();
  workbook.modified = new Date();

  const sheet = workbook.addWorksheet(template.sheet, {
    views: [{ state: "frozen", ySplit: 3 }],
    pageSetup: { orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0 },
  });

  const border = {
    top: { style: "thin", color: { argb: "FFE3D6C3" } },
    left: { style: "thin", color: { argb: "FFE3D6C3" } },
    bottom: { style: "thin", color: { argb: "FFE3D6C3" } },
    right: { style: "thin", color: { argb: "FFE3D6C3" } },
  };

  const titleStyle = {
    font: { name: "Aptos Display", size: 18, bold: true, color: { argb: "FF1F2A24" } },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFBF4E8" } },
    border,
    alignment: { vertical: "middle" },
  };
  const noteStyle = {
    font: { name: "Aptos", size: 11, color: { argb: "FF1F2A24" } },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFBF4E8" } },
    border,
    alignment: { wrapText: true, vertical: "middle" },
  };
  const headerStyle = {
    font: { name: "Aptos", size: 11, bold: true, color: { argb: "FFFFFFFF" } },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FF247A4D" } },
    border,
    alignment: { vertical: "middle" },
  };
  const bodyStyle = {
    font: { name: "Aptos", size: 11, color: { argb: "FF1F2A24" } },
    border,
    alignment: { wrapText: true, vertical: "top" },
  };
  const totalStyle = {
    font: { name: "Aptos", size: 11, bold: true, color: { argb: "FF247A4D" } },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFDCEFD8" } },
    border,
    alignment: { wrapText: true, vertical: "top" },
  };

  sheet.columns = template.columns.map(([, width]) => ({ width }));

  sheet.spliceRows(1, 0, [template.title]);
  sheet.spliceRows(2, 0, [template.note]);
  sheet.spliceRows(3, 0, template.columns.map(([header]) => header));
  sheet.spliceRows(4, 0, ...template.rows);
  sheet.spliceRows(4 + template.rows.length, 0, template.totals);

  sheet.mergeCells(1, 1, 1, template.columns.length);
  sheet.mergeCells(2, 1, 2, template.columns.length);
  sheet.getRow(1).height = 26;
  sheet.getRow(2).height = 40;
  sheet.getRow(3).height = 22;

  sheet.getRow(1).eachCell((cell) => styleCell(cell, titleStyle));
  sheet.getRow(2).eachCell((cell) => styleCell(cell, noteStyle));
  sheet.getRow(3).eachCell((cell) => styleCell(cell, headerStyle));

  for (let rowIndex = 4; rowIndex <= 3 + template.rows.length; rowIndex += 1) {
    sheet.getRow(rowIndex).eachCell({ includeEmpty: true }, (cell) => styleCell(cell, bodyStyle));
  }

  const totalRow = sheet.getRow(4 + template.rows.length);
  totalRow.eachCell({ includeEmpty: true }, (cell) => styleCell(cell, totalStyle));

  sheet.eachRow((row) => {
    row.eachCell((cell) => {
      const columnType = template.columns[cell.col - 1]?.[2];

      if (columnType === "currency") {
        cell.numFmt = "$#,##0.00";
      }

      if (columnType === "number") {
        cell.numFmt = "0";
      }
    });
  });

  sheet.autoFilter = {
    from: { row: 3, column: 1 },
    to: { row: 3, column: template.columns.length },
  };

  await workbook.xlsx.writeFile(path.join(outputDir, template.file));
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  for (const template of templates) {
    await buildWorkbook(template);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
