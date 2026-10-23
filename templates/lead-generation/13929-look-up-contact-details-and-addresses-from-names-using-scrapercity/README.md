# 🎣 Look up contact details and addresses from names using ScraperCity

> ⚡ **652 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This template is for investigators, real estate professionals, recruiters, and sales teams who need to skip trace individuals -- finding current addresses, phone numbers, and emails from a name, phone, or email address. It is ideal for anyone who needs to enrich a list of contacts with verified location and contact data at scale.

## How it works

1. You configure a list of names (or phones/emails) in the setup node.
2. The workflow submits a skip trace job to the ScraperCity People Finder API and captures the run ID.
3. An async polling loop checks the job status every 60 seconds until it returns SUCCEEDED.
4. Once complete, the results are downloaded, parsed from CSV, and written row by row to Google Sheets.

## How to set up

1. Add your ScraperCity API key as an HTTP Header Auth credential named "ScraperCity API Key".
2. Open the "Configure Search Inputs" node and replace the placeholder names with your target list.
3. Open the "Save Results to Google Sheets" node and set your Google Sheet document ID and sheet name.
4. Click Execute to run.

## Requirements

- ScraperCity account with People Finder access (app.scrapercity.com)
- Google Sheets OAuth2 credential connected to n8n

## How to customize the workflow

- Switch the search input from names to phone numbers or emails by editing the JSON body in "Start People Finder Scrape".
- Increase or decrease max_results in the request body to control how many matches are returned per person.
- Add a Filter node after CSV parsing to keep only results with a confirmed phone number or address.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
