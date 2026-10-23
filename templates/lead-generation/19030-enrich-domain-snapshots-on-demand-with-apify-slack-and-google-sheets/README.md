# 🎣 Enrich domain snapshots on demand with Apify, Slack, and Google Sheets

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow exposes a POST webhook that normalizes a domain, URL, or email input, runs the Apify Domain Inspector actor, and returns a consistent JSON snapshot of DNS and email routing signals such as MX hosts, mail provider, and free-provider detection.

## How it works
1. Receives a POST request on a webhook endpoint (or runs a manual test that generates a sample request body).
2. Extracts and normalizes the input into a clean hostname from a domain, full URL, or email address, and validates the format.
3. Calls Apify by running the `dami_studio~domain-inspector` actor and fetches the resulting dataset for the domain.
4. Formats the result into a fixed JSON response with fields like `ok`, `resolves`, `accepts_mail`, `mail_provider`, `mx_hosts`, and `is_free_provider`, and returns it to the caller.

## Setup
1. Add an Apify credential with an API token that can run actors.
2. (Optional) Use the Manual Test trigger to run the included sample request and confirm the response shape before enabling the webhook.
3. Activate the workflow, copy the production webhook URL, and configure your app to POST JSON with a `domain`, `url`, or `email` field to `/lookup/domain`.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
