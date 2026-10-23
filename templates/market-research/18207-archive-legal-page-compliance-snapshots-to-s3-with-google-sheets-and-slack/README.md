# 📊 Archive legal page compliance snapshots to S3 with Google Sheets and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs monthly to read a Google Sheets register of legal-policy URLs, capture each page as a PDF via Snapshot Site, archive the evidence to Amazon S3, compare the current page to a reviewed baseline image, log results back to Sheets, and alert Slack when changes are detected

## How it works
1. Runs on a schedule on the 1st of every month.
2. Reads the list of legal pages (URL, document name, and baseline image URL) from a Google Sheets tab.
3. For each row, Snapshot Site captures a full-page PDF of the live page with the cookie banner left visible.
4. Downloads the hosted PDF and uploads it to Amazon S3 using a dated key per document for evidence archiving.
5. Uses Snapshot Site Compare to measure visual differences between the live page and the stored baseline image.
6. Appends or updates an audit entry in a Google Sheets log with the capture timestamp, S3 key, mismatch percentage, and diff link.
7. Posts a Slack alert when the mismatch percentage is greater than 0, and posts a separate Slack alert if any capture, download, compare, or upload step fails.

## Setup
1. Install the `n8n-nodes-snapshot-site` community node and add Snapshot Site API credentials.
2. Add Google Sheets OAuth credentials and update the spreadsheet URL/ID used for the Legal Pages and Evidence Audit Log tabs.
3. Add AWS credentials, set the target S3 bucket name, and ensure the bucket exists (optionally enabling versioning/Object Lock for tamper-evident retention).
4. Add Slack credentials and set the destination channels for change alerts (#compliance) and failure alerts (#compliance-alerts).
5. Create and populate the Google Sheets tabs with the required headers, including a `baselineUrl` for comparisons (seed it initially and update it after reviews).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, AWS S3

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
