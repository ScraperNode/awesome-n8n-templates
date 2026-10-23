# 🎬 Create vertical product promo videos from Google Sheets or Shopify with Zvid

> ⚡ **16 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually or every 30 minutes to pick a new product from Google Sheets or Shopify, then uses Zvid to generate and render a vertical product promo video and optionally writes the finished video URL back to the sheet.

## How it works
1. Runs on a manual trigger for testing or on a 30-minute schedule.
2. In default sheet mode, selects the first row with an empty Status. Optional Shopify mode polls the newest product: the first scheduled run records a starting marker, and later runs process only the newest changed product. It does not backfill the catalog.
3. Checks the configured music URL with an HTTP HEAD request and builds a Zvid render project JSON with product images, pricing, tagline, and brand styling.
4. Uses the Zvid node to validate the project and obtain a credit quote before rendering.
5. If dryRun is enabled, saves a draft project in the Zvid editor and outputs a preview link instead of rendering.
6. If dryRun is disabled, submits a Zvid video render job and polls Zvid until the render completes or times out.
7. When the render finishes, writes the Status and VideoUrl back to the originating Google Sheets row (sheet mode) or updates the stored last-seen Shopify product marker (Shopify mode), then downloads the finished video file from the returned URL.

## Setup
1. Install `@zvid/n8n-nodes-zvid` from Settings → Community nodes before credentials. A workspace owner/admin may need to install it. On n8n Cloud, the owner can install verified Zvid from the Nodes panel. Create a Zvid API credential with a key from https://app.zvid.io/api-keys and Base URL `https://api.zvid.io`; select it on every Zvid node.
2. Default source is `sheet`. Connect Google Sheets and select the same spreadsheet and tab in Read products sheet and Mark row done. Create headers Title, Price, CompareAtPrice, ImageUrl1, ImageUrl2, Tagline, Status, VideoUrl. Supply Title and a public ImageUrl1; leave Status empty. Confirm Mark row done still matches on `row_number` after configuring it.
3. Optional Shopify mode: set `source: shopify`, `shopDomain` to the subdomain only, and `apiVersion` to a supported version. Attach Header Auth `X-Shopify-Access-Token` with `read_products` to Poll new products. This branch uses the legacy REST Products API and requires an app permitted to access it. Maintain a valid token for scheduled runs.
4. Replace branding, storeUrl, copy and music in Config. The default `dryRun: false` renders and spends Zvid credits; use `true` for an editor draft and quote. Test manually, verify the sheet write and open Watch video → Binary → data → View. Check the 30-minute schedule before activation.

## Requirements
- The installed Zvid node, a Zvid account with render credits, and either Google Sheets credentials or Shopify product-read access. Use publicly accessible media within your Zvid plan’s dimension and file-size limits.

## Customization
- Customize the brand name, handle, storefront URL, colors, fonts, call to action, currency display and music in Config. Review prices, product claims and usage rights before sharing.

## Additional info
Supported Zvid operations use the Zvid node. This template returns videos for review; social publishing and attaching videos to Shopify product pages are not included. The optional Shopify source uses the legacy REST Products API: https://shopify.dev/docs/api/admin-rest/latest/resources/product . It only tracks the newest product, so multiple new products between polls are not all processed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
