# 📈 Forex & gold trading signal handler for MT5 using webhooks (telegram/discord)

> ⚡ **437 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# MT5 Trading Signal Handler
Metatrader5 and N8N Integration for Forex and Gold Trading via Webhooks for discord and telegram

This n8n template demonstrates a workflow that bridges AI workflows which can be used to communicate directly to a trading platform/broker like metatrader 5

## Use cases are many:

Try automating TradingView alerts into live MT5 trades, building a custom trading bot that sends trade execution signals to MT5 via webhooks, or creating a centralized signal management system for multiple trading strategies these features are just the beggining!

## Good to know

* **Always test on demo accounts first** - start with 1-2% risk before considering any live deployment
* This workflow uses **unauthenticated webhook endpoints by default** - you must add authentication (API keys, OAuth) before any production use
* Signals are stored in **n8n's in-memory static data** - they will be lost if n8n restarts unless you implement persistent storage
* **MT5 WebRequest whitelist required** - you must add all webhook URLs to MT5's allowed URLs list (Tools → Options → Expert Advisors)
* The workflow requires a **custom MT5 Expert Advisor (EA)** that polls the GET endpoint every 5 seconds to fetch pending signals
* This is designed for **local machine or private VPS deployment only** - not suitable for public cloud without significant security hardening
* **No automatic signal expiration** - old signals will accumulate without manual cleanup or additional workflow logic
* Compatible with standard MT5 brokers that support automated trading and WebRequest functionality

## How it works

* **Signal Reception**: The "Receive Signal (POST)" webhook accepts trading signals containing asset, entry price, stop loss, take profit, and risk percentage, then passes them to the "Store Signal" Code node
* **Signal Storage**: The Code node creates a unique signal ID with timestamp, stores it in n8n's workflow static data with "pending" status, and returns a success response with the signal ID
* **Queue Polling**: The "Get Pending Signals (GET)" webhook is polled every 5 seconds by your MT5 Expert Advisor to check for new signals
* **Signal Retrieval**: The "Fetch Pending Signals" Code node filters all stored signals to return only those with "pending" status as a JSON array
* **Market Orders**: The "Market Order (POST)" webhook accepts instant-execution orders with direction (BUY/SELL), risk percentage, and stop loss in pips, calculating SL/TP prices automatically
* **Limit Orders**: The "Limit Order (POST)" webhook handles pending orders with specific entry prices, converting pip-based SL/TP into actual price levels for both standard and JPY pairs
* **Trade Confirmation**: After the MT5 EA executes a trade, it sends the signal ID to the "Confirm Signal Processed (POST)" webhook, which marks the signal as "processed" and removes it from the pending queue
* **Emergency Cleanup**: The "Clear all signals (POST)" webhook provides a reset function to remove all signals from the queue, useful for testing or when signals get stuck

## How to use

* Import this workflow into your n8n instance and activate it by toggling the switch in the top-right corner
* Copy all webhook URLs from each Webhook node (click the node to view the production URL)
* Configure your MT5 Expert Advisor with the correct webhook URLs (SIGNAL_URL for GET requests, CONFIRM_URL for POST confirmations)
* Add all webhook URLs to MT5's WebRequest whitelist (Tools → Options → Expert Advisors → "Allow WebRequest for listed URL")
* Restart MT5 after adding URLs to the whitelist to ensure they're loaded properly
* Test the workflow by sending a test signal using curl or Postman: `curl -X POST http://127.0.0.1:5678/webhook/mt5-signal -H "Content-Type: application/json" -d "{\"asset\": \"EURUSD\", \"risk\": 2, \"entry\": 1.0850, \"sl\": 1.0830, \"tp\": 1.0900}"`
* Verify the signal appears when checking the GET endpoint: `curl http://127.0.0.1:5678/webhook/mt5-signals`
* Attach the MT5 EA to any chart (the symbol doesn't matter - it monitors all symbols) and enable Auto Trading in MT5
* Monitor the MT5 Experts log to confirm the EA is polling every 5 seconds and executing trades correctly

## Requirements

* **n8n instance** running locally or on a private VPS (version 1.x recommended)
* **MetaTrader 5 terminal** installed with a demo or live account logged in
* **Custom MT5 Expert Advisor** compiled and loaded (MQL5 code that polls the webhook and executes trades)
* **Auto Trading enabled** in MT5 (Tools → Options → Expert Advisors → "Allow Algorithmic Trading")
* **WebRequest permissions** configured in MT5 for all webhook URLs
* Basic understanding of **REST APIs, webhooks, and trading concepts** (orders, SL/TP, position sizing)

## Customising this workflow

* Add **authentication middleware** to all webhook endpoints using HTTP Authentication or custom API keys for security
* Implement **persistent storage** by replacing static data with a database node (PostgreSQL, MySQL) or external storage service
* Create an **automatic signal cleanup workflow** that runs on a schedule to delete processed signals older than 24 hours
* Add **notification nodes** (Telegram, Discord, Email) to alert you when trades are executed or errors occur
* Implement **position size validation** in the Code nodes to cap maximum lot sizes or risk percentages
* Create an **asset whitelist** by adding validation logic to only accept signals for approved trading instruments
* Add **duplicate signal detection** to prevent the same signal from being processed multiple times
* Build a **signal analytics dashboard** by logging all signals to a database and visualizing execution metrics
* Try a popular use-case such as connecting this to a TradingView webhook to automate Pine Script strategy alerts directly into MT5 trades!
* Add tags for certain setups and or magic numbers for easier journaling later on

### Purchasing this N8N workflow comes with the AI trading assistant workflow too so it is sold together and vice versa as well along with the MQL code for the ExpertAdvisor listener all for the price of 120 usd total

## Questions?

If you have questions or need help with this workflow, feel free to reach out:

* elijahmamuri@gmail.com
* elijahfxtrading@gmail.com

---

**Important Disclaimer**: This workflow is provided for educational purposes and demo account testing only. It demonstrates technical concepts for signal routing and automation architecture. Always test thoroughly on demo accounts, implement proper security measures, and understand that automated trading involves substantial risk. No warranties, financial advice, or guarantees are provided. See the full disclaimer in the workflow sticky notes for complete terms.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
