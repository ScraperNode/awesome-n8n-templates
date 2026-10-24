# 🔧 Track competitor X announcements with Bright Data, OpenAI, Sheets and Slack

> ⚡ **3 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs each weekday morning to crawl selected X (Twitter) accounts via Bright Data, score posts against each account’s normal engagement, summarize notable announcements with OpenAI, log all posts to Google Sheets, and send a digest (or “quiet day” notice) to Slack.

## How it works
1. Runs on a weekday morning schedule (or manually) and reads the list of X handles and thresholds from Settings.
2. Loads previously seen post IDs from an n8n Data Table and sends them to Bright Data so already-processed posts are skipped during the crawl.
3. Triggers a Bright Data X posts dataset crawl for each profile URL, then polls Bright Data until the snapshot is ready (or fails/times out).
4. Downloads the posts, computes an engagement baseline per account (median of recent non-repost posts), tags each post (launch/pricing/funding/hiring/incident/event/general), and selects the most notable items.
5. If there are notable posts, sends the short list to OpenAI to produce one-sentence, plain-language summaries for each item.
6. Builds a Slack digest, appends every crawled post (notable or not) as rows in Google Sheets, and upserts each post ID into the Data Table to avoid re-crawling it next run.
7. Posts either the digest or a “quiet day” message to Slack, and if the workflow errors it posts a failure alert to a separate Slack channel.

## Setup
1. Create a Bright Data Header Auth credential (HTTP Header Auth) named `Authorization` with the value `Bearer <YOUR_BRIGHT_DATA_API_KEY>`.
2. Add an OpenAI (Chat) credential for the OpenAI model used in the workflow.
3. Add a Slack credential, set the digest channel in Settings, and ensure the error-alert channel (default `#alerts`) exists or update it.
4. Add a Google Sheets credential, replace the spreadsheet URL/ID, and ensure a sheet tab named “Competitor posts” exists with columns that match the appended fields.
5. Create an n8n Data Table named `x_post_watch` with text columns `post_id`, `handle`, and `seen_on`, then update Settings (handles, days_back, thresholds) to your needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
