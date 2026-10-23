# 📊 Build a weekly content calendar from YouTube and Instagram comments with OpenAI

> ⚡ **49 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This weekly workflow pulls recent comments from YouTube and Instagram, filters for real questions and requests, uses OpenAI to cluster and rank recurring topics, then writes a question bank and next-week content calendar to Google Sheets and posts a summary digest to Slack.

## How it works
1. Runs weekly on a schedule trigger.
2. Fetches recent uploads from the configured YouTube channel and pulls top-level comment threads for each recent video via the YouTube Data API.
3. Fetches recent Instagram media for the configured account and pulls comments for recent posts via the Instagram Graph API.
4. Merges YouTube and Instagram comments, removes spam/duplicates, and keeps the most relevant questions and requests ranked by engagement.
5. Sends the curated comment set to OpenAI to cluster repeated questions into themes and then scores clusters using mention counts, likes, and cross-platform demand.
6. Appends the ranked clusters as rows to a Google Sheets “Question Bank” tab.
7. Uses OpenAI to generate a next-week content calendar from the top clusters, appends the plan to a Google Sheets “Content Calendar” tab, and posts a weekly digest to a Slack channel.

## Setup
1. Add an HTTP Query Auth credential for the YouTube Data API v3 key and an HTTP Query Auth credential for an Instagram Graph API long-lived access token.
2. Add OpenAI credentials for the two OpenAI steps (clustering and calendar generation).
3. Add Google Sheets OAuth2 credentials, set the spreadsheet ID in both Google Sheets nodes, and ensure the spreadsheet has “Question Bank” and “Content Calendar” tabs with headers.
4. Add Slack OAuth2 credentials and set the target channel in the Slack message step.
5. Update the Config values (YouTube channel ID, Instagram user ID, lookback window, scan limits, posts per week, and platform mix) to match your accounts and posting strategy.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
