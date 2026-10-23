# 🤝 Migrate Salesforce product catalog from Google Sheets to GoHighLevel custom objects

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow manually migrates product rows from a Salesforce export in Google Sheets into GoHighLevel custom object records via the LeadConnector API, then updates the source sheet with success or error flags and posts a Slack alert if the workflow fails.

## How it works
1. Runs when you manually execute the workflow.
2. Reads Salesforce product rows from Google Sheets where the Created column is set to No and limits the run to a configurable batch size.
3. Loops through each product row and sends a POST request to the LeadConnector (GoHighLevel) API to create a custom_objects.products_1 record with mapped product properties.
4. When a product is created successfully, updates the same Google Sheets row to mark it as created and stores the returned GoHighLevel record ID.
5. If the GoHighLevel create request returns an error, flags the row as an error in Google Sheets and continues processing the next product.
6. If any node causes the workflow to fail, posts an error alert to a specified Slack channel.

## Setup
1. Create a GoHighLevel (LeadConnector) private integration token and set YOUR_GHL_API_TOKEN and YOUR_GHL_LOCATION_ID in the HTTP request configuration.
2. Ensure your GoHighLevel account has a custom object schema named custom_objects.products_1 with fields matching the properties sent in the API request.
3. Connect Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID_2 and the target sheet tab so the workflow can read and update your Salesforce product export.
4. Connect Slack OAuth2 credentials and set YOUR_SLACK_CHANNEL_ID for workflow error alerts.
5. Verify your Google Sheet includes the required columns (including Created, Error, and GHL Product ID) and adjust the batch limit value to control how many products run per execution.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Telegram, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
