# 📱 Send a weekly YouTube email digest with Apify, OpenAI, Gmail and Sheets

> ⚡ **7 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday, reads a YouTube watchlist from Google Sheets, uses Apify to fetch recent video transcripts, summarizes new videos with OpenAI, logs results back to Google Sheets, and sends a single HTML digest email via Gmail.

## How it works
1. Runs every Monday morning on a schedule.
2. Reads a list of YouTube channel, playlist, or video URLs from a Google Sheets “Channels” tab.
3. Starts an Apify Actor run to expand the sources, collect recent videos, and fetch available transcripts, then polls Apify until the run succeeds or fails.
4. Filters out videos without transcripts and removes any videos that were already summarized in previous workflow runs.
5. Uses OpenAI to generate a structured summary, key takeaways, topic tags, and a worth-watching verdict for each new video.
6. Appends the video metadata and AI output to a Google Sheets “Videos” tab, builds a combined HTML digest, and sends it to the configured recipient via Gmail.

## Setup
1. Create an Apify account, copy your API token, and add an HTTP Header Auth credential using `Authorization: Bearer <YOUR_APIFY_TOKEN>` for the Apify HTTP requests.
2. Connect Google Sheets OAuth credentials and create a spreadsheet with a “Channels” tab containing a `Source` column and a “Videos” tab with headers matching the logged fields.
3. Add OpenAI credentials (or update the model node) and set the `summaryModel` value if you want to use a different model.
4. Connect Gmail credentials and fill in the Google Sheets document ID (`sheetDocId`) and digest recipient email address (`digestRecipient`) in the workflow settings.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Stop and Error, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
