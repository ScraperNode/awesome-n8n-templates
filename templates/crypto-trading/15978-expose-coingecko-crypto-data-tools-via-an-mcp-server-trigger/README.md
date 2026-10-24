# 📈 Expose CoinGecko crypto data tools via an MCP server trigger

> ⚡ **23 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow exposes CoinGecko data retrieval as an MCP server in n8n, letting an MCP client call multiple CoinGecko tools to fetch coin details, prices, tickers, market charts, candlesticks, history, and events via a single webhook-based trigger. 

## How it works
1. Receives an MCP request via the CoinGecko Tool MCP Server trigger.
2. Routes the request to the appropriate CoinGecko tool based on the MCP tool call.
3. Fetches coin metadata when the client requests coin details.
4. Retrieves price and market data from CoinGecko, including tickers, market prices, and market charts.
5. Pulls time-series data from CoinGecko, including candlesticks and historical snapshots.
6. Returns the CoinGecko API response back to the MCP client.

## Setup
1. Configure your MCP client to connect to this workflow’s MCP trigger endpoint (copy the production webhook URL from the trigger).
2. Add and select CoinGecko credentials in n8n if your CoinGecko plan requires an API key.
3. Review each CoinGecko tool node’s parameters (such as coin ID, vs currency, and time range) and adjust defaults if needed for your use case.

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
