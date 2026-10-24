# 📊 Scrape LinkedIn job listings with ScrapeUnblocker and Google Sheets

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every 8 hours to scrape LinkedIn job search results for a chosen keyword and location using ScrapeUnblocker, then parses job details and appends them to a Google Sheets spreadsheet.

## How it works
1. Runs every 8 hours on a schedule.
2. Sets the job search keyword and location, then builds encoded search URLs for LinkedIn and Indeed.
3. Filters the generated URLs to continue only with the LinkedIn search.
4. Fetches the LinkedIn job search results HTML using ScrapeUnblocker.
5. Extracts job postings from the HTML (job ID, title, company, location, post date, and URL), deduplicates by job ID, and stamps each item with the scrape time.
6. Appends each parsed job listing as a new row in Google Sheets.

## Setup
1. Add ScrapeUnblocker credentials (or configure the ScrapeUnblocker node authentication required by your account).
2. Connect Google Sheets OAuth credentials and select the target spreadsheet and sheet tab used for output.
3. Ensure the sheet has columns for Job ID, Title, Company, Location, Post Date, Source, URL, and Date Scraped, and update the keyword and location values to match your search.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
