# 📊 Analyze real estate RSS deals with Groq, Google Sheets and Gmail

> ⚡ **46 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Real Estate News RSS to AI Deal Analyzer

This workflow acts as a 24/7 digital real estate scout. It automatically monitors multiple RSS news feeds, filters out stories you have already seen, uses Groq-powered AI to score the investment potential of new articles and saves high-value opportunities to a Google Sheet while alerting you via Gmail.

### Quick Start Guide

* **Import**: Upload the JSON file into your n8n canvas.
* **Authenticate**: Connect your Google Sheets, Groq and Gmail credentials.
* **Configure Sheet**: Ensure your Google Sheet has a header named **Link** in the first tab.
* **Set Recipient**: Open the **Send Deal Alert Email** node and enter your email address in the "To" field.
* **Run**: Click **Start Workflow** to begin fetching and analyzing today's news.


## What It Does

The workflow begins by retrieving a list of previously "seen" articles from your Google Sheet to prevent duplicate work. It then visits a list of RSS news sources (defined in a JavaScript node) to find the latest real estate headlines. Using a specialized filtering script, it compares the new headlines against your existing list, ensuring that only fresh, unread news moves forward.

Once new articles are identified, the workflow uses the Groq LLM Engine to perform a deep "Deal Opportunity" analysis. The AI reads the news snippet, assigns a score from 1 to 10 based on investment potential and provides a concise reason for that score. This turns a simple headline into a structured data point.

In the final stage, the workflow applies a quality filter. If the AI determines a deal is high-potential (Score ≥ 8), the workflow saves the title, link and AI reasoning to your Google Sheet. Simultaneously, it fires off a Gmail notification to your inbox so you can act on the lead before the rest of the market.


## Who’s It For

* **Real Estate Investors** looking for early signals on price drops or new project launches.
* **Property Brokers** who need to stay informed about local market shifts without reading hundreds of articles manually.
* **Investment Analysts** who want a structured database of market news and AI-generated sentiment scores.
* **Operations Teams** looking to automate market research and lead generation.


## Requirements to use this workflow

* **n8n Instance**: (Self-hosted or Cloud).
* **Google Account**: To access Google Sheets and send Gmail alerts.
* **Groq API Key**: To power the AI analysis (supports high-speed LLM processing).
* **Target RSS Feeds**: URLs of news sites or Google News RSS queries.


## How It Works & Set Up

### 1. Preconditions & Spreadsheet Setup

Before running the workflow, create a Google Spreadsheet. In the first sheet (tab), you must create a header named **Link**. You may also add headers for **Title**, **PubDate** and **Reason** to keep your data organized. The workflow uses the "Link" column to remember which articles it has already processed.

### 2. Configure RSS Sources

Open the **RSS Sources** node. You will see a small snippet of JavaScript code. You can change the URLs here to target your specific location or niche (e.g., changing "Ahmedabad" to "New York" or "Commercial Real Estate").

### 3. Setup AI & Throttle

The workflow includes a **Throttle API Calls** node. This is set to 3 seconds by default. This ensures you do not hit "Rate Limits" on your Groq account if the RSS feed returns dozens of articles at once.

### 4. Logic & Filtering

* **Fetch Existing Deals**: Pulls your "already seen" list from Google Sheets.
* **Filter New Articles**: A JavaScript node that checks if the current RSS link exists in your sheet.
* **Analyze Deal Opportunity**: The core AI prompt that tells the LLM to act as a Real Estate Analyst.


## How To Customize Nodes

* **Change the Score Threshold**: 

Open the **Filter High Opportunity** node. You can change the value from 8 to a lower number (like 5) if you want to see more frequent, moderate-potential leads.

* **Modify AI Persona**: 

Edit the **Analyze Deal Opportunity** node to ask the AI to look for specific things, like "Commercial warehouse space" or "Foreclosure notices."

* **Update Email Content**: 

The **Send Deal Alert Email** node can be customized with your own branding or specific subject lines.


## Add‑ons

* **Multi-Recipient Support**: 

You can add a **Set** node before the Gmail step to manage a list of emails if you need to alert a whole team.

* **Automated Scheduling**: 

Replace the **Manual Trigger** with a **Schedule Trigger** to run this every morning at 8:00 AM automatically.

* **SMS Alerts**: 

Add a Twilio or WhatsApp node after the high-score filter to get instant text notifications for the best deals.


## Use Case Examples

* **Market Sentiment Tracking**: 

Scoring news daily to see if a specific city is trending toward a "Buyer's Market."

* **New Launch Monitoring**: 

Automatically capturing every new residential project announced in a specific region.

* **Price Drop Alerts**: 

Using specific Google News RSS queries to find distressed property sales.

* **Competitor Research**: 

Monitoring news related to specific developers or real estate firms.

* **Historical Archiving**: 

Building a long-term database of real estate news and AI analysis for future trend reporting.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow skips all news** | Deduplication logic is too strict | Check if your Google Sheet "Link" column is filled with old data; clear it to reset the filter. |
| **AI returns "No Response"** | Groq model naming or API key | Ensure your Groq model is set to a valid ID (e.g., `llama3-8b-8192`) and your key is active. |
| **Google Sheets Error** | Missing Column Headers | Ensure your spreadsheet has a header named exactly "Link" (case sensitive). |
| **Gmail fails to send** | OAuth Scopes | Re-connect your Google account in n8n and ensure the "Gmail API" is enabled in your Google Cloud Console. |


## Need Help?

Setting up AI-driven market monitors can be a competitive advantage, but the technical setup needs to be perfect. If you need help fine-tuning the AI prompts, adding custom RSS sources or connecting this to your existing CRM, our experts at WeblineIndia are here to assist.

**[Contact WeblineIndia](https://www.weblineindia.com/contact-us.html)** today to build your custom business automation or to refine this workflow for your specific market!

## 🔗 Nodes Used

Google Sheets, RSS Read, Gmail, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
