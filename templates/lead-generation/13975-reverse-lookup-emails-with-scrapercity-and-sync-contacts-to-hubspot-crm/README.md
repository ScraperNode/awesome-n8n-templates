# 🎣 Reverse lookup emails with ScraperCity and sync contacts to HubSpot CRM

> ⚡ **30 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This template is for sales teams, recruiters, and growth professionals who need to enrich a list of email addresses with full contact details -- names, phone numbers, and physical addresses -- and push verified new leads directly into HubSpot CRM without manual data entry.

## How it works

The workflow accepts a list of email addresses defined in a configuration node. It submits each email to the ScraperCity People Finder API, which performs a reverse lookup to surface associated names, phones, and addresses. Because the scrape runs asynchronously, the workflow polls the job status every 60 seconds until completion. Once the scrape succeeds, it downloads the CSV results, parses each row into structured contact records, removes duplicates, and upserts every new contact into HubSpot CRM.

## How to set up

1. Create a **ScraperCity API Key** credential in n8n (HTTP Header Auth, header name `Authorization`, value `Bearer YOUR_KEY`).
2. Create a **HubSpot App Token** credential in n8n.
3. Open the **Configure Lookup Parameters** node and replace the example emails with your target list.
4. Execute the workflow manually and monitor the polling loop until results appear in HubSpot.

## Requirements

- ScraperCity account with People Finder access (app.scrapercity.com)
- HubSpot account with a valid private app token
- n8n instance (cloud or self-hosted)

## How to customize the workflow

- Add more emails to the **Configure Lookup Parameters** node or replace it with a Google Sheets or webhook trigger to feed emails dynamically.
- Adjust the **Wait Before Retry** node duration if your scrapes consistently finish faster or slower.
- Extend the **Map Contact Fields** node to populate additional HubSpot properties such as lifecycle stage or lead source.

## 🔗 Nodes Used

HTTP Request, HubSpot, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
