# 📊 Track competitor App Store listing changes with Bright Data, GPT-5.6 and Slack

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday, scrapes a list of competitor iOS App Store listings via Bright Data, compares key fields to last week’s snapshot stored in an n8n Data Table, uses OpenAI (GPT-5.6) to explain only the changes, and posts a weekly digest to Slack.

## How it works
1. Runs every Monday morning on a schedule trigger.
2. Reads a configured list of App Store URLs and sends them to Bright Data’s Web Scraper API to create a listing snapshot job.
3. Polls Bright Data until the snapshot is ready (or the max poll limit is reached), then downloads the snapshot JSON.
4. Normalizes each listing into a consistent set of fields (for example version, price, subtitle, description hash/head, screenshot count, languages, rating, and one-star share) and drops errored rows.
5. Loads the previous run’s values from the n8n Data Table, compares each app to find meaningful changes, and upserts the current values back into the Data Table.
6. If any apps changed, sends the change JSON for up to the configured maximum to OpenAI (GPT-5.6) to generate short, grounded explanations.
7. Builds a single Slack-ready digest summarizing what moved and posts it to the configured Slack channel, or does nothing on a quiet week.

## Setup
1. Add a Bright Data HTTP Header Auth credential and ensure you have access to the App Store listing dataset used by the workflow.
2. Add an OpenAI credential (model set to gpt-5.6-terra) and a Slack OAuth credential.
3. Create an n8n Data Table named `app_listings` with columns for the stored listing fields (for example `app_id`, `title`, `version`, `price`, `sub_title`, `desc_head`, `desc_hash`, `screenshots`, `languages`, `rating`, `one_star`, and `checked_at`).
4. In the Settings node, paste your competitor App Store URLs, set `max_polls`/`max_explained` as needed, and set the target `slack_channel`.
5. Run the workflow once to seed the Data Table (the first run stores baselines and typically posts no change report).

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
