# 📈 Cryptocurrency volume/mCap screener - automated trading alerts to Discord

> ⚡ **102 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Purpose & Audience
This n8n workflow template is designed for cryptocurrency traders, investors, and market analysts who want to automate the process of detecting unusual trading activity across 1,250+ cryptocurrencies. By continuously monitoring volume-to-market-cap ratios and price movements, the workflow delivers real-time alerts directly to your Discord server—helping you catch potential breakouts, pump schemes, or high-impact market events before they become mainstream news.

## What It Does
1. Monitors 1,250+ cryptocurrencies from CoinGecko every 4 hours for unusual trading patterns
2. Calculates volume-to-market-cap ratios to identify coins with abnormally high trading activity (&gt;30% ratio or &gt;$100M volume with significant price movement)
3. Ranks and filters the top volume alerts based on trading intensity
4. Sends beautifully formatted Discord embeds with coin metrics, price changes, market cap, and direct CoinGecko links
5. Provides context with educational information about what volume/MCap ratios mean and trading warnings

## Who Is It For
- Day traders and scalpers seeking early signals for high-volatility opportunities
- Market analysts who want automated surveillance of unusual market activity across hundreds of coins
- Discord community managers looking to provide valuable trading insights to their members
- Anyone interested in catching potential pumps, breakouts, or news-driven price movements before the crowd

Setup once and let it run 24/7. The workflow automatically scans the market every 4 hours and only sends alerts when something significant is detected. Customize the alert thresholds, add more coins, or adjust the schedule to fit your trading style. No coding required—just connect your CoinGecko API and Discord webhook, and you're ready to catch the next big move!

## How to Set Up
1. Obtain a free CoinGecko API key and create a Discord webhook for your server
2. Import the workflow and add your API credentials
3. Customize alert thresholds and update frequency to match your trading preferences
4. That's it—receive real-time volume alerts for potential trading opportunities automatically


### Preview: 
[Please click here for preview.](https://go.screenpal.com/watch/cTl66OnYot4)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
