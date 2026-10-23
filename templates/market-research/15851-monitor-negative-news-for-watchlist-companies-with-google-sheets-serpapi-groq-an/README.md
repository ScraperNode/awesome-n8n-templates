# 📊 Monitor negative news for watchlist companies with Google Sheets, SerpAPI, Groq, and Gmail

> ⚡ **42 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI-Powered Risk Monitor: Negative News Tracker

This workflow acts as an automated early-warning system for corporate risk. It pulls a list of companies from a Google Sheet, uses SerpAPI to scout the latest global news and employs Groq-powered AI to detect negative sentiment (such as lawsuits, layoffs or financial declines). New risks are archived in a master database and immediate Gmail alerts are sent for any confirmed negative news, ensuring you never miss a critical market signal.

### Quick Implementation Steps

* [**Import**: Upload the JSON file into your n8n workflow editor](https://n8n.partnerlinks.io/om1efg2qgvwi).
* **Authenticate**: Connect your Google Sheets, SerpAPI, Groq and Gmail credentials.
* **Prepare Watchlist**: Create a Google Sheet with a column named **Companies** and add the entities you want to monitor.
* **Set Database**: Create a second sheet (or tab) with headers: **ID, Company, Title, Date, Reason, Severity, Link**.
* **Activate**: Click **Start Workflow** to run a manual check or add a Schedule Trigger for 24/7 monitoring.


## What It Does

This workflow automates the tedious process of manual "reputation monitoring." It starts by reading a list of target companies from your **Watchlist**. For every company found, it performs a real-time Google News search via SerpAPI. To handle high volumes of data efficiently, it aggregates all found articles into a single stream, standardizes the formatting and generates a unique digital fingerprint (ID) for every story.

The "intelligence" of the workflow lies in its deduplication and AI analysis. It cross-references every new article ID against your **Processed News** spreadsheet; if an article has been seen before, it is discarded. Only 100% new content reaches the Groq AI engine. The AI then acts as a financial analyst, reading the headline to determine if the news is truly negative and assigning a severity level (Low, Medium or High).

Finally, the workflow acts on these insights. If the AI flags an article as negative, the data is appended to your tracking sheet for long-term auditing and a formatted HTML email is sent via Gmail to your team, containing the reasoning, severity and a direct link to the source article.


## Who It's For

* **Investment Analysts** needing to track portfolio companies for "black swan" events.
* **PR & Communications Teams** monitoring brand reputation and crisis management.
* **Legal & Compliance Officers** tracking litigation or regulatory investigations involving partners.
* **Sales Professionals** looking for "trigger events" (like management changes or losses) to adjust their strategy.


## Requirements to use this workflow

* [**n8n account**: (Self-hosted or Cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi).
* **Google Account**: For accessing Watchlists and sending Gmail alerts.
* **SerpAPI Key**: To fetch live Google News results.
* **Groq API Key**: To power the high-speed sentiment analysis.


## How It Works & Setup Guide

### 1. Watchlist & Credentials

Ensure your Google Sheets account is connected. Your **Read Watchlist** node should point to a sheet where company names are listed under a header named `Companies`.

### 2. Search API Configuration

Open the **Fetch News** node and ensure your SerpAPI key is entered in the query parameters. This node is configured to search Google News (`tbm=nws`) dynamically based on the company names from your list.

### 3. Deduplication Logic

The **Process Articles** node uses a JavaScript snippet to create a unique ID based on the title and link. This prevents you from receiving the same alert twice if a news story stays on the front page for multiple days.

### 4. AI Analysis & Throttling

The **Analyze News** node uses the Groq Chat Model. Because AI APIs can sometimes be overwhelmed by rapid requests, a **Throttle API Calls** node is included to pause for 2 seconds between articles, ensuring stability.

### 5. Filtering & Alerting

The **Filter Negative News** node is the gatekeeper. It only allows items where the AI has explicitly set `is_negative` to `true`. These items are then saved to your database and emailed to you.


## How To Customize Nodes

* **Adjust Severity**: While the workflow currently alerts on all negative news, you can modify the **Filter Negative News** node to only allow `severity == 'high'` if you only want to see major crises.

* **Refine AI Prompt**: Edit the **Analyze News** node to add specific keywords relevant to your industry (e.g., "clinical trial failure" for Biotech or "data breach" for Tech).

* **Email Branding**: Open the **Send Alert** node to change the HTML styling or to add your company logo to the notifications.


## Add‑ons

* **Slack/Teams Integration**: Add a Slack node alongside Gmail to post risk alerts into a specific "Crisis-Monitor" channel.

* **AI Summary**: Add a second AI step to summarize the full article content if the headline analysis suggests high severity.

* **Automated Scheduling**: Replace the Manual Trigger with a **Schedule Trigger** to run the tracker every hour or at the start of every business day.


## Use Case Examples

* **Competitor Intelligence**: Tracking when competitors face lawsuits or product recalls.

* **Vendor Risk Management**: Monitoring key suppliers for signs of financial distress or strikes.

* **E-Commerce Monitoring**: Tracking news about major shipping partners or payment processors.

* **M&A Due Diligence**: Automating the "bad news" search for companies currently under acquisition review.

* **Public Figure Tracking**: Monitoring news for specific high-profile individuals or executives.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **No news being fetched** | SerpAPI key missing or expired | Check the **Fetch News** node execution logs for a 401 or 403 error code. |
| **Duplicate alerts received** | Sheet ID column mismatch | Ensure the **Lookup Existing Articles** node is looking at the correct column (ID) in your Google Sheet. |
| **AI fails to parse JSON** | Prompt deviation | Ensure the **Structured Output Parser** is connected to the Analyze News node to enforce JSON formatting. |
| **Workflow is too slow** | Throttle settings | If you have a high-tier Groq account, you can reduce the **Throttle API Calls** timer from 2 seconds to 0.5 seconds. |


## Need Help?

Configuring real-time AI monitors requires a balance of speed and accuracy. If you need help tailoring the deduplication logic, expanding your watchlist or connecting these alerts to a professional CRM like Salesforce or HubSpot, we are here to assist.

**[Contact WeblineIndia](https://www.weblineindia.com/contact-us.html)** to help you build, customize or scale your business automation today!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Basic LLM Chain, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
