# 🎬 Create and publish Shopify product videos with Zvid

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually or on an optional daily schedule, finds active Shopify products without usable video, creates branded vertical videos with Zvid, and either returns editor or render review links or uploads completed MP4s to the matching products through Shopify’s staged-upload flow.

## How it works
1. Starts manually or, after the workflow is activated, every day at 6:00 AM in the workflow’s configured n8n timezone.
2. Queries the Shopify Admin GraphQL API using shopifyProductQuery, scans up to scanLimit products, and selects up to maxProducts products that have a public image, a priced variant, and no non-failed Shopify video.
3. Builds a Zvid bulk render project by mapping Shopify product titles, prices, images, descriptions, sizes, and brand styling into a shared video template.
4. Validates the first item against Zvid’s API to confirm the template resolves correctly and to calculate the credit cost for the batch.
5. If dry-run mode is enabled, saves the first resolved video as a draft in the Zvid editor and outputs a summary with an editor link and the full credit quote.
6. With dryRun disabled, submits a Zvid bulk render and checks the batch every pollSeconds until completion or timeoutMinutes. If n8n times out, the render continues in Zvid and should be checked before rerunning.
7. If publishing is enabled, stages each MP4 upload to Shopify, uploads the file, attaches the staged video to the product via Shopify GraphQL, and tags the product as processed; otherwise it outputs the rendered video URLs for review.

## Setup
1. In Shopify’s Dev Dashboard, create and install an app for your store. Create an app version with read_products, write_products, and write_files, release the version, then copy the Client ID and Client secret from Settings. Exchange them at POST https://{shop}.myshopify.com/admin/oauth/access_token using grant_type=client_credentials. Store the returned access_token—not the Client ID or secret—in an n8n Header Auth credential named X-Shopify-Access-Token, then assign it to the four Shopify HTTP Request nodes.
2. Create a Zvid API key at https://app.zvid.io/api-keys. Store it in an n8n Header Auth credential with the header name x-api-key, then assign it to Validate project (free), Save draft to editor, Submit bulk render, and Get batch status.
3. Update the Config values for shopDomain, shopifyApiVersion, shopifyProductQuery, processedTag, maxProducts/scanLimit, and your brand copy and styling (colors, fonts, timings, and resolution).
4. Run once with dryRun set to true to review the editor draft and credit quote, then set dryRun to false to render.
5. Keep publishToShopify set to false until you are ready for the workflow to upload and attach videos to Shopify products and add the processed tag.

## Requirements
- A Shopify store where you can create and install a Dev Dashboard app.
- Shopify Admin API scopes: read_products, write_products, and write_files.
- Active Shopify products with at least one public image and one priced variant.
- A Zvid account and API key; render credits are required only after disabling dry-run mode.
- n8n Cloud or self-hosted n8n. No community nodes are required.

## Customization
- Change shopifyProductQuery, scanLimit, maxProducts, and processedTag to control product selection.
- Customize the brand name, website, copy, colors, fonts, music, scene durations, frame rate, and video resolution in Config.
- Adjust the Schedule Trigger and n8n workflow timezone.
- Adapt the product copy and visual mapping for categories other than apparel.
- Keep publishToShopify disabled to return review links without modifying Shopify.

## Additional info
Start with dryRun: true. Validation, the credit quote, and the editor preview do not start a render. Set dryRun: false only after reviewing the draft and expected credit cost. Keep publishToShopify: false until the rendered videos are approved.
Shopify Dev Dashboard access tokens obtained with client credentials expire after approximately 24 hours. Refresh the n8n Header Auth token before scheduled runs or add an automatic token-refresh step.
HTTP Request nodes are used because the standard n8n Shopify node does not expose the complete GraphQL staged-upload and product-media association sequence required by this workflow. Products are tagged only after Shopify accepts their video association.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
