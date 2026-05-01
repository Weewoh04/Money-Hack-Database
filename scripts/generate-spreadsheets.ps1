param(
  [string]$OutputDir = "public/downloads"
)

$ErrorActionPreference = "Stop"

function Encode-Xml([string]$Value) {
  return [System.Security.SecurityElement]::Escape($Value)
}

function Column-Name([int]$Index) {
  $name = ""
  while ($Index -gt 0) {
    $mod = ($Index - 1) % 26
    $name = [char](65 + $mod) + $name
    $Index = [math]::Floor(($Index - $mod) / 26)
  }
  return $name
}

function Cell-Xml([string]$Ref, $Value, [int]$Style = 0) {
  if ($null -eq $Value) {
    return "<c r=`"$Ref`" s=`"$Style`"/>"
  }

  if ($Value -is [hashtable] -and $Value.ContainsKey("formula")) {
    return "<c r=`"$Ref`" s=`"$Style`"><f>$($Value.formula)</f></c>"
  }

  if ($Value -is [int] -or $Value -is [double] -or $Value -is [decimal]) {
    return "<c r=`"$Ref`" s=`"$Style`"><v>$Value</v></c>"
  }

  $text = Encode-Xml ([string]$Value)
  return "<c r=`"$Ref`" t=`"inlineStr`" s=`"$Style`"><is><t>$text</t></is></c>"
}

function Sheet-Xml($Rows, $Widths) {
  $sheetRows = New-Object System.Collections.Generic.List[string]

  for ($r = 0; $r -lt $Rows.Count; $r++) {
    $row = $Rows[$r]
    $cells = New-Object System.Collections.Generic.List[string]

    for ($c = 0; $c -lt $row.values.Count; $c++) {
      $ref = "$(Column-Name ($c + 1))$($r + 1)"
      $style = if ($row.styles.Count -gt $c) { $row.styles[$c] } else { 0 }
      $cells.Add((Cell-Xml $ref $row.values[$c] $style))
    }

    $height = if ($row.ContainsKey("height")) { " ht=`"$($row.height)`" customHeight=`"1`"" } else { "" }
    $sheetRows.Add("<row r=`"$($r + 1)`"$height>$($cells -join '')</row>")
  }

  $cols = New-Object System.Collections.Generic.List[string]
  for ($i = 0; $i -lt $Widths.Count; $i++) {
    $col = $i + 1
    $cols.Add("<col min=`"$col`" max=`"$col`" width=`"$($Widths[$i])`" customWidth=`"1`"/>")
  }

  return @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
      <selection pane="bottomLeft"/>
    </sheetView>
  </sheetViews>
  <cols>$($cols -join '')</cols>
  <sheetData>$($sheetRows -join '')</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
"@
}

function Row($Values, $Styles = @(), [double]$Height = 0) {
  $row = @{
    values = $Values
    styles = $Styles
  }
  if ($Height -gt 0) {
    $row.height = $Height
  }
  return $row
}

function Create-Xlsx($FileName, $SheetName, $Rows, $Widths) {
  if (!(Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
  }

  $temp = Join-Path $env:TEMP ([guid]::NewGuid().ToString())
  New-Item -ItemType Directory -Path $temp | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $temp "_rels") | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $temp "xl") | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $temp "xl/_rels") | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $temp "xl/worksheets") | Out-Null

  Set-Content -LiteralPath (Join-Path $temp "[Content_Types].xml") -Encoding UTF8 -Value @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>
"@

  Set-Content -LiteralPath (Join-Path $temp "_rels/.rels") -Encoding UTF8 -Value @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>
"@

  Set-Content -LiteralPath (Join-Path $temp "xl/workbook.xml") -Encoding UTF8 -Value @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="$(Encode-Xml $SheetName)" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>
"@

  Set-Content -LiteralPath (Join-Path $temp "xl/_rels/workbook.xml.rels") -Encoding UTF8 -Value @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>
"@

  Set-Content -LiteralPath (Join-Path $temp "xl/styles.xml") -Encoding UTF8 -Value @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="4">
    <font><sz val="11"/><color rgb="FF1F2A24"/><name val="Aptos"/></font>
    <font><b/><sz val="18"/><color rgb="FF1F2A24"/><name val="Aptos Display"/></font>
    <font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Aptos"/></font>
    <font><b/><sz val="11"/><color rgb="FF247A4D"/><name val="Aptos"/></font>
  </fonts>
  <fills count="6">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFBF4E8"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF247A4D"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFDCEFD8"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFF3C969"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="FFE3D6C3"/></left><right style="thin"><color rgb="FFE3D6C3"/></right><top style="thin"><color rgb="FFE3D6C3"/></top><bottom style="thin"><color rgb="FFE3D6C3"/></bottom><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="7">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="2" borderId="1" xfId="0" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>
"@

  Set-Content -LiteralPath (Join-Path $temp "xl/worksheets/sheet1.xml") -Encoding UTF8 -Value (Sheet-Xml $Rows $Widths)

  $target = Join-Path $OutputDir $FileName
  if (Test-Path $target) {
    Remove-Item -LiteralPath $target -Force
  }

  Add-Type -AssemblyName System.IO.Compression
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $zip = [System.IO.Compression.ZipFile]::Open($target, [System.IO.Compression.ZipArchiveMode]::Create)
  try {
    $files = Get-ChildItem -LiteralPath $temp -Recurse -File
    foreach ($file in $files) {
      $relative = $file.FullName.Substring($temp.Length + 1).Replace("\", "/")
      [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $relative) | Out-Null
    }
  }
  finally {
    $zip.Dispose()
  }
  Remove-Item -LiteralPath $temp -Recurse -Force
}

$templates = @(
  @{
    file = "debt-payoff-planner.xlsx"
    sheet = "Debt Payoff"
    widths = @(24, 14, 14, 16, 16, 14, 18, 24, 30)
    rows = @(
      (Row @("Debt Payoff Planner", "", "", "", "", "", "", "", "") @(1,1,1,1,1,1,1,1,1) 24),
      (Row @("Use this original planning worksheet to compare payoff order, payments, and progress. Verify balances and rates with your lenders.", "", "", "", "", "", "", "", "") @(3,3,3,3,3,3,3,3,3)),
      (Row @("Debt Name", "Balance", "Interest Rate", "Minimum Payment", "Extra Payment", "Due Date", "Payoff Priority", "Payoff Method", "Notes") @(2,2,2,2,2,2,2,2,2)),
      (Row @("Credit Card 1", 1500, "24.99%", 50, 25, "15th", 1, "Avalanche", "Replace examples with your accounts") @(6,6,6,6,6,6,6,6,6)),
      (Row @("Personal Loan", 3000, "12.50%", 120, 0, "1st", 2, "Avalanche", "") @(6,6,6,6,6,6,6,6,6)),
      (Row @("Student Loan", 8000, "5.50%", 90, 0, "20th", 3, "Avalanche", "") @(6,6,6,6,6,6,6,6,6)),
      (Row @("Totals", @{formula="SUM(B4:B6)"}, "", @{formula="SUM(D4:D6)"}, @{formula="SUM(E4:E6)"}, "", "", "", "") @(4,4,4,4,4,4,4,4,4))
    )
  },
  @{
    file = "grocery-budget-tracker.xlsx"
    sheet = "Grocery Budget"
    widths = @(14, 20, 18, 34, 16, 14, 18, 26)
    rows = @(
      (Row @("Grocery Budget Tracker", "", "", "", "", "", "", "") @(1,1,1,1,1,1,1,1) 24),
      (Row @("Plan trips before shopping, compare planned versus actual spending, and track coupon or rebate notes.", "", "", "", "", "", "", "") @(3,3,3,3,3,3,3,3)),
      (Row @("Week", "Store", "Category", "Planned Items", "Estimated Cost", "Actual Cost", "Savings", "Notes") @(2,2,2,2,2,2,2,2)),
      (Row @("Week 1", "Example Grocery", "Produce", "Bananas, lettuce, carrots", 18, 16, @{formula="E4-F4"}, "Replace examples with your list") @(6,6,6,6,6,6,6,6)),
      (Row @("Week 1", "Example Grocery", "Pantry", "Rice, beans, pasta", 22, 20, @{formula="E5-F5"}, "Digital coupon") @(6,6,6,6,6,6,6,6)),
      (Row @("Week 1", "Example Grocery", "Protein", "Eggs, chicken, tofu", 35, 34, @{formula="E6-F6"}, "Rebate app") @(6,6,6,6,6,6,6,6)),
      (Row @("Total", "", "", "", @{formula="SUM(E4:E6)"}, @{formula="SUM(F4:F6)"}, @{formula="SUM(G4:G6)"}, "") @(4,4,4,4,4,4,4,4))
    )
  },
  @{
    file = "monthly-budget-worksheet.xlsx"
    sheet = "Monthly Budget"
    widths = @(24, 16, 16, 14, 18, 30)
    rows = @(
      (Row @("Monthly Budget Worksheet", "", "", "", "", "") @(1,1,1,1,1,1) 24),
      (Row @("Use planned and actual columns to spot gaps before the month gets away from you.", "", "", "", "", "") @(3,3,3,3,3,3)),
      (Row @("Category", "Planned Amount", "Actual Amount", "Due Date", "Status", "Notes") @(2,2,2,2,2,2)),
      (Row @("Income 1", 2500, 2500, "", "Received", "Example row") @(6,6,6,6,6,6)),
      (Row @("Income 2", 0, 0, "", "", "") @(6,6,6,6,6,6)),
      (Row @("Rent or Mortgage", 1200, 1200, "1st", "Paid", "") @(6,6,6,6,6,6)),
      (Row @("Utilities", 180, 165, "10th", "Paid", "") @(6,6,6,6,6,6)),
      (Row @("Groceries", 450, 425, "", "In progress", "") @(6,6,6,6,6,6)),
      (Row @("Transportation", 250, 240, "", "In progress", "") @(6,6,6,6,6,6)),
      (Row @("Debt Payments", 200, 200, "15th", "Paid", "") @(6,6,6,6,6,6)),
      (Row @("Savings", 100, 100, "", "Transferred", "") @(6,6,6,6,6,6)),
      (Row @("Leftover", @{formula="SUM(C4:C5)-SUM(C6:C11)"}, "", "", "", "") @(4,4,4,4,4,4))
    )
  },
  @{
    file = "bill-payment-tracker.xlsx"
    sheet = "Bill Tracker"
    widths = @(22, 22, 14, 14, 12, 14, 22, 30)
    rows = @(
      (Row @("Bill Payment Tracker", "", "", "", "", "", "", "") @(1,1,1,1,1,1,1,1) 24),
      (Row @("Track due dates, payment status, confirmation numbers, and notes in one place.", "", "", "", "", "", "", "") @(3,3,3,3,3,3,3,3)),
      (Row @("Bill", "Provider", "Amount Due", "Due Date", "Autopay", "Date Paid", "Confirmation #", "Notes") @(2,2,2,2,2,2,2,2)),
      (Row @("Rent or Mortgage", "Provider Name", 1200, "1st", "No", "", "", "") @(6,6,6,6,6,6,6,6)),
      (Row @("Electric", "Provider Name", 110, "10th", "Yes", "", "", "") @(6,6,6,6,6,6,6,6)),
      (Row @("Water", "Provider Name", 45, "12th", "No", "", "", "") @(6,6,6,6,6,6,6,6)),
      (Row @("Internet", "Provider Name", 70, "15th", "Yes", "", "", "") @(6,6,6,6,6,6,6,6)),
      (Row @("Phone", "Provider Name", 60, "20th", "Yes", "", "", "") @(6,6,6,6,6,6,6,6)),
      (Row @("Monthly Total", "", @{formula="SUM(C4:C8)"}, "", "", "", "", "") @(4,4,4,4,4,4,4,4))
    )
  },
  @{
    file = "savings-goal-planner.xlsx"
    sheet = "Savings Goals"
    widths = @(24, 16, 18, 22, 16, 18, 30)
    rows = @(
      (Row @("Savings Goal Planner", "", "", "", "", "", "") @(1,1,1,1,1,1,1) 24),
      (Row @("Set targets, track balances, and update progress notes as you save.", "", "", "", "", "", "") @(3,3,3,3,3,3,3)),
      (Row @("Goal", "Target Amount", "Starting Balance", "Monthly Contribution", "Target Date", "Current Balance", "Progress Notes") @(2,2,2,2,2,2,2)),
      (Row @("Emergency Fund", 1000, 100, 100, "12/31/2026", 100, "Example row") @(6,6,6,6,6,6,6)),
      (Row @("Car Repair Fund", 600, 50, 50, "09/30/2026", 50, "") @(6,6,6,6,6,6,6)),
      (Row @("Holiday Fund", 500, 0, 40, "11/30/2026", 0, "") @(6,6,6,6,6,6,6)),
      (Row @("Totals", @{formula="SUM(B4:B6)"}, @{formula="SUM(C4:C6)"}, @{formula="SUM(D4:D6)"}, "", @{formula="SUM(F4:F6)"}, "") @(4,4,4,4,4,4,4))
    )
  },
  @{
    file = "emergency-budget-reset.xlsx"
    sheet = "Emergency Reset"
    widths = @(10, 24, 16, 18, 14, 34, 24, 16, 30)
    rows = @(
      (Row @("Emergency Budget Reset Worksheet", "", "", "", "", "", "", "", "") @(1,1,1,1,1,1,1,1,1) 24),
      (Row @("Prioritize essentials, action steps, and provider calls during a short-term cash crunch.", "", "", "", "", "", "", "", "") @(3,3,3,3,3,3,3,3,3)),
      (Row @("Priority", "Item", "Amount Needed", "Amount Available", "Deadline", "Action Step", "Provider or Contact", "Status", "Notes") @(2,2,2,2,2,2,2,2,2)),
      (Row @(1, "Food and groceries", 150, 75, "This week", "Check pantry and food resources", "Local pantry", "Not started", "") @(6,6,6,6,6,6,6,6,6)),
      (Row @(2, "Housing", 1200, 600, "1st", "Contact landlord or housing agency", "Landlord", "Not started", "") @(6,6,6,6,6,6,6,6,6)),
      (Row @(3, "Utilities", 180, 80, "10th", "Ask about hardship plan", "Utility provider", "Not started", "") @(6,6,6,6,6,6,6,6,6)),
      (Row @(4, "Transportation", 80, 40, "This week", "Plan essential trips only", "", "Not started", "") @(6,6,6,6,6,6,6,6,6)),
      (Row @(5, "Phone or internet", 70, 30, "15th", "Ask about lower plan", "Provider", "Not started", "") @(6,6,6,6,6,6,6,6,6)),
      (Row @(6, "Local assistance", 0, 0, "Today", "Call 211 or search local resources", "211", "Not started", "") @(6,6,6,6,6,6,6,6,6)),
      (Row @("Totals", "", @{formula="SUM(C4:C9)"}, @{formula="SUM(D4:D9)"}, "", "Gap to solve", "", "", @{formula="C10-D10"}) @(4,4,4,4,4,4,4,4,4))
    )
  }
)

foreach ($template in $templates) {
  Create-Xlsx $template.file $template.sheet $template.rows $template.widths
}
