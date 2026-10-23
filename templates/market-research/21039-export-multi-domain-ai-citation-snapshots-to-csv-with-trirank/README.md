# 📊 Export multi-domain AI citation snapshots to CSV with TriRank

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Export cached AI citation readings for 1–5 domains to a downloadable CSV. Preserve complete, partial, unavailable and failed readings without treating missing data as zero. This manual inventory uses existing TriRank measurements and does not run new AI probes.

## How it works
1. Starts when you execute the workflow manually.
2. Reads a list of 1–5 bare domain names, normalizes them (for example removing www), and rejects invalid inputs before any requests run.
3. Sends one GET request per domain to the TriRank API to retrieve cached citation signals.
4. Validates each response and creates one linked row per domain. Only a complete, fresh four-engine reading supplies the API’s weighted score and cited/not_cited verdicts. Missing scores stay blank, while a measured zero remains zero.
5. Writes explicit rows for rate limits, partial coverage, missing measurements, or request failures without inferring hidden verdicts.
6. Generates a CSV file and provides it as a binary download.

## Setup
1. Import the workflow and edit Configure domains → domains. Enter 1–5 unique bare ASCII hostnames, one per line; commas or semicolons also work. Do not enter URLs, paths or ports. Use punycode for international domains. The workflow normalizes www and case, deduplicates hosts and rejects invalid inputs before making requests.
2. For domains needing measurements, visit https://trirankai.com/audit yourself and complete human verification. Otherwise the CSV honestly records no fresh measurement. Click Execute workflow, then open Download citation CSV → Binary and download trirank-citation-inventory.csv from the data field.
3. No delivery credentials are required. Anonymous TriRank reads share a 60/day/IP allowance with other workflows; each unique domain uses one read, with no automatic retries. An optional API key belongs only in an n8n Header Auth credential named x-api-key, never in the exported workflow JSON.

## Requirements
- An n8n instance with the built-in Manual Trigger, Edit Fields, HTTP Request, Code and Convert to File nodes. No community nodes, Slack/SMTP account, external database or delivery credential. A cached TriRank measurement is needed for scored rows; unmeasured domains remain valid inventory rows.

## Customization
- Change the domain list or connect the final binary file to your own storage node and credential. Keep the five-domain bound and preserve missing versus measured-not-cited values. This template has no schedule, persistent baseline or outgoing messages.

## Additional info
For SEO/GEO consultants and agencies preparing a small client or competitor-domain inventory. Different domains may use different prompts and measurement dates: this CSV is an inventory, not a controlled competitor ranking. measurement_checked_at records the stored measurement time; lookup_at records the export lookup time. Partial readings reveal missing engines but not the other engines’ verdicts, so unexposed verdicts stay explicit. HTTP 429, invalid responses and request failures become rows without retries or raw error text. Template imported and fully executed in isolated n8n 2.43.6; two real HTTP 200 reads produced a downloadable CSV with honestly blank scores for unavailable measurements. More information: https://trirankai.com

## 🔗 Nodes Used

HTTP Request, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
