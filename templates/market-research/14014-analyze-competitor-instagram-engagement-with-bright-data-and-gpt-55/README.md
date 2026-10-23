# 📊 Analyze competitor Instagram engagement with Bright Data and GPT-5.5

> ⚡ **142 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Analyze competitor Instagram engagement by scraping profiles with Bright Data and scoring them with GPT-5.5.

This workflow reads competitor Instagram URLs from a Google Sheet, scrapes their profile data using the Bright Data Instagram Profiles dataset, validates the API response, then sends the data to GPT-5.5 for engagement scoring. Each competitor is scored on follower growth, engagement rate quality, content consistency, and audience authenticity (0-25 each, total 0-100). High-scoring competitors trigger email alerts.

How it works:
1. Schedule trigger runs the workflow daily.
2. Reads competitor URLs from the 'competitor_accounts' sheet.
3. Sends each URL to Bright Data's Instagram Profiles API.
4. Validates the API response (handles async/error cases).
5. GPT-5.5 analyzes profile metrics and scores engagement quality.
6. Parses the structured JSON response.
7. Filters by AI confidence (&gt;= 0.7 threshold).
8. Routes high scorers (engagement_score &gt;= 75) to 'top_performers' with Gmail alert.
9. Routes normal results to 'engagement_analysis'.
10. Low confidence results go to 'low_confidence_engagement' for review.

Setup:
- Create a Google Sheet with a 'competitor_accounts' tab containing columns: competitor_name, url, our_industry.
- Add output tabs: engagement_analysis, top_performers, low_confidence_engagement.
- Configure all credentials (Bright Data API, OpenAI, Google Sheets, Gmail).

Requirements:
- Bright Data API account (~$0.01-0.03 per profile scrape).
- OpenAI API account (GPT-5.5 costs ~$0.003-0.008 per call).
- Google Sheets OAuth2 credentials.
- Gmail OAuth2 credentials.

Notes:
- Add competitors one per row with their full Instagram profile URL.
- The engagement_score threshold of 75 can be adjusted in the IF node.
- Low confidence results may indicate incomplete profile data from Bright Data.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
