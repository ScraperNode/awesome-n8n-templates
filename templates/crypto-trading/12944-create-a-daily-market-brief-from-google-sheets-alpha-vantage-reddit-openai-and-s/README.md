# 📈 Create a daily market brief from Google Sheets, Alpha Vantage, Reddit, OpenAI, and Slack

> ⚡ **130 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## 📊 Description
This workflow automatically creates a daily market intelligence brief for your stock portfolio. Instead of checking prices, news, and social media separately, it brings everything together into one clear update.
On a scheduled basis, the workflow reads your stock list from Google Sheets and processes each stock individually. It fetches the latest stock price data, recent market news, and investor sentiment from public sources. All this information is then analyzed by AI to identify what truly matters, filtering out noise and repeated information.
The AI generates a concise market summary that highlights overall sentiment, key drivers, risks, and one actionable insight for the day. The final result is sent directly to Slack as a clean, easy-to-read message, helping you stay informed without manual effort.
This workflow is ideal for anyone who wants a clear daily view of market conditions without spending hours monitoring multiple platforms.

## ⚙️ What This Workflow Does
- Runs automatically on a daily schedule
- Reads stock symbols from Google Sheets
- Fetches latest stock price data
- Collects recent market news
- Gathers investor sentiment from public discussions
- Uses AI to summarize market-moving signals
- Sends one actionable daily brief to Slack

## ✅ Key Benefits
- Saves time by automating market monitoring
- Reduces noise and highlights what actually matters
- Combines prices, news, and sentiment in one place
- Provides clear daily insights instead of raw data
- Easy to adjust for different portfolios or schedules

## 🧩 Features
- Scheduled daily execution
- Portfolio-based stock tracking
- Market news collection via RSS
- Social sentiment analysis from Reddit
- AI-driven market intelligence summary
- Structured output for alerts or reporting
- Slack integration for daily delivery

## 🔐 Requirements
- To use this workflow, you will need:
- Alpha Vantage API key for stock price data
- OpenAI account for AI analysis
- Google Sheets access for portfolio input
- Slack account for message delivery
- n8n instance (cloud or self-hosted)

## 🎯 Target Audience
- Stock investors
- Portfolio managers
- Market analysts
- Finance teams
- Founders and operators tracking markets
- Automation builders in finance

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
