# 📊 Send daily competitor intel briefs to Slack with API Direct and OpenAI

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to search Twitter/X and Google News for a competitor name via API Direct, uses OpenAI to generate a three-bullet intelligence brief from new mentions only, and posts the brief with source links to a Slack channel.

## How it works
1. Runs every morning on a schedule.
2. Searches Twitter/X posts and Google News articles from the last 24 hours for the configured competitor using API Direct.
3. Combines the Twitter/X and Google News results and removes items that were already processed in previous active runs.
4. Prepares a compact corpus of the new mentions and a short list of source links for Slack.
5. Uses OpenAI to write exactly three concise intelligence bullets (or a single noise note) based on the new mentions.
6. Formats and posts one Slack message containing the brief and the source links.

## Setup
1. Add an API Direct API key credential and select it in the Twitter/X and Google News search steps.
2. Add an OpenAI API key credential for the chat model used to generate the brief.
3. Connect your Slack credential and choose the target channel for posting the daily message.
4. Update the competitor name in the competitor settings step (and optionally adjust the schedule time).

## Requirements
- An API Direct API key (new accounts include free credit)
- An OpenAI API key (or any chat model n8n supports)
- A Slack workspace

## Customization
- Track several competitors by duplicating the flow or looping over a list
- Use boolean search syntax to cut noise, e.g. "Acme" -job -hiring (see apidirect.io/docs/boolean-search)
- Add Reddit, TikTok, or YouTube as extra sources with more API Direct nodes; change the brief's angle in the AI prompt

## Additional info
API Direct is a verified community node, available on n8n Cloud and self-hosted n8n — search "API Direct" in the nodes panel to install. One API key covers Twitter/X, Reddit, TikTok, Instagram, YouTube, Facebook, Threads, Truth Social and Google News/Maps/web search (58 operations), pay-as-you-go from $0.002/request.

## 🔗 Nodes Used

Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
