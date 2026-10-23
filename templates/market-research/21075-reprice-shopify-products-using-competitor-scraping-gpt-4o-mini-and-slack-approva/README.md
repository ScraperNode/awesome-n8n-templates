# 📊 Reprice Shopify products using competitor scraping, GPT-4o-mini and Slack approvals

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to scrape competitor product pages listed in Google Sheets, proposes guardrailed price changes using OpenAI, posts approvals to Slack, and applies approved variant price updates to Shopify via the Admin GraphQL API while logging history and decisions back to Google Sheets.

## How it works
1. Runs every day at 7 AM IST to load pricing configuration plus product and proposal data from Google Sheets.
2. Builds a list of competitor URL scrape jobs per SKU, fetches each page by HTTP request, and extracts price and stock using structured data and regex with an OpenAI fallback when parsing is unreliable.
3. Calculates a rule-based target price per SKU using the lowest in-stock competitor price, margin floor, ceiling, stock-based constraints, daily change caps, cooldown checks, and ₹…9 rounding.
4. Appends the day’s observed market data and rule result to the Google Sheets Price History tab and posts a daily digest summary to Slack.
5. For SKUs with a meaningful eligible change, sends the pricing context to OpenAI for a second opinion and then clamps the suggested price to hard guardrails before generating a one-time approval token.
6. Saves each pending proposal to Google Sheets and posts a Slack message with Approve/Reject buttons that link to a webhook approval URL.
7. When an approval link is clicked, validates the token and expiry, updates the Shopify variant price via the Admin GraphQL API on approval (or records rejection), updates Google Sheets accordingly, and returns a confirmation or error page while notifying Slack.

## Setup
1. Create a Google Sheet with Products, Price History, and Price Proposals tabs and fill in required fields such as SKU, current price, cost, floor/ceiling, Shopify product/variant IDs, and competitor URLs.
2. Add Google Sheets OAuth credentials and replace the placeholder Google Sheet ID wherever it appears in the workflow.
3. Add Slack credentials, replace the Slack channel ID, and ensure the channel is restricted to users allowed to approve price changes.
4. Add an OpenAI API credential for the GPT-4o-mini model used for extraction and price review.
5. Create a Shopify custom app with the write_products scope, configure HTTP Header Auth with X-Shopify-Access-Token, and replace the store domain placeholders in the configuration and approval validation logic.
6. Set your public n8n domain in the webhook_base config value, then activate the workflow and use the generated webhook URL in the Slack approval links.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
