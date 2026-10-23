# 👥 Log daily LinkedIn job postings to Google Sheets with Apify

> ⚡ **3 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to search LinkedIn jobs via the Apify LinkedIn Jobs Scraper and appends new job postings to Google Sheets while preventing duplicates by LinkedIn job ID.

## How it works
1. Runs every morning on a schedule trigger.
2. Builds the search parameters (keywords, location, date range, per-keyword limit, and cost cap) for the LinkedIn job search.
3. Calls the Apify LinkedIn Jobs Scraper Actor to fetch recent LinkedIn job postings (including any extracted contact emails).
4. Filters the results to keep only valid job rows, formats fields (including salary and a “foundAt” timestamp), and stops the run with an error if no jobs are returned.
5. Appends new jobs to Google Sheets or updates existing rows by matching on the job `id` to avoid duplicates.

## Setup
1. Create an Apify account, copy your Apify API token, and add an n8n HTTP Header Auth credential that sends `Authorization: Bearer <token>`.
2. Create a Google Sheet with columns `id`, `title`, `company`, `location`, `seniority`, `employmentType`, `salary`, `applicants`, `postedAt`, `url`, `emails`, and `foundAt`, then connect your Google Sheets credentials in the Google Sheets node.
3. Select your target Google Sheet document and tab in the Google Sheets node and adjust the keywords, location, limits, and `maxTotalChargeUsd` values in the search settings before activating the workflow.

## Additional info
Get fresh LinkedIn job postings in a Google Sheet every morning, without a LinkedIn account, cookies or any risk to your profile.

Who it is for: recruiters, job seekers, freelancers, agencies and sales teams who watch which companies are hiring for which roles.

How it works

A schedule trigger starts the workflow every morning at 8:00.
You list your job titles and location once, in the "Search settings" node.
The LinkedIn Jobs Scraper Actor on Apify reads LinkedIn's public job pages (no login) and returns title, company, location, seniority, salary when posted, number of applicants, link and recruiter emails found in the posting.
Error rows are removed. If a run returns no jobs at all, the workflow stops with a clear error message instead of quietly leaving an empty sheet.
New jobs are added to your Google Sheet. A job already in the sheet is not duplicated (matched on the LinkedIn job id).

Setup (about 5 minutes)

Create a free Apify account and copy your API token (Settings > API & Integrations).
In n8n add a Header Auth credential: Name Authorization, Value Bearer YOUR_TOKEN.
Create a Google Sheet with these column headers in row 1: id, title, company, location, seniority, employmentType, salary, applicants, postedAt, url, emails, foundAt. Connect it in the last node.
Edit the job titles and location, run once manually, then activate.

Cost: about $0.003 per job (+$0.002 when the posting contains an email). The run has a spending cap (default $1), so a wrong setting cannot turn into a big bill. 25 jobs per run is roughly 8 cents.

Actor used: https://apify.com/lergassy/linkedin-jobs-scraper

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
