# 📊 Find businesses with unanswered reviews using Apify, Supabase and Google Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a category and location via webhook, uses Apify to scrape recent Google Maps reviews, ranks businesses with unanswered low-star reviews, stores the opportunities in Supabase (Postgres), creates and shares a Google Sheet report, and returns the results and sheet link in the webhook response.

## How it works
1. Receives a POST webhook request containing a business category and location (and optional rating/review count/result limits).
2. Validates and normalizes the input parameters, then creates a “running” request record in Supabase (Postgres).
3. Calls Apify’s Google Maps Reviews Scraper to fetch reviews for the requested search term and captures errors if the scrape fails.
4. Groups the scraped reviews by business and identifies low-star (≤2) reviews that have no owner reply.
5. Scores and ranks businesses that meet the minimum rating and review-count thresholds, then stores the top results as opportunities in Supabase.
6. Creates a new Google Sheet, writes the headers and ranked opportunities into it, and shares the sheet publicly as read-only.
7. Marks the request as completed in Supabase and responds to the webhook with the ranked results and the Google Sheet URL.

## Setup
1. Add credentials for Supabase Postgres, an Apify HTTP Header Auth token (Authorization: Bearer <YOUR_APIFY_TOKEN>), Google Sheets OAuth, and Google Drive OAuth.
2. Create the Supabase tables `automation_requests` and `opportunities` with the columns expected by the workflow (including UUID `automation_requests.id` and JSONB fields like `input_json` and `opportunities.evidence`).
3. Configure the webhook URL in the calling app (for example, Lovable) and send at least `category` and `location` in the POST body (optionally `min_rating`, `min_review_count`, and `max_results`).
4. Review the Google Drive sharing behavior before activation, since the workflow grants “anyone with the link” reader access to the created sheet.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
