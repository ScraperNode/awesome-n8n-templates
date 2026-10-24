# 📊 Classify and route Reddit brand mentions with Scrapio, Claude, Sheets and Slack

> ⚡ **38 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow uses Scrapio to monitor Reddit for keyword-based brand mentions and sends a formatted alert to a chosen Slack channel whenever new matching posts are detected.

## How it works
1. Receives a webhook from Scrapio’s Reddit Monitor when new Reddit items match your configured keyword and subreddit scope.
2. Splits the webhook payload into individual new posts so each mention is processed separately.
3. Sends a Slack message with the matched keyword, post title, author, subreddit, post body, and a direct Reddit link.

## Setup
1. Add a Scrapio API credential and configure the monitor keyword(s) and subreddit scope in the Scrapio Reddit Monitor configuration.
2. Create or select the appropriate Scrapio Reddit Monitor and set its monitor ID in the Scrapio Webhook Trigger, then copy the generated webhook URL into Scrapio if required.
3. Add your Slack credential and choose the destination channel in the Slack message step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
