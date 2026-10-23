# 🎣 Skip trace property owners with ScraperCity and sync contacts to Airtable

> ⚡ **50 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This workflow is built for real estate investors, wholesalers, and skip tracers who need to find contact details -- phone numbers, emails, and addresses -- for property owners at scale. It automates the entire lookup process using the ScraperCity People Finder API and stores clean results in Airtable for follow-up.

## How it works

1. A manual trigger starts the workflow. A configuration node lets you define the list of property owner names (or phones/emails) to look up.
2. The workflow submits a skip trace job to the ScraperCity People Finder API, which returns a `runId` for async tracking.
3. An async polling loop checks the job status every 60 seconds until the result is marked `SUCCEEDED`.
4. Once complete, the workflow downloads the results CSV and parses each contact record using a code node.
5. Duplicate records are removed, and each unique contact is synced into an Airtable base as a new row with name, phone, email, and address fields.

## How to set up

1. Create a ScraperCity API credential in n8n (HTTP Header Auth, header name `Authorization`, value `Bearer YOUR_KEY`).
2. Update the **Configure Search Inputs** node with your target names, phones, or emails.
3. Connect your Airtable credential and set your Base ID and Table name in the **Sync Contacts to Airtable** node.

## Requirements

- ScraperCity account with People Finder access (scrapercity.com)
- Airtable account with a base set up to receive contact data

## How to customize the workflow

- Change `max_results` in **Configure Search Inputs** to return more contacts per person.
- Swap the Airtable node for a Google Sheets node if preferred.
- Add a filter node after parsing to keep only records that have a verified phone number.

## 🔗 Nodes Used

Airtable, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
