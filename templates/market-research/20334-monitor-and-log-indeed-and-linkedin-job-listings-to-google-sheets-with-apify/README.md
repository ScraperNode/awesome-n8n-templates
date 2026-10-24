# 📊 Monitor and log Indeed and LinkedIn job listings to Google Sheets with Apify

> ⚡ **32 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually or daily at 09:00 UTC to scrape up to 20 job listings from Indeed or LinkedIn via Apify, deduplicates them against an existing Google Sheets tab, and then appends or updates new job URLs with basic metadata.

## How it works
1. Runs either on a manual trigger or on a daily cron schedule at 09:00 UTC.
2. Loads the search term, location, target Google Sheet ID, and selected job boards to monitor.
3. Reads existing rows from the Google Sheets “Jobs” tab to collect already-saved job URLs.
4. Calls the Apify Multi Job Board Scraper actor via HTTP to fetch up to 20 job results for the configured search.
5. Validates the Apify response, sanitizes text fields, and removes any jobs whose URLs already exist in the sheet.
6. Appends new jobs (or updates by matching on jobUrl) in Google Sheets with title, company, location, job board, and a collected timestamp.

## Setup
1. Create an Apify account and add an n8n HTTP Header Auth credential with `Authorization: Bearer <YOUR_APIFY_TOKEN>`.
2. Connect Google Sheets OAuth credentials for both the read and write steps.
3. Create a Google Sheets tab named “Jobs” with headers `jobUrl`, `title`, `company`, `location`, `jobBoard`, and `collectedAt`, then paste your spreadsheet ID into the workflow’s `sheetId` setting.
4. Update the search term, US location, and job boards (indeed, linkedin, or both). Run manually twice and verify saved rows and deduplication. Adjust the schedule/timezone and configure an n8n error workflow before activating.

## Requirements
- An n8n instance, a Google account with spreadsheet access, and an Apify account with available credits. No AI subscription required.

## Customization
- Edit the role, US location and jobBoards in Search settings. Indeed is the default; optionally add linkedin. Adjust the daily schedule and workflow timezone.

## Additional info
Disclosure: Group Oject / HiringDataFlow develops the paid Apify Actor used here: https://apify.com/groupoject/indeed-jobs-scraper?utm_source=n8n&utm_medium=template&utm_campaign=jobs_to_sheets . The workflow template is free; Apify and n8n usage are separate. Each Actor request has a $0.10 maximum charge, a 20-result cap and a 120-second timeout. Repeated searches may incur charges even when Sheets deduplication suppresses all rows. Automatic paid-request retries are disabled; inspect Apify Runs after timeouts. Run one execution at a time; URL changes may create duplicates and coverage is not exhaustive. Email/Slack alerts are not included. Testing disclosure: 30 local configuration and transformation checks passed, but authenticated end-to-end execution in n8n with Google Sheets has not yet been completed. Please treat this as a starter workflow requiring integration verification before scheduling.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
