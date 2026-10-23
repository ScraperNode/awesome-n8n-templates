# 📊 Discover YouTube channels from keywords and save leads to Google Sheets

> ⚡ **106 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automatically searches YouTube Data API for videos related to specific keywords, extracts channel data, filters channels based on performance metrics, and saves the results into Google Sheets.

Instead of manually searching YouTube and copying channel information, this workflow continuously discovers creators and builds a structured lead database. It is designed for marketers, researchers, agencies, and teams that need a reliable way to identify relevant YouTube channels in specific niches.

## Who this workflow is for

This workflow is ideal for:
- influencer marketing teams discovering creators in specific niches
- agencies building creator outreach lists
- researchers analyzing YouTube channel growth and trends
- startups building creator marketplaces
- marketers identifying potential partners or competitors

If you regularly search YouTube for channels related to certain topics, this workflow automates that process.

## How it works

The workflow runs on a schedule in n8n and processes keywords one at a time to avoid API limits.

The automation performs the following steps:

1. A Schedule Trigger starts the workflow automatically.
2. Keywords are retrieved from a keyword list.
3. The workflow selects one keyword to process.
4. The YouTube Data API searches for videos related to that keyword.
5. Channel IDs are extracted from the video results.
6. Channel statistics such as subscriber count, total views, and video count are retrieved.
7. Channels are filtered using configurable thresholds.
8. Qualified channels are saved or updated in Google Sheets.


The result is an automatically growing database of YouTube channels relevant to your target topics.

## Requirements

To use this workflow you will need:
- An instance of n8n
- A YouTube Data API credential
- A Google Sheets account
- A spreadsheet where discovered channels will be stored


## How to set up

1. Create credentials for the YouTube Data API in n8n.
2. Connect your Google Sheets account.
3. Add your target keywords to your keyword source.
4. Configure filtering rules such as minimum subscribers or views.
5. Set the schedule trigger interval.

Once configured, the workflow will run automatically and populate your spreadsheet with newly discovered YouTube channels.

## How to customize the workflow

You can adapt the workflow depending on your use case.

Common customizations include:

- adjusting subscriber or view thresholds
- discovering smaller emerging creators by lowering filters
- adding additional data fields such as video titles or upload dates
- integrating notification tools like Slack when new channels are discovered
- exporting results to databases or CRM systems
- 
Because the workflow is built in n8n, you can easily extend it to support more advanced creator discovery or automation pipelines.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
