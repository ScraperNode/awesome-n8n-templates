# 📊 Monitor weekly PageSpeed scores with Apify, Google Sheets, and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Every Monday this workflow audits your list of pages with Google PageSpeed Insights (via the Bulk PageSpeed Insights & Core Web Vitals Checker Apify Actor), logs one row per page to Google Sheets, and posts to Slack only when a page drops below your threshold or fails Core Web Vitals.

## How it works
1. Schedule Trigger runs weekly (Monday 7am; change it to any interval).
2. Set node holds your URL list and minimum performance score.
3. Apify node runs the pewterdesk Bulk PageSpeed Insights & Core Web Vitals Checker Actor and waits for the results (cost cap: $1 per run).
4. Code node flattens results into clean rows with performance and SEO score, lab LCP and CLS, real-user (CrUX) LCP and INP, Core Web Vitals pass/fail and the biggest fix Lighthouse suggests, and flags pages that need attention.
5. Google Sheets appends every row to a tab named PageSpeed log.
6. A second Code node builds one Slack message only if something is slow, and the Slack node posts it.

## Setup
1. Create a free Apify account and add your API token as an Apify credential.
2. Optional but recommended: add a free Google PageSpeed Insights API key to the Actor input.
3. Create a Google Sheet with a tab named `PageSpeed log` and connect your Google Sheets credential.
4. Pick a Slack channel and connect Slack (or delete the Slack node if you only want the sheet log).
5. Edit your URL list and minimum performance score in the Set node.

## Requirements
- Apify account (free) and API token

## Customization
- Audit desktop too: add 'desktop' to strategies in the Apify node.
- Track accessibility or best practices: add them to categories.
- Swap Slack for email, Discord or Teams.

## Additional info
Who is this for? Site owners, SEO folks, agencies and developers who want to know when a page gets slow, without checking PageSpeed Insights by hand.

Actor used: Bulk PageSpeed Insights & Core Web Vitals Checker - https://apify.com/pewterdesk/bulk-pagespeed-core-web-vitals

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
