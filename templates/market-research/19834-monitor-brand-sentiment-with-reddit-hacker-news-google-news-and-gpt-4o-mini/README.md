# 📊 Monitor brand sentiment with Reddit, Hacker News, Google News and GPT-4o mini

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every four hours to search Reddit, Hacker News, and Google News (via Serper) for mentions of your brand and competitors, uses OpenAI to analyze sentiment and crisis level, logs each run to Google Sheets, and sends a Gmail alert only for urgent issues.

## How it works
1. Runs on a schedule every four hours and loads your brand, competitor names, Serper API key, alert recipient, and Google Sheet details.
2. Searches Reddit’s public JSON API, the Hacker News Algolia API, and Google News via the Serper News API for recent mentions from the past week.
3. Combines results into a single list of up to 20 formatted mentions and stops quietly if no mentions are found.
4. Sends the mentions to OpenAI to return structured intelligence including overall sentiment, crisis level, scores, key concerns, and opportunities.
5. Appends the monitoring results (counts, sentiment, crisis level, scores, and top items) to a Google Sheets “Brand Intelligence” tab.
6. Sends a crisis alert email through Gmail only when the crisis level is Urgent or Critical, otherwise it ends after logging.

## Setup
1. Add an OpenAI API credential and select a chat model for the analysis step.
2. Create a Serper account and paste your Serper API key into the workflow configuration.
3. Connect Google Sheets OAuth2 credentials, create a spreadsheet tab named “Brand Intelligence” with the required headers, and set your spreadsheet ID in the workflow configuration.
4. Connect Gmail OAuth2 credentials and set the recipient email address and sender name in the workflow configuration.
5. Replace the brand and competitor names in the workflow configuration and adjust the schedule cadence if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
