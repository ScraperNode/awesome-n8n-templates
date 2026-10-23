# 🎬 Backfill Shopify product photos with Dreem.ai and Slack

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
New products get attention; the back catalog doesn't. This workflow sweeps your Shopify catalog, finds every product that still has just one photo, and generates the missing studio product shots with Dreem.ai - one product at a time, so a 300-product store fixes itself while you do something else.

## How it works
1. Run it manually for a one-off sweep, or swap the trigger for a Schedule to run unattended.
2. Fetches all products from Shopify and keeps only products with exactly one image and without the `dreem-shots-added` tag.
3. Processes matching products one at a time and sends the product’s existing image to Dreem.ai to generate the selected studio shot types.
4. Waits for Dreem.ai to call back via a webhook (up to 20 minutes) and checks whether the render completes successfully.
5. If completed, updates the Shopify product by appending the generated images and adding the `dreem-shots-added` tag to prevent reprocessing.
6. If the render does not complete in time, posts a “skipped” message to Slack and continues to the next product, then posts an “all done” message when the batch finishes.

## Setup
1. Add a Shopify Admin API access token credential with `read_products` and `write_products` scopes.
2. Install the Dreem.ai community node (n8n-nodes-dreem) and add your Dreem API key credential.
3. Add a Slack OAuth2 credential and choose the channel for the “Skipped” and “All Done” messages.
4. (Optional) Enable the Slack approval steps and the back-shot generation branch, then update the Shopify image-count filter to include products with both front and back source images.

## Requirements
- Dreem account + API key, Shopify store with Admin API access, Slack

## Customization
- Change shot codes, widen the image filter, exclude products by tagging them `dreem-shots-added` yourself, or add a Schedule trigger.

## 🔗 Nodes Used

Slack, Shopify, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
