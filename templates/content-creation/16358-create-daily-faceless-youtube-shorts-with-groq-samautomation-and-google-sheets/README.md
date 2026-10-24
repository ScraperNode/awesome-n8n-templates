# 🎬 Create daily faceless YouTube Shorts with Groq, SamAutomation and Google Sheets

> ⚡ **492 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to generate a YouTube Shorts topic and script with Groq, render a faceless vertical video via SamAutomation (images, voiceover, subtitles), upload it to YouTube, and track status in Google Sheets.

## How it works
1. Runs every day at 10:00 on a schedule.
2. Reads niche, sub-niche, and voice settings from a Google Sheets “Config” tab.
3. Calls the Groq Chat Completions API to generate three Shorts topic ideas and selects the first topic.
4. Appends the selected topic to a Google Sheets “Topic Bank” tab with status set to “scripting,” then calls Groq again to generate a scene-based script plus YouTube metadata.
5. Builds a SamAutomation render payload that generates Flux images, adds TTS voiceover, and burns word-level subtitles into a 1080×1920 video.
6. Starts a SamAutomation render job and polls until the status is “done,” then captures the hosted MP4 URL.
7. Uploads the video to YouTube with the generated title, description, and tags, and updates the Google Sheets “Topic Bank” row to “published” with a timestamp.

## Setup
1. Create credentials for Groq (HTTP Header Auth with `Authorization: Bearer <GROQ_API_KEY>`) and SamAutomation (HTTP Header Auth with `X-API-Key: <SAM_AUTOMATION_KEY>`).
2. Connect Google Sheets OAuth2 and update the spreadsheet URL/ID in the Google Sheets nodes, with tabs named “Config” (selected_niche, selected_sub_niche, voice_id) and “Topic Bank” (date, niche, topic_title, hook_line, angle, target_emotion, status, published_at).
3. Connect YouTube OAuth2, enable the YouTube Data API v3 in Google Cloud, and ensure your OAuth scopes allow uploading (for example `youtube.upload`).
4. Review the YouTube upload settings (privacy status, categoryId, language) and adjust the daily cron schedule time if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
