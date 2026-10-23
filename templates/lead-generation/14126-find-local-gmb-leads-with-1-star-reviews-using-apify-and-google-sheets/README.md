# 🎣 Find local GMB leads with 1-star reviews using Apify and Google Sheets

> ⚡ **180 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview

Automatically scrapes Google My Business listings using Apify's Google Maps Scraper, filters results to businesses with 1-star reviews, and exports structured lead data into a dedicated Google Sheet tab per run.

Ideal for agencies and freelancers identifying local businesses with poor online reputations — potential leads for reputation management or review response services.

## How it works

1. Fill in the built-in form with a **business type** (e.g. "plumber") and **location** (e.g. "Miami, FL")
2. The workflow launches the Apify Google Maps Scraper actor and polls every 10 seconds until the run completes
3. Results are filtered — only businesses with at least one 1-star review continue
4. A new tab is created in your Google Sheet named `{query}-{timestamp}` and all matching leads are appended with full contact and review data

## What you get per lead

- Business Name and GMB profile URL
- City / Address
- Primary and alternative phone number
- Business email (if available)
- Negative review URL (lowest-ranked review link)
- Negative review URL with image attached
- Total 1-star review count

## Set up steps

1. **Apify credential** — Create a free account at apify.com, generate an API token, and add it as an HTTP Header Auth credential in n8n named **Apify Token** (header name: `Authorization`, value: `Bearer YOUR_TOKEN`)
2. **Google Sheets credential** — Connect a Google Sheets OAuth2 account in n8n
3. **Sheet ID** — Open the **Build Search Query** node and replace `YOUR_GOOGLE_SHEET_ID_HERE` with your Google Sheet ID (found in the sheet URL: `docs.google.com/spreadsheets/d/{SHEET_ID}/edit`)
4. **Activate** the workflow — your unique form URL will appear in the Form Trigger node

## Requirements

- Apify account (free tier includes ~$5 monthly usage credits — enough for dozens of searches)
- Google account with Google Sheets access

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
