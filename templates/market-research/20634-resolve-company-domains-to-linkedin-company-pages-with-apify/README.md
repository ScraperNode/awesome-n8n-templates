# 📊 Resolve company domains to LinkedIn company pages with Apify

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a list of company website domains, runs the Apify “LinkedIn Company by Domain” actor to resolve each domain to a LinkedIn company page, and returns the resulting dataset with a needsReview flag for low-confidence or invalid matches.

## How it works
1. Starts when you run the workflow manually.
2. Validates and normalizes 1–10 input domains (or uses sample domains) and builds the Apify actor input, including concurrency and whether to keep unresolved results.
3. Starts the Apify actor run via the Apify API with a charge cap and run timeout.
4. Polls the existing Apify run every 15 seconds, stopping on a failed terminal status or after a 17-minute polling age limit. The overall workflow execution limit is 20 minutes.
5. Fetches the completed results from the Apify dataset associated with the successful run.
6. Validates each returned row and adds a needsReview flag when confidence is not high/medium or the LinkedIn company URL is missing/invalid.

## Setup
1. Create an Apify account and generate an Apify API token.
2. In n8n, add an HTTP Header Auth credential with header name Authorization and value Bearer YOUR_APIFY_TOKEN, and select it on the Apify HTTP requests.
3. Provide 1–10 domains as input to the workflow or edit the sample list in the domain preparation step before executing manually.
4. Start with the three-domain sample and inspect the results before scaling. The starter uses a $0.10 maximum actor charge and a 900-second actor timeout. Review current actor pricing and the linked setup guide before changing limits; preserve working time beyond the actor shutdown reserve.

## Requirements
- An n8n instance, your own Apify account and private Header Auth credential. Actor execution can incur charges on your Apify account; spreadsheet destinations require their own credentials.

## Customization
- Export final records as CSV or connect a Google Sheets node using your own spreadsheet credentials. Review domain coverage and needsReview flags before using the results.

## Additional info
The charge cap can produce partial results. This workflow returns company research, not individual employee profiles or emails. The review flag checks returned fields and does not independently verify identity. Setup and verification scope: https://the-ai-entrepreneur-ai-hub.github.io/apify-company-research-workflows/ . Maintained by the developer of the linked actor. Contract tests and three n8n 2.42.4 CLI scenarios passed with a local mock API; live actor resolution was not tested in those checks.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
