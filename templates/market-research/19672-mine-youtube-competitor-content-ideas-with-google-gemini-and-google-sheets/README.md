# 📊 Mine YouTube competitor content ideas with Google Gemini and Google Sheets

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly (or on a form submission) to scan competitor YouTube channels via their RSS feeds, uses Google Gemini to generate and score new content ideas, logs high-scoring ideas to Google Sheets, tracks processed videos to avoid repeats, and emails a digest through Gmail.

## How it works
1. Runs on a weekly schedule or when a form submits a comma-separated list of competitor YouTube channel IDs.
2. Reads previously processed video IDs from a Google Sheets “Seen Videos” tab to maintain state across runs.
3. Fetches each competitor channel’s YouTube RSS feed, parses recent uploads, and merges results into a single candidate list.
4. Filters out videos already marked as seen, optionally inserts a forced test candidate, and stops if there are no new videos to analyze.
5. For each new competitor video, sends the title and metadata to Google Gemini to generate three differentiated idea titles plus an opportunity score and supporting fields.
6. Writes only ideas meeting the score threshold to a Google Sheets “Video Ideas” tab and appends every processed video to the “Seen Videos” tab.
7. If at least one idea was saved this run, sends a plain-text digest email via Gmail to the configured recipient.

## Setup
1. Add credentials for Google Sheets OAuth2, Gmail OAuth2, and the Google Gemini (PaLM) API.
2. Create a Google Sheet with two tabs named “Seen Videos” and “Video Ideas” (or update the tab names in the configuration) and paste your spreadsheet ID into the workflow configuration.
3. Provide your competitor YouTube channel IDs (comma-separated) via the form trigger or by setting the configured channel list value used by the workflow.
4. Set the notification recipient email address and adjust limits and thresholds (max videos per channel, max candidates per run, and idea score threshold) in the workflow configuration.
5. Disable the forced test title value in the configuration if you only want real competitor uploads to trigger AI idea generation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
