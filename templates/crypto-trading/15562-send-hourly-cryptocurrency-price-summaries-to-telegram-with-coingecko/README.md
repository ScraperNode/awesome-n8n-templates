# 📈 Send hourly cryptocurrency price summaries to Telegram with CoinGecko

> ⚡ **94 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

### This template automatically tracks cryptocurrency prices and sends a formatted summary to your Telegram channel.

## How it works
* The workflow triggers every hour (adjustable) and defines a list of assets to track.
* Real-time market data (price and change) is fetched via the **CoinGecko Public API**.
* Individual coin data is aggregated into a single dataset.
* A JavaScript node transforms the raw data into a clean, human-readable HTML report.
* The final report is pushed to your Telegram destination using the Telegram node.

## Requirements
* A Telegram Bot token.
* A Telegram Chat ID (Group or Channel).

## How to set up
* **CoinGecko Node:** 
    * No credentials required (Public API).
* **Telegram Node:** 
    * Create a bot via [BotFather](https://t.me/botfather) and get your API Token.
    * Create a new Telegram Credential and paste your token.
    * Add your bot to a channel or group as an admin and get the Chat ID.
    * Set the Chat ID parameter in the Telegram node.
* **Schedule Trigger:**
    * Default is set to 1 hour. Adjust the interval to your preference.

## How to customize
* **Edit tracked coins:** Open the **'Define Coins'** node and edit tracked assets in the `coinIds` object using CoinGecko slugs.
* **Styling:** Edit the **'Generate Telegram Message'** node to change emojis, currency formatting, or the report language.

## See it in action
* [Check this channel](https://t.me/HourlyCryptoPrices) to see live workflow

## 🔗 Nodes Used

Telegram, CoinGecko, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
