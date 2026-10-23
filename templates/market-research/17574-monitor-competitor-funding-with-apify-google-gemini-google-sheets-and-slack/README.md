# 📊 Monitor competitor funding with Apify, Google Gemini, Google Sheets and Slack

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every Monday at 8AM to pull a competitor list from Google Sheets, scrape the latest Crunchbase data via Apify, detect new funding, generate a strategic impact summary with Google Gemini, send an alert to Slack, and update the spreadsheet with the results.

## How it works
1. Runs every Monday at 8AM on a scheduled trigger.
2. Reads competitor records from Google Sheets and prepares a list of active Crunchbase profile URLs.
3. Calls an Apify Crunchbase scraper actor and returns the latest company data for each URL.
4. Calculates each competitor’s new total funding from funding rounds and compares it to the “Total Funding (Last Checked)” value stored in Google Sheets.
5. If funding increased, Google Gemini generates a three-sentence strategic analysis from the funding change and investor context.
6. Posts the funding update and Gemini analysis to a Slack channel and updates the matching row in Google Sheets with funding, investors, tech stack, analysis, and a “Last Alert Sent” flag.
7. If no funding increase is detected, updates Google Sheets to log the latest check date and that no alert was sent.

## Setup
1. Connect a Google Sheets service account (or change authentication) and set the correct spreadsheet and sheet tab that contains your competitor list.
2. Add an Apify API token via HTTP Header Auth credentials and confirm the Apify actor endpoint for the Crunchbase scraper you want to run.
3. Add Google Gemini (Google PaLM) API credentials and confirm the model/prompt used by the analysis step.
4. Connect your Slack OAuth credentials and select the channel where alerts should be posted.
5. Ensure your Google Sheet includes columns used for matching and tracking, including “Crunchbase URL” (matching key) and “Total Funding (Last Checked)”, plus fields like Funding, Investor(s), Tech Stack, Last Checked Date, and Last Alert Sent.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
