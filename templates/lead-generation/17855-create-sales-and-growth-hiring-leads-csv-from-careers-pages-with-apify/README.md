# 🎣 Create sales and growth hiring leads CSV from careers pages with Apify

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs manually to scrape company career pages via Apify, filters and deduplicates roles that match your target sales and growth keywords, and outputs the results as a downloadable CSV file.

## How it works
1. Runs when you manually execute the workflow.
2. Defines the target company domains plus optional job-title and department keywords to search for.
3. Uses Apify to run a careers-page scraping actor and returns structured job listings from attributable career pages or ATS boards.
4. Keeps only confirmed matches, filters roles by your keywords, deduplicates by company and job URL, and sanitizes fields to prevent spreadsheet formula injection.
5. Exports the remaining roles (or a “no_matching_jobs” placeholder row if nothing matches) to a `careers-hiring-leads.csv` file.

## Setup
1. Self-host n8n and install/enable the `@apify/n8n-nodes-apify` community node.
2. Create an Apify API credential in n8n and select it in the Apify actor step.
3. Update the domains, keywords, and optional limits (for example `maxConcurrency` and `maxJobsPerCompany`) in the configuration step before running the workflow. Keep the default $1 maximum Actor charge for the first test run, then adjust it only after checking the result volume and cost.

## Requirements
- A self-hosted n8n instance, an Apify account and API token, and the verified @apify/n8n-nodes-apify community node.

## Customization
- Change domains and role keywords, raise or lower the safe run limits, or connect the generated CSV to a CRM, spreadsheet, storage, or messaging node.

## Additional info
This template is for self-hosted n8n only because the Apify community node is not available on n8n Cloud. The workflow stores no credentials or API tokens.

## 🔗 Nodes Used

Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
