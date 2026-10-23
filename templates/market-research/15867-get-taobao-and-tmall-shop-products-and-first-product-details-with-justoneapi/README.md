# 📊 Get Taobao and Tmall shop products and first product details with JustOneAPI

> ⚡ **78 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Fetch products from a Taobao or Tmall shop, select a returned item, and retrieve structured product and SKU details for ecommerce research, catalog monitoring, and reporting.

## How it works
1. The workflow begins with one configuration node for your own JustOneAPI token, seller user ID, shop ID, sorting, page, and item limit. It requests the shop product list, preserves the raw response for troubleshooting, and extracts an item ID from the returned list. It then calls the product-detail endpoint and outputs normalized shop metadata, source-product information, product details, SKU summaries, SKU properties, and raw API responses.

## Setup
1. Import the template and open the Set API and Shop Parameters node. Enter your own JustOneAPI token, replace the sample seller user ID and shop ID, and review the optional sort, page, and maxItems settings. Run the workflow manually, inspect both raw-response nodes and the structured final output, then connect the result to your catalog, spreadsheet, database, dashboard, alert, or downstream analysis workflow.

## Requirements
- Your own JustOneAPI token, valid Taobao or Tmall seller and shop IDs, and n8n with HTTP Request and Code nodes.

## Customization
- Change shops, sorting, or pagination; extend the item-selection logic to process multiple products; or send output to Google Sheets, Airtable, Notion, a database, or an AI model.

## Additional info
Useful for Taobao and Tmall assortment tracking, marketplace research, seller monitoring, catalog enrichment, pricing analysis, and ecommerce intelligence. API usage is billed against the token supplied by the user.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
