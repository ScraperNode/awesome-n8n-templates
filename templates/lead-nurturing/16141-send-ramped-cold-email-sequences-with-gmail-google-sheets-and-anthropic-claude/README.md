# 💬 Send ramped cold email sequences with Gmail, Google Sheets, and Anthropic Claude

> ⚡ **334 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow automates a 3-step cold email sequence from Gmail using leads in Google Sheets, generates personalized copy with Anthropic Claude, enforces a gradual daily sending cap, schedules follow-ups in the same thread, and marks leads as replied when inbox responses are detected.

## How it works
1. Runs on weekday schedules to process new outreach, follow-ups, and reply checks during business hours.
2. Reads lead rows from Google Sheets and enforces a shared daily sending cap that ramps up over time to limit total emails sent per day.
3. For the next eligible new lead, sends lead details to Anthropic Claude to generate a short personalized subject and email body.
4. Sends the initial cold email via Gmail and updates the Google Sheets row with status, stage, timestamps, and Gmail thread/message IDs.
5. For active leads due for follow-up, asks Anthropic Claude to write a short follow-up and sends it as a Gmail reply in the existing thread before updating the lead stage and status in Google Sheets.
6. On reply-check runs, scans recent Gmail inbox messages, matches sender addresses against active leads in Google Sheets, and marks matching leads as replied to stop further follow-ups.

## Setup
1. Connect Gmail OAuth2 credentials for sending emails and reading inbox messages.
2. Connect Google Sheets OAuth2 credentials and replace PASTE_YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
3. Add an Anthropic API key using HTTP Header Auth (x-api-key) for the Anthropic Claude HTTP requests.
4. Ensure your Google Sheet has a Leads tab with columns used by the workflow (at least row_number, email, first_name, company, company_description, status, stage, last_sent_at, thread_id, and message_id).
5. Update the sender name and offer/proof/guarantee text in the email-building code so Claude writes in your voice and with accurate claims.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
