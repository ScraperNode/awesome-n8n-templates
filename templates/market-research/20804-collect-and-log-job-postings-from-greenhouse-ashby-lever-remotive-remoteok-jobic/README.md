# 📊 Collect and log job postings from Greenhouse, Ashby, Lever, Remotive, RemoteOK, Jobicy to Google Sheets

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every three days to collect job postings from Greenhouse, Ashby, Lever, Remotive, RemoteOK, and Jobicy, then de-duplicates and filters them before appending new matches to a Google Sheets Applications tab and logging each run to a Run Log tab.

## How it works
1. Runs every three days on a schedule.
2. Reads the existing rows in the Google Sheets Applications tab to build a list of already-saved job links and determine the next serial number.
3. Fetches open roles from configured company job boards on Greenhouse, Ashby, and Lever, plus aggregate feeds from Remotive, RemoteOK, and Jobicy.
4. Normalizes all postings into a single schema by cleaning HTML, decoding entities, and converting different date formats into a consistent YYYY-MM-DD date.
5. Filters postings by required fields, description length, posting age, role keywords, and location rules, then de-duplicates within the run and against the existing Google Sheets links.
6. Ranks results with company boards first and newest first, applies per-company and per-run caps, and appends any new jobs to the Google Sheets Applications tab.
7. Writes a summary row to the Google Sheets Run Log tab on every execution, including source health and how many rows were appended.

## Setup
1. Create a Google Sheet with two tabs named Applications and Run Log and add the exact headers expected by the workflow.
2. Add a Google Sheets OAuth2 credential and select your spreadsheet in the Read Applications, Append to Applications, and Append to Run Log steps.
3. Update the Configure Job Search settings with your target companies (Greenhouse token, Ashby board, Lever slug), role keyword filters, location allow/block lists, and caps before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
