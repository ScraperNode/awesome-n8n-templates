# 📊 Get Xiaohongshu user published notes with JustOneAPI

> ⚡ **52 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Fetch a RedNote (Xiaohongshu) user's published notes and return structured post data for creator research, content analysis, monitoring, reporting, and downstream automation.

## How it works
1. The workflow starts with configuration for your own JustOneAPI token, a RedNote user ID, and pagination cursor. It requests the user's published-note list, preserves the raw response for troubleshooting, and converts the returned records into a consistent structure. The output includes note IDs, titles, descriptions, types, publishing times, engagement metrics, author information, cover images, note URLs, and cursor data for follow-up requests.

## Setup
1. Import the template and open the Set API Request Parameters node. Enter your own JustOneAPI token, replace the sample Xiaohongshu user ID, and leave lastCursor empty for the first request. Run the workflow manually and inspect both the raw response and normalized results. For additional pages, pass the returned cursor into the next run, then connect the output to a spreadsheet, database, dashboard, alert, archive, or AI analysis workflow.

## Requirements
- Your own JustOneAPI token, a valid RedNote or Xiaohongshu user ID, and n8n with HTTP Request and Code nodes.

## Customization
- Add cursor-based pagination, filter notes by date or engagement, or send results to Google Sheets, Airtable, Notion, Slack, a database, or an AI model.

## Additional info
Useful for RedNote and Xiaohongshu creator monitoring, competitor research, content archiving, campaign analysis, and China-market social listening. No RedNote cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
