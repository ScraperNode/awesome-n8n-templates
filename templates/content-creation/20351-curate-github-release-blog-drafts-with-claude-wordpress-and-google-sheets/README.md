# 🎬 Curate GitHub release blog drafts with Claude, WordPress, and Google Sheets

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, fetches the latest n8n GitHub releases, and uses Anthropic Claude to decide which ones are newsworthy and turn them into Japanese WordPress draft posts. It tracks processed and skipped releases in Google Sheets and optionally sends a LINE broadcast with an edit link.

## How it works
1. Runs every day at 8:00 (Asia/Tokyo) and loads the blog configuration values used for writing and linking.
2. Reads previously processed release tag names from Google Sheets and fetches the 10 most recent releases from the n8n GitHub repository.
3. Filters out already-processed, non-version tags, drafts, and releases without a “Features” section, then keeps the three newest candidates.
4. Sends each candidate’s extracted feature notes to Anthropic Claude to judge whether it is worth writing about and parses Claude’s JSON decision.
5. If the release is not worth an article, appends it to Google Sheets as skipped with the reason so it is not rechecked.
6. If the release is worth an article, asks Anthropic Claude to generate a Japanese HTML blog draft, creates a WordPress draft post in the configured category, and logs the post ID to Google Sheets.
7. Optionally sends a LINE broadcast message containing the new draft title and a direct WordPress admin edit link.

## Setup
1. Add credentials for GitHub, Google Sheets (OAuth2), WordPress, and an Anthropic API key (HTTP Header Auth) used by both Claude HTTP requests.
2. Create and configure a Google Sheets document (or update the document ID/sheet) to store processed and skipped releases with columns like tag_name, title, post_id, and postedAt.
3. Update the GitHub releases API URL if you want to curate releases from a different repository.
4. Open “Config (edit me)” and set your blog name, persona, WordPress site URL, and the target WordPress category ID.
5. (Optional) Add a LINE Messaging API channel access token (HTTP Header Auth) and ensure broadcasting is enabled, or remove the LINE step if you do not need notifications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
