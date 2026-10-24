# 🎣 Scrape Shopify store leads with ScraperCity and push verified contacts to HubSpot CRM

> ⚡ **16 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This workflow is built for digital agencies and sales teams that sell services to ecommerce brands. If you prospect Shopify store owners and want a repeatable, automated pipeline from discovery to CRM -- this template handles the entire process.

## How it works

1. A configuration node lets you set your target country, lead volume, and filters before anything runs.
2. ScraperCity's store-leads API scrapes live Shopify stores and returns emails, phone numbers, and social profiles.
3. The workflow polls for job completion every 60 seconds, then downloads and parses the CSV results.
4. All harvested emails are sent in bulk to ScraperCity's email-validator API, which checks deliverability, MX records, and catch-all status.
5. Only contacts with valid or acceptable email status pass through a filter node.
6. Duplicate records are removed before each verified lead is created or updated as a contact in HubSpot CRM.

## How to set up

1. Create a ScraperCity account at app.scrapercity.com and copy your API key.
2. In n8n, create an HTTP Header Auth credential named "ScraperCity API Key" with the header name "Authorization" and value "Bearer YOUR_KEY".
3. Connect your HubSpot account using the HubSpot App Token credential.
4. Open the **Configure Search Parameters** node and set your target country code and lead volume.

## Requirements

- ScraperCity account (app.scrapercity.com) -- store-leads and email-validator products
- HubSpot account with a private app token
- n8n instance (cloud or self-hosted)

## How to customize the workflow

- Change `countryCode` in the config node to target any market (GB, AU, CA, etc.)
- Adjust `totalLeads` to control scrape volume per run
- Add a filter node after email validation to restrict to specific domains or revenue signals
- Swap HubSpot for another CRM by replacing the final node with a Salesforce, Pipedrive, or Airtable node

## 🔗 Nodes Used

HTTP Request, HubSpot, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
