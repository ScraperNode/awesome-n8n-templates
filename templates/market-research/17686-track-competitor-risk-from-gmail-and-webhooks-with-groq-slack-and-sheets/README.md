# 📊 Track competitor risk from Gmail and webhooks with Groq, Slack and Sheets

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow monitors Gmail and a webhook for sales notes, uses Groq (Llama 3.3) to extract competitor intelligence, then routes confirmed competitor signals to Salesforce, Slack, and Google Sheets for real-time alerting and logging.

## How it works
1. Triggers when a new Gmail message arrives or when an external system sends a POST request to the webhook endpoint.
2. Normalizes the incoming email or webhook payload into a consistent event format and removes duplicate webhook events using a unique ID.
3. Sends the cleaned text to a Groq Llama 3.3 chat model to extract a structured JSON report including competitors, deal stage, sentiment, risk level, urgency, insights, and recommended actions.
4. Validates the AI output and logs malformed or empty results to Google Sheets.
5. Enriches valid results with source context and a calculated risk score, then skips and logs events where no competitor names are detected.
6. Splits the competitor list into one record per competitor, maps it to a Salesforce stage and alert priority, and creates a Salesforce Opportunity.
7. Posts a formatted competitor alert to Slack and appends the intelligence record to Google Sheets, sending a Slack error alert if any downstream step fails.

## Setup
1. Add credentials for Gmail, Groq, Slack, Google Sheets, and Salesforce.
2. Configure the webhook source application to POST competitor-intel events to this workflow’s webhook URL.
3. Update the target Slack channel IDs for competitor alerts and error alerts.
4. Update the Google Sheets document and sheet to match your logging spreadsheet schema.
5. Review the Salesforce Opportunity fields (stage mapping, naming, and description) to match your Salesforce pipeline and required fields.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Salesforce, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
