# 📊 Find and analyze salvage car deals with Apify, Google Sheets and Gemini

> ⚡ **12 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Video Explanation: https://youtu.be/TeYVU4NSgrE

This workflow pulls UK Copart auction listings via Apify, saves selected lots to Google Sheets, then analyzes newly added rows with Google Gemini to estimate repairability and resale economics from listing images, logging results back to Sheets and posting high-scoring deals to Slack.

## How it works
1. Runs on a schedule (or manually) and calls an Apify actor to fetch up to 100 UK Copart lot search results.
2. Limits the number of returned items and filters lots into two groups: PURE_SALE with NEVERBID status, and a curated set under 60,000 miles that are automobiles and not water/flood damaged.
3. Appends or updates matching lots in a Google Sheets spreadsheet using the lot number as the unique key.
4. Triggers every hour when a new row is added to the Google Sheet and prepares a small set of inspection image URLs from the lot’s images.
5. Sends the images and basic lot/price fields to Google Gemini (via a LangChain agent) to generate a structured reparability score, breakdown, financial analysis, and verdict.
6. Writes the AI assessment fields back to Google Sheets and, if the reparability score is greater than 80, posts a formatted report to a Slack channel.

## Setup
1. Create and connect an Apify HTTP Header Auth credential with your Apify token, and confirm the Copart search URL and actor endpoint match your desired market and filters.
2. Add Google Sheets service account credentials, share the target spreadsheet with the service account email, and update the spreadsheet ID and sheet tab as needed.
3. Add a Google Gemini (Google PaLM) API credential and keep the selected model (models/gemini-3.1-flash-lite) or replace it with your preferred Gemini model.
4. Add Slack OAuth credentials and select the channel where deal alerts should be posted.
5. Ensure the Google Sheet contains the expected columns (for example lotNumber and lotImages/thumbnail_image, plus output columns like reparability_score and verdict) so rows can be matched and updated correctly.

## Additional info
automate salvage car deal sourcing n8n, scrape copart uk auction data google sheets, ai car damage assessment n8n workflow, gemini flash multimodal vehicle damage appraisal automation, automated salvage flipping flip car profit calculator, n8n copart apify integration slack alerts, ai car repair feasibility agent google sheets, n8n salvage car deal finder template, copart scraper n8n workflow json, n8n gemini structured output car inspection, automated auction bidding sniper sheet, car flipping lead tracker n8n template, apify copart actor to google sheets pipeline

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
