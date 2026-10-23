# 🎬 Summarize new YouTube channel videos with Gemini and send a digest to Telegram

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every morning, reads YouTube channel RSS feeds to find newly published videos, uses Google Gemini to generate two-line summaries from each video’s title and description, and sends a combined digest (split if needed) to a Telegram chat.

## How it works
1. Runs every day at 8am on a schedule.
2. Loads your list of YouTube channel IDs, a lookback window in hours, and the target Telegram chat ID.
3. Fetches each channel’s YouTube RSS feed and continues even if a channel feed fails.
4. Keeps only videos published within the lookback window and removes any videos already sent in previous executions to avoid duplicates.
5. Uses Google Gemini to generate a one-sentence summary plus a “Worth watching if” line from the video title and RSS description.
6. Builds an HTML Telegram digest, splitting it into multiple messages to stay under Telegram’s message length limit.
7. Sends the digest message(s) to your Telegram chat.

## Setup
1. Add a Google Gemini (PaLM) API credential and ensure the workflow’s Gemini chat model is selected.
2. Create a Telegram bot, add a Telegram API credential in n8n, and set your Telegram chat ID in the workflow settings.
3. Replace the example YouTube channel IDs with your own and adjust the schedule time and lookback hours as needed.

## 🔗 Nodes Used

RSS Read, Telegram, Schedule Trigger, Filter, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
