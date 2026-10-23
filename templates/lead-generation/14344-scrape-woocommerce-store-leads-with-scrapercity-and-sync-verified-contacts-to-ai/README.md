# 🎣 Scrape WooCommerce store leads with ScraperCity and sync verified contacts to Airtable

> ⚡ **7 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This template is for sales teams, lead generation agencies, and growth marketers who want to build targeted lists of WooCommerce store owners -- complete with verified emails, phone numbers, and social profiles -- and have those contacts automatically land in Airtable for outreach or CRM workflows.

## How it works

1. A manual trigger starts the workflow and a configuration node lets you set your target country, lead volume, and which data points to collect (emails, phones).
2. A POST request to the ScraperCity store-leads API kicks off an async scrape job targeting WooCommerce stores and returns a `runId`.
3. The workflow enters a polling loop -- waiting 60 seconds between each status check -- until the ScraperCity job reports `SUCCEEDED`.
4. Once complete, the results CSV is downloaded via the ScraperCity download endpoint.
5. A Code node parses the CSV, cleans the data, and deduplicates records by email address.
6. A filter removes rows missing both email and phone, keeping only actionable contacts.
7. Each verified contact is upserted into an Airtable base, ready for outreach.

## How to set up

1. Create a ScraperCity account at scrapercity.com and copy your API key.
2. In n8n, create an HTTP Header Auth credential named `ScraperCity API Key` with the header `Authorization: Bearer YOUR_KEY`.
3. Create an Airtable personal access token credential in n8n.
4. Open the **Configure Scrape Parameters** node and set your country code, lead volume, and Airtable base/table IDs.
5. Click **Execute workflow** to run.

## Requirements

- ScraperCity account (store-leads product)
- Airtable account with a base containing columns: Name, Website, Email, Phone, Instagram, Facebook, Country
- n8n instance (cloud or self-hosted)

## How to customize the workflow

- Change `platform` in the config node from `woocommerce` to `shopify` to target Shopify stores instead.
- Adjust `totalLeads` to scrape more or fewer contacts per run.
- Add a Filter node after the Code node to restrict results to stores with Instagram profiles only.
- Replace the Airtable output node with HubSpot, Google Sheets, or Notion to match your CRM stack.
- Attach a Schedule Trigger to run the scrape weekly for ongoing lead generation.

## 🔗 Nodes Used

Airtable, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
