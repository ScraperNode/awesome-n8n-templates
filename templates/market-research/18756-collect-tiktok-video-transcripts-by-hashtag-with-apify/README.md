# 📊 Collect TikTok video transcripts by hashtag with Apify

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on demand to scrape TikTok videos for a list of hashtags using Apify’s TikTok Scraper, downloads each video’s transcript (WebVTT) over HTTP, filters out very short/empty transcripts, and outputs the remaining transcripts as a JSON file for downstream analysis.

## How it works
1. Runs when you manually execute the workflow.
2. Loads the list of target hashtags to search.
3. Uses Apify’s TikTok Scraper Actor (clockworks/tiktok-scraper) to scrape videos for those hashtags and generate subtitle/transcription links.
4. Extracts a transcript download URL from each scraped video’s metadata.
5. Downloads each transcript file via an HTTP request.
6. Filters out transcripts shorter than 100 characters and converts the remaining items into a downloadable JSON file.

## Setup
1. Self-host n8n and install the Apify community node from Settings → Community Nodes.
2. Create an Apify account and add an Apify OAuth2 credential in n8n.
3. Update the hashtag list in the “Set hashtags to search” step to include the hashtags you want to analyze.
4. Execute the workflow and download the JSON output file from the final step.

## 🔗 Nodes Used

HTTP Request, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
