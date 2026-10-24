# 📁 Unpublish expired YouTube videos using Google Sheets and Slack

> ⚡ **21 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily and checks a Google Sheets embargo schedule for YouTube videos whose unpublish date has passed, then updates their privacy status on YouTube and logs the result back to the sheet while sending a recap (or “nothing due”) message to Slack.

## How it works
1. Runs every day at 6am on a schedule trigger.
2. Reads your embargo control spreadsheet from Google Sheets.
3. Selects videos whose “Unpublish Date” is today or earlier (using a configured timezone), skips rows already marked Expired, and defaults the target privacy status to private when missing.
4. For each due video, fetches the current video snippet and status from YouTube.
5. If the video is not already at the target privacy status, updates the video on YouTube to private or unlisted while preserving its existing title and category.
6. Updates the matching row in Google Sheets to Status = Expired and writes an “Unpublished At” timestamp, then posts a Slack recap of the processed videos.
7. If no videos are due, posts a “nothing due” notice to the configured Slack channel.

## Setup
1. Add a YouTube (Google) OAuth2 credential with permission to read and update videos, and select it in both YouTube steps.
2. Add a Google Sheets credential and replace YOUR_GOOGLE_SHEET_ID with your spreadsheet, then ensure the sheet includes columns like videoId, Unpublish Date, Target Status, Status, Title, and Unpublished At.
3. Add a Slack credential, set YOUR_SLACK_CHANNEL_ID to the channel you want notifications sent to, and ensure the bot/user can post there.
4. Set the TIMEZONE constant in the code step to your channel’s IANA timezone (for example, America/Halifax or Europe/London).

## 🔗 Nodes Used

Google Sheets, Slack, YouTube, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
