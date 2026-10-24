# 🎣 Scrape Google Maps leads with Apify and export them to CSV

> ⚡ **89 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a Google Maps search URL and lead filters through an n8n form, uses Apify to scrape matching places (including phone numbers and website emails), then returns a downloadable CSV file of the lead list.

## How it works
1. Receives a lead request via an n8n form with a Google Maps search URL, lead count, and optional filters.
2. Sends the search URL and filters to Apify’s Google Places crawler to scrape matching businesses and their contact details.
3. Extracts and standardizes key fields (business name, category, rating, reviews, phone, website, email, and location details) into a clean lead list.
4. Converts the lead list into a CSV file named `google-maps-leads.csv`.
5. Returns the CSV as a downloadable file on the form completion page.

## Setup
1. Create an Apify account, generate a Personal API token, and add it to n8n as an Apify API credential.
2. Ensure the Apify credential is selected in the HTTP request that calls Apify’s `compass~crawler-google-places` actor.
3. Activate the workflow and use the n8n form URL to submit a Google Maps search link and your desired filters.

## Requirements
- A free Apify account (the free tier includes monthly credits).

## Customization
- Filter from the form: minimum rating, only businesses with a website, and skip permanently-closed places.
- Change how many leads you pull per run in the form.
- Add or remove output columns in the "Build lead list" node.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
