# 🎣 Capture CTO job leads from LinkedIn with RapidAPI, Seamless, BounceBan and PlusVibe

> ⚡ **10 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily or via webhook to find new LinkedIn job postings via RapidAPI, deduplicate companies against a Postgres database, enrich decision-maker contacts with Seamless.ai, verify emails with BounceBan, and push deliverable leads into PlusVibe while logging all outcomes back to Postgres.

## How it works
1. Runs every day at 8:00 AM or starts from an incoming webhook request with optional search overrides.
2. Queries the LinkedIn Job Search API on RapidAPI, normalizes job records, and keeps one job per company domain.
3. Compares company domains against a Postgres contacts table to keep only new companies, then inserts the new job records into a Postgres jobs_raw table.
4. Searches Seamless.ai for up to five CEO/founder-level contacts per new company and runs Seamless.ai research to retrieve contact details.
5. Reattaches job context to each contact, drops duplicates by email, and creates placeholder rows for companies where no contacts are found.
6. Verifies available emails with BounceBan and routes only deliverable addresses to PlusVibe to add the lead to the configured workspace and campaign.
7. Logs both pushed and skipped contacts (including PlusVibe status and BounceBan verdict) into the Postgres contacts table.
8. Runs a daily 7:30 AM cleanup that deletes Postgres contact rows where the PlusVibe push errored so they can be retried on the next run.

## Setup
1. Add credentials for RapidAPI (HTTP Header Auth), Seamless.ai (API key), BounceBan (API key), PlusVibe (HTTP Header Auth), and Postgres.
2. Create the required Postgres tables/columns (public.jobs_raw and public.contacts) and ensure company_domain is stored so the workflow can deduplicate and log results.
3. Update the search filters, PlusVibe workspace/campaign IDs, and webhook shared secret in the Configure Search Settings code.
4. If using the webhook trigger, copy the production webhook URL and send POST requests to /job-capture-agent with the required secret and any override parameters.
5. Adjust the schedule times for the daily run (8:00 AM) and cleanup run (7:30 AM) to match your timezone and operations.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
