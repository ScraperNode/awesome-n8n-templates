# 📈 Detect Bitcoin price spikes and send Gemini-powered NewsAPI Gmail alerts

> ⚡ **51 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Bitcoin Price Spike Detector with Gemini AI, NewsAPI & Gmail Alerts

This workflow monitors Bitcoin price changes every 30 minutes. If the price increases or decreases by 3% or more, it fetches recent Bitcoin-related news, summarizes it using AI (Google Gemini) and sends an email alert explaining the likely reason behind the price movement.

### Quick Implementation Steps

1. Set up a **Schedule Trigger** (default: every 30 minutes) in your [n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Configure **CoinGecko API** (already public, no key required).
3. Ensure your **Data Table (`crypto_price_db`) exists**.
4. Add your **NewsAPI API key** in HTTP Request node.
5. Configure **Google Gemini API credentials**.
6. Connect your **Gmail account**.
7. Replace the email recipient with your own.
8. Activate the workflow.


## What It Does

This workflow continuously monitors Bitcoin price fluctuations by fetching the latest price from CoinGecko at regular intervals. Each new price is stored in a data table and compared with previous entries to detect significant changes.

When a price movement of **±3% or more** is detected, the workflow automatically triggers a secondary process. It fetches recent Bitcoin-related news articles using NewsAPI, filters and aggregates relevant descriptions and sends them to an AI agent powered by Google Gemini.

The AI agent generates a concise summary of the news and explains the likely reason behind the price movement. Finally, it sends a well-crafted email alert with insights, helping users stay informed and react quickly to market changes.


## Who It's For

- Crypto traders and investors
- Financial analysts monitoring Bitcoin trends
- Automation enthusiasts using n8n
- Developers building AI-powered alert systems
- Anyone who wants real-time insights on Bitcoin price movements


## Requirements

To use this workflow, you need:

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Existing **Data Table** (`crypto_price_db`)
- **NewsAPI account & API key**  
   https://newsapi.org/
- **Google Gemini API key**  
   https://aistudio.google.com/welcome
- **Gmail account** connected via OAuth2
- Internet access for API calls


## How It Works & Set Up

### 1. Schedule Trigger

- Node: **Execute at every 30 minutes**
- Runs the workflow at regular intervals.
- You can modify this interval as needed.

### 2. Fetch Bitcoin Price

- Node: **Fetch BitCoin Price**
- API: CoinGecko
- Endpoint: `https://api.coingecko.com/api/v3/simple/price`
- Query:
- `ids=bitcoin`
- `vs_currencies=usd`

### 3. Store Price in Data Table

- Node: **Add bitcoin price to sheet**
- Stores the latest price in `crypto_price_db`.

### 4. Retrieve Recent Prices

- Nodes:
- **Get all prices from sheet**
- **Get last two prices from sheet**
- Keeps only the latest two entries for comparison.

### 5. Prepare Data

- Node: **Edit Fields**
- Ensures the price field is properly formatted.

### 6. Detect Price Change

#### 📈 Price Increase (≥ 3%)

- Node: **If new price is increased by 3%**
- Condition compares latest vs previous price.

#### 📉 Price Decrease (≥ 3%)

- Node: **If new price is dropped by 3%**

### 7. Fetch News

- Nodes:
- **Fetch news about bitcoin**
- **Fetch news about bitcoin1**
- API: NewsAPI
- Query:
- `q=bitcoin`

#### Setup NewsAPI

1. Create account at https://newsapi.org/
2. Generate API key
3. Add it in **HTTP Request node → Headers**

### 8. Filter & Aggregate News

- Nodes:
- **Filter all news**
- **Aggregate filtered news**
- Extracts only article descriptions and combines them.

### 9. AI Processing (Google Gemini)

- Nodes:
- **AI Agent**
- **Google Gemini Chat Model**

#### Setup Gemini API

1. Go to https://aistudio.google.com/welcome
2. Generate API key
3. Add credentials in n8n:
 - Type: Google PaLM / Gemini
 - Paste API key

#### AI Task:

- Summarize news
- Explain price movement
- Generate email subject & content

### 10. Send Email Alert

- Nodes:
- **Send a message in Gmail**
- Sends AI-generated email.

#### Important:

Replace: `errorcommits@mailinator.com`
with your own email address.


## How To Customize Nodes

- **Change Price Threshold**
  - Modify IF node conditions (e.g., 5% instead of 3%)

- **Change Cryptocurrency**
  - Update CoinGecko `ids` parameter

- **Modify Email Content**
  - Adjust AI prompt inside AI Agent nodes

- **Adjust Frequency**
  - Change Schedule Trigger interval

- **News Filtering**
  - Modify Code node to include titles, sources or keywords


## Add-Ons (Enhancements)

- Add **Slack / Telegram alerts**
- Store historical data in **Google Sheets or database**
- Add support for **multiple cryptocurrencies**
- Create a **dashboard using n8n + external tools**
- Add **sentiment analysis on news**
- Trigger **trading bots or alerts**


## Use Case Examples

1. **Crypto Trading Alerts**  
   Get instant insights when Bitcoin price moves significantly.

2. **Market Analysis Automation**  
   Automatically correlate price changes with real-world news.

3. **Portfolio Monitoring**  
   Track assets and receive alerts without manual checks.

4. **AI-Powered Financial Reports**  
   Generate automated summaries for decision-making.

5. **Research & Insights Tool**  
   Understand market sentiment quickly.

And many more use cases can be built on top of this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|---------------|---------|
| No email received | Gmail not configured | Reconnect Gmail OAuth2 credentials |
| No news data | Missing NewsAPI key | Add API key in HTTP Request headers |
| AI not responding | Gemini API not configured | Verify Gemini credentials |
| Workflow not triggering | Schedule not active | Activate workflow |
| Incorrect price comparison | Data table missing values | Ensure table stores numeric USD values |
| Empty email content | News descriptions missing | Check Code node output |


## Need Help?

If you need assistance setting up this workflow, customizing it or extending it with advanced features like multi-crypto tracking, dashboards or AI enhancements — we’re here to help.

[Contact **WeblineIndia**](https://www.weblineindia.com/contact-us.html) for:

- Workflow setup & deployment
- Custom automation solutions
- AI-powered business workflows
- Add-on feature development

Let us help you turn automation into a competitive advantage.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
