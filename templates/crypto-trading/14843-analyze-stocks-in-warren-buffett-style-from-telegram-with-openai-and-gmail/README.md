# 📈 Analyze stocks in Warren Buffett style from Telegram with OpenAI and Gmail

> ⚡ **431 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This workflow turns a simple Telegram message into a full stock research report inspired by Warren Buffett’s value investing approach. A user sends a ticker symbol such as AAPL, MSFT, or AMZN, and the workflow validates the input, runs AI-powered research, performs discounted cash flow calculations, and sends a polished HTML report to Gmail with a final verdict.

It is designed as a reusable finance analysis template for creators, developers, and automation builders who want to combine Telegram, AI agents, live research, and email delivery in one workflow. Templates in n8n are intended to help users learn, reuse best practices, and quickly adapt a workflow to their own setup, so this version is structured to be easy to follow and reconfigure after import.

## What this workflow does
- Receives a stock ticker from Telegram and cleans the input before processing.

- Validates the ticker format and stops invalid requests early with a helpful reply.

- Uses an AI agent to generate a Buffett-style investment analysis.

- Uses SerpAPI for live company and market research.

- Uses a calculator tool for DCF and margin-of-safety math.

- Sends the final HTML report to Gmail and confirms completion in Telegram.

## Setup instructions
1. Import the workflow into n8n and reconnect your credentials for Telegram, OpenAI, SerpAPI, and Gmail. n8n templates are designed to be imported and then configured in the user’s own environment.

2. Open the Extract Ticker, Chat ID & Email node and replace YOUR_EMAIL@gmail.com with your destination email address.
 
3. Create or connect your Telegram bot credentials, then test by sending a stock ticker like AAPL or MSFT.

4. Connect your Gmail OAuth2 account so the workflow can send the HTML report email.

5. Activate the workflow and run a live test from Telegram.

## Requirements
- Telegram Bot API credentials
- OpenAI API credentials
- SerpAPI credentials
- Gmail OAuth2 credentials

## Best for
- Finance research demos
- AI agent workflow examples
- Telegram-to-email automations
- Value investing and stock analysis use cases

## 🔗 Nodes Used

Telegram, Telegram Trigger, Gmail, AI Agent, OpenAI Chat Model, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
