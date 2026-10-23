# 🔬 Archive changed web pages as PDFs in Google Drive with Google Sheets and Gaffa

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every morning, reads a list of web pages from Google Sheets, uses Gaffa to capture each page as text and a PDF, and saves a new dated PDF to Google Drive only when the page content changes, updating the tracking columns back in the sheet.

## How it works
1. Runs every morning on a schedule.
2. Reads the “Pages” tab in Google Sheets and keeps only rows that contain a “Page URL”.
3. Uses Gaffa to load each URL in a browser, optionally scopes extraction to a provided CSS selector, then generates page text and a PDF.
4. If the page cannot be read or no text is returned, writes an error status and “Last checked” date back to the same Google Sheets row.
5. Hashes the extracted page text and compares it with the row’s previous “Last hash” value.
6. When the hash has changed, downloads the generated PDF and uploads it to the target Google Drive folder with a dated filename, then updates “Last hash”, “Last changed”, “Last PDF”, “Last checked”, and “Status” in Google Sheets.
7. When the hash has not changed, updates “Last checked” and sets the status to “no change” in Google Sheets.

## Setup
1. Install the community node `@gaffa-dev/n8n-nodes-gaffa` and create a Gaffa API credential using your API key from gaffa.dev.
2. Connect Google Sheets and Google Drive credentials in n8n.
3. Create a Google Sheet with a tab named “Pages” and columns including Name, Page URL, Selector, Last hash, Last changed, Last PDF, Last checked, and Status.
4. Create (or choose) a Google Drive folder for the archived PDFs and paste both the Google Sheet URL and Drive folder URL into the workflow’s Settings values.
5. Adjust the schedule time and the wait_seconds setting if your pages load slowly or rely on JavaScript rendering.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
