# 📊 Log weekly SEO technical audits with Google PageSpeed, Search Console, and Sheets

> ⚡ **74 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually or weekly to pull URLs from your site’s XML sitemaps, checks each URL’s HTTP status, Google PageSpeed Insights performance score, and Google Search Console indexing state, then appends the results to a Google Sheets technical audit log.

## How it works
1. Runs when triggered manually or every week on a schedule.
2. Fetches `page-sitemap.xml` and `post-sitemap.xml` from the configured website URL and parses the XML to extract all page URLs.
3. For each URL, requests the page to capture the HTTP status code.
4. Calls the Google PageSpeed Insights API to retrieve a performance score for each URL.
5. Calls the Google Search Console URL Inspection API to retrieve the indexing/coverage state for each URL.
6. Combines the status, PageSpeed score, and indexing result into a single row per URL and appends it to a Google Sheets worksheet with the check date.

## Setup
1. Set the target site base URL (no trailing slash) in the workflow configuration so the sitemap URLs resolve correctly.
2. Add a Google PageSpeed Insights API key using Generic Query Auth and connect a Google API credential with Search Console access (with the site verified in Google Search Console).
3. Connect Google Sheets OAuth2 credentials, create a sheet with columns `URL`, `HTTP Status`, `PageSpeed Score`, `Indexed`, and `Date Checked`, then select the target spreadsheet and worksheet in the append step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
