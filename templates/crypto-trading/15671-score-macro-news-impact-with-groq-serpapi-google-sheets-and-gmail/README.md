# 📈 Score macro news impact with Groq, SerpAPI, Google Sheets and Gmail

> ⚡ **16 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Macro News: AI-Driven Market Impact Scoring Automation

This workflow is a high-precision financial intelligence engine that monitors macroeconomic news to identify high-impact trading opportunities. It retrieves real-time data via SerpAPI, processes it through a dual-layered engine—combining a custom weighted Rule Engine with Groq-powered AI analysis—to calculate a final "Market Impact Score". By filtering out noise and focusing only on high-confidence signals, it stores critical events in Google Sheets and delivers formatted trade bias alerts (Forex, Crypto, Stocks) directly to your inbox.

### Quick Implementation Steps

* [**Import**: Upload the JSON file into your n8n workspace](https://n8n.partnerlinks.io/om1efg2qgvwi).
* **Authenticate**: Connect your Google Sheets, SerpAPI, Groq and Gmail credentials.
* **Setup Rules**: Fill your "Macro Rules" Google Sheet with keywords (e.g., "Repo Rate") and their corresponding weights.
* **Configure News**: In the **Fetch Macro News** node, enter your SerpAPI key and adjust the `gl` (country) or `q` (query) parameters to your target market.
* **Deploy**: Run once manually to test, then activate the workflow for continuous monitoring.


## What It Does

The workflow automates the end-to-end lifecycle of macro-fundamental analysis. It begins by fetching a library of "Macro Rules" from your Google Sheet, which acts as the DNA for your scoring logic. It then scouts for the latest news on topics like GDP, Inflation and Central Bank decisions. To ensure you aren't buried in repetitive data, a normalization script creates a unique fingerprint for every article, allowing a deduplication filter to ignore any story you have already processed.

Once a fresh article is identified, it enters the dual-engine analysis phase. First, a JavaScript-based Rule Engine scans the text for your predefined keywords and tallies a weighted base score. Second, the Groq LLM Engine performs a deep qualitative analysis to determine market sentiment, affected asset classes and specific trade biases.

In the final stage, the workflow synthesizes these two perspectives into a "Final Impact Score". It applies a mathematical boost to high-confidence AI signals and identifies articles that cross a specific "High Impact" threshold (defaulting at 90+). These elite signals are archived in your database and immediately dispatched as a professional HTML alert to your Gmail.


## Who It's For

* **Macro Traders** who need to react instantly to Central Bank news and economic shifts.
* **Portfolio Managers** looking to automate the tracking of fundamental "Black Swan" events.
* **Financial Analysts** who want a structured, historical database of news impact scores.
* **Crypto & Forex Investors** who require a disciplined "Buy/Sell/Neutral" bias based on fundamental data rather than just technical charts.


## Requirements to use this workflow

* [**n8n Instance**: (Self-hosted or Cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi).
* **SerpAPI Key**: To fetch live Google News results.
* **Groq API Key**: To power the AI Market Impact Analysis.
* **Google Account**: For Sheets (Rules/Database) and Gmail (Alerts).


## How It Works & Setup Guide

### 1. The Rules Engine (Precondition)

Before starting, prepare a Google Sheet named **Macro Rules**. It must have the following headers:

* **Keyword**: The term to look for (e.g., "Inflation").
* **Weight**: A number (1-50) representing the importance of this word.
* **Asset/Sentiment/Impact**: Metadata for the AI to consider.

### 2. Geographic & Query Configuration

The **Fetch Macro News** node is currently set to India (`gl=in`). You can change this to `us` (United States), `gb` (United Kingdom) or any other region code supported by SerpAPI to pivot your market focus.

### 3. Deduplication & Throttling

The workflow uses a **Normalize & Generate News ID** node to hash article titles. The **Rate Limit** node adds a necessary 5-second pause before calling the AI to ensure you don't hit rate limits on your Groq account.

### 4. Final Scoring Logic

The **Calculate Final Score** node combines the Rule Score + AI Confidence + Impact Boost. The **Assign Final Impact Level** node then classifies anything with a score of 90 or higher as "High Impact," which triggers the final alert. You can lower this number in the code if you want more frequent, lower-sensitivity alerts.


## How To Customize Nodes

* **Adjust Sensitivity**: Modify the score threshold (90) in the **Assign Final Impact Level** node to make the workflow more or less "picky".

* **Edit AI Prompt**: Open the **AI Market Impact Analysis** node to change the "Trade Bias" options or add new asset classes like "Commodities" or "Bonds".

* **Custom News Sources**: Modify the `q` parameter in the **Fetch Macro News** node to include specific news outlets or different economic indicators.


## Add‑ons

* **WhatsApp/Slack Alerts**: Connect a messaging node after the high-impact filter for mobile push notifications.

* **Schedule Trigger**: Replace the manual trigger with a **Schedule Trigger** to run the scan every 15 minutes during market hours.

* **Automated Trading**: Connect this to a broker API (like Alpaca or Interactive Brokers) to automatically execute "Trade Bias" signals.


## Use Case Examples

* **Central Bank Monitoring**: Instantly scoring RBI, Fed or ECB interest rate decisions.

* **Inflation Tracking**: Scoring CPI or WPI data releases and their immediate impact on Forex pairs.

* **GDP Growth Alerts**: Identifying surprises in GDP data that could move the stock market.

* **Crypto Macro Correlation**: Tracking how US Dollar strength or inflation news impacts Bitcoin volatility.

* **Crisis Management**: Monitoring for keywords like "Sanctions," "Default," or "War" to signal an immediate shift to defensive assets.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **No news is fetched** | SerpAPI key is empty or invalid | Enter your SerpAPI key in the **Fetch Macro News** query parameters. |
| **Duplicate alerts sent** | ID column missing in sheet | Ensure your **Fetch Existing News** sheet has an "ID" column for comparison. |
| **AI node error** | Groq rate limits | Increase the **Rate Limit** wait time or check your Groq API usage. |
| **Scores are too low** | Weighted rules are too conservative | Increase the "Weight" values in your **Macro Rules** spreadsheet. |


## Need Help?

Creating a custom market-scoring engine requires a perfect blend of financial logic and technical automation. If you need assistance fine-tuning your rules engine, modifying the AI trade bias or scaling this to multiple global markets, our [n8n automation workflow experts](https://www.weblineindia.com/hire-n8n-developers/) are ready to support you.

**[Contact WeblineIndia](https://www.weblineindia.com/contact-us.html)** to help you build, customize or scale your professional financial automations today!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Basic LLM Chain, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
