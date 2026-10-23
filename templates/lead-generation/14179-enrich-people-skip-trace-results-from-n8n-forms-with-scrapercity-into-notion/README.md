# 🎣 Enrich people skip-trace results from n8n forms with ScraperCity into Notion

> ⚡ **28 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This workflow is built for real estate investors, private investigators, recruiters, and sales teams who need to skip trace individuals -- finding contact details, addresses, and phone numbers from a name, email, or phone number -- and store the enriched records automatically in Notion.

## How it works

A user fills out an n8n form with one or more search inputs (name, email, or phone number). The workflow submits that data to the ScraperCity People Finder API, which begins an async enrichment job. The workflow then polls the job status every 60 seconds until it completes. Once the scrape succeeds, the results are downloaded, parsed, deduplicated, and each enriched person record is written as a new page in a Notion database.

## How to set up

1. Create a ScraperCity account at scrapercity.com and copy your API key.
2. In n8n, create an HTTP Header Auth credential named "ScraperCity API Key" with the key `Authorization` and value `Bearer YOUR_KEY`.
3. Create a Notion integration and share your target database with it. Create a Notion credential in n8n.
4. Open the **Configure Search Defaults** node and set your preferred `max_results` value.
5. Open the **Save Person Record to Notion** node and set your Notion Database ID.

## Requirements

- ScraperCity account (scrapercity.com) with People Finder access
- n8n instance (cloud or self-hosted)
- Notion workspace with a database for storing people records

## How to customize the workflow

- Change the form fields to accept bulk CSV input instead of a single name.
- Add a Filter node after parsing to only save records that include a valid phone number.
- Route results to Google Sheets or HubSpot instead of Notion by swapping the final node.

## 🔗 Nodes Used

HTTP Request, Notion, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
