# 🤝 Sync WhatsApp contacts and messages from Wati to GoHighLevel and Google Sheets

> ⚡ **25 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives WhatsApp message webhooks from Wati, fetches the sender’s contact details and recent messages, creates or updates a matching contact in GoHighLevel, adds the latest message as a contact note, and logs the Wati-to-conversation ID mapping to Google Sheets.

## How it works
1. Receives an incoming WhatsApp message event via a Wati webhook.
2. Looks up the sender’s contact profile in Wati using the WhatsApp ID (waId).
3. Pulls the most recent WhatsApp messages for that conversation from Wati.
4. Creates or updates the contact in GoHighLevel using the Wati name, phone, and your GoHighLevel locationId.
5. Adds a note to the GoHighLevel contact containing the WhatsApp message text.
6. Appends the Wati ID and Wati conversation ID to a Google Sheets spreadsheet for tracking.

## Setup
1. Add your Wati API credentials and ensure Wati is configured to send message webhooks to this workflow’s webhook URL.
2. Add your GoHighLevel Private Integration Token in the Authorization header for both GoHighLevel HTTP requests and replace YOUR_GHL_LOCATION_ID with your sub-account (location) ID.
3. Connect your Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID and sheet selection to point to your logging spreadsheet and target tab.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
