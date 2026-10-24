# 🎬 Write weekly AI news digests with Gluecrawl and OpenAI GPT-4.1

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs every Monday to scrape AI news from Ars Technica, VentureBeat, and The Verge using Gluecrawl, deduplicates articles in n8n Data Tables, and uses OpenAI to write a weekly Markdown digest that is saved for later publishing.

## How it works
1. Runs every Monday morning on a schedule.
2. Fetches the saved Gluecrawl job definitions for Ars Technica AI, VentureBeat AI, and The Verge AI and merges them into a single list of sources.
3. Starts a Gluecrawl run for each source (retrying on failures) to scrape the latest articles with title, URL, publish date, and body.
4. Checks the ai_news_articles n8n Data Table to keep only articles whose URLs have not been seen before.
5. Saves each new article (including a truncated body excerpt and metadata) into the ai_news_articles table.
6. Aggregates the week’s new articles into a single brief capped to the 10 most recent items per source.
7. Sends the brief to OpenAI to generate a ~500-word Markdown newsletter digest and saves it as a new row in the ai_news_digests table.

## Setup
1. Install the Gluecrawl community node package `@gluecrawl/n8n-nodes-gluecrawl` in n8n.
2. Add Gluecrawl API credentials for the Gluecrawl nodes and an OpenAI API credential for the OpenAI Chat Model.
3. Run the “Set Up” manual trigger once to create the ai_news_articles and ai_news_digests tables and create Gluecrawl jobs for each site.
4. Select the created Gluecrawl job IDs in the Ars Technica AI, VentureBeat AI, and The Verge AI nodes before enabling the schedule.
5. Optionally adjust the source URLs and the per-source cap in the brief-building code to match the sites and digest length you want.

## 🔗 Nodes Used

Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
