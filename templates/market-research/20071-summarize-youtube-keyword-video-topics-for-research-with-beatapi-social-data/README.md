# 📊 Summarize YouTube keyword video topics for research with BeatAPI Social Data

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This manual workflow searches YouTube videos for a chosen keyword using BeatAPI Social Data, then uses a BeatAPI chat/completions text model to generate a cited topic brief based on up to 12 public search results.

## How it works
1. Starts when you run the workflow manually.
2. Sets the target YouTube keyword and the BeatAPI text model to use.
3. Calls BeatAPI Social Data (`data:youtube.web.search_video`) in preview mode to fetch up to 12 public YouTube video results from this month (English, US).
4. Filters and normalizes the returned items into an evidence set with video IDs/URLs, titles, descriptions, channel info, and the BeatAPI request ID, and stops with an error if no usable results are found.
5. Sends the evidence set to the BeatAPI chat/completions endpoint to draft a topic brief that highlights recurring topics and questions and cites specific videos.
6. Outputs a research draft containing the summary plus source metadata (result counts, truncation indicator, and request IDs).

## Setup
1. Create a BeatAPI API key and add it to n8n as an HTTP Header Auth credential with `Authorization: Bearer <your BeatAPI key>`.
2. Select that BeatAPI credential in both HTTP Request steps that call `https://api.beatapi.io/v1/capabilities/run` and `https://api.beatapi.io/v1/chat/completions`.
3. Update the keyword and choose a BeatAPI text model available to your account in the input configuration step, and adjust language/country/month filters in the Social Data request if needed.

## Additional info
BeatAPI YouTube API and use cases: https://beatapi.io/youtube-api. Create and manage your BeatAPI API key: https://beatapi.io/dashboard/apikeys. Social Data action catalog: https://docs.beatapi.io/social-data-catalog. This template analyzes public video search results; it does not fetch transcripts or publish videos.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
