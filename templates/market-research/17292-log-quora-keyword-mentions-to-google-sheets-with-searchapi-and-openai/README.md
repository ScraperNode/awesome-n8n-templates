# 📊 Log Quora keyword mentions to Google Sheets with SearchApi and OpenAI

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually or daily to find new Quora posts matching your keywords using SearchApi’s Google results, summarizes each post with OpenAI, and appends only previously unseen links to a Google Sheets log.

## How it works
1. Runs on demand or every day at 08:00 using a manual or scheduled trigger.
2. Builds Google queries for each configured keyword (scoped to site:quora.com) and paginates through multiple result pages.
3. Uses SearchApi to fetch live Google results for each query and page.
4. Extracts and deduplicates Quora post URLs from the returned organic results and records the date, keyword, title, snippet, and link.
5. Reads existing rows from Google Sheets and filters out any posts whose links are already present.
6. Sends each new post’s title and snippet to OpenAI to generate a single-sentence neutral summary.
7. Appends the new rows (date, keyword, title, summary, link) to Google Sheets.

## Setup
1. Install the community node package `@searchapi/n8n-nodes-searchapi` and add your SearchApi.io credential to the SearchApi step.
2. Add an OpenAI API credential for the summarization step.
3. Connect Google Sheets credentials and select the same spreadsheet and sheet tab in both the read and append steps.
4. Create a header row in your Google Sheet with columns: date, keyword, title, summary, link.
5. Update the Settings values for your comma-separated keywords and Google location, and adjust the number of pages to scan if needed.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
