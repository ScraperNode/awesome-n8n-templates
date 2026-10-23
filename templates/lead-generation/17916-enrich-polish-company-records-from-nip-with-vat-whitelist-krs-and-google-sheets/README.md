# 🎣 Enrich Polish company records from NIP with VAT whitelist, KRS and Google Sheets

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reads NIP tax numbers from Google Sheets, looks up each company in Poland’s VAT White List and (when available) the KRS court register via HTTP requests, then merges the results and writes enriched company details back to the same sheet.

## How it works
1. Runs manually when you start the workflow.
2. Reads rows from a Google Sheets spreadsheet that contains a NIP column.
3. Normalizes each NIP, validates it with a checksum, and keeps the cleaned NIP for lookups.
4. Queries the Polish Ministry of Finance VAT White List API to retrieve VAT status, company name, REGON, KRS number (if present), addresses, and registered bank accounts.
5. Uses the returned KRS number to query the Polish KRS court register API, continuing even when no court record exists (for example, for sole traders).
6. Flattens and merges VAT and KRS data into one row per NIP, including legal form, registration dates, people/roles, main PKD activity, and a timestamp while capping long fields.
7. Updates the matching rows in Google Sheets with the enriched columns.

## Setup
1. Add a Google Sheets credential, then select the target spreadsheet and sheet in both the read and write Google Sheets steps.
2. Ensure your sheet has a NIP column, or update the workflow’s NIP column setting to match your header name.
3. Paste the required output header columns into the sheet before enabling write-back so Google Sheets has existing columns to update.
4. In the write-back step, set “Column to Match On” to your NIP column so updates correctly match existing rows.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
