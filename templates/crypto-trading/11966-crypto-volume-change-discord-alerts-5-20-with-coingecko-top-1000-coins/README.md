# 📈 Crypto volume change Discord alerts (5-20%) with CoinGecko (Top 1000 coins)

> ⚡ **57 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Purpose and Audience
This professional-grade n8n workflow automation is designed for crypto traders, investors, and market analysts who need real-time volume change alerts across different market cap segments. Whether you're day trading, swing trading, or conducting market research, this workflow keeps you informed of significant volume movements that often precede major price action.

## What It Does
This automated system monitors the top 1,000 cryptocurrencies and sends detailed Discord notifications when significant volume changes are detected. The workflow intelligently segments coins into three market cap tiers:
- Large Cap (&gt;$1B): Alerts on volume changes &gt;5%
- Mid Cap ($100M-$1B): Alerts on volume changes &gt;10%
- Small Cap (&lt;$100M): Alerts on volume changes &gt;20%

Each alert includes comprehensive data: previous vs. current volume, volume change percentage and dollar amount, current price, 24h price change, market cap, volume/market cap ratio, and market cap rank. The system automatically filters out stablecoins and low-volume noise to ensure you only receive actionable alerts.

## How It Works
The workflow operates on a 2-hour schedule (fully customizable) and executes the following process:
1. Data Collection: Fetches fresh market data for 1,000 cryptocurrencies from CoinGecko API across 4 paginated requests
2. Volume Analysis: Compares current volume against previously stored data to calculate percentage changes
3. Tier Filtering: Segments coins by market cap and applies appropriate volume change thresholds
4. Alert Generation: Identifies top 20 volume movers per tier and formats rich Discord embeds with detailed metrics
5. Data Management: Automatically deletes old data and stores new baseline data for the next execution cycle
6. Discord Delivery: Sends formatted alerts to your Discord channel with embedded guides explaining how to interpret the signals

The workflow includes built-in intelligence to handle rate limits, batch processing for Discord's 10-embed limit, and comprehensive error handling.


## Who Is It For
- Active cryptocurrency traders seeking early volume spike signals
- Portfolio managers monitoring multiple market cap segments
- Market researchers tracking crypto market dynamics
- Trading communities wanting automated alert systems
- Discord servers focused on crypto trading and analysis

## How to Setup
Please watch the provided setup tutorial for complete step-by-step instructions. Setup time is approximately 15-20 minutes and requires:
- n8n instance (self-hosted or cloud)
- CoinGecko API key (https://www.coingecko.com/en/api)
- Discord webhook URL
- Basic familiarity with n8n interface

The tutorial covers API configuration, Discord webhook setup, data table initialization, and schedule customization.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
