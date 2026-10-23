# 🤝 Onboard new consulting clients with Gmail, Google Calendar, Sheets and Slack

> ⚡ **23 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives new client onboarding form submissions via a webhook, then uses Gmail, Google Calendar, Google Sheets, and Slack to welcome the client, schedule a kickoff call, notify the team, log the intake, and send a 30‑day satisfaction survey with follow-up tracking.

## How it works
1. Receives a POST request via a webhook when a new client submits the onboarding form and immediately returns a 200 OK JSON response.
2. Normalizes the submission data (name, contact info, requested services, and description) and calculates onboarding, welcome-call, and 30-day survey dates.
3. Sends a branded welcome email to the client using Gmail.
4. Creates a Google Calendar event for the welcome call, invites the client, and sends calendar updates.
5. Posts a new-client notification to a Slack channel for internal visibility.
6. Appends the client record to a Google Sheets tracker and then waits 30 days.
7. After 30 days, emails a satisfaction survey via Gmail, updates the client’s row in Google Sheets to mark the survey as sent, and posts a Slack alert.
8. If sending the welcome email, creating the calendar event, or posting the Slack onboarding message fails, sends an error alert to a dedicated Slack channel.

## Setup
1. Connect credentials for Gmail, Google Calendar, Google Sheets, and Slack.
2. Copy the production webhook URL and configure your intake form to POST a JSON body containing firstName, lastName, email, company, phone, services (array), bizSize, description, referral, and submittedAt.
3. Select your target Google Sheets spreadsheet and worksheet and ensure it includes columns matching the logged fields plus a SurveySent column.
4. Choose the Slack channels to use for new-client notifications, survey-sent alerts, and error alerts.
5. Update the 30-day survey email template to replace YOUR_SURVEY_LINK_HERE with your survey URL (optionally including email/company query parameters).

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
