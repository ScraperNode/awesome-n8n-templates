# 📊 Track weekly Google keyword rankings with SearchApi and Slack

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs weekly to track your Google rankings for multiple keywords using SearchApi, compares current positions to the previous run stored in an n8n Data table, and posts a formatted movement report to Slack.

## How it works
1. Runs every week on a schedule.
2. Loads your target domain, comma-separated keyword list, and Google location, then fetches previously saved ranks from an n8n Data table.
3. Splits the keyword list into individual keywords and queries Google via SearchApi for the first 5 pages of results per keyword.
4. Scans the organic results to find your domain’s best position per keyword and calculates week-over-week movement (up, down, new, dropped out, or not ranking in the top 50).
5. Formats the results into a Slack Block Kit message with a plain-text fallback.
6. Posts the report to a Slack channel and upserts currently ranking keywords back into the Data table for the next comparison.

## Setup
1. Add a SearchApi.io credential in the SearchApi node.
2. Create or select an n8n Data table (for example, “Rank History”) with columns for keyword, position, url, and last_checked, and select it in both the read and upsert Data table nodes.
3. Add a Slack OAuth2 credential, choose the destination channel in the Slack node, or remove Slack and use the formatted text output instead.
4. Update the domain, keywords (comma-separated), and location values in the Settings node, then activate the workflow.

## 🔗 Nodes Used

Slack, Schedule Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
