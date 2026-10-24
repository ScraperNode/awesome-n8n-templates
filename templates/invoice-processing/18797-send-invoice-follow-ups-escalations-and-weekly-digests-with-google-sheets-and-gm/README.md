# 🧾 Send invoice follow-ups, escalations, and weekly digests with Google Sheets and Gmail

> ⚡ **21 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Automate invoice follow-ups for freelancers, agencies, and small finance teams. This workflow scans unpaid invoices, sends due-soon and overdue reminders, logs every follow-up in Google Sheets, escalates high-risk overdue invoices, and emails a weekly payment digest to keep receivables under control.

## How it works
1. Runs every day at 9am to read all invoices marked as Unpaid from a Google Sheets document.
2. Calculates days until due/overdue, determines the correct reminder stage and whether escalation is needed, and prepares the email subject and body for each actionable invoice.
3. Sends the reminder email to the client using Gmail for invoices that need follow-up.
4. Appends each sent reminder to the Google Sheets “Reminder Log” tab with overdue days, stage, subject, and recommended action.
5. For invoices flagged for escalation (for example, final notice or high-value overdue), appends an entry to the Google Sheets “Escalation Log” tab and emails the finance owner via Gmail with the invoice details and reason.
6. Runs every Monday at 9am to read unpaid invoices from Google Sheets, generate a receivables summary (due soon, overdue, and high-risk), and email the digest to the finance owner via Gmail.

## Setup
1. Create a Google Sheets document with tabs named “Invoices”, “Reminder Log”, and “Escalation Log”, and ensure the “Invoices” tab includes the expected columns (Invoice ID, Client Email, Amount, Currency, Due Date, Status, Last Reminder Date, Reminder Count, Owner).
2. Add Google Sheets OAuth2 credentials in n8n and replace the placeholder Google Sheet ID (REPLACE_WITH_GOOGLE_SHEET_ID) in all Google Sheets steps.
3. Add Gmail OAuth2 credentials in n8n and update the recipient address finance-owner@example.com to your real finance owner email for escalation and weekly digest messages.
4. Review and adjust the reminder timing/escalation rules in the follow-up logic (for example, due-soon at 3 days, final notice at 15+ days overdue, and high-value threshold at 2000) to match your policy.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
