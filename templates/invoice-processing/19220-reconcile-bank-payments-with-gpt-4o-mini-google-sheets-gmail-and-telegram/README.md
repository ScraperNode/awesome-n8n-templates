# 🧾 Reconcile bank payments with GPT-4o-mini, Google Sheets, Gmail and Telegram

> ⚡ **31 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily to reconcile incoming bank payments from Google Sheets against open invoices, matching by invoice reference first and using GPT-4o-mini for the remaining transactions. It updates invoice and bank statuses, logs each decision, and sends exceptions to Telegram plus a weekly aging report via Gmail.

## How it works
1. Runs every day at 7:00 and reads bank transactions and invoices from separate tabs in a Google Sheets spreadsheet.
2. Filters to new incoming payments, normalizes fields, and extracts an invoice reference from the payment description.
3. Matches payments to open invoices by invoice number and immediately classifies them as paid, partial, or overpaid based on the amount difference.
4. For payments without a reference match, sends the transaction details and the list of open invoices to OpenAI (GPT-4o-mini) and only accepts matches that meet the confidence threshold.
5. Updates the matching invoice and bank rows in Google Sheets, appends the reconciliation result (including reasoning and confidence) to a Log tab, and sends Telegram alerts for partial/overpaid matches.
6. Marks low-confidence or failed AI matches as “Review” in the Bank tab, logs them, and notifies Telegram for manual follow-up without updating invoices.
7. Runs every Monday at 8:00 to generate an overdue invoice aging report from Google Sheets and emails it as an HTML table via Gmail.

## Setup
1. Create a Google Sheet with tabs named Bank, Invoices, and Log (including a Status column on Bank and Status/PaidAmount/PaidDate/MatchNote on Invoices) and replace YOUR_SPREADSHEET_ID in all Google Sheets nodes.
2. Add credentials for Google Sheets, OpenAI (for GPT-4o-mini), Telegram, and Gmail.
3. Set your Telegram chat ID in the Telegram nodes and the recipient address in the Gmail node.
4. Adjust the invoice-number extraction regex in the payment parsing step if your invoice IDs do not resemble the default INV-#### pattern.
5. Review and tune the AI confidence cutoff (80) and the paid tolerance (±0.01) to match your bookkeeping rules.

## Requirements
- OpenAI API key (GPT-4o-mini is only called for payments without an invoice number in the bank description: fractions of a cent per payment)
- Google credentials with Google Sheets and Gmail scopes
- One Google Sheet with three tabs. Invoices header row: InvoiceNumber | ClientName | ClientEmail | Amount | Currency | DueDate | Status | PaidAmount | PaidDate | MatchNote. Bank header row: Date | Description | Counterparty | Amount | Currency | Status | MatchedInvoice | MatchNote. Log header row: RunAt | BankRow | Date | Counterparty | Description | Amount | Currency | InvoiceNumber | ClientName | OutstandingBefore | Difference | Result | Method | Confidence | Reasoning
- Telegram bot token and your chat ID (free, via @BotFather)
- A way to get bank transactions into the Bank tab: paste the CSV export from your bank (only Date, Description and Amount are required; leave Status empty for new rows)

## Customization
- Confidence threshold: the IF node "If AI Confident in Match" (80 by default); Paid tolerance: the Switch "Route Payment Status" (0.01 by default, widen it to absorb bank fees)
- Column names: the Set nodes "Set Payment Fields" and "Set Invoice Fields" accept several common header names (Amount/Credit, Description/Reference/Memo, Counterparty/Payer/Name); add your own there, and change the invoice-number regex in "Set Payment Fields" if your numbers do not look like INV-1042
- Replace the Telegram nodes with Slack or email, change the run times in the two Schedule Triggers, switch the model to GPT-4o for messy bank references, or add a Google Drive trigger that ingests bank CSV files automatically

## Additional info
The workflow never guesses with your books: exact invoice numbers are matched without AI, the model only chooses among the open invoices it was given and the Code node rejects anything else, matches below 80% confidence and failed API calls go to a review queue in the Bank tab and on Telegram, and every decision is written to the Log tab with the method, confidence and reasoning.

Works together with my other templates: "Extract PDF invoice data from Gmail into Google Sheets" fills the Invoices tab, and "Send tiered overdue invoice reminders with Google Sheets and Gmail" stops chasing an invoice as soon as this workflow marks it Paid.

I build extended versions for real businesses (QuickBooks, Xero or Stripe instead of a spreadsheet, live bank feeds via GoCardless or Plaid, one payment covering several invoices, customer statements and dunning), async and without calls: https://www.fiverr.com/shopdevlab/set-up-fix-or-build-your-n8n-workflow-on-your-server-async-no-calls
Stuck on an error in any n8n workflow? I fix one error within 24 hours: https://www.fiverr.com/shopdevlab/fix-one-error-in-your-n8n-workflow-within-24-hours

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
