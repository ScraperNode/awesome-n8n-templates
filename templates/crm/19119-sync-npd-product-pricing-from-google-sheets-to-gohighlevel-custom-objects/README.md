# 🤝 Sync NPD product pricing from Google Sheets to GoHighLevel custom objects

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives two Google Sheets IDs via a webhook, filters the NPD products list, calculates pricing from a separate margin sheet, and then creates matching product and price book entry records in GoHighLevel custom objects using the LeadConnector API.

## How it works
1. Receives a POST webhook containing the NPD products spreadsheet ID and the margin spreadsheet ID.
2. Reads all rows from the NPD Google Sheet and keeps only products where the “SKU status” field contains “NPD”.
3. Processes the filtered products one at a time and, for each product, loads all rows from the margin Google Sheet.
4. Calculates a sell price by matching margin rows by brand and outputs either “Bespoke” pricing (one entry per customer margin rule) or “Standard” pricing (uses wholesale price).
5. Routes each calculated item by pricing type and creates a product record in the GoHighLevel custom object `custom_objects.products_1` via the LeadConnector API.
6. Creates a corresponding price book entry record in the GoHighLevel custom object `custom_objects.price_book_entry` and continues until all items are processed.

## Setup
1. Create a Google Sheets OAuth2 credential in n8n and select it in both Google Sheets nodes.
2. Add your GoHighLevel (LeadConnector) Private Integration token to the Authorization header (`Bearer YOUR_GHL_API_TOKEN`) in all active HTTP Request nodes.
3. Replace `YOUR_GHL_LOCATION_ID` in the JSON body of each HTTP Request node with your GoHighLevel location ID.
4. Ensure your Google Sheets columns match the fields used in the filter (“SKU status”) and in the pricing calculation (brand, RRP/wholesale, and margin columns such as Customer/Brand/% off RRP), then adjust the pricing code if needed.
5. Send a POST request to the webhook URL with a JSON body containing both `spreadsheetId` and `marginSpreadsheetId` values.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
