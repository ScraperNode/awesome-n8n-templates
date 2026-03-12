# 📈 Gold market prediction system with Perplexity Sonar-Pro, FRED data, and WordPress reporting

> ⚡ **896 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## **Introduction**
Automates gold market tracking using AI forecasting by collecting live prices, financial news, and macro indicators (inflation, interest rates, employment) to produce real-time insights and trend predictions for analysts and investors.

## **How It Works**
Every 6 hours, the system fetches market data and news → runs AI sentiment and trend analysis → generates a concise forecast report → publishes it to WordPress → and alerts users via Slack or email.

## **Workflow Template**
**Trigger → Fetch → Format → Merge → AI Analyze → Report → Publish → Notify**

## **Workflow Steps**
1. **Schedule:** Executes automatically every **6 hours** using a Cron trigger.
2. **Fetch:** Retrieves **live gold prices (MetalPriceAPI)**, **financial headlines (NewsAPI)**, and **macroeconomic indicators (FRED)**.
3. **Format & Merge:** Cleans, normalizes, and merges all data into a single structured dataset for AI analysis.
4. **AI Analyze (OpenAI):** Performs **sentiment, trend, and correlation analysis** to forecast short-term gold price movements.
5. **Report Generation:** Creates a concise **summary report** with forecasts, insights, and confidence metrics.
6. **Publish & Notify:** Automatically **posts to WordPress** and sends **alerts via Slack and Email** to keep analysts updated.

## **Setup**
* Add API keys: **MetalPrice, NewsAPI, FRED, OpenAI, WordPress, Slack, Gmail**.
* Configure **scheduling interval**, **API endpoints**, and **authentication** in **n8n**.
* Predefine **WordPress post format** and **Slack message templates** for smooth automation.

## Prerequisites
n8n v1.0+, API keys, OAuth credentials, and internet access.

## Use Cases
Investment forecasting, financial newsletter automation, or market monitoring dashboards.

## Customization
Add cryptocurrency or stock tracking, modify AI prompts, or route summaries to Telegram, Notion, or Google Sheets.

## Benefits
Saves analyst time, ensures consistent insights, enhances accuracy, and delivers timely, AI-driven financial intelligence.

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Wordpress, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
