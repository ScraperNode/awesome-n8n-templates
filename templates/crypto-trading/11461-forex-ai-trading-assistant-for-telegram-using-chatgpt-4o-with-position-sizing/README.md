# 📈 Forex AI trading assistant for Telegram using chatGPT-4o (with Position Sizing)

> ⚡ **139 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# MT5 AI Trading Assistant - Telegram Bot Workflow with position sizing capabilities

Open trades for forex/xauusd/gold with this n8n template. It demonstrates how to automate MetaTrader 5 trading executions through natural language commands via Telegram, enabling hands-free trade management with AI-powered intent classification and parameter parsing.

## Use cases are many

Try executing market orders right away when you see an opportunity using commands, setting up limit orders with precise entry points, or managing pending signals directly from your phone! This workflow handles everything from simple "buy EU 1% 30 pip SL and 3R TP" commands to complex limit orders with risk-reward calculations.

## Good to know

* **This template is for educational purposes only** - requires significant security hardening before live trading use
* **OpenAI API costs apply** - approximately $0.0001-0.0005 per message depending on complexity
* **Webhook endpoints are NOT authenticated by default** - you must add authentication before production deployment or if you want extra security
* **No built-in position size limits** - add validation to cap maximum risk percentage
* **MT5 Expert Advisor required** - this workflow only sends signals; you need a separate EA to execute trades
* **Local/VPS deployment recommended** - not suitable for public cloud without security hardening
* **Always test with demo accounts first** - automated trading involves substantial risk of loss

## How it works

* The Telegram Chat Trigger listens for incoming messages from authorized users in your Telegram bot
* A reaction emoji (👍) is immediately sent to acknowledge message receipt using the Telegram API
* The first AI classifier (GPT-4o mini) analyzes the message intent and categorizes it into six types: trade execution, trade inquiry, help request, signal query, signal clear, or off-topic
* For trade execution commands, a regex-based parser extracts parameters (asset, direction, risk, stop loss, take profit) from natural language
* If initial parsing is incomplete or confidence is low, an LLM fallback parser attempts to extract missing parameters with strict validation
* Complete trade parameters are routed through a Switch node to determine order type (market vs limit)
* Market orders trigger an HTTP POST to `webhook/mt5-market-order` with asset, direction, risk, SL, and TP parameters
* Limit orders include an additional entry price parameter and route to `webhook/mt5-limit-order`
* For signal queries, the workflow fetches pending signals from `webhook/mt5-signals` and formats the response
* Signal clearing commands POST to `webhook/mt5-clear-all` to remove all pending orders
* Trade execution success/failure is validated and appropriate confirmation messages are sent back to Telegram
* Help requests receive multi-part instructional messages with command examples and formatting guidelines

## How to use

* Set up your Telegram bot via BotFather and obtain your bot token
* Configure the Telegram credentials in both the Chat Trigger and all response nodes
* Add your OpenAI API key to the three "4o mini" language model nodes
* Deploy the four MT5 webhook endpoints (market-order, limit-order, signals, clear-all) on your local machine or VPS
* **Critical**: Implement authentication on all webhook endpoints before connecting to live MT5 accounts
* Test commands with demo account first: try "buy EU 1% 30 pip SL 3R TP" or "show pending signals"
* Consider adding user ID whitelisting in the "set credentials and params" node for access control
* Modify the AI prompts in the classifier nodes to adjust trading parameter validation rules

## Requirements

* Telegram Bot API account for receiving and sending messages
* OpenAI API key for GPT-4o mini language model (intent classification and parameter parsing)
* MetaTrader 5 platform with custom Expert Advisor that listens to webhook signals
* n8n instance running locally or on VPS (self-hosted or cloud)
* Basic understanding of forex trading concepts (pips, risk management, order types)

## Customising this workflow

* Add a user whitelist validation node after the Telegram trigger to restrict access to specific Telegram user IDs
* Implement maximum risk percentage caps (e.g., 5%) in the parameter validation nodes
* Create an asset whitelist to only allow specific currency pairs your broker supports
* Add audit logging by storing trade commands and execution results to a database
* Include trade confirmation mode: send preview before execution and wait for "confirm" message
* Integrate with position sizing calculators based on account equity and volatility
* Add webhook authentication headers (API keys or JWT tokens) to all HTTP request nodes
* Create a scheduled workflow to auto-expire pending signals after a certain time period
* Try a popular use-case such as connecting to TradingView alerts instead of manual Telegram commands

## Important Security Disclaimer

**⚠️ This workflow is NOT production-ready in its current form.**

Before using with live trading:

* Add authentication to all webhook endpoints
* Implement input validation for risk limits, asset whitelists, and parameter ranges
* Add rate limiting to prevent spam attacks
* Set up user authorization to restrict who can execute trades
* Test extensively with demo accounts for at least 3-6 months
* Understand that automated trading involves substantial risk of loss

This template is provided for **educational purposes only** and does not constitute financial advice. You are solely responsible for implementing security measures, testing thoroughly, and accepting all trading risks.

## Purchasing this N8N workflow comes with the Metatrader5 and N8N Integration for Forex and Gold Trading via Webhooks Workflow too so it is sold together and vice versa as well along with the MQL code for the ExpertAdvisor listener all for the price of 120 usd total

## Questions?

If you have questions or need help with this workflow, feel free to reach out:

* elijahmamuri@gmail.com
* elijahfxtrading@gmail.com

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
