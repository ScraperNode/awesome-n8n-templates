# 🤝 Migrate Salesforce accounts to GoHighLevel using Google Sheets

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow manually migrates Salesforce Account records stored in Google Sheets into GoHighLevel Business records using the LeadConnector API, updates a GoHighLevel custom object with Salesforce fields, and bulk-associates related contacts (also from Google Sheets) while logging creation and error results back to Sheets.

## How it works
1. Runs when you click Execute workflow in n8n.
2. Reads Salesforce Account rows marked as NOT DONE from Google Sheets and limits the run to a maximum batch size.
3. Processes each account in sequence and marks the row as DONE in Google Sheets to track migration progress.
4. Creates a GoHighLevel Business record via the LeadConnector API using the account’s name, address, phone, website, and description.
5. Updates the associated GoHighLevel custom object record with Salesforce-specific fields (for example Account ID, Parent ID, price book, and other mapped properties) via the LeadConnector API.
6. Looks up GoHighLevel contact IDs for the current Salesforce Account ID in a separate Google Sheets contacts tab and, if present, bulk-associates those contacts to the newly created GoHighLevel Business.
7. Updates the source Google Sheets row with the new GoHighLevel Business ID and logs any errors (business creation, custom object update, or contact association) to dedicated error tabs.

## Setup
1. Create a GoHighLevel private integration token and replace `YOUR_GHL_API_TOKEN` in the Authorization header for every LeadConnector HTTP request.
2. Replace `YOUR_GHL_LOCATION_ID` (and any referenced company ID or custom object schema ID such as `YOUR_GHL_CUSTOM_OBJECT_SCHEMA_ID`) in the HTTP request bodies/URLs to match your GoHighLevel account.
3. Connect Google Sheets OAuth2 credentials and update the spreadsheet IDs and sheet/tab selections for the Accounts and Contacts lookups and the various logging tabs.
4. Ensure your Accounts sheet includes columns used by the workflow (including `DONE STATUS` and `row_number`) and your Contacts sheet includes `SalesForce Account ID` and `Contact Id` for bulk association.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
