# 🧾 Summarize unpaid freee invoices with Gemini, Slack, Google Sheets, and Gmail

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every morning to fetch unsettled invoices from the freee Invoices API, calculate and rank how overdue they are, generate a short prioritized summary with Google Gemini, and then log the summary to Google Sheets, post it to Slack, and email it via Gmail.

## How it works
1. Runs daily at 9:00 AM on a schedule.
2. Requests all unsettled invoices from the freee Invoices API for the configured company.
3. Calculates days overdue for each invoice, sorts invoices by urgency, and prepares a prompt including totals and counts.
4. Uses Google Gemini to generate a concise plain-text summary and recommended next action based on the ranked invoice list.
5. Appends the generated summary to a specified Google Sheets tab as a historical log.
6. Posts the same summary to Slack via an incoming webhook and emails it to the configured accounting contact using Gmail.

## Setup
1. Create and connect freee OAuth2 credentials with access to the Invoices API, and set your freee company_id in the Config values.
2. Add a Google Gemini (PaLM) API key/credential and keep or change the selected model as needed.
3. Add Google Sheets OAuth2 credentials and set the target spreadsheet ID and tab name in the Config values.
4. Create a Slack incoming webhook for your target channel and paste the webhook URL into the Config values.
5. Add Gmail OAuth2 credentials and set the escalation email address in the Config values.

## Requirements
- A freee account with API access (some invoice-related features may require a paid freee plan — check freee's official plan details). A freee OAuth2 app (Client ID & Secret). A Google account with access to Sheets and Gmail. A Slack workspace with an Incoming Webhook configured. A Gemini API key (via Google AI Studio or Google Cloud).

## Customization
- Adjust `overdue_threshold_days` in the Config node to change what counts as severely overdue. Edit the Gemini prompt to change the summary's tone or length. Remove any of the Sheets, Slack, or Gmail nodes and reconnect the rest if you don't need every channel. Change the Schedule Trigger's cron expression to run at a different time.

## Additional info
freee's OAuth access token expires periodically. If the freee node returns a 401 error, refresh the connection in your freee OAuth2 credential settings.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
