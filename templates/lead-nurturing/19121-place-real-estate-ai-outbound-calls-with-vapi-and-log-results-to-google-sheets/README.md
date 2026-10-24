# 💬 Place real estate AI outbound calls with Vapi and log results to Google Sheets

> ⚡ **59 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow triggers an outbound AI voice call via Vapi and then logs the completed call’s status and key details to Google Sheets when Vapi posts the call result back to an n8n webhook.

## How it works
1. Starts manually to initiate a call run and provide input data.
2. Sets the customer phone number from the incoming data or a fallback test value.
3. Sends a POST request to the Vapi API to place an outbound call using your Vapi assistant ID and Vapi phone number ID.
4. Receives the finished call result from Vapi via a webhook callback.
5. Appends the call metadata (timestamp, customer number, assistant name, industry, status, end reason, cost, last message, and Vapi call ID) to a Google Sheets “Call Log” sheet.

## Setup
1. Create a Vapi account, then copy your Vapi API key, assistant ID, and phone number ID into the HTTP request node (Authorization header and JSON body).
2. Configure the Vapi assistant/server webhook to send call results to this workflow’s production webhook URL.
3. Connect Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID, the target spreadsheet, and the “Call Log” sheet/tab as needed.
4. Provide the customer phone number input (or replace the fallback YOUR_TEST_PHONE_NUMBER) and adjust the country code formatting in the Vapi call request if required.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
