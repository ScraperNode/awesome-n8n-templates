# 📊 Mine YouTube buyer objections with Bright Data, OpenAI, Google Sheets and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Watches comments on competitor review videos through Bright Data, so no YouTube API key or quota is needed. Rules in code sort every comment into six objection types (price, performance, complexity, missing features, switching, trust) and pull out rival products viewers name. OpenAI writes the digest.

## How it works
1. Runs every Monday morning or starts manually to begin a new research run.
2. Normalizes the list of YouTube video URLs/IDs from the workflow settings and triggers a Bright Data dataset crawl to collect top or newest comments per video.
3. Polls Bright Data until the crawl is ready, then downloads the snapshot results including any per-video errors.
4. Filters and deduplicates the returned rows, skipping very short comments and keeping track of videos that returned errors or no comments.
5. Classifies each comment into one or more objection themes (price, performance, complexity, missing features, switching, trust) and extracts named alternatives when someone says they switched.
6. Ranks themes by volume and likes, selects representative quotes, and uses OpenAI to write a one-sentence insight per theme plus an overall summary.
7. Appends one row per theme to Google Sheets and posts the run digest (including top quotes, named alternatives, and any crawl gaps) to a Slack channel.

## Setup
1. Add a Bright Data HTTP Header Auth credential with `Authorization: Bearer <YOUR_API_KEY>`.
2. Add an OpenAI API credential for the chat model used to generate the written summaries.
3. Add a Slack credential and set the target channel (for example, `#product`) for posting the digest.
4. Create a Google Sheet with columns `run_date`, `theme`, `comments`, `likes`, `share_pct`, and `top_quote`, then paste its URL into `sheet_url` in the Settings.
5. Update `video_urls` (and optionally `comments_per_video`, `sort_by`, and `min_comment_chars`) in the Settings to control which YouTube comment sections are crawled and how many comments are collected per video.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
