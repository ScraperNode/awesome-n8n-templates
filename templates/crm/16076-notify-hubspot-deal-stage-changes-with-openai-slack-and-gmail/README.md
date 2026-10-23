# 🤝 Notify HubSpot deal stage changes with OpenAI, Slack and Gmail

> ⚡ **110 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow triggers on HubSpot dealstage changes, pulls full deal, contact, and owner details, uses OpenAI to generate a concise Slack-ready update with next steps, notifies the right Slack channel or emails the owner for ClosedWon, logs the event to Google Sheets, and writes a note back to HubSpot.

## How it works
1. Triggers in HubSpot whenever a deal property changes and continues only when the changed property is the deal stage.
2. Retrieves the full deal record from HubSpot, formats key fields (stage label, value, close date, won/lost flags), and builds an AI prompt.
3. Sends the prompt to OpenAI to generate a 3–4 sentence stage-change summary with two actionable next steps.
4. Posts the AI summary to Slack, routing high-value deals to a leadership channel and other deals to the sales team channel.
5. Appends a structured log entry (deal, stage, owner/contact, value, close date, AI summary, timestamp) to Google Sheets.
6. Fetches the HubSpot owner and contact details to enrich downstream messages, then sends a Gmail congratulations email for Closed Won deals or a Slack loss alert with the loss reason for Closed Lost deals.
7. Creates a note in HubSpot containing the stage-change notification and AI summary, and associates the note with the deal.

## Setup
1. Connect your HubSpot Trigger credentials and add an HTTP header auth credential for HubSpot API calls to owners, contacts, notes creation, and note-to-deal association endpoints.
2. Connect your OpenAI credential and select a model in the OpenAI node.
3. Connect your Slack OAuth2 credential and update the target channels/messages for leadership, sales, loss alerts, and error alerts.
4. Connect your Gmail credential for sending Closed Won emails and ensure deal owners in HubSpot have an email address.
5. Connect your Google Sheets credential and replace the document ID with your spreadsheet ID (and confirm the target sheet name and columns).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, HubSpot, HubSpot Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
