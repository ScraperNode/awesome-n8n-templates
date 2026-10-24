# 📊 Monitor competitor price gaps with Scrapewise, Google Sheets, and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily at 08:00 to read matched product pricing data from Scrapewise, identifies items where a competitor undercuts your price, logs the price gaps to Google Sheets, and posts a single summary message to a Slack channel.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Loads your Scrapewise group ID, column names, shop name, and the number of rows to read.
3. Fetches the latest matched pricing rows from Scrapewise via its MCP endpoint using your API key.
4. Groups rows by match key, compares your shop’s price to competitors, and keeps only products where a competitor is cheaper.
5. Appends one row per undercut product (including gap and gap %) to a Google Sheets tab.
6. Sends one Slack message to a selected channel listing the top 10 biggest undercuts and the total count found.

## Setup
1. Create a Scrapewise group with price monitoring and product matching enabled, then generate a Scrapewise API key and add it as an HTTP Bearer Auth credential.
2. Update the group ID, your shop name, and the match/shop/price/title column names in the workflow settings to match your Scrapewise table headers.
3. Connect your Google Sheets OAuth credentials and set the target spreadsheet ID and sheet name (for example, a tab named “Price gaps”).
4. Connect your Slack credentials and choose the target channel (for example, #pricing).

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
