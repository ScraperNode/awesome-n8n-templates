# 📱 Find top Instagram hashtag posts and AI-drafted comments with Google Sheets

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to fetch top Instagram hashtag posts via the Meta (Facebook) Graph API, uses OpenAI to score relevance and draft comment options, and appends high-scoring posts to a Google Sheets review digest.

## How it works
1. Runs every day at 9:00 on a schedule.
2. Splits a comma-separated hashtag list and looks up each hashtag ID using the Meta (Facebook) Graph API.
3. Fetches top media for each hashtag from the Instagram Graph API and selects the top posts per hashtag by total engagement.
4. Uses OpenAI to score each post’s relevance, generate a one-sentence summary, explain why to engage, and draft three comment options in the specified brand voice.
5. Formats each analyzed post into a digest row with links, metrics, AI outputs, and a default “To Review” status.
6. Filters to posts with a relevance score of 6 or higher and appends them to a Google Sheets document.

## Setup
1. Connect a Meta (Facebook) Graph API credential with access to your Instagram Business/Creator account and set your Instagram user ID in the configuration.
2. Add an OpenAI API credential for the chat model used to analyze posts and draft comments.
3. Connect a Google Sheets account, then select the target spreadsheet and sheet name and ensure the header columns match the digest fields the workflow writes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
