# 📊 Send a daily AI news digest from Hacker News with OpenRouter GPT-5 and Telegram

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to fetch the latest AI stories from Hacker News (Algolia API), scrape and convert each article to text, summarize them in Russian using OpenRouter (GPT-5 with GPT-4 fallback), and send a formatted digest to a Telegram chat.

## How it works
1. Runs once a day on a schedule.
2. Queries the Hacker News Algolia API for recent AI-related stories, splits the results into individual items, filters to the last 24 hours, and limits the digest to three articles.
3. Checks whether any real articles remain and, if none are found, sends a “no news today” message to Telegram.
4. For each remaining story, fetches the linked page HTML, keeps the original title and URL, and converts the content to Markdown text while skipping blocked/failed scrapes.
5. Collects the successfully scraped articles into a single JSON array and sends them to OpenRouter for Russian headings and two-sentence summaries, enforcing a structured JSON response.
6. Formats the summaries into Telegram Markdown with bold headings and source links, then posts the digest to the configured Telegram chat.

## Setup
1. Add an OpenRouter API credential and choose/adjust the models (primary GPT-5 and optional GPT-4 fallback) used for summarization.
2. Add Telegram bot credentials and replace `YOUR_TELEGRAM_CHAT_ID` in both Telegram send steps with your target chat ID.
3. Set the time for the daily Schedule Trigger and, if needed, update the Hacker News Algolia query URL (search term, tags, and filters) and the max item limit.

## Requirements
- An active n8n instance (cloud or self-hosted) with internet access to reach external websites for scraping.
- An OpenRouter account with API credits (any account tier works; the workflow calls GPT-5 by default, adjustable to any model OpenRouter offers).
- A Telegram bot token, created via @BotFather, and the numeric chat ID of the chat where digests should be sent.

## Customization
- Change the search query and tags in the HTTP Request node's URL to track any topic instead of AI (e.g. query=rust&tags=story).
- Adjust the Limit node to send more or fewer than 3 articles per digest.
- Swap the summarization language by editing the System Message in Basic LLM Chain (currently set to Russian).
- Change the schedule time or frequency in the Daily Schedule Trigger.
- Add a fallback model in Basic LLM Chain if you want resilience against a single provider outage.
- Set up a separate Error Trigger workflow and link it in this workflow's Settings to get a Telegram alert on failures.

## Additional info
Some source sites (e.g. those behind bot-detection services like Datadome) will block automated scraping and return a 403 error. This is expected and handled gracefully: the Scrape Article URL node routes failed requests through its error output, skipping that article without breaking the run. On days with zero matching AI stories, the workflow skips scraping and GPT entirely and sends a short "no news today" message instead — saving API costs. The Hacker News Algolia Search API used here is free and requires no authentication.

## 🔗 Nodes Used

HTTP Request, Telegram, Markdown, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
