# 📊 TikTok trend analyzer with Apify + Gemini + Airtable

> ⚡ **1,090 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## TikTok Trend Analyzer with Apify + Gemini + Airtable

Automatically scrape trending TikTok videos, analyze their virality using Gemini AI, and store insights directly into Airtable for creative research or content planning.

## Who’s it for?
Marketing analysts, creators, and creative agencies looking to understand why videos go viral and how to replicate successful hooks and formats.

## How it works
1. A scheduled trigger runs the Apify TikTok Trends Scraper weekly.
2. The scraper collects trending video metadata.
3. Data is stored in Airtable (views, likes, captions, sounds, etc.).
4. When a specific video is submitted via webhook, the workflow fetches it from Airtable.
5. Gemini AI analyzes the video and extracts structured insights: summary, visual hook, audio, and subtitle analysis.
6. The workflow updates the Airtable record with these AI insights.

## How to set up
Connect Apify and Airtable credentials, link Gemini or OpenAI keys, and adjust the schedule frequency. Add your Airtable base and table IDs. You can trigger analysis manually via the webhook endpoint.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
