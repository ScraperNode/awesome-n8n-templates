# 📊 Send weekly Google Search Console performance reports via Gmail

> ⚡ **49 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every Monday at 8 AM, pulls weekly performance data from Google Search Console for a chosen site, builds an HTML report comparing two 7-day periods, and emails the report via Gmail, with a separate alert email sent if any Search Console request fails.

## How it works
1. Runs on a schedule every Monday at 8 AM.
2. Calculates two 7-day date ranges (current and previous) ending three days ago and stores the target Google Search Console site URL.
3. Calls the Google Search Console Search Analytics API to fetch total clicks, impressions, CTR, and average position for both date ranges.
4. Fetches the top queries and top pages for the current period (top 10) and also pulls larger query/page datasets for the previous period to enable comparisons.
5. Aggregates the results and generates a formatted HTML email with KPI cards and tables showing week-over-week changes.
6. Sends the report email via Gmail using a generated subject line based on clicks and the reporting period.
7. Sends a Gmail error alert to the configured recipient if any Google Search Console API request returns an error.

## Setup
1. Add Google API credentials with access to the Google Search Console property you want to report on.
2. Add a Gmail OAuth2 credential for sending both the report email and the error alert email.
3. Update the site URL in the date-range configuration step to match your Google Search Console property.
4. Set the recipient email address(es) for the report and the failure alert in the Gmail send steps.
5. (Optional) Adjust the schedule time and the date-range offsets if you want a different send time or reporting window.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
