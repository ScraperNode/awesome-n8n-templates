# 🤝 Monitor daily Shopify profit leaks with GPT-4o, Google Sheets and Slack

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to pull yesterday’s orders and product variants from Shopify, calculate profit and margin leak signals, generate a short commentary with OpenAI, post a detailed report to Slack, and append daily profit metrics to Google Sheets.

## How it works
1. Runs every morning at 7am to prepare a “yesterday” date window and Shopify GraphQL queries.
2. Retrieves all of yesterday’s Shopify orders via the Shopify Admin GraphQL API using pagination.
3. Retrieves the full Shopify product variant catalog (including price and cost per item) via the Shopify Admin GraphQL API using pagination.
4. Calculates revenue, COGS, payment fees, and shipping costs to produce gross profit/margin, and flags loss-making orders, unprofitable discount codes, low-margin sellers, below-cost variants, and missing costs.
5. Sends the calculated profit dataset to OpenAI to generate a structured headline, key insights, and suggested actions based only on the provided numbers.
6. Posts a formatted profit report to a Slack channel and appends the day’s metrics as a new row in a Google Sheets tab.

## Setup
1. Create a Shopify custom app with `read_orders`, `read_products`, and `read_inventory` scopes and add a Shopify Admin access token credential in n8n.
2. Add OpenAI API credentials, Slack credentials, and Google Sheets OAuth credentials in n8n.
3. Update the Configuration values (store handle, API version, payment fees, shipping cost per order, target margin, maxPages, Slack channel, and Google Sheet URL).
4. Ensure your Google Sheets file contains a worksheet named `Daily profit` with columns that match (or can be auto-mapped to) the appended fields.
5. Optional: enable the Meta ad spend step, add a Facebook Graph API credential, and set `metaAdAccountId` to subtract ad spend and calculate net profit.

## Requirements
- Shopify store with a custom app access token (read_orders, read_products, read_inventory scopes)
- Cost per item entered for your products in Shopify
- OpenAI API key
- Slack workspace
- Google Sheets with a tab named Daily profit
- Optional: Facebook Graph API credential and Meta ad account ID for net profit after ad spend

## Customization
- Set your real payment fee rate, average shipping cost per order and target margin in Configuration
- Enable the "Get Meta ad spend" node and set metaAdAccountId to see net profit after ads
- Raise lossThreshold above 0 to also flag orders with very thin profit
- Change "Set report window" to report weekly or month-to-date instead of yesterday
- Add Google Ads or TikTok ad spend using the same pattern as the Meta node
- Raise maxPages for stores with very high daily order volume

## Additional info
All profit numbers are calculated in code from Shopify data (revenue after all discounts and refunds, cost per item, payment fees and shipping costs); OpenAI only writes the commentary and is told to use the calculated figures only. Orders and product variants are fetched with GraphQL pagination loops, so the workflow works for small and large catalogs. Test and cancelled orders are excluded, and products without a cost are reported separately instead of being counted as 100% profit.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
