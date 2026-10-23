# 📈 AI Forex Trader using claude/gpt, MT5 & News Sentiment Analysis

> ⚡ **247 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automate Your Forex Portfolio with AI: GPT-4o or Claude + MT5 + Live News Sentiment

Harness real-time news, multi-source sentiment scoring, and geopolitical risk intelligence to manage your forex portfolio smarter — all automated inside n8n.

This n8n template demonstrates a fully AI-powered forex portfolio management workflow that continuously monitors breaking news, economic events, and geopolitical developments to deliver intelligent trading bias recommendations and risk alerts across your open positions.

## Use cases are many:

Try automating your pre-session market briefing so it lands in your Telegram before the London open, building a risk-adjusted watchlist that updates in real time as geopolitical events unfold, or connecting this to your MT5 account to auto-flag overexposed pairs before entering new trades.

## Good to know

- This workflow is designed for educational and research purposes — always apply your own risk management before acting on any AI-generated output
- AI sentiment scoring is directional guidance only, not a trade signal — use it alongside your own confluence analysis
- News API rate limits vary by plan; free tiers may limit the volume and frequency of headlines fetched
- Geopolitical risk data can lag real-time events; always cross-reference with live news sources for high-impact events
- This workflow requires either an OpenAI or Anthropic API key — costs apply per analysis run (typically less than $0.01 per session)
- Compatible with MetaTrader 5 accounts via HTTP API — ensure your broker allows WebRequest functionality

## How it works

- **News Ingestion**: A scheduled trigger (default: every 30 minutes) fetches the latest forex and financial headlines from your configured news source (NewsAPI, Finnhub RSS, or custom feeds)
- **AI Sentiment Analysis**: Each news item is passed to an AI agent (Claude or GPT-4o) which scores it on a -10 to +10 scale for each major currency pair — EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, and XAU/USD
- **Geopolitical Mapping**: The AI agent extracts geopolitical signals — sanctions, elections, central bank statements, conflict zones — and maps their directional impact to affected currency pairs
- **Portfolio Correlation**: Aggregated sentiment scores are cross-referenced with your open position data fetched from MetaTrader 5 via HTTP, flagging pairs where your exposure conflicts with the current sentiment direction
- **Intelligence Report**: A consolidated portfolio briefing is compiled with overall market bias (Bullish/Bearish/Neutral per pair), risk flags, and recommended pair focus for the next session
- **Delivery**: The structured report is pushed to your Telegram or Discord in a clean, readable format — ready to review before you sit down to trade

## How to use

- Import this workflow into your n8n instance and activate it by toggling the switch in the top-right corner
- Configure your news source credentials in the designated sticky note — paste your NewsAPI key or preferred RSS feed URL
- Add your AI model credentials (OpenAI or Anthropic) via n8n's credential manager
- Define your watched currency pairs and sentiment threshold values in the configuration sticky note at the top of the workflow
- Optionally connect your MetaTrader 5 REST API endpoint to pull live open positions — or leave blank to run in sentiment-only mode
- Connect your Telegram bot token + chat ID or Discord webhook URL in the notification node
- Run a manual test first to confirm news is being fetched and AI responses are formatted correctly
- Set the schedule trigger to your preferred interval — every 30 minutes ahead of the London or New York open is recommended

## Requirements

- n8n instance (self-hosted or cloud)
- OpenAI API key (GPT-4o) OR Anthropic API key (Claude Sonnet)
- NewsAPI.org API key OR a valid financial RSS feed URL
- Telegram bot token + chat ID OR Discord webhook URL for notifications
- MetaTrader 5 account with REST API or WebRequest enabled (optional — for live portfolio data)
- Basic understanding of forex concepts (currency pairs, sentiment, position sizing)

## Customising this workflow

- Swap the news source to a premium data provider like Finnhub, Alpha Vantage, or Bloomberg RSS for higher-quality signals
- Add a Forex Factory economic calendar scraper to include high-impact news events in the sentiment scoring
- Replace the Telegram/Discord output with a Google Sheets log to build a historical sentiment journal over time
- Connect to MT5's WebRequest API to automatically reduce position size when AI sentiment strongly opposes your open trade
- Modify the AI prompt to focus on specific session pairs — e.g. only GBP/USD and EUR/GBP during the London session
- Add a confidence threshold — only fire alerts when the sentiment score exceeds ±7 to reduce low-signal noise
- Build a weekly summary report by accumulating daily sentiment logs and generating a Friday briefing via a separate workflow branch
- Add tags for specific setups or pair correlations for easier backtesting and journaling later on

## Questions?

If you have questions or need help with setting up this workflow, feel free to reach out:

gmail: elijahfxtrading@gmail.com
telegram: @ElijahBuildsAI

### Purchasing this N8N workflow comes with the Brain workflow, the webhook handler, and the MQL5 Expert Advisor file as well so it is sold together. Everything you need for this to work on your PC or VPS is included for 399 usd.

**Important Disclaimer**: This workflow is provided for educational purposes and demo/paper trading use only. It demonstrates AI-assisted market analysis and should not be interpreted as financial advice. Always apply your own judgment, risk management rules, and due diligence before making any live trading decisions.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
