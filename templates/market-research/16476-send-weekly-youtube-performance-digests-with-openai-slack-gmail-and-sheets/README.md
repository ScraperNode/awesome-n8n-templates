# 📊 Send weekly YouTube performance digests with OpenAI, Slack, Gmail and Sheets

> ⚡ **41 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday to fetch your latest YouTube videos, calculate performance rankings, generate an OpenAI insight summary, then share a weekly digest to Slack, log metrics to Google Sheets, and email an HTML report via Gmail.

## How it works
1. Runs every Monday at 08:00 using a schedule trigger.
2. Calls the YouTube Data API to fetch the 20 most recent videos from your channel and extracts their video IDs and metadata.
3. Batch-fetches each video’s statistics from the YouTube Data API, then calculates engagement rate, a composite performance score, ranks videos, and tags them as Top Performer, Average, or Underperformer.
4. Aggregates the ranked list and sends it to OpenAI to generate a concise weekly performance insight summary and recommendations.
5. Posts a formatted weekly digest to a Slack channel highlighting the best and worst video plus the top 5 rankings and AI insights.
6. Appends each video’s weekly metrics to a Google Sheets tab for historical tracking, then emails a full ranked HTML report to the content manager using Gmail.

## Setup
1. Enable the YouTube Data API v3 and set your YouTube API key and channel ID in the two YouTube HTTP requests.
2. Add an OpenAI credential (Chat Model) and select the model you want to use for generating the insight summary.
3. Add a Slack credential and set the target channel ID for where the digest should post.
4. Create a Google Sheet with a tab named “YouTube Performance Log”, add a Google Sheets credential, and replace the placeholder spreadsheet ID.
5. Add a Gmail credential and set the recipient address for the weekly email report.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
