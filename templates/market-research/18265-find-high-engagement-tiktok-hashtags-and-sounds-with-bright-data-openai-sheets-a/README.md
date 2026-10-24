# 📊 Find high-engagement TikTok hashtags and sounds with Bright Data, OpenAI, Sheets and Slack

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to scrape TikTok search results with Bright Data, calculates which hashtags and sounds outperform each topic’s median engagement, uses OpenAI GPT-5.6 to infer the content format from top captions, logs results to Google Sheets, and posts a ranked digest to Slack.

## How it works
1. Runs weekly on a schedule and loads the topic list and thresholds (posts per topic, minimum plays, lift, and cooldown) from a central configuration.
2. Triggers a Bright Data TikTok discovery scrape for each topic, then polls the Bright Data progress endpoint until the snapshot is ready (or times out).
3. Downloads the scraped posts and computes per-post engagement rate, then aggregates results by hashtag and by sound and keeps only groups that beat the topic’s median engagement by the configured lift and have enough posts.
4. Reads previously logged tags from Google Sheets and filters out any tag/sound that was reported within the cooldown window.
5. Uses OpenAI GPT-5.6 to extract a content format, angle, and topics from the captions of each tag’s best-performing posts, then ranks the final list and generates a short strategy brief.
6. Appends one row per selected hashtag/sound to Google Sheets and posts a formatted ranked digest (with metrics and best-post links) to the configured Slack channel.

## Setup
1. Add a Bright Data API key as an HTTP Header Auth credential (Authorization: Bearer YOUR_KEY).
2. Connect OpenAI (Chat) credentials for the GPT-5.6-terra model used to extract formats and write the brief.
3. Connect Google Sheets credentials and create a spreadsheet with a "Tags" sheet, then set the Google Sheets URL in the configuration.
4. Connect Slack credentials and set the target channel name in the configuration.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
