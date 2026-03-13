# 🎯 Automate Morning Brew–style Reddit Digests and Publish to DEV using AI

> ⚡ **358 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who’s it for

Community managers, content marketers, and builders who want a daily, skimmable update from a subreddit—automatically summarized, formatted, and cross-posted to DEV Community.

Here is a [Link to video hackathon detailing this build.](https://youtube.com/live/5oAnKSCP4do) 

## What it does

* Collects fresh posts from a subreddit (seeded via RSS).
* Uses the **Bright Data** node to batch-scrape each post for richer fields (upvotes, comment count, comments).
* Flattens comments/replies with **JMESPath** and trims payload size.
* Summarizes into a Morning Brew–style brief (Top Stories, Quick Hits, Community Q\&A, Comment Spotlight).
* Converts to clean **Markdown** and **publishes to DEV** with **HTTP Request**.
* Optional: emails the same digest via Gmail.

## How to set up

1. **Trigger**: Start with Manual Trigger; swap to **Cron** (daily) when ready.
2. **RSS → URLs**: Set the subreddit RSS of your choice, just add .rss to the end of the subreddit URL.
3. **Update AI Prompt to fit your needs** 

## Requirements

* DEV Community API key.
* Bright Data account + the Bright Data api key [Found Here](https://brightdata.com/cp/setting/users).
* Optional: LLM provider credentials (OpenAI, Gemini).

## How to customize

* Swap DEV publishing for email/Slack; or post both.
* Add more subreddits and **dedupe by URL**.

## Best practices

* **No hardcoded API keys**—use credentials.
* Pin long-running outputs while building to save credits.
* Only collect **publicly available data** with Bright Data.

## 🔗 Nodes Used

HTTP Request, RSS Read, Gmail, Markdown, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
