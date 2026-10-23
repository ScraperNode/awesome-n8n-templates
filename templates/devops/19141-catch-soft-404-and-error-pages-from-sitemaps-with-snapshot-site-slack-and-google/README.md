# ⚙️ Catch soft 404 and error pages from sitemaps with Snapshot Site, Slack, and Google Sheets

> ⚡ **3 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily to fetch your sitemap.xml, sample a set of URLs, analyze each page with Snapshot Site to detect soft 404s and other error-page signals, log the results to Google Sheets, and post a Slack digest (or a sitemap-fetch failure alert).

## How it works
1. Runs every day at 5AM on a schedule.
2. Fetches your sitemap.xml over HTTP and extracts all <loc> URLs, deduplicating and sampling up to a capped number for the day.
3. Sends each selected URL to Snapshot Site Analyze with quality checks enabled to capture HTTP status, title, headings, blank-page detection, CAPTCHA detection, and a screenshot link.
4. Classifies each result as ok, soft-error, hard-error, blank, captcha, or unreachable based on the returned quality/status fields and title/H1 pattern matching.
5. Appends all audited URL results to a Google Sheets tab for historical tracking.
6. Builds a single Slack digest that reports coverage and lists only problem URLs, posting either the problem report or an all-clear message.
7. Posts a dedicated Slack alert and stops reporting a clean run if the sitemap cannot be fetched or parsed.

## Setup
1. Install the community node n8n-nodes-snapshot-site and add Snapshot Site API credentials.
2. Add a Slack credential and set the target channel (for the error report, all-clear, and sitemap-failure messages).
3. Add Google Sheets credentials, set the spreadsheet URL/ID, and create a sheet tab named “Soft 404 Findings” with matching columns for the appended fields.
4. Update the sitemap URL in the HTTP request step to point to your site’s sitemap.xml (use a full https:// URL, and point to a child sitemap if you currently use a sitemap index).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
