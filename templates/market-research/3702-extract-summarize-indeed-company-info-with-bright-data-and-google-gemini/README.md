# 📊 Extract & summarize Indeed company info with Bright Data and Google Gemini

> ⚡ **689 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

### Who this is for?
Extract & Summarize Indeed Company Info is an automated workflow that extracts the Indeed company profile information using Bright Data Web Unlocker, transform it using Google Gemini’s LLM, and forward the transformed response with the summary to a specified webhook for downstream use.

This workflow is tailored for:

- Recruiters and HR teams looking to assess companies quickly during talent sourcing.

- Job seekers researching potential employers and needing summarized company insights.

- Market researchers and analysts monitoring competitor or industry players.

### What problem is this workflow solving?
Searching and evaluating company profiles on Indeed manually can be time-consuming and inefficient, especially when dealing with large volumes of companies. Manually browsing, copying, and summarizing company descriptions, reviews, and ratings from Indeed hinders productivity and limits real-time insights.

This workflow solves this by:

- Automating the extraction of company details from Indeed using Bright Data Web Unlocker.

- Summarizing the raw data using Google Gemini's language model for a quick, human-readable overview.

- Sending the transformed response with the summary to a chosen endpoint, like Slack, Notion, Airtable, or a custom webhook.

### What this workflow does

This automated pipeline does the following:

- Scrape Indeed company profile pages (e.g., ratings, description, reviews) using Bright Data’s Web Unlocker.

- Transform the scraped content into structured JSON using n8n’s built-in tools.

- Summarize and extract meaningful insights using Google Gemini's large language model.

- Forward the summarized data to a specified webhook or app for real-time access, storage, or analysis.

- Forward the formatted response to a specified webhook or app for real-time access, storage, or analysis.


### Setup
- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the search query, Bright Data zone by navigating to the **Set Indeed Search Query** node.
- Update the Webhook Notifier with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

This workflow is built to be flexible - whether you're a company or a market researcher, entrepreneur, or data analyst. Here’s how you can adapt it to fit your specific use case:

- **Changing the data source**: 
Replace the Indeed search input with other job or business listing platforms if needed (e.g., Glassdoor, Crunchbase)

- **Refining the LLM prompt**: 
Tailor the Gemini prompt to transform or summarize the Indeed company information in a specific format.

- **Routing the output to different destinations**: 
Send summaries or transformed response to Google Sheets, Airtable, or CRMs like HubSpot or Salesforce etc.

## 🔗 Nodes Used

HTTP Request, Markdown, AI Agent, Summarization Chain, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
