# 🎬 Refresh slow-selling Shopify product photos with Dreem.ai and Slack

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs monthly to identify slow-selling Shopify products with no sales in the last 30 days, generates fresh on-model product imagery using Dreem.ai, appends the new photos to the products in Shopify, and posts status updates to Slack.

## How it works
1. Runs on a schedule at 09:00 on the first day of each month.
2. Pulls the most recent 250 Shopify orders (any status) and fetches all Shopify products.
3. Compares orders and products to find up to five products with no sales in the last 30 days that already have at least one image.
4. For each selected product, sends the first product image to Dreem.ai to generate a new on-model shot and waits for Dreem.ai to call back with the render result.
5. If the render completes, updates the Shopify product by keeping existing images and appending the newly generated Dreem.ai image URLs.
6. If the render is not completed within the wait window, posts a “skipped” message to Slack for that product.
7. After the batch finishes, posts a completion recap to a Slack channel.

## Setup
1. Add a Shopify Admin API access token credential with permission to read orders and read/write products.
2. Install the Dreem community node and add a Dreem.ai API key credential, then select the talentId and shotCodes you want to generate.
3. Add a Slack OAuth2 credential and choose the Slack channel for both the per-item “skipped” message and the final recap message.
4. (Optional) Adjust the sales lookback window, the per-run cap (default 5 products), and the monthly schedule to match your merchandising cadence.

## Requirements
- Dreem account + API key, Shopify store with Admin API access, Slack access

## Customization
- Adjust the sales window, the per-run cap, the schedule, or the talent, pose, and styling on the Dreem node.

## 🔗 Nodes Used

Slack, Shopify, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
