# 📈 Scan biotech news for catalyst trades with FinBERT, Alpaca, and Gemini

> ⚡ **78 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

Automatically scan major financial newswires for biotech catalyst events, score them with AI sentiment analysis, and surface ranked trade candidates — all without manual monitoring.

## Who's it for
Traders and quant hobbyists who follow biotech stocks and want an automated pipeline to flag high-probability catalyst events (FDA approvals, Phase 3 readouts, M&A) before the market fully reacts.

## How it works
The workflow runs four layers on a scheduled loop. Layer 0 polls PRNewswire, GlobeNewswire, and BusinessWire every minute and stores new articles in a data table. Layer 1 filters for biotech keywords, classifies the event type, and runs FinBERT sentiment analysis via HuggingFace — only PROCEED events advance. Layer 2 pulls real-time quotes and 20-day volume bars from Alpaca to calculate spread percentage and relative volume. Layer 3 sends qualifying candidates through a Gemini LLM prompt for final trade scoring and stores results.

## How to set up
1. Add your HuggingFace API credential in n8n
2. Add your Google Gemini API credential in n8n
3. Open the `Alpaca - latest bars` node and paste your Alpaca API key and secret
4. Create five data tables: `news_events`, `processed_events`, `trade_candidates`, `llm_analysis`, `market_snapshots`
5. Activate each schedule trigger

## Requirements
- n8n with Data Tables enabled (self-hosted or cloud)
- HuggingFace account (free tier)
- Alpaca Markets account (free tier)
- Google Gemini API key

## How to customize
Swap the GlobeNewswire RSS feed URL to target a different sector. Adjust the biotech keyword list in the `Biotech Keyword Filter` node. Tune the spread % and relative volume thresholds in `Eligibility Check` to tighten or loosen your trade criteria.

## 🔗 Nodes Used

HTTP Request, RSS Read, Webhook, Schedule Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
