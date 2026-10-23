# 🔬 Extract ecommerce products to Google Sheets with Snapshot Site and GPT-4o

> ⚡ **22 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs daily, reads e-commerce category URLs from Google Sheets, captures fully rendered HTML with Snapshot Site, uses an OpenAI chat model to extract structured product data, and upserts the results back into Google Sheets while logging capture/extraction errors to a separate tab.

## How it works
1. Runs every day at 11:00 (UTC) on a schedule.
2. Reads category page URLs from the “Store Sources” tab in Google Sheets and processes them one at a time.
3. Uses Snapshot Site to fetch the fully rendered page HTML for each URL, retrying on failures.
4. If Snapshot Site returns an error, writes the URL, error message, and timestamp to the “Extraction Errors” tab in Google Sheets.
5. If the capture succeeds, removes scripts/styles and trims the HTML before sending it to an OpenAI model via the Information Extractor to return a list of products with structured fields.
6. Splits the extracted products into individual rows and appends or updates them in the “Products” tab in Google Sheets, deduplicating by productUrl.

## Setup
1. Install the community node `n8n-nodes-snapshot-site` and add Snapshot Site API credentials.
2. Add a Google Sheets OAuth2 credential and update the spreadsheet URL/ID and tab names (“Store Sources”, “Products”, “Extraction Errors”) to match your document.
3. Add an OpenAI API credential (or compatible chat model supported by the OpenAI chat node) and select the model you want to use for extraction.
4. Ensure your “Store Sources” tab has a `url` column, and create matching headers in the “Products” and “Extraction Errors” tabs so auto-mapping works (including `productUrl` for upserts).

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
