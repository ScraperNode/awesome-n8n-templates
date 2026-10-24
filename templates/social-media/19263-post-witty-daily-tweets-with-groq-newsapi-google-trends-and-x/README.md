# 📱 Post witty daily tweets with Groq, NewsAPI, Google Trends, and X

> ⚡ **7 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily on a schedule, pulls popular stories from NewsAPI and trending topics from Google Trends, uses Groq-hosted LLMs with short-term memory to pick the best overlapping topic, generates a sarcastic tweet, and posts it to X (Twitter).

## How it works
1. Runs every day at 11:00 using a scheduled trigger.
2. Fetches popular breaking/viral stories from NewsAPI and retrieves the Google Trends RSS feed for India.
3. Converts the RSS XML to JSON, normalizes both sources into a common list, and merges the items.
4. Trims the merged list to a capped set of short titles/descriptions to reduce token usage.
5. Uses Groq LLMs plus a small rolling memory to rank trends (favoring cross-source matches and recurring topics) and output a single chosen topic with context.
6. Uses Groq to turn the chosen topic into one short, funny, sarcastic tweet and posts it to X (Twitter).

## Setup
1. Add your Groq API credentials for the Groq LLM nodes.
2. Add your X (Twitter) OAuth2 credentials and select the target account in the tweet-posting step.
3. Get a NewsAPI key and replace `YOUR_NEWSAPI_KEY` in the NewsAPI request URL.
4. Adjust the Google Trends RSS URL (for example, change the `geo=IN` parameter) and the scheduled run time if needed.

## 🔗 Nodes Used

HTTP Request, X (Formerly Twitter), Schedule Trigger, AI Agent, Basic LLM Chain, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
