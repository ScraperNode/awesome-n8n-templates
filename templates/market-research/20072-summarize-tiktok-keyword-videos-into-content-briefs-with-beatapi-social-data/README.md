# 📊 Summarize TikTok keyword videos into content briefs with BeatAPI Social Data

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually to search public TikTok videos for a keyword via BeatAPI Social Data, then uses a BeatAPI text model to generate a cited content-idea brief based on the sampled video metadata.

## How it works
1. Starts when you run the workflow manually.
2. Sets the target TikTok keyword and the BeatAPI text model to use.
3. Calls BeatAPI Social Data (TikTok video search) to fetch recent public keyword search results using a compact field projection and keeps up to 12 videos.
4. Validates the response and prepares evidence records with video IDs, creator handles, descriptions, engagement counts, and constructed TikTok URLs.
5. Sends the evidence to the BeatAPI chat completions endpoint to draft a short content brief that cites specific video IDs or URLs and notes the limits of metadata-only analysis.
6. Returns the generated brief along with the source metadata (counts, truncation flag, and BeatAPI request ID).

## Setup
1. Create a BeatAPI API key and add an n8n HTTP Header Auth credential with header name `Authorization` and value `Bearer <your key>`.
2. Select that HTTP Header Auth credential in both BeatAPI HTTP Request steps (Social Data run and chat completions).
3. Set the keyword you want to research and update the `model` value to a BeatAPI text model available to your account.

## Additional info
BeatAPI TikTok API and use cases: https://beatapi.io/tiktok-api. Create and manage your own BeatAPI API key: https://beatapi.io/dashboard/apikeys. Social Data action catalog: https://docs.beatapi.io/social-data-catalog. The template runs tiktok.app.v3.fetch_video_search_result for public keyword videos and drafts a brief from metadata; it does not download videos or publish to TikTok.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
