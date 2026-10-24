# 🎣 Scrape Apollo.io leads with ScraperCity and sync enriched contacts to Airtable

> ⚡ **72 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

Sales teams, lead generation agencies, and growth marketers who want to pull targeted B2B contacts from Apollo.io, enrich them with verified emails and mobile numbers, and push clean records directly into an Airtable CRM -- without manual data entry or expensive Apollo subscriptions.

## How it works

1. A manual trigger kicks off the workflow. A configuration node lets you define your target job titles, industry, company size, and lead count.
2. The workflow calls the ScraperCity Apollo Filters API to start an async scrape job and captures the returned run ID.
3. An async polling loop checks the scrape status every 60 seconds until the job succeeds.
4. On success, the raw lead data is downloaded and parsed. Contacts without a work email are filtered out and duplicates are removed.
5. Clean, enriched records (name, title, company, email, phone, LinkedIn URL) are written to your Airtable base as new rows.

## How to set up

1. Create a ScraperCity account at scrapercity.com and copy your API key.
2. In n8n, add an HTTP Header Auth credential named "ScraperCity API Key" with the header name `Authorization` and value `Bearer YOUR_KEY`.
3. Open the **Configure Search Parameters** node and edit job titles, industry, company size, and lead count.
4. Open the **Save Leads to Airtable** node and connect your Airtable credential, then set your Base ID and Table name.

## Requirements

- ScraperCity account (scrapercity.com) -- Apollo scraper billed at $0.0039 per contact
- n8n instance (cloud or self-hosted)
- Airtable account with a base and table ready to receive contacts

## How to customize the workflow

- Change the filter conditions in **Filter Contacts with Email** to also require a phone number.
- Add a ScraperCity Mobile Finder step after download to enrich contacts with mobile numbers before writing to Airtable.
- Swap the Airtable output node for a HubSpot or Google Sheets node to route leads to a different destination.

## 🔗 Nodes Used

Airtable, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
