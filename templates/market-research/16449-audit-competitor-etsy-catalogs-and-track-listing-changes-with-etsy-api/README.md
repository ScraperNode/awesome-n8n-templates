# 📊 Audit competitor Etsy catalogs and track listing changes with Etsy API

> ⚡ **131 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs manually or daily to audit a public Etsy shop via the Etsy API, summarize active listing metrics, and store a snapshot in n8n to detect newly added or removed listings between runs.

## How it works
1. Runs on a manual trigger or on a daily schedule.
2. Reads the target Etsy shop name and listing sample size from the workflow configuration.
3. Calls the Etsy API to resolve the shop name to a shop ID, then fetches up to 100 newest active listings including images.
4. Calculates catalog metrics (price min/max/average/median, personalization share, and top taxonomy IDs) and saves the current listing snapshot in workflow static data for future comparisons.
5. Compares the current snapshot to the previous run to identify new and removed listings in the monitored sample.
6. Outputs a report message, and if changes are found, produces a change alert message with counts of added and removed listings.

## Setup
1. Create an Etsy developer app and capture the credentials needed to call the Etsy API.
2. Add an HTTP Header Auth credential for the Etsy API in both HTTP Request steps and set the required API key header (for example, `x-api-key` with your Etsy app keystring, per your Etsy app settings).
3. Update **Configuration (EDIT ME)** with the exact public Etsy `shop_name` and adjust `listing_limit` (1–100) to control how many newest active listings are monitored.
4. Activate the workflow so production executions can retain the saved snapshot used for catalog change detection.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
