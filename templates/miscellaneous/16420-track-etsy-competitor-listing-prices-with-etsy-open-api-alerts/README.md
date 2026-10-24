# 🔧 Track Etsy competitor listing prices with Etsy Open API alerts

> ⚡ **116 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs on a schedule (or manually) to fetch public Etsy listing details in a single batch request, stores a baseline snapshot in n8n, and alerts you when listing prices change beyond a configurable percentage threshold.

## How it works
1. Runs either manually or every 6 hours on a schedule.
2. Reads your configured Etsy listing IDs and minimum percentage change threshold, then builds a batch URL for the Etsy Open API.
3. Calls the Etsy API to fetch the latest public data for up to 100 listings.
4. Compares current listing prices to the previous saved snapshot in n8n workflow static data and also flags listings that have become unavailable.
5. Outputs an alert message when any changes are detected, otherwise outputs a baseline/no-change summary message.

## Setup
1. Create an Etsy developer app and obtain your keystring and shared secret for the Etsy API.
2. In the HTTP Request step, configure Header Auth with header name `x-api-key` and value `KEYSTRING:SHARED_SECRET`.
3. Update the configuration values with a comma-separated list of numeric Etsy listing IDs and an optional `minimum_change_percent` threshold.
4. Activate the workflow (or run it once in production) to create the baseline snapshot, then rely on the scheduled runs for ongoing comparisons.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
