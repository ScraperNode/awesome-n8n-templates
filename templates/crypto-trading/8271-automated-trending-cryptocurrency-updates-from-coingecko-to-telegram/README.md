# 📈 Automated trending cryptocurrency updates from CoinGecko to Telegram

> ⚡ **483 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**This workflow fetches the latest trending cryptocurrency searches from CoinGecko and automatically sends them to your Telegram group/channel.**


✅ No account or API key required
✅ Uses CoinGecko’s free public API
✅ Sends formatted daily updates to Telegram
✅ Easy to customize schedule with a Cron node

Perfect for community managers, traders, or anyone who wants to keep their Telegram group updated with the hottest crypto trends.

# How it works


- Manual Trigger (for testing) & Schedule Trigger (runs automatically at set times)

- Uses CoinGecko API https://api.coingecko.com/api/v3/search/trending

- Extracts coin name, symbol, price (if available), and market cap rank

- Formats into a readable Telegram message & 
sends the message to your configured group/channel

# How to use

 - Import the workflow: Download the JSON file and import it into your n8n instance.

- Connect your Telegram account: Add Telegram credentials in n8n using your Bot Token.

- Replace the placeholder Telegram Chat ID (chatId) with your group/channel ID.

- Adjust schedule (optional): By default, the workflow runs at 8:30 AM and 8:30 PM IST. You can change this in the Schedule Trigger node.

- Activate the workflow: Once configured, activate it, and your Telegram group will start receiving daily trending coin updates.

# Requirements

- An n8n instance (self-hosted or cloud)

- A Telegram Bot Token (create via BotFather)

- Telegram Group or Channel ID where messages should be sent

## 🔗 Nodes Used

Function, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
