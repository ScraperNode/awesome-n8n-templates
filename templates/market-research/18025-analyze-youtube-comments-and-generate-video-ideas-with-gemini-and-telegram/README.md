# 📊 Analyze YouTube comments and generate video ideas with Gemini and Telegram

> ⚡ **234 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Youtube Video: https://youtu.be/YtHfQONV4A4
This workflow accepts a YouTube video URL via Telegram, pulls the video metadata and top 100 comments using the YouTube Data API, analyzes audience sentiment and themes with Google Gemini, generates new video ideas, logs the report to Google Sheets, and replies with the results in Telegram.

## How it works
1. Triggers when a Telegram bot receives a message containing a YouTube video URL.
2. Validates the URL, extracts the video ID, and replies in Telegram with an error if the URL is invalid.
3. Calls the YouTube Data API to fetch the video’s details and the top 100 most relevant comment threads.
4. Cleans the comment list by extracting key fields, removing empty entries, and deduplicating by comment text.
5. Sends the video metadata and aggregated comments to Google Gemini to produce a structured audience analysis including sentiment, repeated questions, and scored content opportunities.
6. Uses Google Gemini again to generate exactly seven new video ideas based on the top repeated questions and highest-scoring opportunities.
7. Appends the final report to Google Sheets and sends a formatted summary back to the requester in Telegram.

## Setup
1. Create/connect a Telegram bot credential in n8n and start a chat with the bot so it can receive messages.
2. Add a YouTube Data API key and replace the placeholder values in both YouTube HTTP requests (video details and commentThreads).
3. Add Google Gemini (Google PaLM) API credentials for the two Gemini chat model nodes.
4. Connect Google Sheets using a Google Service Account, share the target spreadsheet with that service account, and select the document and sheet to append results to.
5. Review the Telegram reply formatting and ensure the workflow sends the response to the incoming chat ID.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
