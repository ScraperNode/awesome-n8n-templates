# 📱 Classify AI news from RSS and create LinkedIn carousels with Gemini and PostNitro

> ⚡ **3 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow polls the TechCrunch RSS feed every minute, uses Google Gemini to classify and analyze AI-related articles, then sends relevant stories to PostNitro to generate a carousel draft and schedule a LinkedIn document post, with Gmail notifications for success or failure.

## How it works
1. Runs every minute and reads new items from the TechCrunch RSS feed.
2. Limits processing to the first 10 articles from the feed update.
3. Uses Google Gemini to classify each article as AI-relevant, assign a category, and score its importance with structured output.
4. Filters out articles that are not marked as AI-relevant.
5. Uses Google Gemini again to produce a structured analysis of each relevant article, including impacts and a recommended carousel angle.
6. Sends the article URL to PostNitro to generate a carousel design and then schedules it as a LinkedIn document post for the next day.
7. Sends a Gmail email confirming the scheduled draft, or sends an error email if PostNitro generation fails.

## Setup
1. Add Google Gemini (PaLM) API credentials for both the classifier and analyst steps.
2. Add PostNitro API credentials and update the brand ID, preset ID, template ID, and selected account ID used for carousel creation and scheduling.
3. Add Gmail OAuth2 credentials and set the recipient email address and message content for the success and failure notifications.
4. Update the RSS feed URL and polling frequency if you want to monitor a different source or run less often.
5. Adjust the maximum article limit and the PostNitro scheduling time (currently set to one day from execution) to match your publishing cadence.

## 🔗 Nodes Used

Gmail, Basic LLM Chain, Structured Output Parser, RSS Feed Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
