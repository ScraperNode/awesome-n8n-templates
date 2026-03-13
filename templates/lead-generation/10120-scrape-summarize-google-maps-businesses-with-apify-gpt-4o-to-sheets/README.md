# 🎣 Scrape & summarize Google Maps businesses with APIFY + GPT-4O to sheets

> ⚡ **536 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## This workflow automates the process of scraping local business listings from Google Maps and generating clean, AI-powered summaries for each one — using Apify (community node) and OpenAI’s GPT-4o.

All results are then saved automatically into Google Sheets, ready for lead generation, enrichment, or outreach.

## What it does
This workflow saves hours of manual research by automatically:

- Scraping structured business data from Google Maps (name, category, address, phone, website, etc.)

- Creating natural-language summaries for each business using GPT-4o

- Storing everything into Google Sheets — perfectly formatted for outreach or CRM import

## Who’s it for

This automation is ideal for:

- Lead generators and sales teams building B2B lists from local businesses

- Freelancers and agencies prospecting new clients in specific cities or industries

- Recruiters or marketers looking to enrich business data for campaigns

- Automation enthusiasts who want to summarize and structure raw scraped data — without writing a single line of code

## How it works

- Trigger: The workflow starts manually via the Execute Workflow trigger (ideal for testing or batch runs).

- Scrape: It uses an Apify actor to scrape Google Maps search results and collect structured business info (name, category, address, phone, website, Google Maps URL...).

- Fetch Data: The dataset is retrieved from Apify using the actor's dataset ID, and each business is loaded for processing.

- Deduplicate: Removes duplicate business listings to keep your database clean.

- Loop Over: Iterates over each business to generate a clean summary, one at a time.

- Generate Summary: Sends the business data to OpenAI to generate a human-readable paragraph (including name, category, address, city, phone, and Google Maps link).

- Store: Appends the summarized info into a Google Sheet — your final lead database.

- Pause for rate limit: Adds a short delay (optional) to control flow or avoid rate limits.

## Customization Tips

- Change the Apify search query to target different cities, industries, or keywords.

- Adjust the OpenAI prompt to include tone, length, or focus areas (e.g., add business highlights).

- Add filters (e.g., add-on: reviews, add-on: images, etc.).

## Setup Guide
### Apify Setup

- Use a Google Maps scraping actor in Apify.

- Copy your Actor ID and Token — add them to your Apify node in n8n.

- Note your Dataset ID (where results are stored).

### OpenAI Setup

- Add your OpenAI API key to the Generate Summary node.

- The model gpt-4o is recommended for best quality/cost balance.

### Google Sheets Setup

- Connect your Google account.

## How to use

- Set up your Apify actor for Google Maps scraping (or use a prebuilt one).

- Connect your OpenAI API key to the Message node (company summary).

- Connect your Google Sheets account and select the target sheet.

- Run the workflow → it will:

1 Scrape business data

2 Clean and summarize each one

3 Save everything to your spreadsheet.

## Requirements

- ✅ A working Apify actor that scrapes Google Maps listings

- ✅ An OpenAI account (GPT-4) with API access

- ✅ A Google Sheet for storing the summarized results

## ❓ Need help

**Contact me for consulting and support:** [LinkedIn](https://www.linkedin.com/in/jaures-nya-83a033270/) / [YouTube](https://www.youtube.com/@jauresnya) / [Skool](https://www.skool.com/gaia-4903/about?ref=e0430e4c35b645ac8976b952768e9d55)

## 🔗 Nodes Used

Google Sheets, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
