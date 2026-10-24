# 📊 Audit website readability weekly with Snapshot Site, Google Sheets, and Slack

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This weekly workflow audits a list of URLs from Google Sheets using Snapshot Site Analyze to capture readability and basic SEO metadata checks, writes one updated audit row per URL back to Google Sheets, and posts a ranked summary report to a Slack channel.

## How it works
1. Runs every Monday at 7AM on a schedule.
2. Reads the URL list (including label and content type) from the “Content Library” tab in Google Sheets.
3. Processes each page one at a time by calling Snapshot Site Analyze with quality checks enabled and AI summaries disabled.
4. Marks pages as unreadable when they render blank or show a CAPTCHA, otherwise calculates a readability band and flags title, meta description, and H1 issues from the same Snapshot Site response.
5. Appends or updates a single audit row per URL in the “Readability Audit” tab in Google Sheets using the URL as the matching key.
6. After all pages are processed, compiles a worst-to-best ranked report with band counts plus unreadable/failed pages and posts it to Slack.

## Setup
1. Install the community node `n8n-nodes-snapshot-site` and add Snapshot Site API credentials.
2. Add Google Sheets OAuth credentials and update both Google Sheets nodes to point to your target spreadsheet.
3. Create two tabs in the spreadsheet named “Content Library” (with headers `url`, `label`, `contentType`) and “Readability Audit” (with headers `url`, `label`, `contentType`, `status`, `readabilityScore`, `band`, `needsWork`, `issueCount`, `metadataIssues`, `h1`, `httpStatus`, `qualityNotes`, `checkedAt`).
4. Ensure URLs in the Content Library include the scheme (for example, `https://...`) and keep cell A1 as the literal header `url`.
5. Add Slack credentials, set the target channel (for example, `#content-ops`), and adjust the schedule time if needed.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
