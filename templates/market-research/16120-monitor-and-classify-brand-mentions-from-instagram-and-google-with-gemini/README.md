# 📊 Monitor and classify brand mentions from Instagram and Google with Gemini

> ⚡ **37 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to find new brand mentions from Instagram hashtags and Google Search via Apify, deduplicates them in an n8n Data Table, classifies each mention with Google Gemini for sentiment and urgency, and sends high-urgency alerts to a Slack channel.

## How it works
1. Runs every day at 9am UTC on a schedule.
2. Pulls recent Instagram hashtag posts using Apify’s Instagram Hashtag Scraper and normalizes each post into a standard mention format.
3. Runs Apify’s Google Search Scraper for the configured query, splits organic results into individual mentions, and normalizes the fields.
4. Merges Instagram and Google mentions into a single stream and filters out mentions already logged in an n8n Data Table based on a unique mention ID.
5. Stores each new mention’s ID in the Data Table and sends the mention text to Google Gemini to classify sentiment, urgency, relevance score, summary, and topic.
6. Keeps only mentions with relevance scores of 6 or higher and posts a Slack alert when urgency is medium or high.

## Setup
1. Add credentials for Apify (OAuth2), Google Gemini (PaLM/Gemini API), and Slack (OAuth2).
2. Create or select an n8n Data Table (for example, “Brand monitoring DB”) with a string column named `mention_id`, and point both Data Table steps to that same table.
3. Update the Brand Config values for `instagramHashtags` (array of hashtags) and `googleQueries` (your search query string).
4. Choose the target Slack channel in the Slack alert step and adjust the relevance (>= 6) and urgency (medium/high) thresholds if needed.

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
