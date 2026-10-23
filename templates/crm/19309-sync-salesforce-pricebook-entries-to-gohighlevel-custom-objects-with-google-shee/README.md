# 🤝 Sync Salesforce pricebook entries to GoHighLevel custom objects with Google Sheets

> ⚡ **5 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow manually syncs Salesforce PricebookEntry records listed in Google Sheets into GoHighLevel (LeadConnector) as `custom_objects.price_book_entry` records, then creates an association to the related product and logs success or error statuses back to the sheet.

## How it works
1. Starts when you manually execute the workflow.
2. Reads rows from a Google Sheets tab where the `Created` column is set to `No`, limits the batch size, and processes the rows one by one.
3. For each row, updates the sheet status to indicate processing has started.
4. Queries Salesforce for the full PricebookEntry details (including Pricebook2 and Product2 fields) using the Salesforce record ID from the current sheet row.
5. Creates a GoHighLevel custom object record in `custom_objects.price_book_entry` with pricing and product fields from Salesforce.
6. Creates a GoHighLevel association relation linking the new price book entry record to the configured related record.
7. Updates the Google Sheets row as `Yes` on success or `Error` when the Salesforce query, GoHighLevel create, or association call fails, and waits between retries to reduce rate-limit issues.

## Setup
1. Add Google Sheets OAuth2 credentials and set the spreadsheet ID and the `Pricebook Entries` tab (gid) to match your sheet.
2. Ensure your sheet includes a `Created` column (with `No` for rows to process) and columns for the Salesforce PricebookEntry `Id`, `row_number`, and the related record ID used for the association (as referenced in the association request).
3. Add Salesforce OAuth2 credentials and replace `YOUR_SF_INSTANCE.my.salesforce.com` in the Salesforce query URL with your Salesforce org domain.
4. Add your GoHighLevel (LeadConnector) private integration token and replace `YOUR_GHL_API_TOKEN`, `YOUR_GHL_LOCATION_ID`, and `YOUR_GHL_ASSOCIATION_ID` in the two GoHighLevel HTTP requests.
5. Confirm that the GoHighLevel custom object `custom_objects.price_book_entry` exists with property keys that match the request payload (for example `product_name`, `salesforce_price_book_entry_id`, `list_price`, and `currency`).

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
