# 📊 Scrape Instagram post data and engagement stats with webhooks and CoreClaw

> ⚡ **26 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives Instagram post URLs, sends them to the CoreClaw Instagram Post Scraper, and returns structured post data including captions, likes, comments, media URLs, and timestamps. Requires a CoreClaw API key.

## How it works
1. Receives a POST webhook request containing one or more Instagram post URLs in the body.
2. Validates and normalizes the incoming payload into a consistent "urls" array and adds basic metadata such as a timestamp and URL count.
3. Normalizes the incoming payload into a consistent `urls` array and adds basic metadata such as a timestamp and URL count.
4. Calls the CoreClaw Instagram Post Scraper worker via HTTP to scrape the provided post URLs.
5. Parses the CoreClaw response into clean post objects including caption, likes, comments, media URLs, permalink, and timestamp.
6. Aggregates summary metrics across all returned posts, such as total likes, total comments, and averages per post.
7. Returns a JSON webhook response containing the summary and the full list of scraped post objects.

## Setup
1. Set the `CORECLAW_API_KEY` environment variable in your n8n instance so the workflow can authenticate to the CoreClaw API.
2. Activate the webhook and copy its URL, then configure your client/app to send POST requests to `/instagram-scraper`.
3. Ensure your request body includes a URL list (for example `{ "urls": ["https://www.instagram.com/p/XXXX/"] }`, or provide one of the supported alternatives like `post_urls` or a single `url`)
4. Create a CoreClaw account and generate an API key:https://www.coreclaw.com/?utm_source=google&utm_medium=cpc&utm_campaign=n8&utm_term=&utm_id=n8

## Additional info
CoreClaw provides production-ready web data APIs for developers, AI agents, and automation workflows. Create your CoreClaw account, get an API key, and start scraping Instagram post data here:
https://www.coreclaw.com/?utm_source=google&utm_medium=cpc&utm_campaign=n8&utm_term=&utm_id=n8

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
