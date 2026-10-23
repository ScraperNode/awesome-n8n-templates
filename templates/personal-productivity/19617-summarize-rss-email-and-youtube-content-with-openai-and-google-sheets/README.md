# ⚡ Summarize RSS, email, and YouTube content with OpenAI and Google Sheets

> ⚡ **43 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow captures articles from RSS feeds and Gmail newsletters, filters duplicates with Google Sheets, checks relevance and generates summaries with OpenAI, then logs the results to a “Second Brain” Google Sheet and sends a Telegram digest, with Slack and Telegram alerts on workflow errors.

## How it works
1. Runs daily on a schedule to pull items from a configured list of RSS feeds, and also triggers whenever a new Gmail message matching the newsletters filter arrives.
2. Normalizes each RSS item or email newsletter by extracting a title, plain-text content, source, link, and date into a consistent format.
3. Skips items with too little content and removes items whose links already exist in the “Second Brain” Google Sheets document.
4. Sends the remaining items to OpenAI (gpt-4o-mini) to decide whether each item is relevant for saving.
5. Sends only relevant items to OpenAI (gpt-4o-mini) again to generate a structured JSON summary, key points, and topic tags.
6. Appends the parsed summary data to the “Second Brain” sheet in Google Sheets and sends a formatted Telegram message with the summary and link.
7. If any workflow execution fails, posts an error alert to a Slack channel and to a Telegram chat.

## Setup
1. Connect Gmail OAuth2 credentials and adjust the Gmail search query/label filter used to detect newsletters.
2. Add an OpenAI API credential and ensure access to the gpt-4o-mini model for both the relevance check and summarization steps.
3. Connect Google Sheets OAuth2 credentials, set the Google Sheet ID (replacing `REPLACE_WITH_YOUR_GOOGLE_SHEET_ID`), and ensure the “Second Brain” sheet contains a Link column for deduplication.
4. Connect a Telegram Bot API credential and set your target chat ID (replacing `REPLACE_WITH_YOUR_TELEGRAM_CHAT_ID`) for the digest and error alerts.
5. Connect Slack OAuth2 credentials and set the target channel for workflow error alerts.
6. Update the RSS feed list in the RSS configuration step to the sources you want to track.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
