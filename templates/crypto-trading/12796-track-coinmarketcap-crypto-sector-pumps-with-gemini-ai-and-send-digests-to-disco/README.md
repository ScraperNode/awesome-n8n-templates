# 📈 Track CoinMarketCap crypto sector pumps with Gemini AI and send digests to Discord

> ⚡ **31 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Who is this for?

Crypto traders, researchers, and investors who want to identify trending market narratives and sector rotations before they become mainstream news.

## What it does

Automatically detects which crypto sectors are gaining momentum by analyzing top gainers, groups tokens by narrative (AI, DeFi, Meme, Gaming, RWA, etc.), uses Gemini AI to research why each sector is pumping, and delivers a comprehensive digest to Discord.

**✅ Identifies Emerging Narratives!** — Automatically detects sector-wide pumps and researches the catalysts driving them.

## How it works

- Triggers on schedule (configurable - default: hourly)
- Fetches top 200 gainers sorted by 24h performance from CoinMarketCap
- Filters tokens with strict criteria: &gt;40% gain, &gt;$10M market cap, &gt;$1M volume
- Groups tokens into sectors using CoinMarketCap tags (AI, DeFi, Meme, Gaming, Layer1, Layer2, DePIN, RWA, Infrastructure)
- Creates research prompts for sectors with 2+ pumping tokens
- Gemini AI analyzes each sector for catalysts, news, and sustainability
- Generates formatted narrative digest with token performance and AI insights
- Splits long reports and sends to Discord (handles 2000 char limit)

## Set up steps

- Get a CoinMarketCap API key from [CoinMarketCap](https://coinmarketcap.com/api/) (free tier: 10K credits/month)
- Get a Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)
- Create a Discord webhook in your server (Server Settings → Integrations → Webhooks)
- Connect CMC API key as Header Auth credential (Header Name: `X-CMC_PRO_API_KEY`) to the **Fetch Top 200 Gainers from CMC** node
- Connect Gemini credentials to the **Gemini Sector Research** node
- Connect Discord webhook to the **Send to Discord** node
- Optionally adjust filter thresholds in the **Filter Top Gainers** node (MIN_PERCENT_CHANGE, MIN_MARKET_CAP, MIN_VOLUME)

Setup time: ~10 minutes

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
