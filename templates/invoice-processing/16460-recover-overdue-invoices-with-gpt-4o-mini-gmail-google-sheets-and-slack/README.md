# 🧾 Recover overdue invoices with GPT-4o-mini, Gmail, Google Sheets, and Slack

> ⚡ **59 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily to read overdue invoices from Google Sheets, uses OpenAI (GPT-4o-mini) to draft personalized reminder emails and determine escalation level, sends emails via Gmail, posts Slack alerts for no-invoice runs or AI errors, and logs results back to Google Sheets.

## How it works
1. Runs every 24 hours on a schedule.
2. Reads rows from the “invoices” tab in Google Sheets and, if no invoice value is found, posts a “no overdue invoices” message to Slack.
3. For each invoice, sends the invoice details to OpenAI (GPT-4o-mini) to determine an escalation level, draft an HTML email, and recommend whether to escalate.
4. Parses the AI’s JSON response (falling back to a default reminder if parsing fails) and sends the recovery email to the client via Gmail.
5. If the AI recommends escalation, sends an internal escalation email via Gmail to the legal/AR team with invoice details and the AI summary.
6. Updates the original invoice row in Google Sheets with the escalation level and summary, then appends an audit row to the “Recovery sheet” tab including the email subject, summary, and sent message label ID.
7. If the AI step errors, posts an error alert to Slack and continues processing.

## Setup
1. Add Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID, ensuring the “invoices” and “Recovery sheet” tabs and columns (Invoice, Client, Email, Amount, Due Date, Days Overdue, Reminders Sent, plus row_number) match the workflow.
2. Add an OpenAI credential for the GPT-4o-mini model.
3. Add Gmail OAuth2 credentials and set the reply-to address (ar@example.com) and escalation recipient (legal@example.com) to your real emails.
4. Add Slack OAuth2 credentials, replace YOUR_SLACK_CHANNEL_ID, and choose the channel that should receive status and error alerts.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
