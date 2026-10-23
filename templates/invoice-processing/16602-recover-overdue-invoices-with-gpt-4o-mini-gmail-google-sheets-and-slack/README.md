# 🧾 Recover overdue invoices with GPT-4o-mini, Gmail, Google Sheets and Slack

> ⚡ **258 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every 24 hours to read overdue invoices from Google Sheets, uses OpenAI (GPT-4o-mini) to draft personalized recovery emails and determine escalation, sends emails via Gmail, logs outcomes back to Google Sheets, and posts status and error alerts to Slack.

## How it works
1. Runs every 24 hours on a schedule trigger.
2. Reads invoice rows from a Google Sheets “invoices” tab and checks whether there are any valid invoice entries to process.
3. If no invoices are found, posts a “no overdue invoices” message to a Slack channel.
4. For each invoice found, uses OpenAI (GPT-4o-mini) to assign an escalation level, draft a personalized HTML email (including payment plans when applicable), and recommend an escalation action.
5. Parses the AI output into structured fields and sends the recovery email to the client via Gmail.
6. If the AI recommends escalation, sends an internal escalation alert email to the legal team via Gmail.
7. Updates the invoice row in Google Sheets with the new escalation level and AI summary, then appends a full audit log row to a “Recovery sheet” tab.
8. If AI processing fails, posts an error alert to Slack and continues with the next invoice.

## Setup
1. Add Google Sheets OAuth2 credentials and set the Spreadsheet ID plus the sheet names (“invoices” and “Recovery sheet”).
2. Add an OpenAI API credential and ensure the GPT-4o-mini model is available for the AI agent.
3. Add Gmail OAuth2 credentials and set the reply-to address and recipients (client email field and the internal legal email address).
4. Add Slack OAuth2 credentials and set the target channel ID for both the “no invoices” and error alerts.
5. Ensure your invoices sheet includes columns used by the workflow (Invoice, Client, Email, Amount, Due Date, Days Overdue, Reminders Sent, and row_number for updates).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
