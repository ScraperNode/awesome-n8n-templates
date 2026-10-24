# 👥 Save daily JobsPipe job postings to Google Sheets

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs daily at 07:00, searches JobsPipe for newly discovered job postings matching your filters, and appends or updates the results in a Google Sheets spreadsheet keyed by job ID.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Defines the search criteria (job titles, country codes, lookback window, and page size).
3. Calls the JobsPipe /v1/jobs/search API to fetch jobs discovered within the lookback window and paginates through results using the returned cursor.
4. Splits the response so each job posting is processed as an individual item.
5. Adds or updates a row in Google Sheets for each job, matching on the job `id` to prevent duplicates across runs.

## Setup
1. Get a free JobsPipe API key at jobspipe.dev (1,000 free credits, no card). In n8n, create a Header Auth credential named `JobsPipe API` with name `Authorization` and value `Bearer <your_key>`, then open the Search new jobs node once so it picks the credential up.
2. Connect a Google Sheets OAuth2 credential and select the target spreadsheet and sheet in the Google Sheets node.
3. Ensure your sheet has headers matching the mapped fields (at minimum `id`, `job_title`, `company`, `location`, `url`, `date_posted`, `salary_string`, `min_annual_salary`, `max_annual_salary`, `salary_currency`, and `discovered_at`) and adjust the filters (titles, countries, lookback hours, page size) to your needs.

## Requirements
- A JobsPipe API key (the free tier works)
- A Google account with a spreadsheet for the results

## Customization
- Add any JobsPipe filter to the request body (salary range, remote, seniority, company, skills, visa sponsorship); see docs.jobspipe.dev/api-reference/filters
- Each job costs 1 credit, once per calendar month; the default reads at most 4 pages of 25 jobs (100 credits) per run. Raise Max Pages under the HTTP Request node's Pagination option or page_size in Set search filters for more
- Swap Google Sheets for Airtable, a database or a Slack message to route new jobs elsewhere

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
