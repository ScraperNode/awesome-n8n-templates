# 🎬 Draft LinkedIn posts from RSS feeds with OpenAI, Google Sheets and Slack

> ⚡ **8 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 7am, reads an RSS feed, uses OpenAI to score articles for niche relevance and draft LinkedIn posts, then appends approved candidates to a Google Sheets review queue and notifies a Slack channel.

## How it works
1. Runs every day at 7:00 AM on a scheduled trigger.
2. Reads items from the configured RSS feed and keeps only articles published in the last 24 hours.
3. Limits the list to the first five recent articles to reduce processing volume.
4. Uses OpenAI to score each article’s relevance (0–10) and generate an angle and hot take in structured JSON.
5. Filters to only the articles with relevance scores of 7 or higher.
6. Uses OpenAI to write a 120–180 word LinkedIn draft in your specified voice based on the article, angle, and hot take.
7. Appends the draft and metadata to a Google Sheets “Drafts” tab and posts a notification to a Slack channel for review.

## Setup
1. Add OpenAI credentials for both OpenAI nodes and customize the audience/beat and voice instructions in the prompts.
2. Add a Google Sheets OAuth credential, set the spreadsheet ID, and ensure a “Drafts” sheet exists with matching columns (Date, Angle, Status, Relevance, Draft Post, Source Link, Source Title).
3. Add a Slack credential and replace the target channel ID used for posting the “Drafts Ready” message.
4. Replace the RSS feed URL with your own source (and add additional RSS feed reader steps if you want multiple feeds).

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
