# 🧾 Send tiered overdue invoice reminders with Google Sheets and Gmail

> ⚡ **9 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every morning, reads an invoice tracker from Google Sheets, and uses Gmail to send escalating reminder emails for unpaid invoices based on how many days they are overdue, then logs reminder activity back to the spreadsheet and alerts you when a final notice is sent.

## How it works
1. Runs every day at 9:00.
2. Reads all rows from the `Invoices` tab in Google Sheets.
3. Filters to unpaid invoices that are at least 3 days overdue and have not been emailed in the last 7 days, then assigns an escalation tier (1, 2, or 3) and drafts an email subject and body.
4. Sends the reminder email to the client via Gmail.
5. Updates the same Google Sheets row with the new `RemindersSent` count and `LastReminderDate`.
6. When the reminder is a tier-3 final notice, sends an additional escalation alert to your email address via Gmail.

## Setup
1. Create or adapt a Google Sheet with an `Invoices` tab and the required columns (including `Status`, `DueDate`, `ClientEmail`, `LastReminderDate`, and `RemindersSent`).
2. Add Google Sheets credentials in n8n and replace `YOUR_GOOGLE_SHEET_ID` in both Google Sheets nodes with your document ID.
3. Add Gmail credentials in n8n for sending client reminders and internal alerts.
4. Customize the tier 1/2/3 email templates in the code step to match your wording and payment terms.
5. Replace `you@yourcompany.com` in the escalation alert email step with your own address.

## Requirements
- Google account with Google Sheets and Gmail access (credentials connected in n8n)

## Customization
- Change the escalation tier thresholds (3/14/30 days) and the 7-day throttle — they are single constants in the code step
- Swap Gmail for SMTP or Outlook by replacing the two email steps
- Add a Slack or Telegram alert step next to the escalation email for instant notifications

## Additional info
The email templates are deliberately plain text strings in one code step, so you can rewrite them in your own voice without touching the logic. Need this wired into QuickBooks, Xero or Stripe, SMS/WhatsApp escalation, or a multi-client version? I build custom versions with async delivery — contact links in my creator profile.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
