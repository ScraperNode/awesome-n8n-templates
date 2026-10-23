# 🎬 Create and publish AI YouTube videos from Google Sheets with GPT-4o and JSON2Video

> ⚡ **32 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls “to create” YouTube ideas from Google Sheets, uses OpenAI to generate a 14-scene script with voice and image prompts, renders a video via JSON2Video with selected music assets, saves the output URL back to Sheets, and only uploads to YouTube after manual approval.

## How it works
1. Runs on a schedule and fetches the first Google Sheets row where PRODUCTION STATUS is set to “to create”.
2. Sends the idea title, captions, and style fields to OpenAI (GPT-4o) to generate a 14-scene JSON script with two-sentence voiceover text and cinematic image prompts.
3. Reads the selected “final” music/intro assets from a second Google Sheets tab and submits the script, voice settings (ElevenLabs), image model, and audio/intro URLs to the JSON2Video API to start rendering.
4. Waits, polls JSON2Video for render status, and repeats until the movie is done or errors out.
5. When rendering completes, writes the JSON2Video movie URL back to Google Sheets and marks the row as created, or logs an error status to Google Sheets if rendering fails.
6. When a row’s PUBLISHING STATUS is set to “approved,” the workflow downloads the finished video from the stored URL, uploads it to YouTube, applies privacy and compliance status via the YouTube Data API, and marks the row as published in Google Sheets.

## Setup
1. Create and connect credentials for Google Sheets OAuth2, OpenAI, YouTube OAuth2, and an HTTP Header Auth credential for your JSON2Video API key.
2. Replace REPLACE_WITH_YOUTUBE_CONTENT_SHEET_ID, REPLACE_WITH_JSON2VIDEO_TEMPLATE_ID, and REPLACE_WITH_ELEVENLABS_VOICE_ID with your actual Google Sheet ID, JSON2Video template ID, and ElevenLabs voice ID.
3. Ensure your Google Sheet includes the expected columns (for example ID, IDEAS, CAPTIONS, CHANNEL_STYLE_PROMPT, CHARACTER_STYLE_PROMPT, PRODUCTION STATUS, FINAL OUTPUT, PUBLISHING STATUS, plus optional YouTube fields like YOUTUBE PRIVACY and MADE FOR KIDS).
4. Populate the music/assets sheet used by “Get Music” with fields like “audio list,” “intro video,” and a “to use” value of “final” for the row you want selected.
5. Set PRODUCTION STATUS to “to create” to generate a video, then manually review the FINAL OUTPUT URL and change PUBLISHING STATUS to “approved” before running the manual publish trigger (or enabling the optional hourly schedule).

## 🔗 Nodes Used

Google Sheets, HTTP Request, YouTube, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
