# 📈 Analyze your stock portfolio daily using Google Sheets, RSS, Groq LLM and Gmail

> ⚡ **127 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# AI Portfolio Analysis & Reporting using Google Sheets, RSS, Groq LLM & Gmail

This n8n workflow automatically analyzes your stock portfolio every day at 4 PM. It fetches portfolio data from Google Sheets, enriches it with latest market news via RSS, generates AI-powered stock insights using LLM models and sends a professional portfolio report directly to your email.

### Quick Implementation Steps

1. [Import the workflow into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Connect Google Sheets account and map your portfolio sheet  
3. Add a valid RSS feed URL in the news node  
4. Configure Groq API credentials for AI nodes  
5. Set your recipient email in Gmail node  
6. Activate the workflow  


## What It Does

This workflow provides a fully automated system for analyzing your stock portfolio using both quantitative data and qualitative insights. It starts by reading your portfolio data from Google Sheets, including stock symbols, quantities and pricing details. It then calculates key performance metrics such as invested value, current value, profit/loss and return percentage for each stock.

Each stock is processed individually. The workflow fetches recent news articles from an RSS feed, filters the most relevant updates and combines them with stock performance data. Using an AI model, it generates professional-grade insights that evaluate performance, interpret news sentiment and assess the stock’s impact on your portfolio.

After analyzing all stocks, the workflow aggregates the insights and generates a high-level portfolio summary. This includes overall performance, key drivers, risks and strategic outlook. Finally, everything is formatted into a clean report and delivered via email automatically.


## Who It's For

- Retail investors tracking their personal portfolios  
- Financial analysts looking for automated insights  
- Portfolio managers needing quick daily summaries  
- Traders who want news-driven analysis  
- Anyone interested in combining AI with investment tracking  


## Requirements to Use This Workflow

- [n8n login (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Sheets account with portfolio data  
- Groq API credentials (for LLM access)  
- Gmail account (for sending reports)  
- RSS feed URL for stock/market news  


## How It Works & Setup Guide

### Step 1: Schedule Trigger

- The workflow runs automatically every day at **4 PM**
- No manual intervention required once activated  

### Step 2: Configure Google Sheets

- Connect your Google Sheets account  
- Use the following structure:

| Column Name     | Description                         |
|----------------|-------------------------------------|
| Symbol         | Stock ticker (e.g., INFY, TCS)      |
| Quantity       | Number of shares held               |
| Avg Price      | Average purchase price              |
| Current Price  | Latest market price                 |

### Step 3: Portfolio Metrics Calculation

- Automatically calculates:
  - Invested Value  
  - Current Value  
  - Profit/Loss (PnL)  
  - Return Percentage  

### Step 4: Stock Iteration

- Each stock is processed individually using batch iteration  

### Step 5: Configure RSS Feed

- Add a valid RSS feed URL in **“Fetch Stock News (RSS)”** node  
- This is required to fetch latest market news  

### Step 6: AI Stock-Level Analysis

- Connect Groq credentials  
- AI evaluates:
  - Performance strength  
  - News sentiment  
  - Portfolio impact  
  - Actionable stance  

### Step 7: Rate Limiting

- A wait node ensures API rate limits are respected  

### Step 8: Aggregate Insights

- Combines all stock-level AI outputs into structured data  

### Step 9: Portfolio-Level AI Analysis

- Generates:
  - Overall portfolio view  
  - Key drivers  
  - Risks  
  - Strategy  

### Step 10: Report Formatting

- Converts structured data into a readable text report  

### Step 11: Email Delivery

- Configure recipient email in **Gmail node**
- Sends final report automatically  


## How To Customize Nodes

- **Google Sheets Node**  

Modify sheet ID or add more columns as needed  

- **RSS Node**  

Replace with any preferred financial news feed  

- **AI Prompts**  

Adjust prompts to match your analysis style in:
  - “Generate Stock Insight”
  - “Generate Portfolio Insight”

- **Wait Node**  

Adjust delay if hitting API limits  

- **Email Node**  

Change subject, format or switch to Slack/Telegram  


## Add-ons (Extend Functionality)

- Add Slack or Microsoft Teams notifications  
- Store historical reports in a database  
- Add stock price API for real-time updates  
- Include charts or visual dashboards  
- Integrate risk scoring or alerts  


## Use Case Examples

1. Daily automated portfolio performance tracking  
2. News-driven investment monitoring  
3. AI-assisted portfolio review for decision support  
4. Risk identification in multi-stock portfolios  
5. Generating investor-ready summary reports  

There can be many more use cases depending on how you customize the workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data from Google Sheets | Incorrect sheet ID or permissions | Reconnect account and verify sheet access |
| No news fetched | RSS URL not configured | Add a valid RSS feed URL |
| AI node not working | Missing/invalid Groq credentials | Reconfigure API credentials |
| Empty email output | Parsing issue or no data | Check Code nodes and AI output format |
| Workflow not running | Schedule not active | Activate workflow in n8n |
| Email not sent | Gmail not configured | Reconnect Gmail OAuth |


## Need Help?

If you need assistance setting up this workflow, customizing AI prompts or building advanced automation solutions, our [n8n automation developers](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia are here to help.

Whether you want to extend this workflow with dashboards, alerts or deeper analytics, feel free to [reach out and get expert support](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, RSS Read, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
