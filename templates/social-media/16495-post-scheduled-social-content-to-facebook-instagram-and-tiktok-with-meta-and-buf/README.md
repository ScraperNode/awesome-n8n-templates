# 📱 Post scheduled social content to Facebook, Instagram, and TikTok with Meta and Buffer

> ⚡ **74 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every two minutes to fetch due social posts from your app, publishes them to Facebook Pages and Instagram (via the Meta Graph API) and to TikTok (via Buffer), and then reports per-platform posting results back to your app.

## How it works
1. Runs every 2 minutes and calls your app’s `/posts/due` endpoint to retrieve posts scheduled for publishing.
2. For posts that include Facebook, it publishes either a photo or a video to the configured Facebook Page using the Meta Graph API.
3. For posts that include Instagram, it creates an Instagram media container for an image or a Reel via the Meta Graph API.
4. For Instagram Reels, it waits and polls the container status (up to 20 retries) until processing finishes or errors.
5. Once the Instagram container is ready, it publishes the media to Instagram using the Meta Graph API.
6. For posts that include TikTok and are videos, it sends a “share now” publish request to Buffer’s API and checks whether Buffer accepted the post.
7. After each platform attempt, it POSTs a `POSTED` or `FAILED` status (and any external ID or error details) back to your app at `/posts/{id}/result`.

## Setup
1. Create an HTTP Header Auth credential for your app API and update the base URL and `clientId` query parameter used for `https://your-app.com/api/n8n/posts/due`.
2. Create a Meta Graph API access token credential (HTTP Query Auth) and replace `YOUR_FB_PAGE_ID` and `YOUR_IG_ACCOUNT_ID` with your Facebook Page ID and Instagram Business/Creator account ID.
3. Create a Buffer API credential (HTTP Header Auth) and replace `YOUR_BUFFER_CHANNEL_ID` with the Buffer channel ID for your TikTok account.
4. Ensure your app’s `/posts/due` response includes `id`, `platforms`, `mediaType`, `mediaUrl`, and `caption`, and that `/posts/{id}/result` accepts the workflow’s result payload.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
