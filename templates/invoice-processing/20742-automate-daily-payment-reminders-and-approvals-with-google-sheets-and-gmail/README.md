# 🧾 Automate daily payment reminders and approvals with Google Sheets and Gmail

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow checks a Google Sheets invoice register every weekday at 9:00 AM, emails Gmail payment reminders for overdue unpaid invoices, and appends each reminder to a Google Sheets log for auditing.

## How it works
1. Runs every weekday at 9:00 AM based on the configured cron schedule.
2. Reads all invoice rows from the `Invoices` sheet in Google Sheets.
3. Filters for invoices that are past due, have a status of Unpaid/Pending/Overdue, include required fields, and have not already been marked as reminded.
4. Sends a plain-text payment reminder email through Gmail to the customer email address for each eligible invoice.
5. Appends the reminder details (including days overdue and reminder date) to the `Reminder Log` sheet in Google Sheets.

## Setup
1. Add Google Sheets OAuth credentials and replace `YOUR_INVOICE_SPREADSHEET_ID` with your spreadsheet ID in both Google Sheets steps.
2. Add Gmail OAuth credentials for the mailbox you want to send reminders from.
3. Create and populate the `Invoices` and `Reminder Log` sheets with matching headers (for example: InvoiceID, CustomerName, CustomerEmail, AmountDue, Currency, DueDate, Status, and ReminderSent).
4. Confirm your n8n timezone and adjust the cron expression if needed to ensure the check runs at 9:00 AM local time.
5. Decide how you will prevent repeat reminders (for example, updating `ReminderSent` to Yes/Sent after review, since the workflow does not update the original invoice row).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
