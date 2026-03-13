# 📈 Track and analyze Forex news trading results with MyFxBook and Google Sheets

> ⚡ **1,036 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Forex News Trading Result Data
### This n8n template simulates the results if we take every trade based on the previous workflow: https://n8n.io/workflows/8340-automated-forex-news-alert-system-with-forex-factory-and-telegram/

### Use Cases
1. Analyze which news events have a higher probability of generating profit.
2. Decide on Take Profit and Stop Loss levels for specific currency pairs or news events.

### Currency Pairs
EURUSD, GBPUSD, AUDUSD, NZDUSD, USDJPY, USDCHF, USDCAD, XAUUSD

### Limitations
1. We use High, Low, and Live Prices from MyFxBook. These values may differ depending on the broker.
2. Spread widening and slippage will vary across brokers.
3. Price gaps may occur over weekends.
4. Profit/Loss also depends on when the trade is closed.

### How It Works
* Each day, the workflow checks if the Sheets have empty High and Low Price values.
* It queries MyFxBook for updated High and Low Prices for Date+1 (the next trading day after opening a buy/sell position) using the HTTP Request node.
* The response from the HTTP Request is parsed.
* If new High and Low data are available, the workflow retrieves the date.
* It scrapes the new High and Low Price data and calculates the multiplier for the respective currency pair.
* Example: USDJPY prices have 3 decimals, so the multiplier is 1000.
* Sheets are updated with High, Low, Points Up, and Points Down.
* The workflow checks if the buy/sell position results in profit or loss.
* Example: if we have a EURUSD Buy position and Points Up &gt; 0, then there is a possibility of profit.
* Points Up can be negative if the new High Price remains below the Buy position entry price.
* If we have a Buy position and Points Up ≤ 0, then there is a possibility of a loss.

### How to Use
* Enter all required credentials.
* Create or download a Google Sheets file (example): https://docs.google.com/spreadsheets/d/1OhrbUQEc_lGegk5pRWWKz5nrnMbTZGT0lxK9aJqqId4/edit?usp=drive_link
* Run the workflow.

### Requirements
* Enable the Google Drive API in Google Cloud Console.
* Provide Google Sheets credentials.

### Need Help?
Join the [Discord](https://discord.gg/n8n) or ask in the [Forum](https://community.n8n.io/)!

Thank you!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
