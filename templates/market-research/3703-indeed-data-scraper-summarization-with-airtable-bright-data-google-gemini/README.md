# 📊 Indeed data scraper & summarization with Airtable, Bright Data & Google Gemini

> ⚡ **2,144 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

### Who this is for?
Indeed Data Scraper & Summarization with Airtable, Bright Data and Google Gemini is an automated workflow that extracts company profile information from Indeed using Bright Data Web Unlocker, transforms the data using Google Gemini's LLM, and forward the transformed response with the summary to a specified webhook for downstream use.

This workflow is tailored for:

- Recruiters and HR teams who want quick summaries of companies listed on Indeed.

- Market researchers and analysts needing structured insights into businesses.

- Founders, investors, and consultants scouting potential competitors, partners, or clients.

- No-code enthusiasts looking to automate data extraction and enrichment pipelines without manual scraping or parsing.

### What problem is this workflow solving?
Manually gathering structured information about companies on Indeed is time-consuming and inconsistent. Pages vary in structure, and extracting clean, digestible summaries can require technical scraping expertise.

This workflow automates:

- Extracting company data from Indeed reliably using Bright Data Web Unlocker.

- Cleaning and summarizing the extracted content using Google Gemini LLM.

- Storing structured insights directly into Airtable for easy access and further workflows.

- Eliminates manual research, saves hours, and produces AI-enhanced, easily searchable records.

### What this workflow does

- Triggers on-demand.

- Pulls company page URLs from Airtable.

- Scrapes content from each Indeed company profile using Bright Data Web Unlocker.

- Sends the raw HTML to Google Gemini for extraction and summarization.

- Sends the summarized data to other platforms via a Webhook notification mechanism.

### Setup
- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials for Bright Data.
![Header Authentication.png](fileId:1233)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- In n8n, configure the Airtable Personal Access Token account under Credentials.
- Update the Webhook Notifier with the Webhook endpoint of your choice.

### How to customize this workflow to your needs
This workflow is built to be flexible - whether you're a company or a market researcher, entrepreneur, or data analyst. Here's how you can adapt it to fit your specific use case:

- **Extend the scraper**: Modify Bright Data targets to pull job listings, salaries, or employee reviews via the Airtable data source.

- **Customize the summary prompt**: Ask Gemini to extract different attributes hiring trends, practices etc.

- **Routing the output to different destinations**:
Send summaries or transformed response to Google Sheets, Airtable, or CRMs like HubSpot or Salesforce etc.

## 🔗 Nodes Used

Airtable, HTTP Request, Markdown, AI Agent, Summarization Chain, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
