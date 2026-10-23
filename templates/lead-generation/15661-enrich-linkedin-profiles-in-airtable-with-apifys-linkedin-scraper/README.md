# 🎣 Enrich LinkedIn profiles in Airtable with Apify’s LinkedIn scraper

> ⚡ **36 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for

This workflow is for sales teams, recruiters, and growth operators who maintain a list of LinkedIn profile URLs in Airtable and want to automatically enrich each record with detailed professional data — without manual copy-pasting.

## How it works

1. The workflow is triggered manually and queries Airtable to fetch all records matching a defined filter (e.g. records with an empty "First name" field).
2. It loops over each record one by one using a batch iterator.
3. For each record, it sends the LinkedIn profile URL to the Apify LinkedIn scraper API via a POST request and waits for the result.
4. The enriched data (name, headline, job title, company, location, skills, positions, education, certifications, follower count, and more) is written back to the corresponding Airtable record.
5. The loop continues until all records have been processed.

## How to set up

- [ ] Connect your **Airtable** credentials in both the `Search Records` and `Update LinkedIn Data` nodes
- [ ] Configure the correct Airtable base, table, and filter formula
- [ ] Obtain an **Apify API key** and connect it in the `Fetch LinkedIn Profile via Apify` node
- [ ] Ensure your Airtable table has a `LinkedIn URL` field populated with valid profile URLs
- [ ] Review and adjust the field mappings in the `Update LinkedIn Data` node to match your schema

## Requirements

- Airtable account with API access
- Apify account with access to the LinkedIn Profile Scraper actor

## How to customize

- Adjust the batch size in `Loop Over Records in Batches` to control request rate and avoid Apify rate limits
- Add an error-handling branch after the HTTP Request node to flag failed lookups directly in Airtable
- Replace the manual trigger with a scheduled trigger to run enrichment automatically on new records

## 🔗 Nodes Used

Airtable, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
