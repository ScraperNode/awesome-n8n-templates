# 📊 Track Redfin real estate listings with ScrapeOps, Google Sheets, and Slack

> ⚡ **79 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
This n8n template automates scraping Redfin property listings on a schedule. Using ScrapeOps Proxy API for reliable page fetching and the ScrapeOps Redfin Parser API for structured data extraction, it saves clean listing rows to Google Sheets and sends an optional Slack summary.

## Who is this for?
- Real estate investors monitoring listings in target markets
- Agents and brokers tracking new properties across cities or ZIP codes
- Analysts building property datasets without manual data entry
- Anyone who wants automated, scheduled Redfin data in a spreadsheet

## What problem does it solve?
Manually checking Redfin for new listings is slow and inconsistent. This workflow runs on a schedule, scrapes your target search page, parses and filters valid listings, and keeps your Google Sheet updated automatically; no browser or manual copy-paste needed.

## How it works
1. A schedule triggers the workflow every 6 hours.
2. ScrapeOps Proxy fetches the Redfin search page with JS rendering and residential proxy support.
3. ScrapeOps Parser API extracts clean structured JSON from the HTML.
4. Search metadata (total listings, region, price range) is lifted and stored.
5. The results array is split into one item per property.
6. Property fields are normalized: address, price, beds, baths, sqft, status, and more.
7. Invalid listings (missing address or price = 0) are filtered out.
8. Valid listings are appended to Google Sheets.
9. An optional Slack message posts a summary with listing count and sheet link.

## Set up steps (~10–15 minutes)
1. Register for a free ScrapeOps API key: https://scrapeops.io/app/register/n8n
2. Add ScrapeOps credentials to both ScrapeOps nodes. Docs: https://scrapeops.io/docs/n8n/overview/
3. Duplicate the [Google Sheet template](https://docs.google.com/spreadsheets/d/1FYbt_m8nUdlkSmCzwZeBjgp4js6sdIKpiyyTIPBsigQ/edit?gid=0#gid=0) and paste your Sheet ID into **Save Listings to Google Sheets**.
4. In **Set Search Parameters**, update `redfin_url` to your target city or ZIP search page.
5. Optional: open **Send Slack Summary**, select your Slack credential, and set your channel.
6. Run once manually to confirm results, then activate.

## Pre-conditions
- Active ScrapeOps account (free tier available): https://scrapeops.io/app/register/n8n
- ScrapeOps community node installed in n8n: https://scrapeops.io/docs/n8n/overview/
- Google Sheets credentials configured in n8n
- A duplicated Google Sheet with correct column headers matching the formatter output
- Optional: Slack credentials for the summary notification node

## Disclaimer
This template uses [ScrapeOps](https://n8n.io/integrations/scrapeops/) as a community node. You are responsible for complying with Redfin's Terms of Use, robots.txt directives, and applicable laws in your jurisdiction. Scraping targets may change at any time; adjust render, scroll, and wait settings and parsers as needed. Use responsibly and only for legitimate business purposes.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
