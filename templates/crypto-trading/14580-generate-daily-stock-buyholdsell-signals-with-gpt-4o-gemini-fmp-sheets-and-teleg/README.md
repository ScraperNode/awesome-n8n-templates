# 📈 Generate daily stock BUY/HOLD/SELL signals with GPT-4o, Gemini, FMP, Sheets and Telegram

> ⚡ **269 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

Overview
This is a production-grade, fully automated stock analysis system built entirely in n8n. It combines institutional-level financial analysis, dual AI model consensus, and a self-improving backtesting loop — all running on autopilot, every single day.

Every morning, the engine screens the US stock market, collects deep financial data, reads the latest news, and sends two independent AI analysts (GPT-4o and Gemini 2.5 Pro) to debate each stock. When they disagree, a structured bull-vs-bear tiebreaker is triggered. The result: a daily ranked list of BUY, HOLD, and SELL signals — with price targets, confidence scores, and risk assessments — delivered straight to your Telegram.

A companion backtesting workflow runs silently in the background, grading every past signal 7 days after it was issued and sending you a weekly performance report every Monday morning.

This is not a toy workflow. This is the kind of system that would cost thousands of dollars to build as a SaaS — running entirely on your own infrastructure.

✨ What Makes This Template Unique
🤖 Dual AI Consensus Engine — GPT-4o and Gemini 2.5 Pro analyze every stock independently. Their outputs are compared, and consensus is only declared when both models agree within a tight price target band
⚖️ Structured Tiebreaker Architecture — When models disagree, a bull analyst (GPT-4o) and a bear analyst (Gemini) re-run with opposing mandates. The final verdict is derived from their averaged price target plus a Piotroski F-Score gate
📊 Institutional-Grade Financial Modeling — Piotroski F-Score (9-point), Graham Number intrinsic value, DCF anchor, TTM revenue & margins, net debt, FCF, revenue growth YoY, and sector-relative P/E valuation — all computed automatically
📰 Live News Sentiment — Latest headlines per stock are fed into the AI prompt, adjusting confidence scores in real time based on positive or negative sentiment signals
🎯 Scenario Price Targets — Every stock gets three targets: pt_bear (downside), pt_base (fair value), pt_bull (upside case), giving you a full risk/reward picture
🔁 Self-Improving Backtester — Every signal is automatically graded 7 days later. Win rate, average return, and best/worst calls are reported every Monday via Telegram
📡 Smart Screener with Sector Diversity — Scores 100 candidates daily using volume health, market cap sweet spot ($5B–$100B), and beta gradient — with a sector diversity cap so you never end up with 15 tech stocks
💾 Full Google Sheets Audit Trail — Every signal, confidence score, rationale, and outcome is logged permanently for your own review and analysis
📋 Workflow Breakdown
Workflow 1 — AI Institutional Stock Valuation Engine
Phase	What Happens
Phase 1 — Screening	FMP screener fetches 100 US stocks. Score_and_Prefilter scores and selects the top 20 with sector diversity
Phase 2A — Financial Data	13 FMP endpoints per stock: income, balance sheet, cash flow, ratios, profile, sector P/E
Phase 2B — News	Latest headlines fetched and passed into AI context
Phase 3 — AI Round 1	GPT-4o and Gemini 2.5 Pro analyze in parallel. Verdicts and price targets compared
Phase 3 — Tiebreaker	Bull vs Bear re-analysis when models disagree or price target gap &gt; 25%
Phase 4 — Strong Buy Alert	Stocks with BUY verdict + upside ≥ 20% + confidence ≥ 65 trigger an immediate alert
Phase 5 — Storage & Summary	All results written to Google Sheets. Daily Telegram summary sent with top picks
Workflow 2 — Signal Outcome Checker & Weekly Backtester
Trigger	What Happens
Daily 8AM	Finds signals that are 7 days old, fetches current price, grades WIN / LOSS / NEUTRAL, writes outcome back to sheet
Monday 9AM	Computes weekly win rate, average return on BUY signals, best and worst call — sends full report to Telegram
🛠️ What You Need
Requirement	Details
FMP API Key	Financial Modeling Prep — Starter plan or above (~$25/mo). Covers all financial data, screener, news, and historical prices
OpenAI API Key	GPT-4o access via API or ChatGPT Plus
Google Gemini API Key	Gemini 2.5 Pro via Google AI Studio (free tier available)
Google Sheets	One sheet named Stock_Signals with the column headers listed in the setup guide
Telegram Bot	Create via @BotFather in 2 minutes. Free
n8n	Self-hosted or n8n Cloud
Estimated running cost: $0.43/day in AI tokens for 20 stocks ($10–$13/month). FMP and Telegram are the only other costs.

⚙️ Setup Time
~30–45 minutes for a first-time setup. All credentials, Sheet IDs, and API keys are clearly labeled in each node. No coding required — every parameter is documented.

📈 Example Daily Telegram Output
📊 Daily Valuation Report — 2026-04-02
Stocks Analyzed: 20

🟢 BUY:  7   🟡 HOLD: 10   🔴 SELL: 3

🚨 STRONG BUY ALERTS:
• NVDA — Upside 34% | Confidence 81 | F-Score 7/9
• MSFT — Upside 22% | Confidence 74 | F-Score 8/9

Top Picks:
1. NVDA  pt_base $172  | pt_bull $198  | pt_bear $124
2. MSFT  pt_base $485  | pt_bull $530  | pt_bear $410
3. AMGN  pt_base $318  | pt_bull $355  | pt_bear $275

📊 Example Weekly Backtest Report
📈 Weekly Signal Performance — Week of Mar 31
Signals Graded: 18

✅ Win Rate: 72%  |  BUY Accuracy: 78%
📈 Avg Return on BUY signals: +4.3%

🏆 Best Call: NVDA +11.2% (BUY ✅)
💔 Worst Call: BA -6.8% (BUY ❌)

💡 Who Is This For?
Retail investors who want institutional-quality analysis without paying for a Bloomberg terminal
Quantitative traders looking for a customizable, data-driven signal generation pipeline
n8n builders who want to see a real-world, production-grade multi-node workflow in action
AI enthusiasts interested in multi-model consensus systems and structured debate architectures
📬 Questions, Customizations & Feedback
Have a question about setup, want to adapt this workflow to your own strategy, or found something to improve?

📧 mambarrak@gmail.com

All feedback is welcome. If you build something interesting on top of this, I'd love to hear about it.

Built with ❤️ using n8n, Financial Modeling Prep, OpenAI GPT-4o, and Google Gemini 2.5 Pro.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
