# 📈 Generate client portfolio summaries using Google Sheets, NewsAPI, Gemini and Gmail

> ⚡ **27 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Client Portfolio Summary Generator 

&gt; Google Sheets, NewsAPI, Gemini AI & Gmail

This workflow automatically analyzes your stock portfolio whenever a new row is added to Google Sheets. It fetches live stock prices, calculates gains/losses, gathers relevant news, generates a simple AI-powered summary and emails the report to you.


### Quick Implementation Steps

1. [Login to your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Connect your **Google Sheets Trigger** to your portfolio sheet.
3. Add your **NewsAPI key** in the “Fetch Stock News” node.
4. Configure **Google Gemini API credentials**.
5. Connect your **Gmail account** for email delivery.
6. Add stock entries (Name, Quantity, Purchase Price) in Google Sheets.
7. Sit back &gt;&gt; your portfolio summary will be emailed automatically.


## What It Does

This workflow automates end-to-end portfolio monitoring and reporting. Whenever a new stock entry is added to your Google Sheet, it triggers a sequence of actions that fetch real-time stock prices and calculates the current value and profit/loss for each holding.

In addition to numerical analysis, the workflow enriches your portfolio insights by pulling the latest news articles related to each stock. This provides valuable context behind market movements, helping users better understand performance drivers.

Finally, the workflow uses Google Gemini AI to generate a simple, human-friendly summary of the portfolio. The summary highlights overall performance, best/worst performers and key insights, which is then automatically delivered via email.


## Who It's For

- Individual investors tracking their stock portfolio
- Financial advisors managing client portfolios
- Analysts needing automated reporting
- Automation enthusiasts building finance workflows
- Anyone who wants simplified portfolio insights without manual effort


## Requirements

To use this workflow, ensure you have:

- [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Sheets account (with portfolio data)
- Google Sheets Trigger OAuth credentials
- NewsAPI key (https://newsapi.org)
- Google Gemini (PaLM) API credentials
- Gmail account with OAuth2 setup
- Stock data in Google Sheets with columns:
  - Name
  - Quantity
  - Purchase Price
  - Purchase Date


## How It Works & Setup Guide

### 1. Google Sheets Trigger

- Node: **Google Sheet New Row Add Trigger**
- Configure:
  - Select your spreadsheet
  - Select the sheet (e.g., "stock portfolio")
  - Trigger event: `rowAdded`

### 2. Data Cleaning

- Node: **Cleans & standardizes**
- Maps fields:
  - Name
  - Quantity
  - Purchase Price
  - Purchase Date

### 3. Fetch Live Stock Prices

- Node: **Fetch Live Stock Prices**
- API Endpoint: https://memic-nse-quotes-api.hf.space/quotes
- Sends stock symbol to retrieve current price

### 4. Calculate Portfolio Metrics

- Node: **Calculate Portfolio Metrics**
- Computes:
	- Current Value = Quantity × Current Price
	- Gain/Loss = Current Value - (Quantity × Purchase Price)

### 5. Fetch Stock News

- **Flow:** Iterate stocks → Wait 5 seconds → Fetch news
- **Node:** Fetch Stock News
- **Requires:** Add your NewsAPI key in query parameters

### 6. Combine News Articles

- Node: **Combining All News Articles**
- Limits to top 4 articles per stock

### 7. Merge Data

- Node: **Combine Portfolio + News**
- Combines:
	- Financial metrics
	- News data

### 8. Format Final Output

- Node: **Final Data Formatter**
- Structures merged data into a clean JSON format

### 9. Generate AI Summary

- Node: **Generate Portfolio Summary**
- Uses: Google Gemini model: `gemini-3.1-flash-lite-preview`
- Output: Simple 4–6 sentence summary

### 10. Send Email Report

- Node: **Send Email Report**
- Configure:
	- Recipient email
	- Subject: "Portfolio Analysis"
	- Message: AI-generated summary


## How To Customize Nodes

**Google Sheets Node**

- Change sheet or add more columns (e.g., sector, notes)

**Stock Price API**

- Replace with another API if needed (e.g., Alpha Vantage)

**News Node**

- Adjust query (e.g., include company name + “stock”)
- Change article limit

**AI Summary Node**

- Modify prompt for:
  - More detailed analysis
  - Different tone (formal, technical, etc.)

**Email Node**

- Add HTML formatting
- Include full report instead of summary


## Add-ons (Enhancements)

- Add portfolio visualization (charts via external tools)
- Store historical performance in a database
- Send alerts via Slack/WhatsApp/Telegram
- Trigger alerts for high gain/loss thresholds
- Add sentiment analysis from news articles
- Generate PDF reports instead of plain emails


## Use Case Examples

1. **Personal Portfolio Tracking**  

Automatically monitor your investments and receive updates without manual calculations.

2. **Client Reporting for Advisors**  

Send periodic portfolio summaries to clients with insights and news.

3. **Daily Market Monitoring**  

Add entries regularly and get AI-generated updates with context.

4. **Investment Research Automation**  

Combine price data and news to assist decision-making.

5. **Automated Financial Dashboards**  

Use this workflow as a backend for dashboards or reporting systems.

There can be many more use cases depending on how you extend and customize this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|----------|
| No trigger execution | Incorrect Google Sheets setup | Verify sheet ID and trigger settings |
| Stock prices not fetched | API issue or wrong symbol | Check API response and symbol format |
| News not loading | Missing API key | Add valid NewsAPI key |
| Empty AI summary | Incorrect input formatting | Check "Final Data Formatter" output |
| Email not sent | Gmail credentials issue | Reconnect Gmail OAuth |
| Rate limit errors | Too many API calls | Increase wait time node delay |
| Incorrect calculations | Data type mismatch | Ensure numeric fields are properly parsed |


## Need Help?

If you need assistance with:

- Setting up this workflow
- Customizing nodes for your business needs
- Adding advanced features or integrations
- Building similar automation workflows

Feel free to reach out to [**WeblineIndia**](https://www.weblineindia.com/). Our n8n experts can help you design, implement and scale automation solutions tailored to your requirements.

Let us help you turn your workflows into powerful business tools.

## 🔗 Nodes Used

HTTP Request, Gmail, Google Sheets Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
