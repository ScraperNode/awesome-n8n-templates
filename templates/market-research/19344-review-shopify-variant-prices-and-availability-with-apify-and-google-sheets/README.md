# 📊 Review Shopify variant prices and availability with Apify and Google Sheets

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
E-commerce researchers who need a variant-level price and availability register for a known public Shopify store, collection or product. Compare sizes, formats and SKUs without copying product details manually.

## How it works
1. One bounded Apify snapshot supplies products with their variants.
2. The workflow waits for the same run, checks source coverage and settled product charges, then verifies the complete dataset before writing one Sheet row per variant.
3. Stable keys update existing observations on repeat. Unobserved rows remain, so check observation dates before decisions.
4. Availability means public buyability, not inventory quantity. A blank compare-at price stays unknown. This workflow does not calculate price changes or alter a Shopify store.
5. COMPLETE describes the declared source window; CAPPED is a labelled sample.
6. Incomplete source data stops delivery. Verified empty results produce no rows.

## Setup
1. Import the JSON into an empty n8n canvas. Select your Apify Header Auth credential on all five HTTP nodes and Google Sheets OAuth2 on Upsert review register.
2. Create a Variant Review tab and import the exact [CSV header](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/shopify-products-price-stock-monitor/n8n-variant-review/sheet-header.csv).
3. Set its spreadsheet ID and source URL in Review settings, then run manually.

## Requirements
- The template is free; Apify usage is paid per product with variants included. The default $1 cap is a ceiling, not a quoted price. Repeats may incur charges again.

## Customization
- Choose one public Shopify URL and up to 10 products. Delivery stops above 500 variants. Maximums are not promised minimums. Repeat sequentially with the same source URL to update existing keys. [Setup details](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/shopify-products-price-stock-monitor/n8n-variant-review/README.md).

## Additional info
![Workflow canvas](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/shopify-products-price-stock-monitor/n8n-variant-review/workflow.png)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
