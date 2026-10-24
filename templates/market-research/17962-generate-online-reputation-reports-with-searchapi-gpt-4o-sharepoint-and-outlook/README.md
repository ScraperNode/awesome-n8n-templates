# 📊 Generate online reputation reports with SearchAPI, GPT-4o, SharePoint and Outlook

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow generates an online reputation report for an attorney, law firm, or local business by querying SearchAPI.io, summarizing and scoring the results with an OpenAI GPT-4o agent, and emailing a formatted HTML report via Microsoft Outlook, either on demand through a webhook or daily from a SharePoint list.

## How it works
1. Triggers either via a POST webhook request for a single subject or on a daily schedule that pulls active, due clients from a Microsoft SharePoint list using Microsoft Graph.
2. Normalizes incoming fields (name, firm, category, location, domains to check, competitors, recipients) and rejects webhook requests that are missing the requestor email or subject name.
3. Builds a set of search queries (Google, Bing, Google News, Google Images, and optional site-specific queries) and fetches results from the SearchAPI.io SERP endpoint.
4. Aggregates the search responses into a single analysis payload with visibility metrics, platform presence signals, and extracted review indicators.
5. Sends the aggregated data to an OpenAI GPT-4o agent to generate a structured JSON reputation report, then validates and falls back to a minimal report if the JSON is invalid.
6. Converts the report JSON into an HTML email and sends it to the requestor (with optional CC) through Microsoft Outlook.
7. If the run originated from SharePoint, updates the list item with the latest report date and score and continues processing the next client in the batch.

## Setup
1. Add credentials for SearchAPI.io (HTTP query auth), OpenAI (for the GPT-4o chat model used by the agent), and Microsoft Outlook.
2. If you use the daily batch mode, add a Microsoft Graph/SharePoint OAuth2 credential and replace the SharePoint site and list IDs in the Microsoft Graph URLs for fetching clients and updating report status.
3. If you use the on-demand mode, copy the webhook URL for the `attorney-reputation-report` path into the system that submits report requests and ensure it sends at least `requestorEmail` and `subjectName` (or `attorneyName`).

## Requirements
- Self-hosted n8n instance (community and LangChain nodes required)
- Valid API credentials for SearchAPI, OpenAI, Microsoft Outlook, and your CRM or internal system
- Access to SharePoint or other listed resources

## Customization
- Customize node parameters to refine search queries
- Tailor AI prompt instructions
- Adjust report formatting.
- Add or remove conditions and processing steps according to your business rules.
- Expand scheduled runs to target different client lists or reporting cadences.

## Additional info
This template uses LangChain and community nodes, requiring a self-hosted n8n installation. For support, contact support@ais.email (AI Solutions, Inc.).

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Outlook, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
