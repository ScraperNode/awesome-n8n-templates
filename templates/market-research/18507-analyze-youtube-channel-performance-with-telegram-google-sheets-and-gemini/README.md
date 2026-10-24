# 📊 Analyze YouTube channel performance with Telegram, Google Sheets, and Gemini

> ⚡ **114 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Youtube Video: https://youtu.be/0YnI_8VsRe8?si=OLPAo4YOFSyfwCv9

This workflow listens for YouTube channel link sent to a Telegram bot, pulls channel and latest upload metrics from the YouTube Data API, computes velocity and baseline benchmarks, logs a snapshot to Sheets, and generates a structured report using Gemini that it replies with in Telegram.

## How it works
1. Triggers when a new Telegram message arrives and extracts a YouTube channel ID or @handle from the text.
2. Validates the link format and replies in Telegram with usage instructions if no channel identifier is found.
3. Calls the YouTube Data API to resolve the channel details and replies in Telegram if the channel is not found or if the API call fails.
4. Fetches the channel’s uploads playlist and retrieves the latest 20 uploads, then batches a YouTube Data API request to get each video’s stats and metadata.
5. Calculates per-video metrics (such as views per hour, age, duration, chapters, and engagement per 1,000 views), ranks videos by velocity, and computes baseline and “fingerprint” benchmarks (cadence, format splits, title patterns, and trend).
6. If there are fewer than five videos older than 48 hours, sends a “no baseline” message in Telegram; otherwise, appends a snapshot row to Google Sheets.
7. Sends the computed metrics to Google Gemini to write a five-section analysis and posts the final channel report back to Telegram.

## Setup
1. Create a Telegram bot, add your Telegram credentials in n8n, and enable the Telegram Trigger webhook for the workflow.
2. Add YouTube Data API credentials (API key via HTTP Query Auth) and ensure the key has access to the YouTube Data API v3.
3. Add Google Gemini (Google PaLM) API credentials and keep the model set to `models/gemini-3.1-flash-lite`.
4. Add a Google Sheets service account credential, share the target spreadsheet with the service account email, and set the document ID and tab for the snapshot log.
5. Replace the placeholder webhook IDs and any placeholder Sheet IDs/URLs in the workflow with your environment’s actual values.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
