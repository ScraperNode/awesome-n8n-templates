# 🎬 Create episodic Seedance 2.5 TikTok shorts with GPT-6 and Replicate

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This scheduled workflow reads episode and character data from Google Sheets, uses OpenAI to write a 30-second Seedance 2.5 prompt with captions, renders the video on Replicate, and publishes it via SocialRobot to TikTok (draft) with optional posting to Instagram Reels and Threads.

## How it works
1. Runs every day at 18:00 on a schedule trigger.
2. Reads the Episodes tab in Google Sheets, selects the first episode not marked done/failed, and pulls the most recent completed episode summary for continuity.
3. Loads matching character reference image URLs and descriptions from the Characters tab in Google Sheets and prepares them as ordered reference inputs.
4. Uses OpenAI (GPT-6 Luna) to generate a timed multi-shot Seedance prompt, an episode title, platform-specific captions, and a short episode summary.
5. Submits a Seedance 2.5 reference-to-video job to Replicate, polls until it succeeds/fails/times out, and downloads the resulting MP4.
6. Validates the downloaded video’s file size, type, and duration, then uses SocialRobot to save a TikTok inbox draft and (if enabled) publish to Instagram Reels and Threads.
7. Updates the episode row in Google Sheets with status, post IDs, produced timestamp, and the new summary, or marks the row failed with a readable error message.

## Setup
1. Self-host n8n and install the SocialRobot community node, then add your SocialRobot API credentials and connect your TikTok/Instagram/Threads accounts.
2. Create a Google Sheet with Episodes and Characters tabs matching the required columns, then paste the sheet URL into the sheet_url field in Set Series Settings.
3. Add Google Sheets OAuth credentials for the Google Sheets nodes.
4. Add a Replicate HTTP Bearer token credential for the Replicate HTTP Request nodes and an OpenAI credential for the OpenAI chat model.
5. Select the target SocialRobot account IDs for TikTok (and optionally Instagram Reels/Threads) and enable the Instagram/Threads nodes if you want immediate public posting.
6. Review and adjust series settings (premise, style, model, resolution, duration, limits) and the schedule trigger time before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
