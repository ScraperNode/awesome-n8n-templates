# 📊 Build a Reels swipe file from Instagram with Apify, Groq, Sheets and Telegram

> ⚡ **29 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Every Monday this workflow transcribes the newest Reels from the creators you follow, has an AI label each hook and rewrite it for your own brand, appends the new reels to a Google Sheet and sends the week's five best to Telegram.

## How it works
1. A Schedule Trigger fires weekly. Config holds the handles, reels per creator, a one-line description of your brand and your Telegram chat ID.
2. It loops over the handles, running the Instagram Reel Transcript Scraper on Apify for each. The actor lists the newest reels and transcribes them.
3. Remove Duplicates drops every reel seen in an earlier execution, so the swipe file only grows. Nothing new means nothing is sent.
4. An Information Extractor labels the hook type, content pillar, emotional trigger and call to action, then rewrites the hook for your brand in 20 words.
5. Google Sheets appends a row per reel; Telegram gets the five most-liked new hooks with their rewrites.

## Setup
1. Create an HTTP Header Auth credential (name `Authorization`, value `Bearer YOUR_APIFY_TOKEN`) and select it on the HTTP Request node.
2. Add a Groq credential on the chat model node - a drop-in swap for OpenAI or Anthropic.
3. Connect Google Sheets and Telegram, then list your creators and describe your brand in Config.

## Requirements
- An Apify account, a chat model account, Google Sheets and a Telegram bot.
- Transcription is charged only when text is delivered.

## Customization
- Turn `includeOnScreenText` on to read silent reels.
- Rank the digest by plays in the Code node.

## Additional info
UGC creators and social media managers who keep a swipe file of hooks that work and want a rewrite they can film.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Groq Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
