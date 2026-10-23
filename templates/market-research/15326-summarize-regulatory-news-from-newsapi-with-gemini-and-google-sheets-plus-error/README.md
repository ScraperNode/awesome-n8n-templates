# 📊 Summarize regulatory news from NewsAPI with Gemini and Google Sheets plus error alerts

> ⚡ **33 views** · 📊 [Market Research & Insights](../)

## Description

# News Intelligence Workflow using NewsAPI, AI Model, Google Sheets & Error Alerts

This workflow automatically fetches news articles from NewsAPI, processes them using an AI model to generate summaries and key regulatory changes and stores both raw and processed data into Google Sheets. It also includes centralized error handling with email alerts for monitoring failures.

### Quick Implementation Steps

1. [Signup / Login to your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Add your **NewsAPI key** in the configuration node.
3. Set your **Google Sheet ID** and ensure required columns exist.
4. Update the **search query** (e.g., regulation, finance, etc.).
5. Configure **email recipient** for error alerts (optional).
6. Execute using the **Manual Trigger** node.
7. Review results in Google Sheets.


## What It Does

This workflow automates the process of collecting and analyzing news articles. It starts by fetching the latest news based on a defined keyword using NewsAPI. The fetched data is cleaned, sorted and filtered to ensure only relevant and valid articles are processed further.

Each article is then processed individually in a controlled loop to avoid API rate limits. The workflow stores raw article data into Google Sheets for reference and backup. It then uses an AI model to generate a concise summary and extract key regulatory or policy changes from each article.

Finally, the structured AI output is formatted and updated back into the same Google Sheet. The workflow also includes a high-level error handling mechanism that collects errors from multiple nodes, formats them and sends email alerts for easier monitoring and debugging.


## Who It's For

- Business analysts tracking regulatory updates  
- Compliance and legal teams  
- Data analysts and automation engineers  
- News aggregation platforms  
- Anyone looking to automate news monitoring and summarization  


## Requirements

To use this workflow, you need:

- [n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
- NewsAPI account and API key
- Google Sheets account with OAuth credentials configured in n8n
- A Google Sheet with the following columns:
  - Title
  - Source
  - Published_At
  - Content
  - Summary
  - Key Changes
- (Optional) Gmail account connected for error alerts


## How It Works & Setup Instructions

### 1. Trigger the Workflow

- Uses **Manual Trigger** node for execution.
- Ideal for testing; can be extended later.

### 2. Configure Variables

- In **Workflow Config & Variables** node:
  - Add `newsApiKey`
  - Set `searchQuery` (default: regulation)
  - Define `maxArticlesToFetch`
  - Set `loopWaitSeconds`
  - Add `googleSheetId`
  - Configure API timeout and headers if needed

### 3. Fetch News Data

- **HTTP Request Node** calls NewsAPI using:
  - Query keyword
  - Sorting (publishedAt)
  - API key authentication

### 4. Preprocess Articles

- **Code Node (Python)**:
  - Sorts articles by date
  - Filters invalid entries
  - Extracts required fields (title, content, source, etc.)

### 5. Limit Articles

- **Limit Node** restricts number of articles processed.

### 6. Store Raw Data

- **SplitInBatches + Wait + Google Sheets (Append)**:
  - Stores raw articles into the same sheet
  - Adds delay to avoid rate limits

### 7. Validate & Loop

- **IF Node** filters valid articles
- **SplitInBatches** processes one article at a time

### 8. AI Processing

- **AI Node**:
  - Generates:
    - Summary (max 60 words)
    - Key regulatory changes
  - Ensures strict structured output

### 9. Format Output

- **Code Node (JavaScript)**:
  - Extracts summary and key changes
  - Cleans and structures AI output

### 10. Update Sheet

- **Google Sheets (Update)**:
  - Updates existing rows based on Title
  - Adds Summary and Key Changes

### 11. Error Handling

- Errors from multiple nodes are:
  - Collected via **Merge Node**
  - Formatted using **Set Node**
  - Delayed using **Wait Node**
  - Sent via **Email Node**


## How To Customize Nodes

- **Search Query**  

Change `config.searchQuery` to track different topics (e.g., AI, finance, crypto).

- **Article Limit**  

Adjust `config.maxArticlesToFetch` to process more or fewer articles.

- **Delay Timing**  

Modify `config.loopWaitSeconds` to control API rate limits.

- **AI Prompt**  

Customize the prompt in AI node to extract different insights.

- **Google Sheet Mapping**  

Add/remove columns based on your reporting needs.


## Add-ons (Enhancements)

- Replace Manual Trigger with:
  - Cron (scheduled runs)
  - Webhook (real-time trigger)
- Add Slack/Telegram alerts for summaries
- Store data in a database instead of Google Sheets
- Add sentiment analysis to articles
- Build a dashboard using BI tools


## Use Case Examples

1. Regulatory monitoring for finance or legal industries  
2. Daily news digest automation for teams  
3. Competitive intelligence tracking  
4. Research support for analysts  
5. Content curation for blogs or newsletters  

There can be many more use cases depending on how you customize the workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No articles fetched | Invalid API key | Verify NewsAPI key |
| Empty AI output | Incorrect prompt format | Check AI node prompt |
| Google Sheet not updating | Wrong Sheet ID or permissions | Verify Sheet ID and OAuth access |
| Duplicate entries | Matching column misconfigured | Ensure Title is used as match key |
| Workflow stops unexpectedly | API timeout or rate limits | Increase wait time or timeout settings |
| No email alerts | Email not configured | Add recipient email in Gmail node |


## Need Help?

If you need assistance setting up this workflow, customizing nodes or building advanced automation solutions, feel free to reach out to our [n8n automation team at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/).

**WeblineIndia** specializes in building scalable automation workflows, AI integrations and business process solutions tailored to your needs.

Whether you're looking to extend this workflow or create something entirely new, expert help is just a step away.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
