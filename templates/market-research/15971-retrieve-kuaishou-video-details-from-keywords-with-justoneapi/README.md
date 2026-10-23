# 📊 Retrieve Kuaishou video details from keywords with JustOneAPI

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automate video details on Kuaishou with structured API data for research, monitoring, reporting, analysis, and downstream n8n workflows.

## How it works
1. The workflow starts with configuration for your own JustOneAPI token and video ID. It calls the relevant Kuaishou endpoint, preserves the raw response for troubleshooting, and converts returned records into a consistent structured format. The normalized output includes identifiers, content or profile fields, timestamps, engagement metadata, pagination information, and source data so it can be reused reliably by storage, dashboards, alerts, reporting, or AI analysis steps.
2. Import the template and open its configuration node. Enter your own JustOneAPI token, replace the sample video ID, and review optional pagination, sorting, filtering, and result-limit values. Run the workflow manually with a small test, inspect both the raw response and normalized output, then connect the final records to a spreadsheet, database, dashboard, alert, CRM, archive, or AI workflow according to your use case.
3. Your own JustOneAPI token, valid video ID, and n8n with HTTP Request and Code nodes.

## Setup
1. Adjust filters and pagination, process more records, or send output to Google Sheets, Airtable, Notion, Slack, a database, CRM, dashboard, or AI model.
2. Useful for Kuaishou research, monitoring, content intelligence, competitor analysis, and reporting. No platform cookies or browser automation are required; API usage uses the token supplied by the user.
3. 3. Add your JustOneAPI token.
4. 4. Replace the placeholder value for `keyword`.
5. 5. Optionally adjust `page` and `maxVideos`.
6. 6. Leave `maxVideos` set to `1` if you want to fetch only the first valid video result by default.
7. 7. Run the workflow and review the final output node.

## Requirements
- - A JustOneAPI token
- - An n8n environment with HTTP Request and Code node support

## Customization
- You can increase `maxVideos` to fetch more video details, adjust the keyword for different research targets, modify the structured output fields, or send the final output to Google Sheets, Airtable, Notion, a database, or an AI analysis step.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
