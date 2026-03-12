# 📊 Monitor competitor prices with Google Shopping and Google Sheets, alert via Slack and Gmail

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for?

E-commerce store owners, product managers, marketplace sellers, and pricing analysts who want to automatically track competitor pricing and get actionable alerts when their products are overpriced or underpriced relative to the market.

## What this workflow does

This workflow runs daily to compare your product prices against live competitor prices from Google Shopping. It identifies pricing gaps, calculates suggested prices that protect your margins, sends instant Slack alerts for critical issues, logs everything to a historical price tracking sheet, and delivers a comprehensive daily summary via Slack and email.

## How it works

1. **Daily trigger** fires on a configurable schedule (default: every 24 hours).
2. **Reads your product catalog** from a Google Sheet — auto-detects column names regardless of naming convention.
3. **Searches Google Shopping** for each product using SearchAPI to find real-time competitor prices.
4. **Analyzes the pricing gap** — compares your price to the market average and classifies each product as `UNDERPRICED`, `SLIGHTLY_UNDER`, `COMPETITIVE`, `SLIGHTLY_OVER`, or `OVERPRICED`.
5. **Suggests optimal prices** based on market averages while maintaining a minimum margin above your cost.
6. **Sends instant Slack alerts** when a product hits critical or warning thresholds.
7. **Logs all results** to a `price_log` tab in your Google Sheet for trend analysis.
8. **Sends a daily summary** via Slack message and HTML email with a full breakdown of all products.

## Setup steps

1. Create a **Google Sheet** with a `products` tab containing columns: `product_name`, `my_price` (required), and optionally `sku`, `my_cost`.
2. Add a second tab called **`price_log`** with headers: `date`, `product_name`, `sku`, `my_price`, `my_cost`, `margin_now`, `competitor_lowest`, `competitor_average`, `competitor_highest`, `competitor_count`, `gap_pct`, `signal`, `suggested_price`, `action`.
3. Get a **SearchAPI key** from [searchapi.io](https://www.searchapi.io) and set it as the n8n environment variable `SEARCHAPI_KEY`.
4. Connect **Google Sheets OAuth2** credentials and update the sheet ID in both Sheets nodes.
5. Connect **Slack OAuth2** credentials and configure your alert channel.
6. Connect **Gmail OAuth2** credentials and update the recipient email address.

## Requirements

- n8n instance (self-hosted or cloud)
- [SearchAPI.io](https://www.searchapi.io) account and API key
- Google Cloud project with Sheets API enabled
- Slack workspace with a bot configured
- Gmail account with OAuth2 credentials

## How to customize

- **Pricing thresholds** — Adjust the `0.85`, `0.95`, `1.05`, `1.15` multipliers in the "Analyze Pricing Gap" node to change sensitivity.
- **Minimum margin** — Change the `1.15` cost multiplier to set your floor margin (default: 15%).
- **Schedule** — Modify the trigger interval for more or less frequent checks.
- **Notifications** — Replace or add Slack/email with Telegram, Discord, Microsoft Teams, or webhooks.
- **Region** — Change the `gl` parameter in the search node from `us` to your target market country code.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
