# 📈 Generate dividend income reports via Telegram with Google Gemini

> ⚡ **7 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow listens for Telegram messages, validates the sender, parses an investment amount and risk strategy, builds a predefined dividend ETF/stock allocation, calculates estimated yield and income, and uses Google Gemini to format a concise portfolio report that it sends back in Telegram.

## How it works
1. Triggers when a new Telegram message is received.
2. Checks the Telegram chat ID against an allowlist to ensure only an approved user can run the workflow.
3. Parses the message text into investment capital and a strategy (conservative, moderate, or aggressive) and sends a Telegram “typing” action while processing.
4. Builds a strategy-based portfolio from predefined tickers and allocations, enriches each holding with preset dividend yield and risk values, and calculates invested amount plus monthly and annual income per holding.
5. Aggregates the holdings into a single portfolio summary with total income and overall portfolio yield.
6. Uses Google Gemini via an AI Agent prompt to generate a Telegram-ready report based strictly on the calculated portfolio data.
7. Sends the formatted DividendIQ report back to the configured Telegram chat.

## Setup
1. Create a Telegram bot with @BotFather, add your Telegram credentials in n8n, and set the workflow to use your bot.
2. Update the allowed Telegram chat ID in the authentication check and in the Telegram nodes that send the typing indicator and the final message.
3. Add Google Gemini (PaLM) API credentials for the chat model, or replace the model with OpenAI and update the AI Agent accordingly.
4. If desired, edit the predefined tickers, allocations, yields, and risk labels in the code steps to match your preferred portfolio universe.

## Requirements
- n8n Cloud or Self-Hosted n8n
- Telegram Bot Token (for receiving portfolio requests and delivering results)
- Google Gemini API Key or OpenAI API Key (for AI-generated portfolio summaries)

## Customization
- Modify portfolio strategies (Conservative, Moderate, Aggressive) to match your investment philosophy.
- Add or replace dividend stocks, ETFs, REITs, and income-focused assets.
- Adjust portfolio allocations and weightings for different risk levels.
- Replace Telegram with Slack, Discord, WhatsApp, Email, or other notification channels.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
