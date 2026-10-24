# 📊 Send daily brand mention digests to Slack with ScraperAPI and OpenAI

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every morning at 8am, searches Google News for configured brand terms using ScraperAPI, stores previously seen article URLs in an n8n Data Table, summarizes the new coverage with OpenAI, and posts a daily brand-mention digest to a Slack channel.

## How it works
1. Runs every day at 8am on a schedule.
2. Sets the search terms, Google News country and time-period filters, and the target Slack channel.
3. Creates (if needed) and reads an n8n Data Table of previously seen article URLs.
4. Queries Google News via ScraperAPI for each search term and extracts article details from the responses.
5. Deduplicates results against the seen-articles table and the current run, then stores new article URLs back into the Data Table.
6. Groups new articles by brand, asks OpenAI to write a per-brand Slack-formatted summary, and posts the final digest message to Slack.

## Setup
1. Add ScraperAPI credentials and ensure your ScraperAPI plan supports the Google News SDE endpoint used by the workflow.
2. Add an OpenAI credential that can access the configured chat model (gpt-5-mini) or change the model selection to one available in your account.
3. Add a Slack credential with permission to post messages and set the target channel name in the configuration (or update the workflow to use a specific channel ID).
4. Review and update the configured search terms, country code, and time-period values to match your monitoring needs.
5. Ensure your n8n instance can use Data Tables (or replace the Data Table steps with another persistent store if your environment does not support them).

## 🔗 Nodes Used

Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
