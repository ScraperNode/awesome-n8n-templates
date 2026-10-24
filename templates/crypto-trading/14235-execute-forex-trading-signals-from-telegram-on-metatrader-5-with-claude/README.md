# 📈 Execute forex trading signals from Telegram on MetaTrader 5 with Claude

> ⚡ **360 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Telegram Signal Receiver and Processor

This n8n template is the missing link between your Telegram trading signal channels and MetaTrader 5. It listens to your Telegram bot, uses AI to detect and parse trading signals in real time, then forwards them directly to your MT5 instance via the signal handler webhook — no manual copying required.

The full system includes an n8n workflow, a Python forwarder script, a compiled MT5 Expert Advisor (.mq5), and a setup guide. Everything you need to run copy trading from Telegram, out of the box.

## How it works

- A Python forwarder script monitors your target Telegram signal channel and relays messages to your personal bot
- The n8n Telegram Trigger receives each message from your bot
- An LLM (Claude/Anthropic) checks whether the message is a valid trading signal — it looks for direction, asset, and stop loss
- If it's a signal, the parsed data (asset, direction, entry, SL, TP, risk, order type) is forwarded to the MT5 Signal Handler webhook
- If it's not a signal, the workflow skips it silently
- MQL5 code handles position sizing as well

## Set up steps

- Create a Telegram bot via @BotFather and save your bot token
- Get your Telegram API credentials (api_id and api_hash) from my.telegram.org
- Install Python dependencies and configure the forwarder script with your credentials and target channel
- Add your Telegram Bot and Anthropic API credentials to n8n
- Activate this workflow and run the Python forwarder
- Make sure your MT5 Signal Handler workflow is also running and the webhook URL is correct in the "Send to MT5 Handler" node

## Requirements

- n8n instance running locally or on a private VPS
- MetaTrader 5 with the included Expert Advisor compiled and attached to a chart
- Anthropic API key (or swap in any compatible LLM node)
- Python 3.8+ with Telethon library installed
- The MT5 Signal Handler workflow (sold together with this template)

(Or you can run everything on a virtual computer so it runs on the cloud 24/7)


## Customising this workflow

- Use it for crypto or stocks since this works only for forex and gold for now.
- Add authentication to be more secure with this workflow or run it privately on a demo account since this is meant for educational purposes



### Purchasing this N8N workflow comes with the Python file and MQL EA as well so it is sold together. Everything you need to execute trades from telegram signals to MT5 is included at the price of 99 usd.

## Questions?
If you have questions or need help with this workflow, feel free to reach out:

elijahmamuri@gmail.com
elijahfxtrading@gmail.com


Important Disclaimer: This workflow is provided for educational purposes and demo account testing only. It demonstrates technical concepts for signal routing and automation architecture. Always test thoroughly on demo accounts, implement proper security measures, and understand that automated trading involves substantial risk. No warranties, financial advice, or guarantees are provided. See the full disclaimer in the workflow sticky notes for complete terms.

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
