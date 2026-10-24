# 📈 Generate a daily multi-asset market report with TwelveData, Groq and Google Sheets

> ⚡ **6,001 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Multi-Asset Daily Market Snapshot

This workflow fully automates the creation of a daily multi-asset market report. It retrieves live pricing data for specified indices, forex pairs and commodities using the TwelveData API, manages rate limits safely and feeds the normalized data into a Groq-powered AI (Llama-3). The AI generates a professional, institutional-grade market summary which is then automatically logged in Google Sheets and emailed to your inbox. 


### Quick Implementation Steps

1. **Import the Workflow:** Upload the JSON file into your n8n workspace.
2. **Add Your Keys:** In the `Environment Config` node, paste your TwelveData API key. 
3. **Connect Accounts:** Authenticate your Google Sheets, Gmail and Groq API credentials in their respective nodes.
4. **Prepare the Sheet:** Create a Google Sheet with two tabs ("Sheet1" for reports, "Error logs" for failures) matching the column headers defined in the Google Sheets nodes.
5. **Execute:** Click "Test Workflow" (or trigger it manually) to fetch data and receive your daily snapshot.


## What It Does

This workflow acts as an automated quantitative analyst. It starts by establishing your target asset watchlists across three categories: Indices (e.g., SPY, QQQ), Forex (e.g., EUR/USD) and Commodities (e.g., Gold, Oil). It breaks these lists down and carefully queues them up to fetch daily pricing from the TwelveData API. To ensure it doesn't overwhelm the API and get blocked, it uses a batching system with a built-in 15-second throttle. 

As data flows in, the workflow actively monitors for errors. If an API call fails or hits a hard limit, it instantly logs the failure details into an "Error logs" Google Sheet and sends an emergency failure alert via Gmail. Successfully fetched data is normalized into a clean format, calculating daily percentage changes and basic bullish/bearish trends. 

Finally, the cleaned dataset is passed to a Llama-3 AI agent via Groq. Instructed to act as a macro strategist, the AI parses the numbers to generate a structured snapshot including a market summary, key movers, risk sentiment and actionable outlook. A custom script safely extracts these exact sections, logs the complete report into your main Google Sheet for historical tracking and delivers the final formatted text straight to your Gmail.


## Who’s It For

This automation is ideal for 
- day traders, 
- macro analysts, 
- portfolio managers, 
- and financial newsletter writers. 

It is exceptionally useful for anyone who spends the first hour of their morning manually checking tickers and writing up market summaries to share with a team or clients.


## Requirements to Use This Workflow

* An active **n8n instance**.
* A **TwelveData API Key** for fetching real-time/daily financial market data.
* A **Groq API account** to utilize the Llama-3 language model.
* A **Google Workspace account** to authenticate both Google Sheets and Gmail nodes.
* A **Google Sheet** pre-configured with the exact column headers expected by the workflow.


## How It Works & How To Set Up

**1. Configure the Environment**

Open the `Environment Config` node and input your `twelve_api_key`. The base API URL is already set up for you. 

**2. Define Your Watchlist**

Open the `Set Market Assets` node. Here you will see comma-separated lists for Indices, Forex and Commodities. You can replace these ticker symbols with any standard symbols supported by TwelveData.

**3. API Throttling & Fetching**

The `Rate Controlled Queue` node processes one ticker at a time, followed by a 15-second `API Throttle` wait. This ensures you comply with free-tier or basic API limits. The `Fetch Asset Prices` node automatically constructs the HTTP request for each symbol.

**4. Error Handling Pipeline**

The `Validate API Response` node checks if the TwelveData response status is "ok". If not, the workflow branches downward, logging the specific error code and symbol to your Google Sheet and sending a localized Gmail alert, before continuing the loop.

**5. AI Processing & Normalization**

Once all loops finish, the `Normalize Market Data` node calculates the price changes. The `AI Market Insights` node then feeds this to Groq. You must select your Groq credentials in the attached `Insights` model node.

**6. Final Delivery**

The `Parse AI Output` node uses Regex to strictly format the AI's response. Finally, the `Log Daily Market Report` node saves the record and the `Send Today's market summary` node emails you the results. 


## How To Customize Nodes

* **Wait Node (API Throttle):** 

If you have a premium TwelveData API plan with higher rate limits, you can reduce or remove the 15-second wait time to make the workflow run instantly.

* **AI Market Insights:** 

You can edit the System Message to change the AI's output tone or request additional sections (like "Crypto Outlook") if you add crypto tickers to your watchlist.

* **Send Today's market summary:** 

The current email format is plain text. You can change the "Email Type" to HTML and use CSS to design a beautiful, branded daily newsletter.


## Add‑ons

* **Scheduled Trigger:** 

Replace the "Manual Trigger" with a "Schedule Trigger" to automatically run this workflow every weekday at 4:30 PM EST right after the market closes.

* **Slack Integration:** 

Swap out the Gmail nodes for Slack nodes to deliver the daily snapshot directly into your company's #finance or #trading channel.

* **Multi-Model Routing:** 

Add an IF node before the AI to route the data to OpenAI's GPT-4o if Groq's API is temporarily unavailable, ensuring 100% uptime for your daily reports.


## Use Case Examples

1. **Morning Prep for Day Traders:** 

Run the workflow an hour before the opening bell to get a quick digest of how forex and commodities behaved overnight.

2. **Automated Client Newsletters:** 

Feed the final generated text into an email marketing tool (like Mailchimp or ActiveCampaign) to automatically send a daily brief to your subscribers.

3. **Internal Risk Management:** 

Use the report to give a firm's trading desk a standardized baseline of macro risk sentiment before the trading day begins.

4. **Historical Sentiment Tracking:** 

By logging the AI's daily "Risk Sentiment" into Google Sheets, you can eventually build charts comparing AI sentiment versus actual market performance over time.

5. **API Health Monitoring:** 

The built-in failure alert branch acts as an excellent template for monitoring the uptime and health of third-party financial APIs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow times out or runs endlessly** | The `Split In Batches` loop is not closing properly or the `Wait` node is set too high for server timeout limits. | Ensure n8n's execution timeout variable is high enough to accommodate 15 seconds per ticker. Reduce the watchlist size if necessary. |
| **"Unknown API Error" in logs** | TwelveData rate limit exceeded or an invalid ticker symbol was requested. | Check the `Set Market Assets` node to ensure all symbols are correctly spelled. Verify your TwelveData API quota. |
| **Parse AI Output node fails (Regex error)** | The Groq AI ignored formatting instructions and did not output the exact expected headers (e.g., "Market Summary:"). | Adjust the `AI Market Insights` prompt to be even stricter or lower the "Temperature" setting on the Groq model node to reduce creative variability. |
| **Google Sheets Node throws a 400 error** | Column headers in your Google Sheet do not match the schema in the workflow. | Open the Google Sheets node and verify that columns like `execution_date`, `market_summary` and `key_movers` exist exactly as written in row 1 of your sheet. |


## Need Help?

Stuck on setting up your API keys or looking to expand this workflow to include dozens of new asset classes and complex HTML formatting? 

If you need advanced customizations, API troubleshooting or want to build a completely tailored financial automation architecture, **WeblineIndia** is here to help. Reach out to our [n8n team](https://www.weblineindia.com/hire-n8n-developers/) of integration experts to take your automated business processes to the next level!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
