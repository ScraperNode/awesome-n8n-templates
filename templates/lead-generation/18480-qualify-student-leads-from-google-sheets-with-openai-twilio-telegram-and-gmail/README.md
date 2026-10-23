# 🎣 Qualify student leads from Google Sheets with OpenAI, Twilio, Telegram and Gmail

> ⚡ **35 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow polls a Google Sheets lead intake every 15 minutes, uses OpenAI (GPT-4o-mini) to score and classify each student enquiry, logs it to a CRM sheet, then sends a Twilio WhatsApp welcome message plus Telegram and Gmail notifications to the assigned counsellor, with  alerts on workflow error.

## How it works
1. Runs every 15 minutes on a schedule trigger.
2. Reads rows from the Google Sheets “New Leads Input” tab and skips entries where “Full Name” is empty.
3. Normalizes the lead fields (name, phone, email, course, city, source), generates a timestamp-based Lead ID, and captures the source row number.
4. Sends the normalized lead details to OpenAI (GPT-4o-mini) to return a JSON intent score, lead category, course category, and a counsellor note.
5. Parses the AI response, assigns a counsellor at random from a predefined roster, and combines the assignment with the AI scoring details.
6. Appends or updates the enriched lead record in the Google Sheets “Leads CRM” tab and updates the original intake row as Processed.
7. Sends the student a WhatsApp message via Twilio, and notifies the assigned counsellor via Telegram and Gmail with the lead details and AI talking points.
8. If the workflow errors, posts an alert to a Slack channel.

## Setup
1. Connect Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID, ensuring the spreadsheet contains “New Leads Input” (with a Processed column) and “Leads CRM” tabs.
2. Add an OpenAI credential and confirm the model ID (gpt-4o-mini) is available in your OpenAI account.
3. Configure Twilio credentials (HTTP Basic Auth with Account SID/Auth Token), set your WhatsApp-enabled From number, and update the Twilio Account SID in the request URL.
4. Add a Telegram bot credential and replace the sample counsellor Telegram chat IDs in the counsellor roster.
5. Connect Gmail OAuth2 credentials and replace the sample counsellor email addresses used for routing.
6. Connect Slack OAuth2 credentials and select the target channel for error alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
