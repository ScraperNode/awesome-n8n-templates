# 📈 CoinGecko crypto price forecasting pipeline with Gemini AI, Decodo, and Gmail

> ⚡ **149 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Automated Crypto Forecast Pipeline using Decodo and Gmail

Sign Up for Decodo [HERE](https://visit.decodo.com/discount) for discount

This template scrapes CoinGecko pages for selected coins, converts metrics into clean JSON, stores them in an n8n Data Table, generates 24-hour direction forecasts with Gemini, and emails a concise report.

## Who’s it for?
Crypto watchers who want automated snapshots, forecasts, and a daily email—without managing a full data stack.

## How it works
1. 30-min schedule loops coins, scrapes CoinGecko (Decodo), parses metrics, and upserts to Data Table.
2. 18:00 schedule loads last 48h data.
3. Gemini estimates next-24h direction windows.
4. Email is rendered (HTML + plain text) and sent.

## How to set up
- Add [Decodo](https://visit.decodo.com/discount), Gmail, and Gemini credentials.
- Open **Configure Coins** to edit tickers.
- Set Data Table ID.
- Replace recipient email.
- (Self-host only) Community node **Decodo** required. @decodo/n8n-nodes-decodo (community)

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
