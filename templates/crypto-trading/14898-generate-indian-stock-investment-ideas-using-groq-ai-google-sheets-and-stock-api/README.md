# 📈 Generate Indian stock investment ideas using Groq AI, Google Sheets and stock API

> ⚡ **153 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# AI Investment Idea Generator using n8n, Groq AI, Google Sheets & Stock API

This workflow automatically generates **2–3 high-quality Indian stock investment ideas daily** by combining **trending stock data + latest market news**, processing it with **AI (Groq/OpenAI)**, avoiding duplicates using **Google Sheets** and storing results for tracking.


### Quick Implementation Steps

1. Import the workflow into n8n  
2. Add credentials:
   - Stock API (HTTP Headers Auth)
   - Google Sheets OAuth2
   - Groq / OpenAI API  
3. Connect your Google Sheet (same structure as defined)  
4. Activate the workflow (runs daily at 9 AM)  
5. Check your Google Sheet for generated ideas  


## What It Does

This workflow acts as a **mini AI-powered equity research assistant** for the Indian stock market. It automatically gathers **real-time market insights** by pulling:

- Trending stocks (top gainers & losers)
- Latest market-related news (via Google News RSS)

It then processes this data into a structured format and feeds it into an AI agent configured with strict rules to generate **actionable, non-generic investment ideas**.

To maintain quality and avoid repetition, the workflow:

- Fetches historical ideas from Google Sheets
- Uses memory to avoid recent duplicates
- Ensures each new idea is unique, data-backed and sector-driven

Finally, it stores structured results into Google Sheets for easy tracking and analysis.


## Who’s It For

- Retail investors looking for daily stock ideas  
- Financial analysts and research teams  
- Algo trading enthusiasts  
- Content creators (finance blogs, newsletters)  
- Automation enthusiasts using n8n  


## Requirements

To use this workflow, you need:

- n8n instance (self-hosted or cloud)
- Stock API access (via HTTP headers auth)
- Google Sheets account (read + append permissions)
- Groq or OpenAI API access
- A Google Sheet with columns:
  Date | Title | Stock | Reason | Horizon


## How It Works & Set Up

1. Schedule Trigger (runs daily at 9 AM)
2. Fetch trending stocks via API
3. Fetch latest market news via RSS
4. Merge and format data
5. Generate investment ideas using AI
6. Validate and parse output
7. Store results in Google Sheets
8. Handle errors and send alerts


## How To Customize Nodes

- Modify API endpoint in stock node
- Change RSS keywords for news
- Adjust AI prompt rules
- Change number of generated ideas
- Modify Google Sheets mapping
- Update schedule timing


## Add-ons (Enhancements)

- Slack/Telegram alerts  
- Email digest  
- Sentiment analysis  
- Performance tracking  
- Global market support  


## Use Case Examples

1. Daily investment newsletter  
2. Personal research assistant  
3. Trading strategy ideas  
4. Content creation  
5. Portfolio tracking  


## Troubleshooting Guide

Issue | Possible Cause | Solution
----- | -------------- | --------
No stock data | API issue | Check API credentials
AI empty output | Model issue | Retry / check logs
JSON error | Format issue | Fix prompt output
No sheet data | Mapping issue | Verify columns
No alerts | Gmail not set | Reconnect Gmail


## Need Help?

For setup, customization or advanced automation solutions, contact our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
