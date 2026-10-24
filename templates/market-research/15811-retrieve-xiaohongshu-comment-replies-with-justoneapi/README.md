# 📊 Retrieve Xiaohongshu comment replies with JustOneAPI

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Extract replies to a RedNote (Xiaohongshu) comment as structured data for conversation analysis, moderation, community research, reporting, and social listening.

## How it works
1. The workflow starts with configuration for your own JustOneAPI token, note ID, comment ID, and pagination values. It requests the comment's reply thread, preserves the raw response for troubleshooting, and normalizes reply text, author information, timestamps, engagement, location, identifiers, and pagination metadata. The final structured output is ready for storage, moderation, sentiment analysis, alerts, dashboards, or other n8n workflows.

## Setup
1. Import the template and open the configuration node. Enter your own JustOneAPI token, replace the sample note and comment IDs, and review cursor or page settings. Run the workflow manually, inspect the raw response, and verify the normalized reply records. Connect the output to a spreadsheet, database, moderation queue, dashboard, alert, or AI sentiment-analysis workflow, and add pagination when a thread spans multiple response pages.

## Requirements
- Your own JustOneAPI token, valid Xiaohongshu note and comment IDs, and n8n with HTTP Request and Code nodes.

## Customization
- Add pagination, filter replies by author or engagement, classify sentiment, or send output to Google Sheets, Airtable, Notion, Slack, a database, or an AI model.

## Additional info
Useful for RedNote and Xiaohongshu conversation analysis, community research, moderation, campaign measurement, and competitor monitoring. No RedNote cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
