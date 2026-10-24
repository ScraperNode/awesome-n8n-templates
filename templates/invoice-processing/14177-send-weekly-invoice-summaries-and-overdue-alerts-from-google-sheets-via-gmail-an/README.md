# 🧾 Send weekly invoice summaries and overdue alerts from Google Sheets via Gmail and Slack

> ⚡ **23 views** · 🧾 [Invoice Processing](../)

## Description

Most small businesses track invoices in Google Sheets, but nobody actually looks at the spreadsheet until cash flow gets tight. By then, invoices that should have been chased weeks ago are sitting there unpaid. This workflow gives you an automatic weekly report and alerts you when anything is overdue.

## Who is this for

Freelancers, agencies, and small businesses that track invoices in Google Sheets and want a hands-off way to stay on top of what's been paid, what hasn't, and what's late.

## How it works

Every Monday at 9 AM, the workflow pulls all rows from your invoice tracker in Google Sheets. A code node crunches the numbers: total paid, total unpaid, and total overdue. It builds an HTML email with a clean summary table that shows the overall picture plus a detailed breakdown of any overdue invoices, including how many days late each one is.

That summary gets emailed to whatever address you configure. If there are any overdue invoices, a separate Slack alert goes out with the specifics so your team knows exactly what needs chasing.

## How to set it up

1. Create a Google Sheet with an "Invoices" tab containing these columns: Invoice ID, Client Name, Amount, Due Date, Status (paid/unpaid/overdue)
2. Open the "Configure Settings" node and fill in your Sheet ID, the email address you want the report sent to, your Slack channel ID, and your business name
3. Connect your Google Sheets, Gmail, and Slack credentials in n8n
4. Activate the workflow and wait for Monday, or trigger it manually to test

## Requirements

- Google Sheets (free)
- Gmail account with OAuth connected in n8n
- Slack workspace with OAuth connected in n8n

## Customizing the workflow

You can change the schedule to daily or biweekly by editing the trigger node. The overdue threshold is based on the Due Date column, so if you want to flag invoices that are approaching their due date (not just past it), you can tweak the comparison in the code node.

If you want to add more notification channels (email to the client directly, SMS alerts, etc.), just wire new nodes after the overdue check.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
