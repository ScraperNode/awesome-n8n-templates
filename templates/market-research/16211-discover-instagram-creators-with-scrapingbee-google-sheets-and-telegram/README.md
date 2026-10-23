# 📊 Discover Instagram creators with ScrapingBee, Google Sheets, and Telegram

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a niche theme via an n8n Form, scrapes Instagram hashtag pages through ScrapingBee to discover creator usernames, deduplicates them against a Google Sheets log, then sends new creator alerts to Telegram and appends the results back to Google Sheets.

## How it works
1. Receives form submissions in n8n with a selected core theme and target audience location.
2. Calls the ScrapingBee API to fetch the Instagram hashtag page for the selected theme with JavaScript rendering enabled.
3. Extracts creator usernames and profile URLs from the returned HTML content.
4. Loads previously processed creator entries from a Google Sheets worksheet and matches by username to avoid duplicates.
5. Sends a Telegram message for each newly discovered creator with their username and profile URL.
6. Appends the new creator usernames and profile URLs to Google Sheets to track what has been processed.

## Setup
1. Add a ScrapingBee API key and replace `REPLACE_WITH_SCRAPINGBEE_KEY` in the HTTP request parameters.
2. Connect Google Sheets credentials and replace `REPLACE_WITH_SHEET_ID`, ensuring the sheet has `username` and `profileUrl` columns.
3. Connect Telegram credentials, set `YOUR_CHAT_ID`, and confirm the bot can message that chat.
4. Publish the n8n Form Trigger and share the form URL with users who will submit discovery requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
