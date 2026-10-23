# 🎬 Create and publish short video clips with Reap, OpenAI, Instagram, YouTube, TikTok

> ⚡ **22 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a source video into a short-form clip using Reap, generates platform-specific captions and metadata with OpenAI, and optionally publishes the result to Instagram Reels, YouTube Shorts, and TikTok via Zernio.

## How it works
1. Runs manually when you click Execute workflow and validates the source video URL plus clip generation settings.
2. Sends the source video to Reap to generate portrait clips with captions, polls Reap until processing completes, and fetches the generated clips.
3. Selects the clip with the highest Reap virality score and uses OpenAI to generate Instagram, TikTok, and YouTube Shorts copy, then parses and validates the text against character and hashtag rules.
4. Validates publishing settings (including dry-run vs live mode) and routes the run to Instagram, YouTube, and/or TikTok based on the enabled toggles.
5. If Instagram is enabled, creates an Instagram Reel container via the Instagram Graph API, waits and checks processing status until finished, then publishes the Reel.
6. If YouTube is enabled, downloads the selected clip and uploads it to YouTube as a Short with the generated title and description.
7. If TikTok is enabled, uploads the video to Zernio and creates a TikTok post, retrying automatically when Zernio reports temporary “at capacity” errors.

## Setup
1. Add credentials for Reap API (HTTP Bearer Auth) and OpenAI.
2. If publishing to Instagram, add an Instagram Graph API Bearer token and set your Instagram user ID and Graph API version in Publishing Settings.
3. If publishing to YouTube, connect a YouTube OAuth account and set the privacy status, category ID, and region in Publishing Settings.
4. If publishing to TikTok, add a Zernio API Bearer token, connect TikTok in Zernio, and set the Zernio TikTok account ID plus required TikTok consent and privacy settings in Publishing Settings.
5. Update the Content Input and Social/Video settings values for your video, then run with dry_run enabled first and switch dry_run off only when you are ready to publish.

## Requirements
- A Reap account with API access for AI video clipping.
- An OpenAI API account and API key.
- An Instagram Professional account connected to Meta, if Instagram publishing is enabled.
- A YouTube channel with OAuth access, if YouTube publishing is enabled.
- A Zernio account with TikTok connected, if TikTok publishing is enabled.

## Customization
- Change the source video URL and clip generation settings.
- Enable or disable Instagram, YouTube, and TikTok publishing independently.
- Customize captions, hashtags, tone, language, and platform-specific metadata.
- Adjust Reap clip duration and video processing settings.
- Use dry-run mode to test the workflow without publishing content.

## Additional info
The workflow includes a START HERE guide with setup instructions for Reap, OpenAI, Instagram, YouTube, and Zernio.

Reap is used for AI video clipping and processing. Users can create an account at https://reap.video.

TikTok publishing is handled through Zernio. Setup instructions and the required account configuration are included inside the workflow.

It is recommended to run the workflow with dry_run enabled first. After validating the generated clip, captions, and platform settings, disable dry_run to enable live publishing.

## 🔗 Nodes Used

HTTP Request, YouTube, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
