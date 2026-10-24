# 📊 Triage YouTube comments and track video health with Apify and Google Sheets

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow monitors a Google Sheets watchlist of YouTube video URLs, uses Apify’s YouTube Comments Downloader actor to fetch recent comments, and writes only high-engagement comments, question comments, and fetch failures back to Google Sheets while tracking video health and logging a per-run summary.

## How it works
1. Runs manually (and can be switched to a schedule) to read the YouTube video watchlist from Google Sheets.
2. Excludes any videos marked as chronically failing, then batches the remaining video URLs into a single list.
3. Calls the Apify actor cleanfeed/youtube-comments-downloader to retrieve up to 100 comments per video and returns one item per comment (or per fetch failure).
4. Filters results so only fetch failures, comments with 10+ likes, or question-like comments (contains “?” but not “http”) continue.
5. Writes fetch failures and flagged comments to a Google Sheets tab using append-or-update keyed by video URL or comment ID.
6. Summarizes per-video fetch health from the Apify results and updates the watchlist in Google Sheets by marking videos as failing (with a timestamp) or clearing the failing status on success.
7. Counts flagged outcomes and health changes across the run and appends a single audit row to a Google Sheets run log.
8. Runs monthly to escalate videos that have been failing for 7+ days to chronically_failing and to clear that status for a one-time retry.

## Setup
1. Install the community node @apify/n8n-nodes-apify and add your Apify OAuth2 credentials.
2. Add Google Sheets OAuth2 credentials and update the spreadsheet ID and sheet/tab IDs (watchlist, flagged comments, and run log) to point to your own file.
3. Ensure your watchlist sheet includes columns for video_url, status, and last_failed_at, and your flagged comments sheet includes columns like comment_id, video_url, author, text, like_count, reply_count, reason, and published_text.
4. Paste the YouTube video URLs you want to monitor into the watchlist sheet.
5. If you want automation, replace the manual trigger with a Schedule Trigger and adjust the monthly schedule cadence if needed.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
