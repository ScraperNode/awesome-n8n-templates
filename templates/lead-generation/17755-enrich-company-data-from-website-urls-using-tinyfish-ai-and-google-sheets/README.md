# 🎣 Enrich company data from website URLs using TinyFish AI and Google Sheets

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reads website URLs from Google Sheets, uses TinyFish AI to extract verified company details from each site, and writes the enriched fields back to the same sheet while marking processed rows as Completed.

## How it works
1. Starts manually and fetches rows from a Google Sheets spreadsheet.
2. Filters to only rows where the Status column is empty (pending enrichment).
3. Limits processing to five rows per run and iterates through them in batches.
4. Sends each Website URL to TinyFish AI to extract structured company data as JSON.
5. Combines the original row data with the TinyFish AI results.
6. Updates the matching Google Sheets row (by Website URL) with the enriched fields and sets Status to Completed.
7. Waits a random 6–15 seconds between items to reduce the likelihood of hitting rate limits.

## Setup
1. Create a Google Sheets credential in n8n and set the correct Spreadsheet (document) ID and sheet/tab name in both Google Sheets steps.
2. Ensure your sheet includes the required columns (Website URL, Status, and the enrichment target columns like Company Name, Email, Phone, LinkedIn, CEO/Founder fields, and others).
3. Add your TinyFish credentials in n8n so the workflow can call the TinyFish AI extraction step.
4. Populate Website URL for each company and leave Status blank for rows you want the workflow to process.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
