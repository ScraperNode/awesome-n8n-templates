# 🤝 Sync WhatsApp conversations to GoHighLevel notes with Wati and Google Sheets

> ⚡ **9 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow syncs WhatsApp conversations from Wati into GoHighLevel by adding each delivered or incoming message as a contact note, using Google Sheets to track Wati conversation-to-contact mapping and Slack to alert on workflow errors.

## How it works
1. Receives a webhook from Wati when a sent WhatsApp message is marked as delivered.
2. Pulls the conversation details from Wati, checks a Google Sheets tracker for the conversation ID, fetches the sender profile from Wati, and searches GoHighLevel for a matching contact by WhatsApp ID.
3. If a matching GoHighLevel contact is found, creates a contact note containing the WhatsApp message text.
4. Receives a second webhook from Wati when a new inbound WhatsApp message arrives.
5. Looks up the sender in Wati and checks Google Sheets to determine whether the conversation ID has already been logged.
6. If the conversation is already logged, searches GoHighLevel by WhatsApp ID and appends the inbound message as a note on the existing contact.
7. If the conversation is new, appends the Wati ID and conversation ID to Google Sheets, then searches GoHighLevel by Wati ID and either adds a note to the existing contact or creates a new contact and adds the note.
8. If any workflow execution fails, posts an error alert to a Slack channel.

## Setup
1. Add Wati API credentials and configure Wati webhook events (message delivered and message received) to point to this workflow’s two webhook URLs.
2. Connect Google Sheets OAuth credentials and update the spreadsheet ID, sheet name, and ensure columns exist for “Wati ID” and “Conversation ID”.
3. Create a GoHighLevel Private Integration Token and replace the placeholder token and location ID in all GoHighLevel HTTP requests.
4. Add Slack OAuth credentials and select the channel where workflow error alerts should be posted.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
