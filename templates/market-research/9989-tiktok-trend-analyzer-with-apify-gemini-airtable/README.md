# 📊 TikTok trend analyzer with Apify + Gemini + Airtable

> ⚡ **1,648 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automatically scrape trending TikTok videos, analyze their virality using Gemini AI, and store insights directly into Airtable for creative research or content planning. Made for marketing analysts, creators, and creative agencies looking to understand why videos go viral and how to replicate successful hooks and formats.

## How it works
1. A scheduled trigger runs the Apify TikTok Trends Scraper automatically on a weekly basis.
2. The scraper collects trending video metadata including views, likes, captions, and sounds from TikTok.
3. All collected metadata is stored and organized in Airtable for easy access and future reference.
4. When a specific video URL is submitted via webhook, the workflow fetches its corresponding record from Airtable.
5. Gemini AI analyzes the video and extracts structured insights covering summary, visual hook, audio, and subtitle analysis.
6. The workflow updates the matching Airtable record with all AI-generated insights from the previous step.

## Setup
1. Connect your Apify and Airtable credentials, then link your Gemini or OpenAI API key to the designated credential nodes.
2. Open the Set Configuration node and enter your Airtable base ID and table ID where scraped data will be stored.
3. Adjust the schedule frequency in the trigger node to match how often you want TikTok trends to be scraped and updated.
4. Activate the workflow, then use the webhook endpoint to manually trigger AI analysis on any specific video already stored in Airtable.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
