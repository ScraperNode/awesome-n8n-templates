# 📱 Post nightly travel news to X with Google News, OpenAI, and Google Sheets

> ⚡ **16 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 17:30 (JST) to pull travel-related headlines from Google News RSS, filters and scores recent articles, generates consumer-friendly X (Twitter) post text with OpenAI, posts the top items to X, and logs posted articles in Google Sheets.

## How it works
1. Runs every day at 17:30 (Asia/Tokyo) on a schedule.
2. Reads the existing “already posted” list (guid/title/postedAt) from Google Sheets.
3. Fetches travel-related items from a Google News RSS search feed.
4. Keeps only articles from the last 12 hours, excludes overly business/IR-style headlines, and scores items based on travel-friendly keywords like deals, disruptions, and crowding.
5. Removes duplicates by comparing each item’s GUID/link and normalized title against the Google Sheets history, then selects the top two scored articles.
6. Uses OpenAI (gpt-4o-mini) to write a 1–2 sentence Japanese X-ready comment (within 150 characters) based on the title and snippet.
7. Builds the final post text with the article link, a blog link, and auto-generated hashtags, posts it to X (Twitter), and appends the posted GUID/title/timestamp back to Google Sheets.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the spreadsheet/document ID and sheet tab (gid) used to store posted items (columns: guid, title, postedAt).
2. Add an OpenAI API credential and ensure the workflow can access the gpt-4o-mini model.
3. Connect your X (Twitter) OAuth2 credentials for posting.
4. Replace the BLOG_URL constant in the post-building code with your own website/blog URL and adjust keywords/hashtag location lists if needed.

## 🔗 Nodes Used

Google Sheets, RSS Read, X (Formerly Twitter), Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
