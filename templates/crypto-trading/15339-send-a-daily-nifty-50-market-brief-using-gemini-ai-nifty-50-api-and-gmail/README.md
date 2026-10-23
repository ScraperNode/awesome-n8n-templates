# 📈 Send a daily Nifty 50 market brief using Gemini AI, Nifty 50 API and Gmail

> ⚡ **174 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Daily Market Brief Automation 

&gt; n8n, Gemini AI, Nifty 50 API & Gmail


This workflow automatically generates and emails a concise daily stock market brief at 9:30 AM using real-time Nifty 50 data, financial news and AI-powered insights.


### Quick Implementation Steps

1. [Import the workflow JSON into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Configure **Google Gemini API credentials**
3. Set your **recipient email in Gmail node**
4. Activate the workflow
5. Sit back and receive daily market summaries automatically


## What It Does

This workflow automates the creation of a daily stock market brief by combining real-time stock data and financial news with AI-driven insights.

Every day at 9:30 AM, the workflow fetches the latest Nifty 50 stock prices and financial news from public APIs. It processes stock data to identify top gainers and losers, while simultaneously analyzing news sentiment using Google Gemini AI.

Finally, it generates a crisp, human-readable market summary (under 120 words) and sends it via email—ensuring you stay informed without manual effort.


## Who It's For

- Stock market traders and investors
- Financial analysts
- Portfolio managers
- Business owners tracking market trends
- Anyone who wants a quick daily market snapshot


## Requirements

To use this workflow, you need:

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Gemini API credentials
- Gmail account connected in n8n
- Access to public APIs:
  - Market News API
  - Nifty 50 Stock Quotes API


## How It Works & Setup Instructions

### Step 1: Schedule Trigger

- Node: **Market Open Scheduler**
- Triggers workflow daily at **9:30 AM**

You can modify timing based on your market preference.

### Step 2: Fetch Data

#### Stock Prices

- Node: **Fetch Nifty 50 Stock Prices**
- Fetches real-time prices for predefined Nifty 50 stocks

#### Market News

- Node: **Fetch Market News**
- Retrieves latest financial news

### Step 3: Process Stock Data

1. **Extract Price Data**
   - Extracts `prices` object from API response

2. **Normalize Price Data**
   - Converts object into array format

3. **Calculate Gainers & Losers**
   - Sorts stocks by percentage change
   - Identifies:
     - Top 10 Gainers
     - Top 10 Losers

### Step 4: Analyze News with AI

1. **Analyze News Sentiment (AI)**
   - Uses Google Gemini to:
     - Extract stock names
     - Determine sentiment (Bullish / Bearish / Mixed)
     - Provide short reasoning
2. **Parse News Response**
   - Converts AI output into structured JSON

### Step 5: Merge & Validate Data

- **Merge Market Data**
  - Combines stock insights and news analysis

- **Validate Data**
  - Ensures data is not empty before proceeding

- **Aggregate Dataset**
  - Combines all outputs into a single structure

- **Structure Final Payload**
  - Prepares:
    - Top gainers
    - Top losers
    - News insights

### Step 6: Generate AI Market Brief

Node: **Generate Market Brief (AI)**

Uses Gemini AI to generate:

- Nifty trend summary
- News highlights
- Top gainers & losers

**Output Format:**

- Max 120 words
- Bullet style
- Clean and concise

### Step 7: Send Email

Node: **Send Email Report**

**Required Setup:**

- Add recipient email in `sendTo` field
- Configure Gmail credentials


## How To Customize Nodes

### Modify Stock List

- Update symbols inside **Fetch Nifty 50 Stock Prices** node JSON body

### Change Schedule

- Edit **Market Open Scheduler**
- Adjust trigger time as needed

### Customize AI Prompts

- Modify prompts in:
  - **Analyze News Sentiment (AI)**
  - **Generate Market Brief (AI)**

You can:

- Increase word limit
- Change tone (formal/casual)
- Add more insights

### Customize Email

- Update subject line in Gmail node
- Switch to HTML format if needed


## Add-ons (Enhancements)

- Send alerts to Slack/Telegram instead of email
- Store reports in Google Sheets or database
- Add historical trend comparison
- Include sector-wise analysis
- Add chart/graph attachments
- Multi-recipient distribution list


## Use Case Examples

1. **Daily Investor Briefing**
   - Receive quick updates before market decisions

2. **Portfolio Monitoring**
   - Track gainers/losers affecting your holdings

3. **Financial Newsletter Automation**
   - Use output as ready-to-send content

4. **Trading Desk Alerts**
   - Provide morning insights to trading teams

5. **Market Research Support**
   - Automate initial research summaries

There can be many more use cases depending on how you extend this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No email received | Gmail not configured | Add credentials and recipient email |
| Empty market brief | API returned no data | Check API endpoints and responses |
| AI output not parsed | Incorrect JSON format from AI | Verify parsing logic in "Parse News Response" node |
| Workflow not triggering | Scheduler misconfigured | Check trigger time and timezone |
| Incorrect gainers/losers | Data structure mismatch | Validate API response format |


## Need Help?

If you need assistance with:

- Setting up this workflow in your environment  
- Customizing AI prompts or logic  
- Adding advanced features or integrations  
- Building similar automation workflows  

👉 [Reach out to **WeblineIndia** for expert support](https://www.weblineindia.com/contact-us.html).

We’re happy to help you automate smarter and scale faster.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
