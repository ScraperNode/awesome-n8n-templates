# 📱 Run real estate SMS campaigns with GPT-4.1, Apify, Twilio, and Google Sheets

> ⚡ **13 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs a chat-based assistant that drafts and approves an SMS campaign, finds real estate agents by postcode via Apify, sends personalized texts with Twilio, and logs delivery results to Google Sheets.

## How it works
1. Receives chat messages via a webhook and maintains session-based conversation memory.
2. Uses an OpenAI chat model agent to collect budget, requirements, and target postcodes, then drafts an SMS and waits for explicit approval.
3. After approval, triggers a send workflow branch with the finalized message and comma-separated postcode list.
4. Splits the postcode list into individual items and, for each postcode, calls an Apify actor to retrieve matching local agents with contact details.
5. Sends each agent a personalized SMS through Twilio (including their name and a normalized AU phone number format) and captures Twilio’s delivery response.
6. Appends the message content, recipient details, postcode, and delivery status/error fields to a Google Sheets tab, pausing briefly between sends.

## Setup
1. Add credentials for OpenAI, Twilio, and Google Sheets.
2. Set the webhook URL (POST `/sms-campaign-assistant`) in your chat client or frontend that sends messages to the workflow.
3. Replace `YOUR_TWILIO_PHONE_NUMBER`, `YOUR_APIFY_API_TOKEN`, and `YOUR_GOOGLE_SHEET_ID`, and ensure the Google Sheet has a tab named “Send SMS List” with matching columns.
4. Update the tool workflow reference (`YOUR_WORKFLOW_ID`) so the assistant can trigger the send branch of this workflow.
5. Customize the agent prompt placeholders (name, title/experience, and phone number) to match your signature and contact details.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Webhook, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
