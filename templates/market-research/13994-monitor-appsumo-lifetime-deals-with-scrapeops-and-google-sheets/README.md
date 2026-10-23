# 📊 Monitor AppSumo lifetime deals with ScrapeOps and Google Sheets

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
This n8n template automates daily monitoring of AppSumo lifetime deals. Using ScrapeOps Proxy with JavaScript rendering to reliably fetch pages and a structured parsing pipeline, the workflow tracks new and updated deals — saving everything to Google Sheets with full deduplication and change tracking.

## Who is this for?
- SaaS enthusiasts and deal hunters who follow AppSumo regularly
- Founders and marketers tracking competitor tools available as lifetime deals
- Agencies managing software budgets who want alerts on new tools
- Investors or analysts monitoring the AppSumo marketplace

## What problem does it solve?
Manually checking AppSumo for new lifetime deals is easy to forget and inconsistent. This workflow runs every day, automatically fetches the latest listings, filters by categories you care about, and keeps your Google Sheet updated — appending new deals and refreshing existing ones — so you never miss a deal.

## How it works
1. A daily schedule triggers the workflow at 09:00 automatically.
2. ScrapeOps Proxy fetches the AppSumo browse page with JavaScript rendering to bypass dynamic content blocks.
3. The HTML is parsed into structured JSON: name, URL, prices, discount, category, rating, reviews, image, and timestamps.
4. A filter node keeps only deals matching your target categories or keywords.
5. Each deal is looked up in Google Sheets by its URL to check if it already exists.
6. New deals are appended as fresh rows; existing deals have their data updated in place.

## Set up steps (~10–15 minutes)
1. Register for a free ScrapeOps API key: [https://scrapeops.io/app/register/n8n](https://scrapeops.io/app/register/n8n)
2. Install the ScrapeOps community node and add credentials. Docs: [https://scrapeops.io/docs/n8n/overview/](https://scrapeops.io/app/register/n8n)
3. [Duplicate the Google Sheet](https://docs.google.com/spreadsheets/d/1L_Fn_wm55wc5EXi_ZIVmmXyFrz9nJ-29Xd71Ndz_XIk/edit#gid=0") template and paste your Sheet URL into the **Lookup**, **Append**, and **Update** nodes.
4. Edit the category/keyword list inside **Filter Relevant Deal Categories** to match what you want to track.
5. Run the workflow once manually to confirm results, then activate.

## Pre-conditions
- Active ScrapeOps account (free tier available): [https://scrapeops.io/app/register/n8n](https://scrapeops.io/app/register/n8n)
- n8n instance with the ScrapeOps community node installed. Docs: [https://scrapeops.io/docs/n8n/overview/](https://scrapeops.io/app/register/n8n)
- Google Sheets credentials configured in n8n
- A duplicated Google Sheet with correct column headers matching the parser output

## Disclaimer
This template uses [ScrapeOps](https://n8n.io/integrations/scrapeops/) as a community node. You are responsible for complying with AppSumo's Terms of Use, robots.txt directives, and applicable laws in your jurisdiction. Scraping targets may change at any time; adjust render, scroll, and wait settings and parsers as needed. Use responsibly and only for legitimate business purposes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
