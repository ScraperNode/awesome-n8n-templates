# 🤝 Sync Shopify inventory and prices with supplier CSV or Excel files

> ⚡ **7 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs manually or every 6 hours to download a supplier CSV/XLSX file, match rows by SKU against Shopify variants, and update variant inventory and/or prices via the Shopify Admin GraphQL API, producing a per-run sync summary.

## How it works
1. Runs when you execute the workflow manually or on a schedule every 6 hours.
2. Reads your sync configuration (supplier file URL/type, column names, Shopify domain/API version, and update rules) and requests an Admin API access token from Shopify.
3. Fetches the store’s primary Shopify location via GraphQL and downloads the supplier CSV or XLSX file over HTTP.
4. Extracts rows from the file, validates SKUs/stock/price, and normalizes each row into a Shopify SKU search query.
5. For each valid row, queries Shopify for the matching product variant at the primary location and calculates target stock/price using the configured stock buffer and price multiplier.
6. Updates only changed values in Shopify (inventory at the primary location and/or variant price) using GraphQL with an idempotency key and change-from-quantity safety check.
7. Outputs a sync summary that counts updated/unchanged/invalid/missing/duplicate/error rows and includes detailed results per SKU.

## Setup
1. Create and install a Shopify app for the target store with `write_products`, `write_inventory`, and `read_locations` scopes, then copy its Client ID and Client Secret.
2. In the configuration step, set your `shopDomain`, `shopifyApiVersion`, and paste the Shopify Client ID/Secret used to request an access token.
3. Provide a direct, publicly reachable HTTP(S) URL to your supplier CSV/XLSX file and set `fileType` plus the exact column names for SKU, Stock, and Price.
4. Choose whether to update stock and/or price and optionally set `stockBuffer` and `priceMultiplier` to control how supplier values translate into Shopify updates.
5. Run the workflow once manually and review the final sync summary for missing/duplicate SKUs and validation errors before activating the 6-hour schedule.

## Requirements
- Shopify store, Shopify Dev Dashboard app, direct supplier CSV/XLSX URL

## Customization
- Change sync interval, supplier column names, stock buffer, price multiplier, and enable/disable stock or price updates

## Additional info
Updates existing Shopify variants only. Products are matched by exact SKU. V1 does not create new products and uses the store's primary inventory location.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
