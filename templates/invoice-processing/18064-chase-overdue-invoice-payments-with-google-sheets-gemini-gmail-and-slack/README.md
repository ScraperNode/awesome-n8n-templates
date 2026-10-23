# 🧾 Chase overdue invoice payments with Google Sheets, Gemini, Gmail and Slack

> ⚡ **5 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs daily, reads unpaid invoices from Google Sheets, uses Google Gemini to draft stage-appropriate reminder emails, sends them via Gmail, optionally alerts a Slack finance channel for long-overdue invoices, and updates the invoice row with the latest reminder date.

## How it works
1. Runs every day at 09:00 on a schedule.
2. Reads invoice rows from a Google Sheets “Invoices” sheet.
3. Calculates how many days each invoice is overdue, how long since the last reminder, and assigns a reminder stage (gentle, firm, escalate) or skips if not due/too recent.
4. Uses Google Gemini to generate a short reminder email body whose tone matches the assigned stage.
5. Sends the reminder through Gmail with a subject line tailored to the stage.
6. For “escalate” invoices, posts an alert to a Slack #finance channel after sending the final notice.
7. Updates the invoice record in Google Sheets to stamp the latest reminder details so the sequence can continue on the next run.

## Setup
1. Connect credentials for Google Sheets, Google Gemini (PaLM) API, Gmail, and Slack.
2. Select your Google Sheets spreadsheet and the “Invoices” sheet in both the read and update steps.
3. Ensure your sheet contains the columns used by the workflow (Invoice No, Client, Contact Email, Amount, Due Date, and Last Reminder) and that dates are stored in a consistent, parseable format.
4. Choose the Slack channel (for example, #finance) where escalation alerts should be posted.
5. Adjust the overdue thresholds and the minimum days-between-reminders logic in the overdue calculation step if your collection policy differs.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
