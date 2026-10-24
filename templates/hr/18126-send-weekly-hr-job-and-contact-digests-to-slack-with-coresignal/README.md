# 👥 Send weekly HR job and contact digests to Slack with Coresignal

> ⚡ **20 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs weekly, searches Coresignal job ads for recent roles matching your keywords and country, enriches each posting with the hiring company and a likely HR contact, and sends a single Slack digest with the job details and contact information.

## How it works
1. Runs every Monday at 08:00 based on a schedule.
2. Reads the job title keywords, country, lookback window, maximum results, and Slack channel from a configuration step.
3. Searches the Coresignal Jobs index for active job ads created within the lookback window and limits the run to the first N job IDs.
4. For each job ID, fetches the full job record and attempts to match the hiring company by enriching the company domain in Coresignal.
5. If a company is matched, searches the Coresignal Employees index for a currently employed HR/Talent/People contact at that company and fetches the top-ranked profile.
6. Builds one Slack Block Kit digest containing each job and either the enriched HR contact details or a “not found” marker.
7. Posts the digest to the configured Slack channel.

## Setup
1. Add a Coresignal API credential and select it for the Coresignal Job Search, Job Collect, Company Enrich, HR Search, and HR Collect steps.
2. Add a Slack OAuth2 credential and set permission to post messages to your target workspace.
3. Update the configuration values for job keywords, country, days_back, max_jobs, and the Slack channel ID where the digest should be posted.

## 🔗 Nodes Used

Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
