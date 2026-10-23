# 🔧 Analyze Google Ads competitors with Bright Data, OpenRouter and OpenAI

> ⚡ **16 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, reads keywords from Google Sheets, scrapes Google SERP ads via the Bright Data API, analyzes ad messaging and sitelinks with OpenRouter, and generates an HTML report with OpenAI that is delivered via Gmail, WhatsApp (Rapiwa), and Telegram.

## How it works
1. Runs on a daily schedule and loads keywords and country codes from Google Sheets.
2. Iterates through each keyword, requests Google Search results in JSON format from Bright Data, and routes failures to a WhatsApp error alert via Rapiwa.
3. Extracts top and bottom ads from the SERP response, splits them into individual ad items, and appends selected ad fields to a Google Sheets “Top ADS” tab.
4. Aggregates the ad dataset and uses OpenRouter to generate structured insights for value propositions/messaging, sitelink extension strategies, and keyword-to-advertiser mapping.
5. Combines the three analysis outputs and uses OpenAI to turn them into an HTML-formatted executive report.
6. Sends the report to the configured Gmail recipient and posts the same output to WhatsApp (Rapiwa) and Telegram, while also sending a WhatsApp completion message.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the spreadsheet ID and sheet tabs used to read keywords and append ad data.
2. Add Bright Data HTTP Header Auth credentials and replace the `zone` value (and any required headers) for your Bright Data Scraper API setup.
3. Add OpenRouter API credentials for the analysis models and an OpenAI API credential for HTML report generation.
4. Connect Gmail OAuth2 and set the recipient email address and subject format for the report.
5. Add Rapiwa credentials and replace the WhatsApp number placeholder, then add Telegram credentials and replace the Telegram chat ID placeholder.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
