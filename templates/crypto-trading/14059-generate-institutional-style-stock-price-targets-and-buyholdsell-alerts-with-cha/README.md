# 📈 Generate institutional-style stock price targets and BUY/HOLD/SELL alerts with ChatGPT and Gemini

> ⚡ **695 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

AI Institutional Stock Valuation Engine with Risk Scoring & Scenario Targets

A professional-grade AI equity analysis automation built on n8n that ingests live financial data and news, runs it through a dual-LLM valuation engine with a built-in tiebreaker, and delivers disciplined Bear/Base/Bull price targets, BUY/HOLD/SELL verdicts, and risk-adjusted confidence scores — stored in Google Sheets and pushed via Telegram.

Key Features

Dual-Model Parallel Analysis (ChatGPT + Gemini 2.5 Pro): Both models independently analyze each stock as senior equity analysts — conservative, risk-first, and evidence-based — then their outputs are compared for agreement.

Intelligent Tiebreaker System: When models disagree on verdict or their base price targets diverge by more than 20%, a dedicated tiebreaker round activates: ChatGPT takes the bull case, Gemini takes the bear case, and the final output is averaged — eliminating coin-flip results.

Live Financial Data Pipeline (Alpha Vantage): Automatically fetches balance sheet, income statement, cash flow, company profile, and real-time price — rate-limited with Wait nodes to respect API quotas across batch runs.

News Sentiment Ingestion (Seeking Alpha): Parses article feeds (XML/JSON), cleans and normalizes news text, and feeds it into the valuation prompt as qualitative context alongside hard financials.

Smart Caching Layer: Checks for valid cached financial data before hitting APIs — reduces redundant calls, speeds up batch processing, and cuts API costs for unchanged fundamentals.

Piotroski F-Score Integration: Calculates a fundamental quality score from balance sheet signals to separate financially strong companies from deteriorating ones — feeds directly into the confidence index.

Bear / Base / Bull Scenario Targets: Every stock receives three price targets with full institutional logic: sector-aware multiples, phase recognition (growth vs. mature), implied P/E sanity checks, and discount rate tiering.

Confidence Scoring (20–90): Combines F-Score, model agreement gap, news sentiment, and financial health into a single index — giving you a read on how conviction-worthy the output is.

Google Sheets I/O: Reads a watchlist of tickers from a sheet, upserts results (insert or update by row), and maintains a full historical log of valuations per stock per date.

Telegram Delivery: Pushes formatted valuation summaries directly to a Telegram channel or group after each batch cycle completes.

Ideal For

Portfolio managers and analysts running nightly watchlist reviews
Retail investors who want institutional-grade structure, not chatbot guesses
Fintech builders integrating a structured valuation API into their stack
Educators and research teams studying systematic equity valuation frameworks
Technical Notes

Rate Limiting: Wait nodes are placed before each Alpha Vantage API call to prevent throttling during multi-ticker batch runs. Adjust wait durations based on your API plan tier.

API Requirements: Alpha Vantage (financial data), OpenAI (ChatGPT), Google Gemini, Seeking Alpha (news), Google Sheets OAuth.

Caching: Financial fundamentals are cached and validated before fetching — cache TTL logic is handled via a dedicated cache lookup and validity check branch.

Tiebreaker Logic: Triggered when BUY/SELL/HOLD verdicts differ OR when pt_base gap exceeds 20% of current price — ensures no ambiguous output reaches the sheet without resolution.

Use Cases

Nightly Watchlist Runner — Schedule daily runs across a portfolio, log targets and verdicts to Sheets, alert via Telegram when signals shift.
Confidence Threshold Alerts — Trigger notifications only when confidence drops below a threshold or a new BUY signal appears.
API Backend — Expose results via webhook for downstream dashboards, apps, or research tools.
Backtesting Feed — Build a historical record of AI-generated targets vs. actual price movement over time.
Why This Is Different

Most AI stock tools are wrappers around a single prompt. This workflow encodes a full institutional valuation pipeline: dual-model consensus, a structured tiebreaker, scenario banding, F-Score filtering, and news-aware risk extraction — all running automatically on a schedule with no manual input required. The output isn't a narrative guess. It's a structured, defensible JSON record designed to be acted on.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
