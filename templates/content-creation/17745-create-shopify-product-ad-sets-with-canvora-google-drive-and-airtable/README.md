# 🎬 Create Shopify product ad sets with Canvora, Google Drive and Airtable

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow triggers on new Shopify products, sends the product page URL to Canvora to generate multiple ad creatives, then uploads each finished image to Google Drive and logs the asset metadata (product, format, image URL) to Airtable.

## How it works
1. Triggers when a new product is created in Shopify.
2. Builds the product page URL and product title from the Shopify payload.
3. Sends the product URL to Canvora to generate an ad set in multiple formats (square ad, Instagram Story, and Instagram post).
4. Polls Canvora for the generation status, waiting between checks until the job finishes or a timeout threshold is reached.
5. When the generation succeeds, splits the returned outputs into individual items and downloads each generated image.
6. Uploads each image to Google Drive with a filename that includes the product name and format, then creates a corresponding record in Airtable with the format, product, and image URL.

## Setup
1. Add Shopify credentials and enable the Shopify trigger for the products/create topic.
2. Create a Canvora API key and configure an HTTP Header Auth credential (for example, header name `X-API-Key`) for both Canvora HTTP requests.
3. Update the store domain in the product URL template so it matches your Shopify storefront (or custom domain).
4. Add Google Drive OAuth credentials and set the target Drive/folder where creatives should be uploaded.
5. Add Airtable credentials and select the base/table that contains fields for Product, Format, and Image URL.

## Requirements
- A free **Canvora** account (API keys on all plans).
- **Shopify**, **Google Drive**, and **Airtable** connections.

## Customization
- Add `ad_landscape`, `pinterest_pin`, or `facebook_post` to outputFormats (100+ formats: GET /api/formats).
- Pass a `brandId` (GET /api/brands) to lock ads to your brand kit.
- Swap the Shopify trigger for a form or webhook to run from any catalog.

## Additional info
- Core nodes – Cloud & self-hosted. Nodes: Shopify Trigger, Set, HTTP Request, Wait, IF, Code, Google Drive, Airtable.
- Works inside ChatGPT, Claude & any workflow → canvora.ai/for-agents.

**Example output** (all three placements from one product page – real run):

![Square ad](https://cdn.canvora.ai/visualdocs/generations/790dbeb4-d4a5-41fa-b762-b13853d7eb90/ad-square-1-1785171504033-2c60fae1.png)
![Instagram Story ad](https://cdn.canvora.ai/visualdocs/generations/790dbeb4-d4a5-41fa-b762-b13853d7eb90/instagram-story-2-1785171491012-67f55f62.png)
![Instagram feed ad](https://cdn.canvora.ai/visualdocs/generations/790dbeb4-d4a5-41fa-b762-b13853d7eb90/instagram-post-3-1785171500374-6a93a082.png)

## 🔗 Nodes Used

Airtable, HTTP Request, Google Drive, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
