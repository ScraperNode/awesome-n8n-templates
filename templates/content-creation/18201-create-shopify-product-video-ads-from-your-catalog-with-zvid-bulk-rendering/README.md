# 🎬 Create Shopify product video ads from your catalog with Zvid bulk rendering

> ⚡ **20 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create Shopify product video ads at scale with n8n and Zvid. This workflow selects eligible products, generates product-first, benefit-first, and offer-first variants, validates costs, bulk-renders MP4s, and returns review links or sends a tracking-ready manifest to your asset store or social scheduler.

## How it works
1. Starts manually for testing or automatically every Monday at 9:00 AM; keep the schedule inactive until credentials and a dry run are verified.
2. Queries Shopify’s Admin GraphQL API for recently updated products matching `shopifyProductQuery`, then keeps items that have a title, priced variant, and public product image.
3. Creates distinct product-first, benefit-first, and offer-first concepts with hooks, offers, tracking keys, and up to three Shopify images. Variants are allocated round-robin across products.
4. Applies `maxProducts`, `variantsPerProduct`, and the global `maxTotalAds` cap, builds the contrast-safe Atelier Editorial design, and validates the first resolved ad with the native Zvid node.
5. With `dryRun: true`, returns validation warnings and an exact credit quote, then attempts to save the first resolved ad as an editable Zvid project without submitting the paid bulk render.
6. With `dryRun: false`, the native Zvid nodes create one bulk render, poll its status until completion or timeout, and collect each completed MP4 URL and job result.
7. Builds a delivery and performance manifest containing product IDs, storefront URLs, creative formats, tracking keys, and video URLs. It returns assets inside n8n or sends the manifest to an optional HTTPS webhook.

## Setup
1. In n8n, open Settings → Community nodes and install the exact package `@zvid/n8n-nodes-zvid`; a workspace owner or admin may need to do this.
2. Create a Zvid API key at https://app.zvid.io/api-keys. In n8n, create one Zvid API credential with that key and assign it to Validate project, Save draft to editor, Submit bulk render, and Get batch status.
3. Create and install a Shopify Dev Dashboard app with Admin API scope `read_products`. Obtain an Admin API access token—this is not the Client ID or Client secret—then create an n8n Header Auth credential named `X-Shopify-Access-Token` and assign it to Get Shopify catalog.
4. Update Config: use only the store prefix in `shopDomain`; set the product query, scan and ad limits, brand, colors, CTA, and optional webhook. Run first with `dryRun: true`, review the quote and draft, then set it to false only when ready to spend credits.

## Requirements
- A Shopify store with an installed Dev Dashboard app and `read_products`; eligible products need a title, public image, and priced variant. An n8n workspace where an owner or admin can install community nodes. A Zvid account and API key; sufficient credits are required only for live rendering. An HTTPS delivery endpoint is optional.

## Customization
- Adjust `shopifyProductQuery`, `scanLimit`, `maxProducts`, `variantsPerProduct`, `maxTotalAds`, formats, hooks, colors, CTA, music, schedule, and `deliveryWebhookUrl` in Config. `maxTotalAds` is the global output cap; use 4 for two products × two variants.

## Additional info
The Shopify HTTP Request node performs one precise Admin GraphQL query for product media, pricing, currency, domain data, and configurable search. Every Zvid API action uses native `@zvid/n8n-nodes-zvid` nodes, and no credentials are embedded. Manual testing with five active Shopify products confirmed that 2/1/2 settings select two products and plan one distinct ad each. Actual credit quotes vary by project.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
