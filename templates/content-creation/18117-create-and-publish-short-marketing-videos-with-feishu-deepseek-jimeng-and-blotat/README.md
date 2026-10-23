# 🎬 Create and publish short marketing videos with Feishu, DeepSeek, Jimeng and Blotato

> ⚡ **74 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns Feishu bot messages into a human-in-the-loop short-video production pipeline, using Tavily for web search, DeepSeek for topic and script generation, Jimeng AI for text-to-video, and Blotato to publish the approved video to TikTok, Instagram, and YouTube Shorts.

## How it works
1. Receives a Feishu bot event via webhook, immediately returns the Feishu challenge or an “ok” response, and continues processing asynchronously.
2. Parses the incoming message to extract the user and chat identifiers, detects commands (for example “确认选题”, “通过”, “修改”, “满意”), and looks up the user’s current state in a Feishu Bitable table.
3. For topic exploration messages, runs a Tavily web search, sends the search context plus conversation history to DeepSeek to generate topic options, replies in Feishu, and appends the dialog back to Bitable.
4. When the user confirms a topic, calls DeepSeek to generate a structured short-video script, posts the script to Feishu for review, and saves the confirmed topic and script to Bitable with the state set to script review.
5. When the user requests changes, uses DeepSeek to either revise the existing script based on feedback or fully rewrite it, then re-sends the updated script to Feishu and keeps the workflow in script review.
6. When the user approves the script, converts the script into a Jimeng-friendly prompt with DeepSeek, submits a Jimeng text-to-video generation task, notifies the user in Feishu, waits, queries Jimeng for the video URL, and sends a preview card while saving the video URL and state to Bitable.
7. When the user approves the video, uploads the video to Blotato and publishes it to TikTok, Instagram, and YouTube via Blotato, then sends a completion message in Feishu and marks the session as published in Bitable.

## Setup
1. Create and configure a Feishu self-built app with a bot, enable event subscriptions for im.message.receive_v1, grant the required messaging permissions, and set the n8n production webhook URL as the event callback.
2. Create a Feishu Bitable base and table with the required fields (user_id, state, topic, script, video_url, jimeng_task_id, updated_at) and copy the appToken and tableId into the workflow.
3. Add API credentials in the global configuration: DeepSeek API key, Tavily API key, Jimeng API key, and Blotato API key, plus your Feishu app_id and app_secret.
4. In Blotato, connect your TikTok, Instagram, and YouTube accounts, copy their Account IDs, and fill them into the workflow’s Blotato account ID configuration.
5. Ensure n8n is reachable from the public internet (for example via a reverse proxy or ngrok) so Feishu can deliver webhook events.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
