# 🎬 Generate YouTube video clips with Reka Vision, Google Sheets, Gmail, and Telegram alerts

> ⚡ **24 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Turn new YouTube uploads into video clips automatically. This workflow watches a channel's RSS feed daily, sends each new video to Reka Vision for clipping, and notifies you on Telegram and Gmail when the clip is ready, while logging every result in Google Sheets so no video gets processed twice.

*Last updated: September 2026.*

## Quick overview
This workflow monitors a YouTube channel RSS feed, generates a video clip with Reka Vision, and sends completion or failure alerts via Telegram and Gmail while logging each result to Google Sheets to avoid reprocessing the same video.

## How it works
1. Polls a YouTube channel RSS feed on a daily schedule and ingests new video entries.
2. Extracts the video ID, title, URL, and publish date, then checks Google Sheets to see whether the video has already been logged.
3. If the video is new, submits the video URL to Reka Vision to create a clip (with subtitles enabled) and initializes a retry counter.
4. Waits 10 minutes and then polls Reka Vision for the render job status, repeating the check until the job completes or the retry limit is reached.
5. When rendering completes, sends the clip download link to a Telegram chat and emails the link via Gmail, then appends a “completed” row to the Google Sheets ClipLog.
6. If rendering does not complete after the allowed checks, sends failure alerts to Telegram and Gmail and appends a “failed” row to the Google Sheets ClipLog.

## Setup
1. Update the YouTube RSS feed URL (channel_id) in the trigger to match the channel you want to monitor.
2. Add credentials for Reka Vision, Google Sheets, Telegram, and Gmail.
3. Create a Google Sheet tab named “ClipLog” with columns video_id, title, clip_url, status, logged_at, and set the CLIP_LOG_SHEET_URL environment variable to its URL.
4. Set the TELEGRAM_CHAT_ID environment variable and update the recipient email address in both Gmail send steps.
5. Adjust the wait time (10 minutes) and retry limit (6 checks) to match typical Reka rendering times.

### Quick Answers
**How often does it check for new videos?**
It polls the YouTube channel RSS feed on a daily schedule.

**Why do I need Google Sheets?**
A “ClipLog” tab records each video’s ID, title, clip URL, and status so the same video is never rendered twice.

**How long does a clip take to render?**
The workflow waits 10 minutes between render checks and retries up to 6 times before giving up.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
