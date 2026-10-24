# 🎬 Clip YouTube videos into shorts with OpenShorts and Telegram approval

> ⚡ **609 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow checks a YouTube channel’s RSS feed daily, sends one unprocessed video to OpenShorts for automatic 9:16 clip generation, delivers the resulting clips to Telegram for human approval, schedules approved clips for multi-platform posting via OpenShorts, and sends a weekly Telegram analytics digest.

## How it works
1. Runs every day at 09:00 and reads your YouTube channel RSS feed to find the newest unprocessed video.
2. Submits the selected YouTube URL to the OpenShorts API to generate short-form clips and provides an n8n webhook URL for completion callbacks.
3. Marks the video as processed only after OpenShorts accepts the job, and notifies you in Telegram when clipping starts or if OpenShorts rejects the request (for example, due to quota limits).
4. Receives an OpenShorts webhook event when the job completes and sends each generated clip (or a download link if it’s too large) to Telegram with inline Publish and Skip buttons.
5. Triggers on Telegram button taps, and when you approve a clip it fetches the current OpenShorts scheduled queue to pick the next available posting date (one per day).
6. Schedules the approved clip to the configured platforms (TikTok, Instagram, and YouTube) via the OpenShorts social posting API and confirms success or failure back in Telegram.
7. Runs every Sunday at 18:00, pulls weekly impressions and per-post metrics from OpenShorts analytics, and sends a summary digest to Telegram including totals and the best-performing post.

## Setup
1. Create an OpenShorts API key at https://openshorts.app and add it to n8n as an HTTP Header Auth credential (for example, header `Authorization: Bearer osk_...`). API reference: https://openshorts.app/automate-shorts-api
2. Create a Telegram bot with @BotFather, add the Telegram credential in n8n, and set your target Telegram chat ID in the Settings nodes.
3. Update the YouTube channel ID in the Settings node so the RSS URL resolves to `https://www.youtube.com/feeds/videos.xml?channel_id=UC...`.
4. Copy the production URL of the OpenShorts completion webhook and paste it into the `webhook_url` field in the OpenShorts job request body, and set a `webhook_secret` value to match your OpenShorts configuration if used.
5. In OpenShorts, connect the social accounts you want to post to and adjust the platform list and timezone in the scheduling request if needed.

## Requirements
- An OpenShorts account with API access (https://openshorts.app) and your social accounts connected there for scheduling.

## Customization
- Change the platform list in the scheduling request to any networks supported by OpenShorts (TikTok, Instagram, YouTube, LinkedIn, X, Facebook, Threads, Pinterest, Bluesky), or route approved clips through Upload-Post (https://www.upload-post.com) if you prefer to publish with your own captions and per-platform settings.

## Additional info
OpenShorts (https://openshorts.app) turns long videos into ready-to-post vertical clips with AI reframing, captions and scheduling. It is built by the team behind Upload-Post (https://www.upload-post.com), the social media posting API with n8n nodes, so both tools work well together in the same workflow.

## 🔗 Nodes Used

HTTP Request, RSS Read, Webhook, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
