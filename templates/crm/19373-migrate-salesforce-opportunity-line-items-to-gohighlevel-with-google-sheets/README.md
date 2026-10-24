# 🤝 Migrate Salesforce opportunity line items to GoHighLevel with Google Sheets

> ⚡ **22 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow manually migrates Salesforce Opportunity Line Items into GoHighLevel by creating `custom_objects.opportunity_products` records and associating them to existing opportunities, using Google Sheets as the batch input and status log.

## How it works
1. Runs when you manually execute the workflow.
2. Reads unprocessed opportunity rows from Google Sheets (where Created = "No") and limits the run to a defined batch size.
3. For each Salesforce Opportunity ID from the sheet, queries Salesforce for up to 200 related OpportunityLineItem records and splits the results into individual line items.
4. Skips any line items that don’t have a Salesforce line item ID and loops through the remaining items one at a time.
5. Updates the corresponding Google Sheets row to indicate processing has started, then waits to pace API calls.
6. Creates a GoHighLevel `custom_objects.opportunity_products` custom object record populated with fields from the Salesforce line item.
7. Creates a GoHighLevel association linking the new opportunity product record to the parent GoHighLevel opportunity, then logs success or error status back to Google Sheets with waits between retries.

## Setup
1. Add Salesforce OAuth2 credentials and replace `YOUR_SF_INSTANCE.my.salesforce.com` in the Salesforce query request URL with your Salesforce org domain.
2. Provide a GoHighLevel Private Integration token and replace `YOUR_GHL_API_TOKEN`, `YOUR_GHL_LOCATION_ID`, and `YOUR_GHL_ASSOCIATION_ID` in both GoHighLevel HTTP requests.
3. Add Google Sheets OAuth2 credentials, set `YOUR_GOOGLE_SHEET_ID`, and ensure the `Opportunity Line Items` tab includes `Salesforce Opportunity ID`, `Opportunity ID`, `Created`, and `row_number` columns.
4. Verify the `custom_objects.opportunity_products` schema in GoHighLevel matches the properties being sent (for example, `opportunity_product_name`, `quantity`, and `wholesale`).
5. Adjust the batch `Limit` value and the Wait durations if you need to tune throughput for your Salesforce and GoHighLevel rate limits.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
