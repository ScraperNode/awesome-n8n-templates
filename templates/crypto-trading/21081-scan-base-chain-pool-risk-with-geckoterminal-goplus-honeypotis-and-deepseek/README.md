# 📈 Scan Base chain pool risk with GeckoTerminal, GoPlus, Honeypot.is, and DeepSeek

> ⚡ **0 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow exposes two web pages that let you enter a Base chain pool address, fetches market and pool data from GeckoTerminal plus token security checks from GoPlus and Honeypot.is, and uses DeepSeek to generate a risk verdict and render an interactive chart and analysis report.

## How it works
1. Receives a GET request on the landing-page webhook and returns an HTML form for entering a Base pool address.
2. Receives a GET request on the analysis webhook with `address`, `tf`, and `agg` query parameters and normalizes defaults for missing values.
3. Pulls OHLCV candles, recent trades, and pool metadata for the provided pool from the GeckoTerminal API.
4. Extracts the base token contract address from the pool metadata and queries GoPlus Labs and Honeypot.is for token security and honeypot simulation results.
5. Aggregates candles and trades into summary statistics and builds a structured prompt that instructs DeepSeek to return a strict JSON risk assessment.
6. Sends the prompt to the DeepSeek Chat Completions API and parses the returned JSON verdict, confidence, tags, analysis, and suggestion.
7. Renders an HTML results page with the AI assessment, a Lightweight Charts candlestick/volume chart, and a recent-trades table, then returns it to the browser.

## Setup
1. Create a DeepSeek API credential using HTTP Header Auth with `Authorization: Bearer <your_api_key>` and select it in the DeepSeek request step.
2. Activate the workflow and copy the production URL for the `/base-pool-scanner` webhook to use as your entry point.
3. Ensure your n8n instance can make outbound HTTPS requests to `api.geckoterminal.com`, `api.gopluslabs.io`, `api.honeypot.is`, and `api.deepseek.com`, and allow access to the `unpkg.com` CDN if you want the embedded chart to load.
4. Optionally adjust the default timeframe (`tf`) and aggregation (`agg`) values in the analysis URL parameters to match the candle granularity you want.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
