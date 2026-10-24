# 👥 Log new LinkedIn-style job postings to Google Sheets with RapidAPI JSearch

> ⚡ **19 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 12 hours to search LinkedIn-style job listings via the RapidAPI JSearch API, filters out senior-level titles, deduplicates results against a Google Sheets log, and appends only new job postings to the sheet for manual tracking.

## How it works
1. Runs every 12 hours on a schedule.
2. Builds the job search query (title, location, remote flag, and date window) from configured parameters.
3. Calls the RapidAPI JSearch `/search-v2` endpoint to fetch job results and splits the returned `data.jobs` array into individual job items.
4. Filters out jobs whose titles match Senior, Lead, Staff, or Principal.
5. Reads the existing rows from a Google Sheets `Jobs` tab and compares them to the fetched jobs using `job_id` to identify new postings.
6. Appends only the new jobs (title, company, location, URL, job_id, and formatted posted date) to Google Sheets, leaving `status` blank for manual updates.

## Setup
1. Create a RapidAPI header-auth credential with your `X-RapidAPI-Key` for the JSearch API.
2. Add a Google Sheets OAuth2 credential and set the target spreadsheet ID in both the read and append Google Sheets steps.
3. Create a Google Sheet tab named `Jobs` with columns `job_id`, `title`, `company`, `location`, `url`, `date_posted`, and `status` (with `job_id` used as the dedupe key).
4. Update the search values (job title, location, remote-only flag, and date_posted window) to match your target role and optionally adjust the schedule interval to control RapidAPI usage.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
