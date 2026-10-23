# 🎬 Repurpose top X posts from Twitter using Apify, OpenAI, Google Sheets and Slack

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects top posts from an X (Twitter) profile via Apify, uses OpenAI to filter and rewrite relevant posts into original drafts, stores them in Google Sheets for review, and sends Slack notifications for failures, new drafts, and batch completion.

## How it works
1. Receives a form submission with an X profile URL and the number of posts to scrape.
2. Runs the Apify tweet-scraper actor to fetch the profile’s top posts and sends a Slack alert if the scrape fails.
3. Loads the scraped dataset items from Apify and processes posts one by one.
4. Uses OpenAI to evaluate each post’s relevance and keeps only those marked relevant in the model’s structured output.
5. Checks Google Sheets to skip posts whose source URL already exists, preventing duplicates.
6. Uses OpenAI to rewrite each new, relevant post into an original draft, appends it to the “Drafts” sheet with metadata and a “Needs review” status, and notifies a Slack channel.
7. Sends a final Slack message once all posts in the batch have been processed.

## Setup
1. Add Apify credentials and ensure the workflow can run the `apidojo/tweet-scraper` actor.
2. Add OpenAI credentials for both AI steps (relevance checking and draft rewriting).
3. Add Google Sheets credentials, set your spreadsheet ID, and create a “Drafts” tab with columns `source_url`, `source_likes`, `draft`, `status`, and `created_at`.
4. Add Slack credentials, set the target channel ID, and use the same channel (or adjust as needed) for scrape-failure alerts, new draft notifications, and the completion message.

## 🔗 Nodes Used

Google Sheets, Slack, OpenAI, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
