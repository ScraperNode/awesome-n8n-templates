# 📈 Track analyst target and rating drift with Yahoo Finance MCP, OpenAI, and Telegram

> ⚡ **53 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every weekday morning, pulls analyst price targets and consensus ratings for a stock watchlist via a self-hosted Yahoo Finance MCP server, stores daily snapshots in an n8n Data Table, and sends a Telegram digest only when targets or ratings drift beyond your threshold.

## How it works
1. Runs every weekday morning on a schedule.
2. Splits your comma-separated watchlist into one validated ticker per item and loads the last saved snapshot for each ticker from the n8n Data Table.
3. For each ticker, uses OpenAI with the Yahoo Finance MCP server tools to fetch current analyst mean price target, consensus rating, analyst count, and (if needed) the current price.
4. Validates and normalizes the returned numbers and rating vocabulary, compares them to the previous snapshot, and flags tickers whose target moved beyond the drift percentage or whose consensus rating changed.
5. Upserts today’s snapshot for every ticker into the `analyst_watch` Data Table so future comparisons always have a baseline.
6. If any tickers moved, composes one Markdown digest covering all movers and sends it to your Telegram chat; otherwise it exits without posting.

## Setup
1. Start the Yahoo Finance MCP server in HTTP mode (for example: `npx -y yahoo-finance-mcp-server@1.3.0 --http --host 0.0.0.0 --port 8931`) and ensure it is reachable from your n8n instance.
2. Create an n8n Data Table named `analyst_watch` with columns `ticker`, `seen_on`, `mean_target`, `consensus`, and `price`.
3. Add an OpenAI API credential and select the model you want to use in the OpenAI chat model node.
4. Add a Telegram credential, set your Telegram chat ID in Settings, and update the watchlist tickers, MCP URL, and drift percentage threshold to match your environment.

## Requirements
- Self-hosted n8n. The MCP server runs on your own machine, so an n8n Cloud instance cannot reach it.

## Additional info
The Yahoo Finance MCP server is open source and needs no API key, because Yahoo Finance data is free: https://www.npmjs.com/package/yahoo-finance-mcp-server. It exposes 13 tools (quotes, historical prices, company info, financial statements, analyst estimates and recommendations, options, holders, dividends, news, symbol search, market status), so the agent can be pointed at other questions without changing the workflow. Version 1.3.0 added the --http mode this template connects to; earlier versions are stdio-only, which the n8n MCP Client Tool node cannot reach.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
