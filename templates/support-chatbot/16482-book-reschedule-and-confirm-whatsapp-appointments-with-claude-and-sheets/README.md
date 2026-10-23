# 💬 Book, reschedule and confirm WhatsApp appointments with Claude and Sheets

> ⚡ **197 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives WhatsApp messages via a Meta webhook, uses Anthropic Claude to detect booking intents and extract appointment details, writes updates to Google Sheets, and sends a confirmation or error reply back to the customer on WhatsApp.

## How it works
1. Receives incoming WhatsApp messages through a Meta webhook endpoint and normalizes key fields like sender phone number, display name, message text, and timestamps.
2. Filters out empty messages and sends the text to Anthropic Claude to classify the intent (book, reschedule, confirm, or unknown) and extract structured appointment details.
3. Validates the request based on intent, including required fields and simple rules like weekday-only appointments and business hours.
4. Appends a new row to the Google Sheets Appointments tab for valid bookings, or updates the appointment status/date/time in Google Sheets for reschedules and confirmations.
5. Builds a personalized WhatsApp reply message describing the result (success, required missing details, or supported actions).
6. Sends the reply back to the customer via the WhatsApp Cloud API and appends the interaction details to the Google Sheets ActivityLog tab.

## Setup
1. Create a Meta WhatsApp Business (Cloud API) app, register the workflow webhook URL as the WhatsApp callback URL, and complete webhook verification.
2. Add an Anthropic API credential in n8n and ensure the Anthropic Claude model node is connected to your account.
3. Add a Google Sheets OAuth2 credential in n8n and create a spreadsheet with Appointments and ActivityLog tabs and the expected header columns.
4. Replace YOUR_SHEET_ID in all Google Sheets HTTP request URLs with your spreadsheet ID.
5. Replace YOUR_PHONE_NUMBER_ID in the WhatsApp API URL and set the WhatsApp Authorization bearer token (preferably via an n8n credential) in the request headers.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
