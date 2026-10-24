# 🤝 Generate low stock alerts from Shopify and export results to Sheets or CSV

> ⚡ **10 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Free n8n workflow that flags OUT / LOW variants and suggests a reorder point from your last 30 days of unit sales. Demo mode uses built-in fake data; no LLM required.

## How it works
1. Runs manually and loads configuration such as data source mode (mock or Shopify), lookback windows, and output destination (Google Sheets or CSV files).
2. If mock mode is enabled, generates a sample set of product variants with inventory and 7/30-day sales; otherwise, queries the Shopify Admin GraphQL API for products/variants and recent orders.
3. Normalizes Shopify product and order data into a per-variant dataset with inventory quantity, inventory tracking status, and units sold over the last 7 and 30 days.
4. Computes each variant’s average daily sales, reorder point, suggested order quantity, days of cover, and status (OK, LOW, OUT, NO_SALES, or NOT_TRACKED) based on the configured safety stock rules.
5. Writes the per-variant alerts to either a Google Sheets “Alerts” tab (append or update by SKU) or a CSV file saved to the configured output folder.
6. Builds a bilingual (EN/ZH) summary with status counts and top reorder candidates, then writes it to either a Google Sheets “Summary” tab or a separate summary CSV file.

## Setup
1. For live Shopify data, create a Shopify Admin API access token with scopes such as read_products, read_inventory, and read_orders, then add it as an HTTP Header Auth credential using the X-Shopify-Access-Token header.
2. Set your Shopify domain and API version in the Config step, and switch mode from "mock" to "shopify".
3. To output to Google Sheets, add Google Sheets credentials, create a spreadsheet with “Alerts” and “Summary” tabs, and replace the placeholder spreadsheet URL/ID.
4. To output CSV files, set output to "files" and ensure the output folder path exists and is writable in your n8n environment.

## Additional info
What it does
- Checks inventory and recent order units (when you connect Shopify) or runs on built-in sample data first
- Statuses per variant: OUT, LOW, OK, NO_SALES, NOT_TRACKED
- Reorder helper: reorder_point = ceil(avg_daily_30 × safetyDays) + buffer (default safetyDays = 14)
- Outputs an Alerts table and a bilingual Summary

Honest limits
- So far tested with built-in fake data only
- Live Shopify Admin API and Google Sheets not tested by us yet
- Not an official Stocky replacement; not affiliated with Shopify or n8n
- Large catalogues may need pagination later; multi-location stock is not split

Free download:
https://stallkitstudio.gumroad.com/l/low-stock-alerts
Store: https://stallkitstudio.gumroad.com

Shopify and n8n are trademarks of their respective owners. Stallkit Studio is not affiliated with or endorsed by them.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
