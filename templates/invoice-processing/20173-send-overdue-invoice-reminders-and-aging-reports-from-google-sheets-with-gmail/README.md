# 🧾 Send overdue invoice reminders and aging reports from Google Sheets with Gmail

> ⚡ **29 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs every weekday, reads open invoices from Google Sheets, and uses Gmail to send staged overdue payment reminders or escalation emails. It also sends a weekly receivables aging report to a finance inbox and logs each sent reminder stage back to the sheet.

## How it works
1. Runs every weekday at 9:00 on a schedule.
2. Reads all rows from the Invoices tab in Google Sheets using unformatted values for consistent date handling.
3. For each invoice that is not marked Paid or Cancelled, calculates days overdue and selects the next unsent reminder stage (for example day 0, 7, and 14) or triggers escalation once the escalation day is reached.
4. Sends the selected email via Gmail either to the customer (or to the finance inbox when test mode is enabled) or to the escalation contact for manual follow-up.
5. Updates the corresponding Google Sheets row with last_stage_sent and last_sent_at so the same stage is not sent twice.
6. On the configured weekday, builds a receivables aging summary (Not yet due, 0–30, 31–60, 61–90, 90+) from the same invoice data and emails it to the finance inbox via Gmail.

## Setup
1. Create a Google Sheets spreadsheet with an Invoices tab containing the required columns (including invoice_id, due_date, status, last_stage_sent, and last_sent_at).
2. Add Google Sheets credentials in n8n and select the target spreadsheet in both Google Sheets nodes.
3. Add Gmail credentials in n8n for sending customer reminders, escalation emails, and the aging report.
4. Update the reminder settings (finance_email, escalation_email, reminder_days, escalation_day, closed_statuses, and aging_report_weekday) and keep test_mode enabled for initial testing.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
