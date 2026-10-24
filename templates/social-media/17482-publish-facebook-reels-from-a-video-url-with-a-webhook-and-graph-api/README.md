# 📱 Publish Facebook Reels from a video URL with a webhook and Graph API

> ⚡ **28 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow exposes a webhook that takes a public video URL and caption, uploads the video to a Facebook Page as a Reel via the Facebook Graph API’s three-phase upload, and responds with the created Reel’s video ID and link.

## How it works
1. Receives a POST webhook request containing `video_url`, `caption`, and optional `video_state` plus `scheduled_publish_time`.
2. Starts a Facebook Reels upload session on the target Facebook Page using the Facebook Graph API.
3. Instructs Facebook’s upload service to pull the video directly from the provided URL.
4. Waits briefly for Facebook to process the uploaded video.
5. Finishes the upload by setting the caption and creating the Reel as a draft, scheduled post, or published post.
6. Returns the new `video_id` and a `https://www.facebook.com/reel/<video_id>` link in the webhook response.

## Setup
1. Create a Meta app and generate a Facebook Page access token with the required permissions for publishing Reels.
2. Add an n8n HTTP Header Auth credential that sends `Authorization: Bearer <PAGE_ACCESS_TOKEN>` and use it for all Facebook HTTP requests.
3. Replace `YOUR_FACEBOOK_PAGE_ID` with your Facebook Page ID.
4. Call the webhook URL with JSON including a publicly reachable `video_url`, optional `caption`, and optional `video_state` (`DRAFT`, `SCHEDULED`, or `PUBLISHED`) plus `scheduled_publish_time` when scheduling.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
