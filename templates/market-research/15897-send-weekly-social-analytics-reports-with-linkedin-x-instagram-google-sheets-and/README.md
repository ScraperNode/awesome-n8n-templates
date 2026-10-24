# 📊 Send weekly social analytics reports with LinkedIn, X, Instagram, Google Sheets and GPT-4o

> ⚡ **103 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday, pulls the last 7 days of posts from LinkedIn, X (Twitter), and Instagram, normalizes engagement metrics, logs raw post data to Google Sheets, calculates a weighted engagement rate, generates strategy recommendations with OpenAI (GPT-4o), and emails an HTML report.

## How it works
1. A schedule trigger fires every Monday at 9 AM and passes execution to the WES Config node, which defines the engagement weights used across the entire pipeline: likes (1), comments (3), shares (5), saves (4).Runs every Monday at 9:00 AM and sets the engagement weights used for scoring (likes, comments, shares, saves).
2. LinkedIn posts, X tweets, and Instagram media from the last 7 days are fetched in parallel. LinkedIn and X results are merged first, then combined with Instagram into a single unified stream.Fetches up to 100 recent items in parallel from LinkedIn UGC posts, X (Twitter) search results, and Instagram user media.
3. Each post is normalized into a shared schema: platform, date, likes, comments, shares, saves, impressions, text, and URL. Posts older than 7 days and empty items are filtered out before anything is calculated.Merges the three streams, normalizes each item into a unified schema, and filters out empty items and posts older than 7 days.
4. The Weighted Engagement Score is calculated for each post and aggregated into platform rankings, best and worst performers, total impressions, and an overall average engagement rate for the week.Logs each normalized post to Google Sheets in batches, capturing any sheet write errors without stopping the run.
5. GPT-4o receives the aggregated stats and generates 3 actionable strategy recommendations in clean HTML format, ready to be embedded directly into the email report.Calculates weekly analytics using a Weighted Engagement Score (WES), including total posts, impressions coverage, platform rankings, and best/worst posts by engagement rate.
6. Normalized posts are written to Google Sheets in batches of 50 with date, platform, content preview, impressions, total engagement, and URL. Sheet write errors are captured per batch without crashing the loop.Sends the weekly performance summary to OpenAI (GPT-4o) to generate three actionable strategy recommendations in HTML.
7. Once both the Sheets logging and AI insights branches complete, all data is merged into a single payload and sent as a formatted HTML email report with key metrics, platform rankings, and AI recommendations.Combines the analytics, any Google Sheets logging errors, and the AI output, then emails a formatted weekly HTML report.

## Setup
1. Set three environment variables in your n8n instance: LINKEDIN_OWNER_URN (your LinkedIn person or organization URN), TWITTER_SEARCH_QUERY (the search query or handle to monitor, e.g. from:yourusername), and ANALYTICS_SPREADSHEET_ID (the Google Sheets document ID where raw posts should be logged).
2. Connect your LinkedIn OAuth2 credential to the Get LinkedIn Posts node, your X (Twitter) OAuth2 credential to the Search Tweets node, and your Instagram credential to the Get media node.
3. Connect your OpenAI credential to the AI Strategy Insights node and your Google Sheets credential to the Log Raw Posts to Sheets node.
4. Open the Email Weekly Report node and update the fromEmail and toEmail fields to match your sender and recipient addresses. Connect your SMTP or email credentials to the node.
5. Open the WES Config node and adjust the four weight values to reflect your team's engagement priorities. The defaults are likes 1, comments 3, shares 5, and saves 4.

## Requirements
- LinkedIn OAuth2 account with access to your organization or personal post feed
- X (Twitter) OAuth2 account with search access
- Instagram account connected via the Instagram community node
- OpenAI API key with access to GPT-4o
- Google Sheets document with a Sheet1 tab ready to receive raw post data
- SMTP or email credential configured for report delivery

## Customization
- Adjust the four weight values in the WES Config node to prioritize the engagement signals that matter most to your team, increasing the share weight, for example, emphasizes content virality over conversation.
- Modify the GPT-4o prompt in the AI Strategy Insights node to request different output formats, focus on specific platforms, or ask for more or fewer recommendations.
- Change the schedule in the Every Monday 9 AM node to run on a different day or frequency, daily, biweekly, or monthly, reporting all work with the same pipeline.
- Extend the Google Sheets columns in the Log Raw Posts to Sheets node to capture additional normalized fields, such as raw WES score per post or stock count per platform.
- Add a Slack or Teams notification node after the Email Weekly Report node to ping a channel when the report has been sent successfully.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, X (Formerly Twitter), Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
