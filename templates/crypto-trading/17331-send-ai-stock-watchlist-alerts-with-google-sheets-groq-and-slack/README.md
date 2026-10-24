# 📈 Send AI stock watchlist alerts with Google Sheets, Groq, and Slack

> ⚡ **74 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs on a schedule, reads a stock watchlist from Google Sheets, fetches current NSE prices via an HTTP API and updates the sheet. When a stock’s move exceeds your threshold, it pulls related Google News RSS headlines, uses Groq to generate an AI explanation and posts Slack alert.

## How it works
1. Runs on a scheduled trigger to start monitoring at your chosen interval.
2. Reads tickers and alert settings from a Google Sheets watchlist and processes them one at a time.
3. Calls an external NSE quotes HTTP API to fetch the latest price and percentage change for each ticker, then writes the latest price back to Google Sheets.
4. Checks whether the stock’s percentage move exceeds the alert threshold and, if it does, fetches related headlines from Google News via RSS.
5. Filters and formats up to three headlines from the last 24 hours and combines them with the stock price data.
6. Sends the price and headlines to a Groq chat model to generate a concise, structured JSON insight (market insight, sentiment, risk level, summary).
7. Posts the AI insight and summary to a selected Slack channel, and sends a Slack error notification if any API/AI step fails.

## Setup
1. Connect your Google Sheets OAuth2 credential and update the spreadsheet and sheet selection to point to your watchlist.
2. Ensure your watchlist sheet includes columns for ticker, buy_price, current_price, and alert_threshold_pct (and that ticker values match what the price API expects).
3. Connect your Slack credential, choose the destination channel for alerts, and optionally set a separate channel/message for error notifications.
4. Add your Groq API credentials for the LangChain Groq Chat Model used to generate the market explanation.
5. Review the schedule interval and the HTTP API endpoint used for NSE quotes, and adjust them for your environment if needed.

## Additional info
## How To Customize Nodes

### Customize Alert Conditions

Node:
- `Check Alert Threshold`

Modify threshold logic:
- Greater than
- Less than
- Percentage range
- Absolute price movement

### Customize AI Prompt

Node:
- `Generate AI Stock Insight`

You can modify:
- AI tone
- Output format
- Sentiment style
- Risk analysis depth
- JSON structure

### Customize Slack Messages

Node:
- `Send Slack Alert Message`

Add:
- Emojis
- Markdown
- Price charts
- Rich blocks
- Threaded alerts

### Customize News Filtering

Node:
- `Format News Headlines`

You can:
- Increase news count
- Change time range
- Add keyword filtering
- Ignore duplicate headlines

### Customize Monitoring Frequency

Node:
- `Schedule Stock Monitoring`

Run:
- Real-time
- Every minute
- During market hours only
- Daily summaries


## Add-ons

You can extend this workflow with additional features such as:

- Telegram alerts
- Discord notifications
- Email alerts
- WhatsApp integration
- Technical indicators (RSI, MACD, EMA)
- Portfolio profit/loss tracking
- Multi-market support
- Stock chart generation
- AI-based buy/sell recommendations
- Historical trend analysis
- MongoDB or PostgreSQL storage
- Dashboard integration
- Sentiment trend tracking
- Multi-user watchlists


## Use Case Examples

### 1. Real-Time Stock Movement Alerts

Receive immediate alerts when a stock crosses a configured percentage threshold.

### 2. AI-Based Market Context Analysis

Understand why a stock moved using AI-generated explanations and news analysis.

### 3. Portfolio Monitoring Automation

Track multiple stocks automatically without manual monitoring.

### 4. Trading Desk Notifications

Send market movement summaries directly into Slack channels used by trading teams.

### 5. Intelligent News-Based Alerts

Combine live stock movement with recent financial news for contextual insights.

### Additional Possible Use Cases

This workflow can also be adapted for:

- Crypto monitoring
- Commodity tracking
- Forex alerts
- ETF monitoring
- Mutual fund analysis
- Startup funding news monitoring
- Sector-wise sentiment analysis


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Google Sheets not updating | Incorrect sheet permissions | Reconnect Google OAuth2 credentials |
| Slack alerts not sending | Bot not added to channel | Invite Slack bot to the target channel |
| No stock data returned | Invalid ticker symbol | Verify ticker names in Google Sheets |
| AI response parsing fails | Invalid AI JSON output | Improve prompt formatting in AI node |
| Workflow stops unexpectedly | API request failure | Check error logs and API availability |
| No news headlines found | RSS query returned empty results | Update stock symbol or query keyword |
| Alert threshold never triggers | Threshold value too high | Reduce `alert_threshold_pct` |
| Duplicate alerts received | Frequent schedule interval | Add cooldown logic or cache |
| Groq API errors | Invalid or expired API key | Reconnect Groq credentials |
| Workflow execution is slow | Too many stocks processed | Increase batch optimization |


## Need Help?

Do you need help setting up or customizing this workflow?

Whether you want to:

- Add advanced AI analysis
- Build a custom trading automation system
- Integrate additional financial APIs
- Create multi-platform alert systems
- Develop enterprise-grade workflow automations
- Add dashboards and reporting
- Scale this workflow for production use

The [n8n automation experts at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/) can help you build, customize and scale intelligent n8n workflows tailored to your business needs.

You can also extend this workflow into:

- Full trading automation systems
- AI-powered research assistants
- Market intelligence platforms
- Portfolio management dashboards
- Financial analytics pipelines

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
