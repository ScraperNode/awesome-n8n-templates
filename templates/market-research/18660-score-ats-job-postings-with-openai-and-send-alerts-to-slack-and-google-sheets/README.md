# 📊 Score ATS job postings with OpenAI and send alerts to Slack and Google Sheets

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every weekday morning to scan company job boards via Apify’s ATS Job Scraper, score new postings with OpenAI against your role profile, archive results in Google Sheets, and post high-scoring job alerts plus a daily roll-up summary to Slack.

## How it works
1. Runs every weekday morning on a scheduled trigger.
2. Reads a company watchlist from a Google Sheets “Companies” tab and splits it into company names and optional career page URLs.
3. Starts an Apify ATS Job Scraper actor run in monitoring mode and polls Apify until the run succeeds or hits the polling limit.
4. Downloads the run’s dataset of newly discovered job postings from Apify and normalizes each posting into a consistent set of fields.
5. Uses OpenAI to score each job (0–100) against your role profile and extract structured details like seniority, workplace type, and a one-line reason.
6. Appends every scored job to a Google Sheets “Jobs” tab, then posts per-job alerts to Slack only for postings that meet or exceed the minimum score.
7. Posts a daily summary message to Slack showing how many new jobs were found and how many were alerted.

## Setup
1. Create an Apify account, copy your Apify API token, and configure an HTTP Header Auth credential with `Authorization: Bearer <token>` for the Apify HTTP requests.
2. Connect your Google Sheets account and set the spreadsheet ID in the workflow settings, then create tabs named “Companies” (with columns `Company` and optional `Career page URL`) and “Jobs”.
3. Connect your OpenAI account (or update the model setting) and adjust the `roleProfile`, `minScore`, and polling limits in the workflow settings.
4. Connect your Slack account and paste your target Slack channel ID into the workflow settings so alerts and the daily summary post to the right channel.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Stop and Error, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
