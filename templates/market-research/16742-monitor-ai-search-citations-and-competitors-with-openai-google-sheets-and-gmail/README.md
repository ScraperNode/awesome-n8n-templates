# 📊 Monitor AI search citations and competitors with OpenAI, Google Sheets, and Gmail

> ⚡ **40 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to test whether fairyfrills.in is cited in OpenAI answers to 15 shopping queries, logs citation details to Google Sheets, and emails a weekly HTML visibility report via Gmail, with optional Slack alerts on workflow errors.

## How it works
1. Runs once a week on a schedule and generates 15 predefined shopping queries along with the target domain, brand name, and competitor domains.
2. Sends each query to two OpenAI models in parallel: gpt-4o-mini (no browsing) and gpt-4o-search-preview (web search with URLs).
3. Splits the two AI answers into separate items per platform and uses OpenAI to extract citation data (target-domain URLs, competitor citations, citation position, and totals) as structured JSON.
4. Parses the extracted citation JSON, formats key fields (including URL lists, counts, and a response preview), and appends one log row per query and platform to a Google Sheets “Citation Log” sheet.
5. After the final query (ID 15) completes, fetches the logged results from Google Sheets, calculates weekly citation metrics and breakdowns, and generates an HTML report.
6. Sends the weekly citation report email through Gmail to the configured recipient.
7. If any node fails, posts an error alert to a configured Slack channel.

## Setup
1. Add an OpenAI API credential for the OpenAI nodes (gpt-4o-mini and gpt-4o-search-preview).
2. Create a Google Sheet with a “Citation Log” tab, add the required columns to match the append-field mapping, and replace YOUR_GOOGLE_SHEET_ID in both Google Sheets nodes.
3. Connect a Gmail OAuth2 credential and set the recipient email address for the weekly report.
4. (Optional) Connect a Slack OAuth2 credential and replace YOUR_SLACK_CHANNEL_ID to receive workflow error alerts.
5. Update the query list, domain/brand, and competitor domains in the query-builder code if you want to monitor a different site or market.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
