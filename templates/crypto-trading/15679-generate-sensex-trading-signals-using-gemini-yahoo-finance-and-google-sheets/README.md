# 📈 Generate SENSEX trading signals using Gemini, Yahoo Finance and Google Sheets

> ⚡ **508 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# AI-Powered SENSEX Signal Generator

&gt; Gemini, Yahoo Finance & Google Sheets

---

This n8n workflow automatically analyzes SENSEX market data using technical indicators and AI (Google Gemini) to generate trading signals (Buy/Sell). It filters only high-confidence signals and logs them into Google Sheets for tracking.


### Quick Implementation Steps

1. [Import the workflow into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Add credentials:
   - Google Gemini API
   - Google Sheets OAuth2  
3. Create a Google Sheet with columns:
   `Date | Index | Signal | Confidence | Trend | Reason`  
4. Execute the workflow manually  
5. Check results in your Google Sheet  


## What It Does

This workflow automates stock market signal generation for the SENSEX index using a hybrid approach that combines **technical analysis** and **AI-based reasoning**.

First, it fetches historical market data from Yahoo Finance and computes key indicators such as moving averages, momentum, volatility and price change. These indicators help identify the current market trend and behavior.

Next, it retrieves the latest SENSEX-related news headlines and feeds both the technical data and news into a Google Gemini AI model. The AI analyzes this combined input to generate a trading signal (Buy/Sell), along with confidence, strength, risk level and reasoning.

Finally, the workflow calculates a score based on AI output, filters only high-quality signals (score &gt; 70) and logs them into Google Sheets for further tracking and decision-making.


## Who It's For

- Traders looking for automated signal generation  
- Developers building fintech or trading tools  
- Data analysts interested in AI-driven market insights  
- Automation enthusiasts using n8n  
- Anyone exploring AI + financial data workflows  


## Requirements

To use this workflow, you need:

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Gemini API credentials  
- Google Sheets OAuth2 credentials  
- A Google Sheet with predefined columns  
- Internet access for:
  - Yahoo Finance API  
  - Google News RSS  


## How It Works & Setup Guide

### Workflow Breakdown

1. **Manual Trigger**

   - Starts the workflow execution manually  

2. **Fetch Market Data**

   - HTTP Request pulls SENSEX data from Yahoo Finance  

3. **Technical Analysis**

   - Code node calculates:
     - 5-day & 20-day moving averages  
     - Momentum  
     - Volatility  
     - Price change (%)  

4. **Data Structuring**

   - Set node formats key metrics for AI processing  

5. **Fetch Latest News**

   - RSS node pulls SENSEX-related news from Google News  

6. **Limit News**

   - Only the latest article is passed to AI  

7. **AI Signal Generation**

   - Gemini AI analyzes:
     - Technical indicators  
     - News sentiment  
   - Outputs:
     - Signal (Buy/Sell)  
     - Confidence  
     - Strength  
     - Risk level  
     - Reason  

8. **Parse AI Output**

   - Converts AI response into structured JSON  

9. **Score Calculation**

   - Score is computed using:
     - Confidence  
     - Strength  
     - Risk level  

10. **Validation**

   - Only signals with **score &gt; 70** are accepted  

11. **Store Results**

   - Valid signals are appended to Google Sheets  


### Setup Instructions

1. [Import workflow into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Configure credentials:
   - Google Gemini API  
   - Google Sheets OAuth2  
3. Update Google Sheet ID (if needed)  
4. Verify API URLs:
   - Yahoo Finance endpoint  
   - Google News RSS link  
5. Execute manually using **Start node**  
6. Check output in Google Sheets  


## How To Customize Nodes

- **HTTP Request Node**
  - Change index (e.g., NIFTY, NASDAQ) by updating the URL  

- **Code Node (Indicators)**
  - Modify moving average window (e.g., 10-day, 50-day)  
  - Add RSI, MACD, etc.  

- **AI Agent Prompt**
  - Customize signal logic  
  - Add stricter risk rules or additional outputs  

- **Score Calculator**
  - Adjust scoring weights:
    - Confidence threshold  
    - Strength importance  
    - Risk penalties  

- **Google Sheets Node**
  - Add more columns like:
    - Risk Level  
    - Strength  
    - Score  


## Add-ons (Enhancements)

- Add **Cron Trigger** for automation (daily execution)  
- Integrate **Telegram/Email alerts** for signals  
- Store data in a database (PostgreSQL, MongoDB)  
- Add **multi-index support** (NIFTY, Dow Jones, etc.)  
- Build a **dashboard (Power BI / Streamlit)**  
- Include advanced indicators like RSI, MACD  


## Use Case Examples

1. **Automated Trading Signal Logger**  
   - Generate and store signals daily  

2. **AI-Assisted Decision Support**  
   - Use signals as guidance before trading  

3. **Market Trend Monitoring System**  
   - Track trend + volatility over time  

4. **Fintech Product Prototype**  
   - Build an AI-based trading assistant  

5. **Research & Backtesting Tool**  
   - Analyze historical signals and performance  

There can be many more use cases depending on how you want to extend this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data from Yahoo Finance | API URL incorrect or rate-limited | Verify endpoint and retry |
| AI output not parsing | Invalid JSON from AI | Ensure prompt enforces strict JSON |
| No rows in Google Sheets | Validation failed (score ≤ 70) | Check score logic or lower threshold |
| Credential errors | Missing or incorrect API keys | Reconfigure credentials |
| Empty news input | RSS feed issue | Verify RSS URL and connectivity |
| Workflow stops early | Node misconfiguration | Check execution logs in n8n |


## Need Help?

If you need assistance with:

- Setting up this workflow  
- Customizing AI logic  
- Adding new integrations (Telegram, dashboards, APIs)  
- Scaling this into a production-ready system  

Feel free to reach out to [n8n automation developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia**  

We can help you [build powerful automation workflows](https://www.weblineindia.com/process-automation-solutions.html) tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
