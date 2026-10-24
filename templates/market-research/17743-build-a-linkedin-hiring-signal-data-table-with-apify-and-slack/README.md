# 📊 Build a LinkedIn hiring-signal data table with Apify and Slack

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Monitor selected companies for new LinkedIn jobs with Curly’s Apify Actor. The workflow normalizes and deduplicates results, stores unseen roles in a reusable n8n Data Table, and can optionally send one Slack digest per company.

## How it works
1. Runs every 12 hours or starts manually to monitor target companies for new LinkedIn job postings.
2. Sends the configured company slugs/URLs and optional filters to the Apify actor curly/linkedin-jobs-scraper and retrieves the dataset items.
3. Normalizes the scraped items into a consistent job schema (for example job ID, company, title, location, URLs, and timestamps).
4. Removes duplicate job IDs returned within the same scrape run.
5. Checks each job ID against an n8n Data Table to keep only jobs that have not been stored before.
6. Inserts the new job records into the n8n Data Table as a persistent hiring-signal database.
7. Optionally groups newly stored jobs by company and posts one digest message per company to a Slack channel.

## Setup
1. Install and configure an Apify credential in n8n.
2. Create an n8n Data Table named `curly_hiring_signals` with columns matching the stored fields (including `job_id`, company/job details, and date fields like `published_at`, `scraped_at`, and `first_seen_at`) and select it in both Data Table steps.
3. Update the target company slugs/LinkedIn company URLs (and any optional `jobTitles`, `locations`, and limits) in the target configuration step.
4. If you want notifications, add Slack credentials, select the destination channel, and enable the disabled Slack message step.
5. Test with a manual run and then activate the 12-hour schedule once you confirm rows are being stored as expected.

## Requirements
- An Apify account and API token; n8n with the verified Apify node; an n8n Data Table using the documented schema; optional Slack credentials.

## Customization
- Replace the sample companies, adjust job-title and location filters, change the schedule, increase limits for high-volume employers, or replace Slack and the Data Table with your CRM, Postgres, Supabase, or data warehouse.

## Additional info
Uses Curly’s LinkedIn Jobs Scraper on Apify: https://apify.com/curly/linkedin-jobs-scraper. No LinkedIn cookies or login are required. includeDetails is disabled by default for faster monitoring; enable it when full job descriptions are needed. Browser-based tool and field reference: https://trycurly.xyz/tools/linkedin-jobs-scraper

## 🔗 Nodes Used

Slack, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
