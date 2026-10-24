# 🎣 Extract B2B lead emails from Google results with SerpApi, Apify and Claude

> ⚡ **21 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs on a schedule, searches Google via SerpApi for a chosen topic, scrapes the top results’ webpages with Apify, uses Anthropic Claude to extract email addresses from the page text, and sends a consolidated report through Gmail, Telegram, and WhatsApp (Rapiwa).

## How it works
1. Runs on a schedule trigger.
2. Sets the search topic and performs two SerpApi Google searches to collect organic results for positions 1–20.
3. Extracts the title and URL from each SerpApi response and merges the results into a single list.
4. Processes each result in a loop by scraping the target URL’s content using an Apify website content crawler.
5. Sends the scraped text to Anthropic Claude with a structured output format to extract an email address (or return null if none is found).
6. Sends a formatted “Email Scraping Report” containing each site’s title, link, and extracted email via Gmail, Telegram, and WhatsApp (Rapiwa).

## Setup
1. Add credentials for SerpApi, Apify, and Anthropic (Claude) so the workflow can search, scrape, and extract emails.
2. Add Gmail OAuth2 credentials and replace the placeholder recipient address in the Gmail report.
3. Add Telegram bot credentials and set a valid chat ID (the template references a Telegram trigger item, so update the chat ID mapping or add a Telegram Trigger node).
4. Add Rapiwa credentials and replace the placeholder WhatsApp number.
5. Update the topic keyword in “Set Your Topic” and adjust the SerpApi searches if you want more or fewer than 20 results.

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
