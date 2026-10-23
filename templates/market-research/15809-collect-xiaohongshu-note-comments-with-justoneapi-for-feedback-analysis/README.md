# 📊 Collect Xiaohongshu note comments with JustOneAPI for feedback analysis

> ⚡ **41 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Extract RedNote (Xiaohongshu) note comments as structured data for sentiment analysis, audience research, moderation, campaign reporting, and competitor monitoring.

## How it works
1. The workflow starts with configuration for your own JustOneAPI token, a RedNote note ID, and pagination values. It requests the note's comment list, preserves the raw response for troubleshooting, and transforms returned records into consistent fields for commenters, text, timestamps, engagement, reply counts, and cursor metadata. The structured output can be passed directly to storage, reporting, moderation, social-listening, or AI analysis steps.

## Setup
1. Import the template and open the configuration node. Enter your own JustOneAPI token, replace the sample note ID, and review the result limit and pagination settings. Run the workflow manually and inspect the raw response before using the normalized comment list. Connect the final output to a spreadsheet, database, dashboard, moderation queue, alert, or sentiment-analysis workflow, and add pagination if you need more than the first response page.

## Requirements
- Your own JustOneAPI token, a valid RedNote or Xiaohongshu note ID, and n8n with HTTP Request and Code nodes.

## Customization
- Add cursor pagination, engagement filters, reply processing, sentiment classification, or delivery to Google Sheets, Airtable, Notion, Slack, a database, or an AI model.

## Additional info
Useful for RedNote and Xiaohongshu social listening, comment analysis, community research, moderation, campaign measurement, and competitor monitoring. No RedNote cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
