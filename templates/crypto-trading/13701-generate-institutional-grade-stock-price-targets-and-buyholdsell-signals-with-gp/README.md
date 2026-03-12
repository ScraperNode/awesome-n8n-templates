# 📈 Generate institutional-grade stock price targets and BUY/HOLD/SELL signals with GPT-5, Gemini, Alpha Vantage and Google Sheets

> ⚡ **92 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

A professional AI equity analysis automation built on n8n that transforms structured financial data and real-time news into disciplined, risk-adjusted price targets and actionable BUY/HOLD/SELL signals — delivered through automation channels like Telegram or dashboards.

Key Features

Automated Fundamental & News Parsing: Ingests financial metrics and analyst-grade news streams into a unified valuation engine.

Phase-Aware Valuation Logic: Recognizes growth vs mature companies, applying appropriate valuation methods (EPS, revenue multiples, fundamentals) to avoid unrealistic targets.

Implied P/E Sanity Gate: Prevents misleading EPS-based valuations on growth/transition phase stocks.

Bear/Base/Bull Scenario Generation: Produces three price targets with institutional-standard bands and logic.

Risk & Confidence Scoring: Combines F-Score with qualitative risk extraction from news to produce a confidence index (20–90).

Structured JSON Output: Designed for automation, feeds dashboards, alerts, APIs, or downstream analytics.

Cross-Model Verification (optional): Works with multi-model LLM consensus (e.g., GPT + Gemini) for enhanced reliability.

Ideal For

Asset managers & analysts who want automated equity valuations

Retail platforms seeking a disciplined valuation engine

Fintech products integrating AI-powered stock insights

Educators and research teams needing structured valuation tools

⚙️ Technical Notes (Best Practice for Production)

Rate-Limit & Timers for Long Lists
If processing a long watchlist via HTTP requests (e.g., financial APIs, news APIs), you should add timers (Wait nodes) or rate-limit controls before each HTTP request to:

Respect API quotas & avoid throttling

Reduce workflow errors under heavy loads

Improve reliability for automated batch runs

This is especially important when using workflows that fetch quotes, historical data, or news articles for multiple stocks in sequence.

📌 Use Cases
🔹 Daily Watchlist Runner

Run nightly analysis on a portfolio and distribute targets + risk insights via Telegram or email.

🔹 API Feed

Expose JSON results via webhook/API for downstream apps and dashboards.

🔹 Research & Alerts

Trigger alerts when confidence shifts, price targets are breached, or news alters thesis.

🧠 Why This Is Valuable

Unlike simple “chat” bots that give generic responses, this workflow encodes institutional valuation discipline — no hallucinated price points, no fuzzy narratives — just structured, defensible outputs.

This makes it compelling to:

Professional users

Startup investors

SaaS subscription customers

Fintech integrators

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
