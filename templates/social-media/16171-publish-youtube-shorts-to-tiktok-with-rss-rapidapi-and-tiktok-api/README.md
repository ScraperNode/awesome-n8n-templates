# 📱 Publish YouTube Shorts to TikTok with RSS, RapidAPI and TikTok API

> ⚡ **217 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow polls a YouTube Shorts playlist RSS feed, deduplicates videos using an n8n Data Table, downloads each new Short via the YouTube Media Downloader API (RapidAPI), and uploads it to TikTok using the TikTok Content Posting API in either draft or direct publish mode.

## How it works
1. Runs every hour and checks the YouTube RSS feed for new videos in the configured Shorts playlist.
2. Looks up the video ID in an n8n Data Table and stops if the Short was already processed.
3. Stores the new video ID in the Data Table and maps the RSS fields (title, link, author, publish date) into a clean payload.
4. Calls the YouTube Media Downloader API on RapidAPI to retrieve stream details, selects an MP4 with audio, and downloads the video file.
5. Exchanges the TikTok refresh token for a new access token via TikTok’s OAuth endpoint.
6. Initializes a TikTok upload as either an inbox draft or a direct post (using the configured privacy level) and uploads the MP4 binary to the returned TikTok upload URL.

## Setup
1. Update the YouTube RSS feed URL with your playlist ID and set your preferred polling interval.
2. Create and select an n8n Data Table for deduplication and ensure it has a string column named short_id.
3. Add your RapidAPI key for youtube-media-downloader.p.rapidapi.com in the request headers.
4. Create a TikTok developer app with the Content Posting API, generate a refresh token, and set your client_key, client_secret, and refresh_token in the TikTok OAuth request.
5. Choose whether to upload as draft or publish by setting the mode and privacy_level values, and ensure your TikTok app/account meets TikTok’s publishing and privacy requirements (for unaudited apps, use SELF_ONLY).

## Requirements
- RapidAPI Account: You need an active RapidAPI account subscribed to the "YouTube Media Downloader" API to fetch the video files.
- TikTok Developer Account: You must create an app on developers.tiktok.com, add the "Content Posting API" product, and add your TikTok account as a sandbox tester.
- n8n Data Tables Feature: Your n8n instance must support and have Data Tables enabled to handle the deduplication process.
- YouTube Playlist ID: The 34-character ID of the YouTube Shorts playlist you want to monitor.

## Customization
- Dynamic Hashtags: You can easily modify the TikTok Init Publish node to automatically append specific hashtags to your YouTube descriptions before posting.
- AI Caption Generation: You can insert an OpenAI or Anthropic node before the upload steps to rewrite your YouTube title into an engaging, viral-style TikTok caption.
- Success Notifications: Add a Slack, Discord, or Telegram node at the very end of the workflow to notify your team when a new Short has been successfully published to TikTok.
- Schedule adjustments: Change the RSS trigger from everyHour to everyDay or trigger on a specific cron schedule depending on your upload frequency.

## Additional info
ro-Tip for Setup: This workflow includes a standalone Get Refresh Token (One Time Setup) node. You only need to use this node once to generate your initial refresh token. Once you have the token, paste it into the main workflow, and n8n will handle the daily access token renewals automatically!
Contact:
LinkedIn: linkedin.com/in/salman-mehboob-pro
Email: salmanmehboob1947@gmail.com

## 🔗 Nodes Used

HTTP Request, RSS Feed Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
