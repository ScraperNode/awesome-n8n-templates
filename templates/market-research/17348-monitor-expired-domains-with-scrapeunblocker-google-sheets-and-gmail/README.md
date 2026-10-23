# 📊 Monitor expired domains with ScrapeUnblocker, Google Sheets, and Gmail

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 5 hours to scrape domain drop lists from ExpiredDomains.net (including the GoDaddy expired domains section) via ScrapeUnblocker, deduplicates against a Google Sheets log, and sends Gmail alerts for newly discovered domains.

## How it works
1. Runs every 5 hours on a schedule.
2. Fetches the ExpiredDomains.net expired-domains page and the ExpiredDomains.net GoDaddy expired domains page through ScrapeUnblocker.
3. Parses each HTML response to extract domain name, TLD, full domain, source, search URL, and a timestamp.
4. Merges domains from both sources and processes them one by one.
5. Looks up each full domain in a Google Sheets “Domains” tab to check whether it has already been recorded.
6. For new domains, appends a row to Google Sheets and sends a formatted Gmail email alert with the domain details, then waits briefly before continuing.

## Setup
1. Add credentials for Gmail and update the recipient email address in the Gmail send action.
2. Add Google Sheets credentials and confirm the target spreadsheet (“Domain Monitor”) and sheet (“Domains”) exist with columns for domain, tld, full, source, and found_at.
3. Configure ScrapeUnblocker credentials (if required by your instance) and adjust the ExpiredDomains.net URLs if you want to monitor different lists or saved searches.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
