# 📊 Score WooCommerce backlink prospects with Google Sheets and OpenAI

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily (or manually) to pull published products from two WooCommerce stores, match them to backlink prospects in Google Sheets, and generate personalized outreach email drafts that are saved back to Google Sheets for human review.

## How it works
1. Runs on a daily schedule at 09:00 (or starts manually).
2. Loads configuration values such as store URLs, Google Sheet ID, brand/sender details, and the maximum number of drafts to create per run.
3. Fetches published product catalogs from two WooCommerce stores (North America and Europe) and combines them into a single list.
4. Reads backlink prospect rows from the "Prospects" tab in Google Sheets.
5. Scores each prospect against the combined WooCommerce catalog using keyword and market matching, then drafts a personalized outreach email for the best-matching product.
6. Appends the generated drafts (including match score, product details, and email subject/body) to the "Drafts" tab in Google Sheets for manual review.

## Setup
1. Create two WooCommerce API credentials (read-only) in n8n for your North America and Europe stores and select them in the two WooCommerce nodes.
2. Add a Google Sheets OAuth2 credential in n8n and replace the Google Sheet ID in the Configuration step.
3. In the target spreadsheet, create "Prospects" and "Drafts" sheets and ensure "Prospects" includes columns used by the workflow (at least: status, site_name, email, contact_name, target_url, market, vehicle_focus, content_topic).
4. Update the Configuration values (brand_name, sender_name, sender_email, and max_drafts_per_run) to match your outreach process, then test with the manual run before enabling the daily schedule.

## Requirements
- Use https://tangmacraftsman.com/ for Europe (EUR) and https://tangmacraftsmans.com/ for North America (USD). Match each prospect and product to the correct regional store.
- Create outreach drafts for human review only. Do not send emails or claim that a backlink has been published.
- Record the prospect URL, proposed Tangma target URL, market, contact, draft status, and any published backlink URL in Google Sheets.

## Customization
- brand_name: Tangma Craftsman
- eu_store_url: https://tangmacraftsman.com/
- na_store_url: https://tangmacraftsmans.com/
- outreach_mode: draft_only

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
