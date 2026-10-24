# 🤝 Sync HubSpot contacts to Klaviyo and log activity to Slack and Google Sheets

> ⚡ **10 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives new HubSpot contact webhooks, fetches full contact details, maps lifecycle stages to Klaviyo lists, creates/updates the Klaviyo profile, adds it to the right list, then notifies Slack and logs the sync to Google Sheets.

## How it works
1. Receives a webhook request from HubSpot when a new contact is created.
2. Extracts the HubSpot contact ID and loads sync settings (HubSpot access token, Klaviyo API key, and lifecycle-stage-to-list mappings).
3. Fetches the full contact record from the HubSpot CRM API with key properties like email, name, company, phone, and lifecycle stage.
4. Maps the contact’s HubSpot lifecycle stage to a target Klaviyo list ID and prepares the profile fields to sync.
5. Creates the contact profile in Klaviyo via the Profiles API and then adds the profile to the mapped Klaviyo list.
6. Posts a confirmation message to a Slack channel and appends a sync log row to a Google Sheets worksheet.

## Setup
1. Create a HubSpot Private App with access to read contacts and add its access token in the workflow’s settings code.
2. Create a Klaviyo Private API key, paste it into the workflow’s settings code, and fill in the Klaviyo list IDs for each lifecycle stage you want to route.
3. Copy the n8n webhook URL and configure HubSpot to send a “contact created” webhook event to that endpoint.
4. Connect Slack credentials and set the destination channel (or disable the Slack step if you don’t need notifications).
5. Connect Google Sheets credentials, set your target spreadsheet ID, and ensure the “Klaviyo Sync Log” sheet exists with columns matching the logged fields.

## Customization
- No customizations needed beyond the standard setup. The only node users need to edit is Configure Mapping and Settings, where they add their HubSpot Private App token, Klaviyo API key, and paste in their four Klaviyo list IDs for Lead, MQL, SQL, and Customer stages. The lifecycle stage mapping works automatically for all standard HubSpot stages. Users with custom pipeline stages can add additional mappings to the list map in that same node without touching anything else

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
