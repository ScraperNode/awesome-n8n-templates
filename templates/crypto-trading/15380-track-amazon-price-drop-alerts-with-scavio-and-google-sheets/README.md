# 📈 Track Amazon price-drop alerts with Scavio and Google Sheets

> ⚡ **18 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## How it works

Track any number of Amazon products from a Google Sheet. Every 1,2,3... hours, the workflow:

- Reads your watchlist sheet (`product_url`, `price_threshold`, `last_alerted_price`)
- Loops through each product with a 2s throttle (Scavio API rate limit for trail users)
- Extracts the ASIN and country domain from any Amazon URL format (`/dp/`, `/gp/product/`, mobile, shortlinks)
- Calls **Scavio: Amazon Get Product** for the live price
- Decides whether to email: only when current price first hits or further drops below your threshold (edge-triggered, no spam at flat prices)
- Sends a Gmail alert and writes the alerted price back to the sheet so the same level isn't re-alerted

## Set up steps

Setup takes about 10 minutes.

1. Install the **Scavio** community node: in n8n, go to **Settings -&gt; Community Nodes -&gt; Install** and enter `n8n-nodes-scavio`.
2. Get a free Scavio API key at https://dashboard.scavio.dev (500 credits/month, 1 credit per Amazon Get Product call).
3. Create a Google Sheet with one tab. Add three columns: `product_url`, `price_threshold`, `last_alerted_price`. Add one row per product you want to track (paste the Amazon URL and your max price; leave `last_alerted_price` blank).
4. Import this template, then attach three credentials: **Scavio API**, **Google Sheets OAuth2**, and **Gmail OAuth2**.
5. Open the **Get Watchlist** and **Update last_alerted_price** nodes and pick your spreadsheet/tab.
6. Open the **Send Gmail** node and set `sendTo` to your alert recipient.
7. Activate.

To re-arm an alert (e.g. you checked but didn't buy), clear the `last_alerted_price` cell. To stop tracking, delete the row.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
