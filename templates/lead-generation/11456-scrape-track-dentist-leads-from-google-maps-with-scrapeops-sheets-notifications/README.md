# 🎣 Scrape & track dentist leads from Google Maps with ScrapeOps, Sheets & notifications

> ⚡ **355 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Overview
This n8n template automates the generation of local business leads by scraping Google Maps. It goes beyond basic search results by visiting individual business pages to extract detailed contact information, reviews, and attributes (like LGBTQ+ friendly status). It includes built-in deduplication against a Google Sheet to ensure you only receive alerts for *new* leads.

## Who is this for?
- **Marketing Agencies**: Finding local clients for services.
- **Sales Teams**: Building lists of prospects in specific cities.
- **Recruiters**: Finding businesses in specific niches.
- **Researchers**: Gathering data on local business landscapes.

## What problems it solves
- **Manual Data Entry**: Eliminates the need to copy-paste business details from Maps.
- **Duplicate Leads**: Automatically checks against your database to prevent duplicate entries.
- **Incomplete Data**: Performs a "deep scrape" to get data often missing from list views (websites, full phone numbers, reviews).
- **Delayed Action**: Sends instant alerts via Gmail and Slack so you can act on new leads immediately.

## How it works
1. **Input**: Takes a city name via a form (or can be scheduled).
2. **Search**: Uses **ScrapeOps** to search Google Maps for your target keyword (e.g., "Dentist").
3. **Deep Extraction**: Visits each business profile to scrape phone numbers, websites, ratings, and reviews.
4. **Validation**: Compares found businesses with your existing Google Sheet database.
5. **Action**: Saves new leads to the sheet and notifies you via Gmail and Slack.

## Set up steps (~ 10-15 minutes)
1. **ScrapeOps Account**: Register for a free API key at [ScrapeOps](https://scrapeops.io/app/register/n8n).
2. **Google Sheet**: 
   - Create a new Google Sheet.
   - Add these headers: `businessName`, `phone`, `website`, `rating`, `totalReviews`, `address`, `city`, `category`, `mapUrl`, `status`, `checkedAt`, `lgbtqFriendly`, `review1`, `review2`, `review3`.
   - Or duplicate this [Template Sheet](https://docs.google.com/spreadsheets/d/1HYO6pw9PigmNKzrnmE9s9JcNVSvZAcIHGF1ZJQ9kfks/edit?gid=0#gid=0).
3. **Configure Nodes**:
   - **Set Google Maps Configuration**: Set your `keyword` (e.g., "dentist", "plumber").
   - **Google Sheets Nodes**: Connect your account and select the sheet you created.
   - **Gmail & Slack Nodes**: Update with your email address and Slack channel.

## Pre-conditions
- An n8n instance (Cloud or Self-hosted).
- A [ScrapeOps API Key](https://scrapeops.io/app/register/n8n) (Free tier available).
- Google Cloud Console project with Gmail and Sheets APIs enabled (for credentials).

## Disclaimer
This template uses ScrapeOps as a community node. You are responsible for complying with Google's Terms of Use, robots directives, and applicable laws in your jurisdiction. Scraping targets may change at any time; adjust render/scroll/wait settings and parsers as needed. Use responsibly for legitimate business purposes.

## Key Features
The ScrapeOps n8n node provides access to three main APIs:

### 1. Proxy API
Access to ScrapeOps' proxy aggregator for reliable web scraping:
- Smart proxy rotation across multiple providers
- JavaScript rendering support
- Anti-bot bypass capabilities
- Geo-targeting options
- Mobile and residential proxy support

**Full Documentation:** [n8n Proxy API Aggregator](https://scrapeops.io/docs/n8n/proxy-api/)

### 2. Parser API
Extract structured data from popular websites without maintaining your own parsers:
- **Supported Sites:** Amazon, eBay, Walmart, Indeed, Redfin
- **Page Types:** Product pages, search results, reviews, categories
- Returns clean, structured JSON data

**Full Documentation:** [n8n Parser API](https://scrapeops.io/docs/n8n/parser-api/)

### 3. Data API
Direct access to structured data endpoints:
- **Amazon Product API:** Get product details by ASIN or URL
- **Amazon Search API:** Search products and get structured results

**Full Documentation:** [n8n Data APIs](https://scrapeops.io/docs/n8n/data-api/)

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
