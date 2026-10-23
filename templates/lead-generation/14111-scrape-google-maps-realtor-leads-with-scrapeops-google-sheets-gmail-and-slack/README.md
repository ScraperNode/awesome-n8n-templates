# 🎣 Scrape Google Maps realtor leads with ScrapeOps, Google Sheets, Gmail and Slack

> ⚡ **119 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
This n8n template automates finding real estate agents in any city using Google Maps. It deep-scrapes listings via ScrapeOps Proxy, deduplicates results against Google Sheets, saves fresh leads, and sends alerts via Gmail and Slack — all triggered from a simple web form.

## Who is this for?
- Real estate marketing agencies building targeted agent lead lists
- PropTech companies prospecting realtors in new cities or regions
- Sales teams running outreach campaigns targeting real estate agencies
- Anyone who needs structured local real estate agent data from Google Maps

## What problem does it solve?
Manually searching Google Maps for real estate agents, copying contact details, and checking for duplicates is slow and inconsistent. This workflow automates the entire process — from search to deduplication to saved leads — so you get fresh, structured agent data with zero manual effort.

## How it works
1. A web form captures the target city.
2. ScrapeOps Proxy scrapes Google Maps for real estate agents in that city.
3. Each listing is deep-scraped for full details: phone, website, rating, reviews, and address.
4. Results are compared against existing Google Sheet entries to remove duplicates.
5. Only new leads are saved to the sheet.
6. Gmail and Slack alerts notify you of new leads instantly.

## Set up steps (~10–15 minutes)
1. Register for a free ScrapeOps API key: [https://scrapeops.io/app/register/n8n](https://scrapeops.io/app/register/n8n)
2. Add ScrapeOps credentials in n8n. Docs: [https://scrapeops.io/docs/n8n/overview/](https://scrapeops.io/docs/n8n/overview/)
3. Duplicate the [Google Sheet template](https://docs.google.com/spreadsheets/d/1C7OAR6d6bngkrCw-On7zoIYY0QjobLVdDaP_d7u-hKU/) and connect it to the **Read Previous Entries** and **Save New Leads** nodes.
4. Configure Gmail credentials in the **Send Gmail Alert** node and set your recipient.
5. Configure Slack credentials in the **Send Slack Alert** node and set your channel.
6. Open the form URL, enter a city, and run.

## Pre-conditions
- Active ScrapeOps account (free tier available): https://scrapeops.io/app/register/n8n
- ScrapeOps community node installed in n8n: https://scrapeops.io/docs/n8n/overview/
- Google Sheets credentials configured in n8n
- Duplicated [Google Sheet template](https://docs.google.com/spreadsheets/d/1C7OAR6d6bngkrCw-On7zoIYY0QjobLVdDaP_d7u-hKU/) with correct column headers
- Gmail credentials for alert emails
- Slack credentials for channel notifications

## Disclaimer
This template uses [ScrapeOps](https://n8n.io/integrations/scrapeops/) as a community node. You are responsible for complying with Google's Terms of Use, robots.txt directives, and applicable laws in your jurisdiction. Scraping targets may change at any time; adjust render, scroll, and wait settings and parsers as needed. Use responsibly and only for legitimate business purposes.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
