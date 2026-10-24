# 🤝 Create GoHighLevel business custom fields from Google Sheets with Slack alerts

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow uses Google Sheets as a source of truth to create GoHighLevel (LeadConnector) business custom fields in bulk, skipping fields that are already marked as done, and posts a Slack alert if the workflow errors.

## How it works
1. Triggers manually when you click “Execute workflow”.
2. Reads the “Accounts Custom Fields” tab from Google Sheets and fetches the existing business custom fields from the GoHighLevel (LeadConnector) API.
3. Loops through each sheet row and only continues for rows marked with a status of “UNDONE”.
4. Creates each new business custom field in GoHighLevel using the field name, data type, key, location ID, and parent field ID.
5. Writes the created field ID back to Google Sheets and updates the row status to “Done”, or marks the row as “Error” if creation fails.
6. Sends a message to a Slack channel whenever the workflow encounters an execution error.

## Setup
1. Add a GoHighLevel (LeadConnector) Private Integration token and replace `YOUR_GHL_API_TOKEN`, `YOUR_GHL_LOCATION_ID`, and `YOUR_GHL_PARENT_FIELD_ID` in the HTTP requests.
2. Add Google Sheets OAuth2 credentials and replace `YOUR_GOOGLE_SHEET_ID`, ensuring the “Accounts Custom Fields” tab includes columns like “Field Name”, “Suggested Field Type”, “key”, “Status ”, and “ID”.
3. Add Slack OAuth2 credentials and replace `YOUR_SLACK_CHANNEL_ID` in the error-alert step to route failures to the correct channel.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
