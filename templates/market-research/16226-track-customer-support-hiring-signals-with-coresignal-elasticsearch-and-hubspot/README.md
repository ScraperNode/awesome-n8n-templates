# 📊 Track customer support hiring signals with Coresignal, Elasticsearch, and HubSpot

> ⚡ **45 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs weekly (or manually) to pull HubSpot companies, search Coresignal job ads via Elasticsearch for customer support roles by company domain, maintain job snapshot and job tables in n8n Data Tables, and update HubSpot company properties with job-signal metrics.

## How it works
1. Runs on a Monday 9am schedule (or manual start) and generates a unique run ID for the execution.
2. Fetches all companies from HubSpot, removes duplicates, and keeps only companies that have a website domain.
3. Batches company domains and queries Coresignal’s Elasticsearch job index for active customer-support-related job ads matching those domains.
4. Stores the found job IDs as a “current snapshot” in an n8n Data Table and compares it to the previous snapshot to identify new and disappeared job ads.
5. For newly found job IDs, fetches full job details from Coresignal and upserts them into a “job_data_table” Data Table, while updating the “previous snapshot” with the active IDs.
6. For job IDs no longer present, deletes them from the snapshot and removes the corresponding rows from the job table.
7. Aggregates active jobs per company domain (counts, recent-posting metrics, and a “top job” pick) into a “company_data” Data Table and compares it with the prior company list.
8. Updates matching HubSpot company records to reflect new/updated/ended job-signal fields such as active listings, jobs in the last 7/30 days, and top job details.

## Setup
1. Add HubSpot OAuth2 credentials and ensure your HubSpot companies have a populated website/domain property and the custom properties used for updates (for example job_active_listings_total, jobs_last_7_days, and top_job_url).
2. Add Coresignal credentials and confirm your account supports the job Elasticsearch DSL search and job detail lookups.
3. Create (or relink) the n8n Data Tables used by the workflow: previous snapshot, current snapshot, job_data_table, and company_data.
4. Review and adjust the Coresignal Elasticsearch query terms (job titles and filters) to match the roles you want to track.
5. Set the schedule trigger to your preferred cadence or use the manual trigger for ad-hoc runs.

## 🔗 Nodes Used

HubSpot, Schedule Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
