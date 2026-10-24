# 📈 Send weekly Bitcoin DCA signals from Coinbase Exchange to Telegram

> ⚡ **13 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every Monday and fetches daily Bitcoin (or other Coinbase product) candles from the public Coinbase Exchange API, calculates a moving-average-based DCA multiplier, and sends a suggested weekly buy amount to a Telegram chat.

## How it works
1. Runs every Monday at 09:00 on a schedule.
2. Loads configuration values such as the Coinbase product pair, base DCA amount, moving-average window, multipliers, and the target Telegram chat ID.
3. Requests daily candle data from the public Coinbase Exchange REST API for the selected product.
4. Computes the MA window (default 200 days), compares the latest close to the moving average, and applies the above/below multiplier to calculate the suggested DCA amount.
5. Formats an HTML Telegram message with the price, MA value, regime, multiplier, and the recommended weekly amount (or a pause message if the amount is below 1).
6. Sends the message to your Telegram chat via the Telegram Bot API.

## Setup
1. Create a Telegram bot with @BotFather and add a Telegram Bot API credential in n8n.
2. Set your Telegram chat ID in the configuration and, if needed, adjust PRODUCT_ID (for example BTC-EUR), base DCA amount, MA_DAYS, and the above/below multipliers.
3. Confirm the Coinbase Exchange public endpoint is reachable from your n8n instance and run the workflow once to test before activating the weekly schedule.

## Requirements
- A Telegram bot token (free, via @BotFather) and your chat ID
- No Coinbase account or API key needed: prices come from the public Coinbase Exchange API

## Customization
- Track Ether or a USD pair by changing PRODUCT_ID (ETH-EUR, BTC-USD...); duplicate the workflow for several assets
- Set MULTIPLIER_BELOW_MA to 0 to pause buying when the price is below the moving average, or change MA_DAYS (up to 300)

## Additional info
This workflow only computes a signal and places no orders. It is an educational tool, not financial advice. Full protocol with real results (17 live DCA orders, 1.2% taker fees measured on Coinbase Advanced): https://utikcoin.com/article/dca-automatise-coinbase-protocole - Source and French README: https://github.com/HATEM6584/n8n-dca-signal-mm200

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
