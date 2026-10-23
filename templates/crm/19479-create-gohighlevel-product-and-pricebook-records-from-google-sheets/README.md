# 🤝 Create GoHighLevel product and pricebook records from Google Sheets

> ⚡ **12 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow uses a webhook to sync selected product rows from Google Sheets into GoHighLevel (LeadConnector) custom objects by creating a product record, then creating price book entry records and associating them to the corresponding pricebooks.

## How it works
1. Receives a POST request via an n8n webhook to start the sync.
2. Reads product rows from Google Sheets filtered to rows where the Select column is set to true.
3. Filters to only rows where the Creation Status field is empty to avoid reprocessing.
4. Creates a product record in GoHighLevel (LeadConnector) using the custom_objects.products endpoint.
5. Updates the source Google Sheets row to set Creation Status to Yes and clears Select to false.
6. Splits the row’s comma-separated Pricebook field into individual pricebook names and loops through them.
7. For each pricebook name, searches GoHighLevel for the matching pricebook record, creates a price_book_entry record, and creates associations between the product and the pricebook and between the price book entry and the related record.

## Setup
1. Add your GoHighLevel (LeadConnector) Private Integration token and replace YOUR_GHL_API_TOKEN in the Authorization headers of all HTTP requests.
2. Replace YOUR_GHL_LOCATION_ID and the two association IDs (YOUR_GHL_PRODUCT_PRICEBOOK_ASSOCIATION_ID and YOUR_GHL_PBE_PRODUCT_ASSOCIATION_ID) in the relevant GoHighLevel request bodies.
3. Connect Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID and the target sheet reference used by the Google Sheets nodes.
4. Ensure your Google Sheet has the required columns (Select, Creation Status, Product Name, Brand, SAP code, RRP, Wholesale price, and Pricebook with comma-separated names).
5. Copy the production webhook URL from the webhook trigger and configure your source system to send a POST request when products are ready to sync.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
