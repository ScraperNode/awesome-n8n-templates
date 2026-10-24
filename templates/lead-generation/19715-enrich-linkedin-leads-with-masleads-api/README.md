# 🎣 Enrich LinkedIn leads with MasLeads API

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually submits a LinkedIn profile to the MasLeads API for lead enrichment (for example, retrieving an email), polls the job status until completion, and then fetches the enrichment results or stops with a detailed error.

## How it works
1. Starts when you run the workflow manually.
2. Sets the input data (LinkedIn URL, the enrichment field to retrieve, and an external ID).
3. Calls the MasLeads API to check account usage and available balance.
4. Creates an enrichment job in MasLeads for the provided LinkedIn lead, using an idempotency key to avoid duplicate submissions.
5. Waits 30 seconds, checks the MasLeads job status, and repeats the wait-and-check loop while the job is still in progress.
6. If the job completes, requests the job results from MasLeads and returns the enriched lead data.
7. If the job is blocked or fails, stops the workflow and raises an error message with the status details.

## Setup
1. Create an HTTP Header Auth credential in n8n with your MasLeads API key.
2. Replace the sample values for linkedin_url, field (for example, "email"), and external_id with your own input source or parameters.
3. If you run this against production data, ensure your MasLeads account has sufficient balance/credits and that your source LinkedIn URLs and external IDs are correct.

## 🔗 Nodes Used

HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
