# 📊 Track SERP layout changes with Snapshot Site, Google Sheets, and Slack

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily, reads a list of search-results URLs from Google Sheets, captures above-the-fold SERP screenshots with Snapshot Site, compares them to baseline images, and posts a single digest to Slack highlighting shifted layouts, stable results, and any capture/compare failures.

## How it works
1. Runs every day at 7AM on a schedule.
2. Reads the Keywords sheet in Google Sheets to get each SERP URL with its keyword label, country, language, and baseline screenshot URL.
3. For each row, uses Snapshot Site to capture an above-the-fold screenshot of the SERP using the specified country and language settings.
4. Compares the new screenshot with the baseline image in Snapshot Site to calculate a mismatch percentage and generate a diff link, or records the row as failed if an API error occurs.
5. Builds a single digest message that lists shifted SERPs (≥10% mismatch) sorted by highest mismatch and includes any failures with their error messages.
6. Posts the digest to a Slack channel, sending either the detailed shift/failure report or an all-clear message when everything is stable.

## Setup
1. Install the n8n-nodes-snapshot-site community node and add Snapshot Site API credentials.
2. Add Google Sheets credentials, set the spreadsheet URL/ID in the Google Sheets node, and ensure the Keywords sheet contains columns url, keyword, country, language, and baselineUrl.
3. Add Slack credentials and set the destination channel (for both Slack messages).
4. Populate baselineUrl values with hosted baseline screenshots captured with the same width/height/country/language settings used for daily captures.
5. Adjust the schedule time and (optionally) the 10% shift threshold in the workflow if you want more or fewer alerts.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
