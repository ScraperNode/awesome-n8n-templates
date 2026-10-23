# 📊 Send regulatory update digest emails with Google Sheets, Excel, OpenAI and Perplexity

> ⚡ **50 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every three days to scan a Google Sheets list of authority websites, uses OpenAI with a web-scraper sub-workflow and Perplexity search to extract recent regulatory notices, logs them to Google Sheets, and emails an HTML digest to recipients stored in a Microsoft Excel workbook.

## How it works
1. Runs every three days and reads the authority website list (including include/exclude topics) from Google Sheets.
2. For each website, uses OpenAI to extract regulatory updates by combining results from a web-scraper sub-workflow and a Perplexity domain-filtered search.
3. Filters the extracted notices to keep only items dated within the last three days and skips the website if no recent updates remain.
4. Writes each remaining update as a separate row to a Google Sheets “updates” spreadsheet, deduplicating by title.
5. Reads recipients from all worksheets in a Microsoft Excel workbook and filters out rows marked as not interested or unavailable.
6. Builds a single HTML digest, splits recipients into BCC batches (20 per email) grouped by category, and sends each batch via SMTP with a short pause between sends.
7. Continuously watches an IMAP inbox for replies containing “Not Interested” and updates the matching email row in Microsoft Excel to mark the recipient unsubscribed.

## Setup
1. Add credentials for OpenAI, Perplexity, Google Sheets, Microsoft Excel, SMTP, and IMAP.
2. Update the Google Sheets document IDs and ensure your website list sheet contains columns for authority/website name, official website, include topics, exclude topics, and applicable tabs.
3. Set your “updates” Google Sheet ID and make sure it has columns that match the fields being written (Title, Date, Summary, Department, Type, Category, Source Link, Impact Area, Action Required).
4. Provide your Microsoft Excel workbook/worksheet IDs and ensure recipient sheets include at least Email, Interested, Availability, and (for unsubscribe updates) a column that can be updated by matching on Email.
5. Create and select the web-scraper sub-workflow that accepts a URL input and returns page text, and replace the placeholder values in the email builder (logo URL, website URL, sender/to addresses, and any daily send limit constant if you enforce one).

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Google Sheets, Microsoft Excel 365, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
