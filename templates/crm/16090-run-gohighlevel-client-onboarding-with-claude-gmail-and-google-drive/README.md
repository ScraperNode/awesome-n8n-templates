# 🤝 Run GoHighLevel client onboarding with Claude, Gmail and Google Drive

> ⚡ **68 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow starts when a GoHighLevel opportunity is marked Won, uses Anthropic Claude to generate a tailored welcome email and 6-task onboarding plan,creates tasks in GoHighLevel,then creates a Google Drive folder,sends the email via Gmail,schedules a kickoff in Google Calendar,posts a Slack alert, and logs details to Google Sheets.

## How it works
1. Receives a webhook from GoHighLevel when an opportunity stage changes to Won.
2. Extracts contact and deal details from the webhook payload, loads your onboarding configuration, and calculates a kickoff time two business days out.
3. Sends the client context to Anthropic Claude to generate a JSON response containing a welcome email, an internal client summary, and six onboarding tasks with due-day offsets.
4. Parses Claude’s JSON and creates the six tasks in GoHighLevel via the LeadConnector API for the associated contact, then compiles a brief task summary.
5. Creates a client folder in Google Drive, emails the client the Claude-written welcome message via Gmail including the Drive folder link, and schedules a kickoff event in Google Calendar.
6. Posts an onboarding notification to a Slack channel, tags the GoHighLevel contact via the LeadConnector API, and appends the onboarding record (including drive link, kickoff date, and task count) to Google Sheets.

## Setup
1. Create a GoHighLevel webhook for “Opportunity Stage Changed,” activate this workflow, and paste the n8n webhook URL into GoHighLevel.
2. Add an Anthropic credential for the Claude Sonnet model and adjust the prompt to match your service offerings and task expectations.
3. Connect Google credentials for Google Drive, Gmail, Google Calendar (and select your calendar ID), and Google Sheets (and set the document ID and sheet name for logging).
4. Add a Slack credential and set the target channel ID, or disable the Slack step if you don’t want notifications.
5. In the configuration code step, fill in your GoHighLevel (LeadConnector) API key, location ID, account manager details, Drive parent folder ID, booking link, and logging sheet identifiers.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
