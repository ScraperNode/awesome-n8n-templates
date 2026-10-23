# 📊 Log weekly LinkedIn hiring signals to Google Sheets with Apify

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every Monday morning, searches LinkedIn job listings via the Apify LinkedIn Jobs API for a list of target roles (and optional company/location), filters to recent postings, and appends the results as rows in a Google Sheets spreadsheet.

## How it works
1. Runs every Monday morning on a scheduled trigger.
2. Defines the roles to watch, location, optional company filter, lookback window, and maximum number of jobs to return.
3. Splits the role list so Apify runs one LinkedIn jobs search per role using the johnvc/linkedin-jobs-api actor.
4. Filters the returned dataset to keep only items that are actual job results.
5. Drops postings outside the lookback window, calculates how many days old each job is, and formats fields (title, company, location, posted date, seniority, applicants, and link) for spreadsheet columns.
6. Appends the formatted job rows to the selected Google Sheets document and sheet tab.

## Setup
1. Create an Apify account, add your Apify API token in n8n, and ensure you can run the johnvc/linkedin-jobs-api actor.
2. Connect Google Sheets credentials in n8n and select the target spreadsheet and sheet tab in the Google Sheets node.
3. Update the role list, location, optional company, lookbackDays, and maxJobs values in the configuration step to match your hiring-signal watch.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
