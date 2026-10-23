# 💬 Send Calendly sales prep briefs with HubSpot, Clearbit, OpenAI, Slack and Gmail

> ⚡ **11 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow receives new Calendly meeting bookings, checks Google Sheets to prevent duplicate briefings, pulls contact and deal context from HubSpot, enriches company data with Clearbit, generates three talking points with OpenAI, then sends a prep pack to the sales rep via Slack and Gmail and logs the send in Google Sheets.

## How it works
1. Receives a POST webhook from Calendly when a meeting is booked.
2. Validates the Calendly webhook signature and extracts key meeting details like invitee email, meeting time, and assigned rep.
3. Looks up the meeting UUID in Google Sheets and stops if a prep pack was already sent.
4. Retrieves the prospect’s contact record and recent open deals from HubSpot, then enriches the person and company profile via the Clearbit enrichment API.
5. Builds either a full or basic context payload (depending on whether the contact exists in HubSpot) and sends it to OpenAI Chat Completions to generate exactly three personalized talking points.
6. Formats a final prep pack and sends it to the sales rep in Slack and by Gmail.
7. Appends a “Sent” log entry with meeting and prospect details to Google Sheets.

## Setup
1. Create and connect a Calendly webhook, then add your Calendly signing key in the webhook signature validation code.
2. Connect your Google Sheets credentials and set the duplicate-check Sheet ID and logging Sheet ID, ensuring the target spreadsheet has a “SentLog” sheet with a MeetingUUID column.
3. Connect your HubSpot credentials and confirm the workflow can fetch contacts by email and list deals in your portal.
4. Add Clearbit API credentials for the HTTP Request node (header-based auth) and ensure the enrichment endpoint is accessible.
5. Add an OpenAI API key for the Chat Completions request and adjust the model or token limits if needed.
6. Connect Slack and Gmail credentials, then set the Slack channel ID and ensure the assigned rep email from Calendly can receive messages.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
