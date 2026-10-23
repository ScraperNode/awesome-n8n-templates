# 📊 Log daily Indeed job searches to Google Sheets with Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning, uses Apify’s Indeed Jobs Scraper to find new job postings matching your search, and appends the results to Google Sheets with key fields like title, company, location, salary, job type, remote status, and links.

## How it works
1. Runs every day at 08:00 using a schedule trigger.
2. Calls the Apify actor `robertosan16/indeed-jobs-scraper` with your search query, country, location, and filters like `postedWithinDays: 1` and `onlyNew: true`.
3. Maps each job result into a consistent set of columns (title, company, location, salary, job type, remote, posted date, and links).
4. Appends one row per job posting to the selected Google Sheets worksheet.

## Setup
1. Add an Apify connection (API token or OAuth) and ensure the community node `@apify/n8n-nodes-apify` is installed if it is not available in your n8n instance.
2. In the Apify request body, update `searchQueries`, `country`, `location`, and any other scraper filters you want (for example `maxItems`).
3. Add a Google Sheets OAuth connection, then select the target spreadsheet and sheet in the Google Sheets append step and create header columns matching the fields you want to store.

## Requirements
- An Apify account. The free plan includes $5 of usage a month; the scraper costs $1 per 1,000 jobs.
- A Google account for Google Sheets.

## Customization
- Add filters to the search: `jobTypes`, `workplaceTypes`, `experienceLevels` or `distance`.
- Change the time in **Every morning**.
- Send the jobs to Airtable, Notion or email instead of Google Sheets.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
