# 📊 Audit client websites weekly with Apify, Google Sheets, and email summaries

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Every Monday this workflow audits your list of websites with the Website Audit Report Apify Actor, logs one row per site to Google Sheets, and emails one summary listing the lowest-scoring sites first with each site's top 3 fixes and white-label HTML report link.

## How it works
1. Schedule Trigger runs weekly (Monday 6am; change it to any interval).
2. Set node holds your site list, the agency name shown on the reports, and the email addresses.
3. Apify node runs the Website Audit Report Actor (https://apify.com/pewterdesk/website-audit-report) and waits for the results (cost cap: $1 per run). It checks the homepage plus up to 10 pages sampled from each site's sitemap.
4. Code node turns the results into clean rows for Google Sheets.
5. A second Code node builds the HTML email; Send Email delivers it.

## Setup
1. Create a free Apify account and add your API token as an Apify credential.
2. Optional: add a free Google PageSpeed Insights API key as googleApiKey in the Apify node for Lighthouse and Core Web Vitals.
3. Create a Google Sheet with a tab named Audit log and connect Google Sheets.
4. Connect an SMTP credential for Send Email (or swap in Gmail/Outlook).
5. Edit your site list and agency name in the Set node.

## Requirements
- Apify account (free) and API token
- Google Sheet with an Audit log tab
- Email (SMTP) credential

## Customization
- Add brandColor and logoUrl in the Apify node for white-label HTML reports.
- Change maxPagesPerSite (0–25) to sample more or fewer pages.
- Run monthly instead of weekly via the Schedule Trigger.

## Additional info
Built on the Website Audit Report Apify Actor: https://apify.com/pewterdesk/website-audit-report

## 🔗 Nodes Used

Send Email, Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
