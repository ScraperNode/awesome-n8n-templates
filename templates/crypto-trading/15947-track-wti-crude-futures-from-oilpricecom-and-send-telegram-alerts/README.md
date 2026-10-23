# 📈 Track WTI crude futures from Oilprice.com and send Telegram alerts

> ⚡ **14 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a weekday schedule, scrapes WTI crude oil futures prices from Reliable Sources, extracts and formats key contract data with JavaScript, and sends a compact market snapshot to a Telegram chat.

## How it works
1. Runs on a schedule at specified times on weekdays.
2. Fetches the WTI futures webpage from Oilprice.com via an HTTP request.
3. Parses the returned HTML to extract WTI (CL) contract symbols, contract months/years, prices, changes, and update times, then sorts and limits the list to the next 15 contracts.
4. Aggregates the extracted contracts into a single dataset for reporting.
5. Sends a formatted Telegram message that summarizes the market (all up/down/mixed), lists contracts with price and change, and includes range, average change, and a source link.

## Setup
1. Add a Telegram Bot token (Telegram API credentials) and set the target chat ID in the Telegram message action.
2. Review and adjust the schedule times and timezone as needed for your market hours.
3. Confirm the Oilprice.com URL is reachable from your n8n instance and update the source URL if the data location or page structure changes.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
