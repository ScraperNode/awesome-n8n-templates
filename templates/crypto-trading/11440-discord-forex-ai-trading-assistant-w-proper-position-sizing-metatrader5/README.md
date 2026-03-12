# 📈 Discord Forex AI trading assistant w/ proper position sizing (metatrader5)

> ⚡ **201 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# AI Trading Assistant with Metatrader5 and position sizing capabilities 

Trade or buy/sell forex and xauusd/gold assets with this n8n template. It demonstrates an AI-powered Discord bot that monitors trading commands in a private server channel and automatically executes them on MetaTrader 5, using natural language processing to parse flexible trade syntax and manage signal queues with correct position sizing for lot sizes.

## Use cases are many:

Try creating a private Discord trading room where you can execute MT5 trades with simple messages like "buy EU 1% 30 pip SL 3R TP", building a shared trading server where team members can post signals that auto-execute on everyone's MT5, or developing a trading journal bot that logs and executes your strategy calls in real-time!

## Good to know

* **Always test on demo accounts first** - this bot executes real trades based on Discord messages, so thorough testing is critical
* Requires **OpenAI API key** for natural language processing (GPT-4o-mini model) - costs approximately $0.0001-0.0003 per trade command
* **Discord OAuth2 authentication required** - you'll need to create a Discord application and configure webhook permissions
* The workflow **polls Discord every 7 seconds** by default - adjust the Schedule Trigger interval to balance responsiveness vs. API rate limits
* Only processes messages from **specified users without emoji reactions** - prevents duplicate processing and allows filtering by username
* **MT5 Trading Signal Handler workflow must be running** - this bot sends orders to the webhook endpoints from the companion workflow
* Supports both **market orders** (instant execution) and **limit orders** (pending at specific price)
* Uses **two-stage parsing**: regex-based parser for speed, with LLM fallback for complex or ambiguous commands
* **No message history** - only processes the most recent Discord message per polling cycle
* Built-in **signal management commands** - users can check pending signals or clear the queue via natural language

## How it works

* **Scheduled Polling**: The Schedule Trigger fires every 7 seconds, setting Discord server ID and channel ID credentials, then fetching the most recent message from the specified channel
* **Message Filtering**: The workflow filters messages to only process those from the specified username (e.g., "elijahfx") that haven't been reacted to yet, preventing duplicate processing
* **Processing Indicator**: Once a valid message is detected, the bot reacts with a 🔄 emoji to show it's working, providing immediate user feedback
* **AI Classification**: The first LLM (GPT-4o-mini) classifies the message intent into six categories: trade_execution, trade_inquiry, signal_query, signal_clear, help_request, or off_topic
* **Regex Parsing**: For trade execution messages, a JavaScript Code node attempts to extract parameters using regex patterns, detecting order type (market vs limit), direction (buy/sell), asset shortcuts (EU→EURUSD, GU→GBPUSD), risk percentage, stop loss, and take profit
* **LLM Fallback**: If the regex parser can't confidently extract all required parameters (needs_llm_review: true), a second LLM validates completeness and extracts missing fields, ensuring flexible syntax handling
* **Parameter Validation**: The workflow checks if all required parameters are present - market orders need direction, asset, risk%, and SL pips; limit orders additionally require entry price
* **Order Type Routing**: A Switch node routes complete orders to the appropriate HTTP endpoint - market orders to `/webhook/mt5-market-order`, limit orders to `/webhook/mt5-limit-order`
* **MT5 Execution**: HTTP Request nodes send the parsed parameters to your local MT5 webhook endpoints, which execute the trades via the companion MT5 Trading Signal Handler workflow
* **Response Handling**: The workflow receives confirmation from MT5, then posts a Discord message confirming successful execution or reporting errors with details
* **Signal Management**: For signal_query commands, the bot fetches and displays pending signals from the MT5 queue; for signal_clear commands, it purges all pending signals via HTTP request
* **Help System**: When users request help, the bot posts comprehensive instructions covering trade syntax, asset shortcuts, required parameters, and example commands
* **Query Handling**: Non-trade questions about trading are answered directly by the AI, providing a conversational assistant experience

## How to use

* Create a Discord bot application at discord.com/developers and obtain OAuth2 credentials with message read/write and reaction permissions
* Configure Discord OAuth2 credentials in all Discord nodes (use the same credential across all nodes for consistency)
* Set your OpenAI API key in the three "4o mini" nodes for LLM processing
* Update the "set credentials and params" node with your Discord server ID and channel ID (right-click in Discord with Developer Mode enabled to copy IDs)
* Ensure the MT5 Trading Signal Handler workflow is imported, activated, and running on the same n8n instance (default: localhost:5678)
* Activate this workflow and verify the Schedule Trigger is set to your desired polling interval (7 seconds default)
* In the "only get user's message that has no reacts" Filter node, change the username from "elijahfx" to your Discord username
* Post "help" in your Discord channel to test connectivity and receive the command reference guide
* Try a test market order: `buy EU 1% 30 pip SL 3R TP` and watch for the 🔄 reaction and confirmation message
* Test a limit order: `buy limit EU at 1.0850 1% risk 30 pip SL 2R TP`
* Query pending signals: `show me pending signals` or `any open signals?`
* Clear the queue: `clear all pending signals` or `cancel all signals`

## Requirements

* **n8n instance** running locally or on a private VPS (cloud-hosted n8n may have network restrictions for localhost webhooks)
* **Discord bot application** with OAuth2 credentials and appropriate permissions (read messages, send messages, add reactions)
* **OpenAI API account** with access to GPT-4o-mini model (approximately $0.15 per 1 million input tokens)
* **MT5 Trading Signal Handler workflow** running on the same n8n instance (provides webhook endpoints)
* **Discord server** where you have admin permissions to add the bot
* **MetaTrader 5 terminal** with the custom EA running and polling the signal queue
* Basic understanding of **Discord bot setup, n8n workflows, and trading concepts**

## Customising this workflow

* **Add multiple user support** by removing the username filter or converting it to a whitelist of approved traders
* **Implement authentication** by checking for specific Discord roles before processing trade commands (prevents unauthorized trading)
* **Add trade logging** by inserting a database node (PostgreSQL, Airtable) after successful execution to maintain a trade journal
* **Create Discord embeds** instead of plain text responses using Discord's embed formatting for richer, more professional replies
* **Add risk limits** in a Code node before HTTP requests to cap maximum position sizes or enforce daily loss limits
* **Build a dashboard** by connecting to Google Sheets or Notion to track all executed trades, win rates, and performance metrics
* **Implement approval workflows** where limit orders post to a separate channel for review before execution
* **Add TradingView alerts** as an alternative input by creating a webhook trigger that accepts TradingView JSON payloads
* **Create strategy templates** where users can save and recall complete trade setups with a single command like "execute strategy A"
* **Enable multi-account trading** by routing orders to different MT5 instances based on user roles or command prefixes
* Try a popular use-case such as building a signal subscription service where premium Discord members get auto-execution while free members only see the signals!

## Purchasing this N8N workflow comes with the Metatrader5 and N8N Integration for Forex and Gold Trading via Webhooks Workflow too so it is sold together and vice versa as well along with the MQL code for the ExpertAdvisor listener all for the price of 120 usd total

## Questions?

If you have questions or need help with this workflow, feel free to reach out:

* elijahmamuri@gmail.com
* elijahfxtrading@gmail.com

---

**Important Disclaimer**: This workflow is provided for educational purposes and demo account testing only. It demonstrates how to build Discord bots with AI-powered natural language processing and webhook integrations. Always test thoroughly on demo accounts, implement proper authentication and security measures, and understand that automated trading involves substantial risk. The bot executes trades based on Discord messages - ensure only authorized users have access. No warranties, financial advice, or guarantees are provided. See the full disclaimer in the workflow for complete terms.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
