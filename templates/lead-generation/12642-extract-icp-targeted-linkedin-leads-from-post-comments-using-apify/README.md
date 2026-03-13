# 🎣 Extract ICP-targeted LinkedIn leads from post comments using Apify

> ⚡ **233 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

This workflow automates the process of extracting and qualifying leads from LinkedIn post comments based on your Ideal Customer Profile (ICP) criteria. It turns LinkedIn engagement into a structured, downloadable list of qualified leads—without manual review.

---

## Who’s this for

* Sales and business development teams generating outbound lead lists
* Marketing teams running LinkedIn engagement campaigns
* Recruiters sourcing candidates with specific job titles
* Operators who want to convert LinkedIn comments into actionable data

---

## What problem does this solve

Manually reviewing LinkedIn post comments to identify relevant prospects is slow, repetitive, and error-prone. This workflow automates the entire process—from scraping comments to enriching profiles and filtering by ICP—saving hours of manual work and ensuring consistent results.

---

## What this workflow does

1. Collects a LinkedIn post URL and ICP criteria via a form
2. Scrapes post comments using Apify (supports up to 1,000 comments)
3. Deduplicates commenters and enriches profiles with LinkedIn data
4. Filters profiles by selected job titles and countries
5. Exports matched leads as a downloadable CSV file

---

## How to set up

1. Create an Apify account and generate an API key
2. Add your Apify credentials in n8n (**Settings → Credentials → Apify API**)
3. Execute the workflow and submit a LinkedIn post URL and ICP criteria

---

## Requirements

* Apify account with API access - Apify offers a free tier with $5 in monthly credits, which is enough to test this workflow on smaller LinkedIn posts

---

## How to customize the workflow

* Update job titles and target countries in the Form Trigger
* Increase pagination limits to support larger posts
* Replace CSV export with a CRM, Google Sheets, or database integration

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
