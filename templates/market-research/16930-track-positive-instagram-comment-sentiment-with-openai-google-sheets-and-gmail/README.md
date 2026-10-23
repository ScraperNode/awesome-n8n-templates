# 📊 Track positive Instagram comment sentiment with OpenAI, Google Sheets, and Gmail

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs twice daily to fetch recent Instagram post comments via the Instagram Graph API, uses OpenAI to classify sentiment, saves new positive comments to Google Sheets, and emails an HTML digest of the day’s positive comments to your team using Gmail.

## How it works
1. Runs every day at 9 AM to fetch the most recent Instagram media posts from the Instagram Graph API.
2. Pulls up to a set number of comments per post and enriches each comment with post context like the permalink.
3. Sends each comment to OpenAI Chat Completions to classify it as POSITIVE, NEUTRAL, or NEGATIVE with a score.
4. Filters to keep only non-empty comments classified as POSITIVE.
5. Checks Google Sheets for an existing row with the same Instagram comment ID to prevent duplicates.
6. Appends new positive comments to a Google Sheets tab for later reporting.
7. Runs every day at 8 PM to read the saved rows from Google Sheets, build a formatted HTML summary for today, and send the digest email via Gmail.

## Setup
1. Create a Facebook app with Instagram Graph API access and provide a long-lived access token plus your Instagram Business Account ID in the workflow’s configuration step.
2. Add an OpenAI API credential for the Chat Completions request.
3. Create a Google Sheet with a “Positive Comments” tab and columns matching the workflow fields, then add Google Sheets OAuth and replace the placeholder spreadsheet ID.
4. Add a Gmail OAuth connection and set the recipient email address used for the daily digest.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
