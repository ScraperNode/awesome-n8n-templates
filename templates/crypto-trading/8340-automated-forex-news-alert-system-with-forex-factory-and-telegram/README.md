# 📈 Automated forex news alert system with Forex Factory and Telegram

> ⚡ **1,216 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Get Forex Factory News Release to Telegram
### This n8n template demonstrates how to capture Actual Data Releases as quickly as possible for trading decisions.

### Use cases:
1. Get notified if the actual data release is positive or negative for the relevant currency.
2. Use the Telegram chat message about the news release as a trigger to open a trading position in MetaTrader 4.

### How it works
* A news release event acts as the trigger.
* Only news with a numerical Forecast value will be processed. Events that cannot be measured numerically (e.g., speeches) are ignored.
* Extract news details: currency, impact level (high/medium), release date, and news link.
* Wait 10 seconds to ensure the Actual value is available on the news page.
* Scrape the Actual value from the news link using Airtop.
* If the Actual value is not available, wait another 5 seconds and retry scraping.
* Extract both Actual and Forecast values from the scraped content.
* Remove non-numeric characters (%, K, M, B, T) and convert values to numbers.
* Determine the effect:
If the Actual value is lower than the Forecast value (and lower is better), send it to the True branch.
Otherwise, send it to the False branch.

### How to use
* Enter all required credentials.
* Run the workflow.

### Requirements
* Google Calendar credentials
* Airtop API key
* Telegram Chat ID
* Telegram Bot API token

### Need Help?
Join the [Discord](https://discord.gg/n8n) or ask in the [Forum](https://community.n8n.io/)!

Thank you!

### Update Sept 26, 2025:
* Add new edit node

## 🔗 Nodes Used

Telegram, Google Calendar Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
