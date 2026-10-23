# 📊 Analyze Instagram profiles with Apify, Google Gemini, and Supabase

> ⚡ **58 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives an Instagram username via webhook, checks Supabase for a recent cached analysis, and if needed scrapes recent posts with Apify and generates niche, content, and engagement insights using Google Gemini before storing and returning the report.

## How it works
1. Receives a POST webhook request containing an Instagram username.
2. Queries the Supabase `reports` table for matching records updated within the last 24 hours and returns the cached `analysis_report` if found.
3. If no fresh cache exists, runs the Apify Instagram Scraper actor to fetch the latest 5 posts for the requested profile.
4. Cleans and bundles the scraped post data into a compact JSON payload for analysis.
5. Sends the payload to Google Gemini to generate three sub-reports: niche/frequency, content strategy, and engagement/actions.
6. Combines the three Gemini outputs into a single `analysis_report` object along with the scraped data.
7. Upserts the report into Supabase (update if the username exists, otherwise insert) and returns the fresh `analysis_report` in the webhook response.

## Setup
1. Create or select a Supabase project, add Supabase credentials in n8n, and ensure a `reports` table exists with at least `username`, `analysis_report`, `scraped_data`, and `updated_at` columns.
2. Add an Apify API token in n8n and ensure the workflow can run the `apify/instagram-scraper` actor with access to the target profiles.
3. Add Google Gemini (PaLM) API credentials in n8n for the Gemini model used in the three analysis steps.
4. Copy the production webhook URL from the webhook trigger and configure your source app (e.g. Lovable) to POST a JSON body containing `username` to `/analyze-profile`.

## 🔗 Nodes Used

Webhook, Supabase, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
