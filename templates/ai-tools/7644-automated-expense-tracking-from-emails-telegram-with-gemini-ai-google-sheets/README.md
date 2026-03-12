# 🎯 Automated expense tracking from emails & Telegram with Gemini AI & Google Sheets

> ⚡ **886 views** · 🎯 [AI Summarization & Classification](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This n8n template automatically parses bank transaction emails (HDFC, Indian Bank, Indian Overseas Bank, UPI apps like Google pay, Paytm, etc.) - The from email(bank name/UPI apps) is changable, classifies them using Gemini AI, and logs them into a structured Google Sheets budget tracker. It helps you consolidate expenses, compare against monthly budgets, and get real-time alerts when limits are exceeded.

## 📝 Problem Statement

Tracking expenses manually from different bank emails and UPI apps is frustrating, time-consuming, and error-prone. Small transactions often slip through, making budget control difficult.

## This workflow solves that by:

Automatically extracting financial data from Gmail.

Categorizing expenses using AI parsing.

Saving all data into Google Sheets in a structured way.

Comparing with monthly budgets and raising alerts.

## Target Audience:

Individuals who want personal budget automation.

Families managing shared household spending.

Small teams looking for a lightweight financial log.

## ⚙️ Setup
Prerequisites

An n8n instance (self-hosted or cloud).

A Google account with Gmail + Google Sheets enabled.

Pre-created Google Sheets file with 2 tabs:

Expenses

Budgets

A configured Gemini API connection in n8n.

## 📊 Google Sheets Template
Expenses Tab (columns in order):

Timestamp | Date | Account | From | To | Type | Category | Description | Amount | Currency | Source | MessageId | Status

Budget Tab (columns in order):

Month | Category | Budget Amount | Notes | UpdatedAt

Yearly Summary Tab (auto-calculated):

Year | Month | Category | Total Expense | Budget | Variance | Alert

Variance = Budget - Total Expense

Alert = ⚠️ Over Budget when spending &gt; budget

## 🚀 How It Works

Gmail:

Gmail Trigger captures new bank/UPI emails.

Gemini AI Parser extracts structured details (date, amount, category, etc.).

Filter Node ensures only valid financial transactions are logged.

Information extractor will extract the information like Date, account, transaction type(Credit/Debit), description, currency, status, messageId, from email, to email, category -&gt; checks if the transaction is 'Credit' or 'Debit' then appends the details to the respective google sheet

Budget Validator checks against monthly allocations.

If the expense is above the budget is raises an alert and will send a email to the connected account. 

For sending email I wrote a Google Sheet App script:

```function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var monthly = ss.getSheetByName("MonthlySummary");
  var yearly = ss.getSheetByName("YearlySummary");

  // Get values from Monthly Summary
  var totalExpense = monthly.getRange("D2").getValue();
  var budget = monthly.getRange("E2").getValue();

  // Get current date info
  var now = new Date();
  var month = Utilities.formatDate(now, "GMT+5:30", "MM");
  var year = Utilities.formatDate(now, "GMT+5:30", "yyyy");

  var status = (totalExpense &gt; budget) ? "Alert" : "";

  // Append to Yearly Summary
  yearly.appendRow([year, month, totalExpense, status]);

  // If budget exceeded, send alert email
  if (status === "Alert") {
    var emailAddress = "YOUR EMAIL";
    var subject = "⚠️ Budget Exceeded - " + month + "/" + year;
    var body = "Your total expenses this month (" + totalExpense +
      ") have exceeded your budget of " + budget + ".\n\n" +
      "Please review your spending.";
    MailApp.sendEmail(emailAddress, subject, body);
  }

  // 🔄 Reset Monthly Summary
  var lastRow = monthly.getLastRow();
  if (lastRow &gt; 3) { // assuming headers in first 2-3 rows
    monthly.getRange("A4:C" + lastRow).clearContent();
  }

  // Reset total in D2
  monthly.getRange("D2").setValue(0);
}

```
Monthly summary auto-calculates the expense and updates the expense for every month and budgets(sum all budgets if there are more than 1 budgets).

Yearly Summary auto-updates and raises over-budget alerts.

Telegram:

Takes input from a telegram bot which is connected to the n8n workflow telegram trigger.

Gemini AI Parser extracts structured details (date, amount, category, etc.).

Then it checks, whether the manually specified details is 'budget' or 'expense', then splits the data -&gt; parse the data -&gt; then again check whether it is 'Budget' or 'Expense' then appends the structured data to the respective google sheet.

Monthly summary auto-calculates the expense and updates the expense for every month and budgets(sum all budgets if there are more than 1 budgets).

Yearly Summary auto-updates and raises over-budget alerts.

🔧 Customization

Add support for more banks/UPI apps by extending the parser schema.

```const emailBody = $input.first().json.snippet || "";
const senderEmail = $input.first().json.From || "";

// Account detection
let account = ""; // you can modify the bank names and UPI names here

if (/alerts@hdfcbank\.net/i.test(senderEmail)) account = "HDFC Bank"; // you can modify the bank names and UPI names here

else if (/ealerts@iobnet\.co\.in/i.test(senderEmail)) account = "Indian Overseas Bank";
else if (/alerts@indianbank\.in/i.test(senderEmail)) account = "Indian Bank";
else if (/@upi|@okhdfcbank|@okaxis|@okicici/i.test(emailBody)) {
    if (/gpay|google pay/i.test(emailBody)) account = "Google Pay";
    else if (/phonepe/i.test(emailBody)) account = "PhonePe";
    else if (/paytm/i.test(emailBody)) account = "Paytm";
    else account = "UPI";
} else {
    account = "Other";
}

// If account is "Other", skip output
if (account === "Other") {
    return [];
}

// Output
return [{
    account,
    from: senderEmail, // exact Gmail "From" metadata
    snippet: emailBody,
    messageId: $input.first().json.id || ""
}];

```

Create custom categories (e.g., Travel, Groceries, Subscriptions).

Send real-time alerts via Telegram/Slack/Email using n8n nodes.

Share the Google Sheet with family or team for collaborative use.

## 📌 Usage

The workflow runs automatically on every new Gmail transaction email and financial input on the telegram bot.

At the end of each month, totals are calculated in the Yearly Summary tab.

Users only need to maintain the Budget tab with updated monthly allocations.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Gmail Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
