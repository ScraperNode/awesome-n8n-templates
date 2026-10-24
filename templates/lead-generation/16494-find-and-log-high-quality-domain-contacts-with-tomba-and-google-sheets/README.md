# 🎣 Find and log high-quality domain contacts with Tomba and Google Sheets

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs on a schedule, pulls “Pending” company domains from Google Sheets, uses Tomba to find email addresses for each domain, filters for high-scoring personal contacts, logs the results to an enrichment sheet, and marks each processed domain as Done.

## How it works
1. Runs on a schedule to check a Google Sheets “Company domains” tab for rows where the status is set to “Pending”.
2. Processes the pending rows one domain at a time to avoid handling the whole list in a single run.
3. For each domain, queries the Tomba API to retrieve up to 50 email addresses associated with the company domain.
4. Filters the returned results to keep only personal emails with a quality score of 90 or higher and extracts key contact fields (name, email, position, company, domain).
5. Appends the filtered contacts to a Google Sheets “Enrichment” tab.
6. Updates the original domain row in Google Sheets to set the status to “Done” and continues with the next pending domain.

## Setup
1. Connect Google Sheets credentials and update the spreadsheet and sheet references for both the source “Company domains” tab and the destination “Enrichment” tab.
2. Add your Tomba credentials and ensure the domain input maps to your “Company domain” column.
3. Ensure the source sheet includes columns for Company domain, Company name, status, and row_number, and the enrichment sheet includes company, domain, email, full_name, and position.
4. Adjust the schedule interval and (optionally) the email filtering rules such as the minimum score threshold (currently 90) to match your lead quality requirements.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
