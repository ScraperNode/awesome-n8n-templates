# 📊 Monitor competitor pricing pages nightly with EnConvert and Data Tables

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs nightly to scrape competitor pricing pages with EnConvert, compares the latest page text against a stored SHA-256 snapshot in n8n Data Tables, and logs an alert only when the readable content truly changes (or when a page is blocked/unreadable).

## How it works
1. Runs every night at 02:00 on a schedule.
2. Loads the current list of URLs to monitor and fetches all existing page snapshots from n8n Data Tables.
3. Scrapes each URL with EnConvert and extracts the main content as markdown.
4. Checks EnConvert’s render quality and blocked/error flags to skip unreadable pages and log a “skipped_blocked” event.
5. Hashes the readable markdown content with SHA-256 and compares it to the last stored hash for the same URL.
6. When the hash differs, logs a “changed” event to the alerts table and upserts the latest hash and check timestamp to the snapshots table.
7. When the hash matches, updates the snapshots table with the latest check timestamp and hash for that URL.

## Setup
1. Add an EnConvert API credential in n8n.
2. Create two n8n Data Tables named `enconvert_snapshots` (url, content_hash, checked_at, render_quality) and `enconvert_alerts` (url, event, detail, render_quality).
3. Update the URL list in the “Pages to watch” step to include the pricing pages you want to monitor.
4. (Optional) Replace the Data Table alert logging with Slack or email nodes if you want push notifications instead of an alerts log.

## 🔗 Nodes Used

Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
