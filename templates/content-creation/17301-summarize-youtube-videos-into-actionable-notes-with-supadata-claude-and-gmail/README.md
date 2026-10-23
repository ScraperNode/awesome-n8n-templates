# 🎬 Summarize YouTube videos into actionable notes with Supadata, Claude and Gmail

> ⚡ **44 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow takes a YouTube URL, fetches the video transcript via Supadata, summarizes it into a TL;DR, takeaways, notes, and action items using Anthropic Claude, and emails the formatted results to you via Gmail.

## How it works
1. Runs manually when you click Test workflow.
2. Reads the YouTube URL, optional focus topic, transcript API key, Anthropic API key, model name, and recipient email from the workflow configuration.
3. Calls the Supadata YouTube Transcript API to retrieve the video transcript text.
4. Sends the transcript (optionally weighted by your focus) to the Anthropic Messages API to generate a JSON-structured title, TL;DR, key takeaways, notes, and action items.
5. Formats the AI output into an HTML email with sections for TL;DR, key takeaways, notes, and action items.
6. Sends the formatted notes to the configured recipient using Gmail.

## Setup
1. Add a Supadata API key and paste it into the configuration fields along with the YouTube URL you want to summarize.
2. Provide an Anthropic API key, set the model name you want to use, and ensure the workflow can reach the Anthropic Messages API.
3. Connect your Gmail account in the Gmail node and set the recipient email address in the configuration fields.

## 🔗 Nodes Used

HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
