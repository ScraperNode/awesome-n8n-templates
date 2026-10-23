# 🔬 Track employee expense receipts from Telegram with GPT-4o-mini and Google Sheets

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects receipt photos via Telegram, uses OpenAI GPT-4o-mini Vision to extract expense details, checks them against a Google Sheets policy and existing claims, routes items for auto-approval or manager approval in Telegram, records outcomes in Google Sheets, and emails a monthly report via Gmail.

## How it works
1. Triggers when a message is sent to your Telegram bot and downloads the largest attached photo.
2. If no photo is included, sends the employee a Telegram reply asking them to submit the receipt as a photo.
3. Sends the receipt image to OpenAI GPT-4o-mini Vision to extract structured fields (merchant, date, total, currency, tax, category, and confidence) and normalizes the values for consistent processing.
4. Loads expense rules from the Google Sheets Policy tab and checks the Google Sheets Expenses tab for a matching duplicate receipt key.
5. Applies policy logic to auto-approve within limits, flag duplicates or unreadable/missing fields, reject non-allowed or over-limit categories, or request manager approval for out-of-policy/low-confidence/old receipts.
6. For claims needing a decision, sends an approval request to the manager in Telegram and waits up to 3 days for an approve/reject response.
7. Appends the final outcome to the Google Sheets Expenses tab, replies to the employee in Telegram with the decision, and forwards approved receipt photos to a finance Telegram chat.
8. On the first day of each month, reads approved expenses from Google Sheets, builds an HTML summary by employee and category, and emails the monthly report via Gmail.

## Setup
1. Create a Telegram bot with @BotFather, add the Telegram credentials in n8n, and set the manager and finance chat IDs in the Telegram steps.
2. Add an OpenAI API credential with access to the gpt-4o-mini model.
3. Create a Google Sheet with Policy and Expenses tabs, paste the spreadsheet ID into all Google Sheets steps, and ensure the columns match the fields being written (for example SubmittedAt, Employee, Merchant, Date, Amount, Currency, Category, Status, Decision, DecisionNote, and ReceiptFileId).
4. Populate the Policy tab with your categories, per-receipt limits, approval thresholds, and allowed/reimbursable flags.
5. Add a Gmail connection and set the destination finance email address used for the monthly report.

## Requirements
- Telegram bot token (free, via @BotFather): employees send receipt photos to the bot; the manager's chat ID for approvals and a finance chat ID for approved receipts (can be the same)
- OpenAI API key (GPT-4o-mini reads one image per receipt: about a cent each)
- Google credentials with Google Sheets scopes and one spreadsheet with two tabs. "Policy" header row: Category | LimitPerReceipt | ApprovalAbove | Allowed | Notes. "Expenses" header row: SubmittedAt | Employee | TelegramUserId | ChatId | Merchant | Date | Amount | Currency | Tax | Category | Description | Status | Decision | DecisionNote | ReceiptFileId | Month
- Gmail for the monthly report and a finance email address
- A public URL for your n8n instance (the Approve / Reject buttons in Telegram resume the workflow through its webhook)

## Customization
- Categories: edit the list in the prompt of "AI Analyze Receipt Photo" and in the Code node "Extract Expense Details"; the 60-day age limit and the 70% confidence floor live in "Prepare Policy Flags"
- Approval: change the button labels or the 3-day wait limit in "Request Manager Approval", or swap it for the Slack or Gmail "Send and Wait" operation to approve by email or Slack
- Report: the Code node "Create Monthly Expense Report" has a MONTH constant to rebuild an older month; change the schedule in "Monthly Trigger at 8AM" or replace Gmail with Google Drive or Slack

## Additional info
The model only reads the picture; every decision comes from your own rules in the sheet (limits, thresholds, allowed categories) and from what is already recorded (duplicates). Unreadable photos are bounced back to the employee, anything above the threshold waits for the manager's click, and every claim is written to the sheet with the reason, so the bookkeeper never has to guess.

Works together with my other finance templates: "Reconcile bank payments with open invoices", "Extract PDF invoice data from Gmail into Google Sheets" and "Approve supplier invoices from Gmail".

I build extended versions for real businesses (mileage and per-diem rules, multi-currency conversion, Google Drive archive of every receipt, reimbursement batches with bank payment files, QuickBooks or Xero export, Slack or WhatsApp instead of Telegram), async and without calls: https://www.fiverr.com/shopdevlab/set-up-fix-or-build-your-n8n-workflow-on-your-server-async-no-calls
Stuck on an error in any n8n workflow? I fix one error within 24 hours: https://www.fiverr.com/shopdevlab/fix-one-error-in-your-n8n-workflow-within-24-hours

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
