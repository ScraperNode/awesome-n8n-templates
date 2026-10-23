# 📊 Send daily SEO digest from Google Search Console to Discord with heartbeat alerts

> ⚡ **67 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to pull Google Search Console performance data, log it to Google Sheets, send a daily SEO digest to Discord with day-over-day deltas, and ping an external heartbeat endpoint; if any step errors, it immediately pings the heartbeat service’s /fail endpoint.

## How it works
1. Runs every day at 08:00 on a schedule trigger.
2. Queries the Google Search Console Search Analytics API for query-level data from two days ago.
3. Aggregates the results into totals (clicks, impressions, average position) and the top queries.
4. Appends the day’s metrics to Google Sheets and reads the sheet to fetch the previous day’s row for comparison.
5. Calculates percentage changes vs yesterday and sends a formatted SEO digest to Discord, including a warning when clicks drop sharply.
6. Posts a success ping with the key metrics to an external heartbeat service (for example, checkilo or Healthchecks.io) so missing runs can be detected.
7. If any node throws an error, an error-triggered branch posts a /fail ping to the heartbeat service with the error message and failing step.

## Setup
1. Add a Google OAuth2 credential with the `https://www.googleapis.com/auth/webmasters.readonly` scope and replace the URL-encoded Search Console property in the Google Search Console API request URL.
2. Add a Google Sheets credential and replace `REPLACE_WITH_SHEET_ID`, ensuring the target sheet has headers like `date`, `clicks`, `impressions`, `avgPosition`, and `topQueries`.
3. Add your Discord webhook credentials (or swap the Discord step for another notification service) and set the destination accordingly.
4. Create a checkilo/Healthchecks.io monitor and replace `REPLACE_WITH_YOUR_PING_SLUG` in both the success heartbeat URL and the `/fail` URL.
5. In the workflow settings, set this workflow as the Error Workflow so the error-triggered /fail ping runs when executions fail.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
