# 📊 Build a landing page swipe file with Snapshot Site, S3, Google Sheets and Slack

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives landing page URLs via webhook, analyzes each page with Snapshot Site, archives the captured screenshot to Amazon S3, and appends the key copy and metadata fields to a Google Sheets swipe file, while sending Slack alerts for failed or bot-gated captures.

## How it works
1. Receives a POST webhook submission containing a landing page `url` plus optional `source` and `notes`.
2. Analyzes the page with Snapshot Site to generate a full-page capture and extract copy structure, metadata, topics, summary, and quality signals.
3. Sends a Slack alert if Snapshot Site returns an error for the submitted URL.
4. Checks the analysis for blank-page or CAPTCHA/bot-gate indicators and posts a Slack message instead of filing when the page is unreadable.
5. Builds a swipe-file record (headline/subheads, metadata, summary, topics, readability score) and a dated S3 object key and archive URL.
6. Downloads the hosted capture image, uploads it to Amazon S3, and appends the completed record as a new row in the Google Sheets “Swipe File” tab.

## Setup
1. Install the `n8n-nodes-snapshot-site` community node and add Snapshot Site API credentials.
2. Add Amazon S3 credentials, create an S3 bucket for archives, and update the bucket name, base URL, and key prefix in the code step that builds the swipe-file entry.
3. Add Google Sheets OAuth credentials, set the target spreadsheet URL/ID, and ensure the “Swipe File” sheet has matching header columns for the appended fields.
4. Add Slack credentials and set the target channels for capture failures and unreadable/bot-gated page alerts.
5. Activate the workflow and POST to the webhook URL with JSON like `{ "url": "https://...", "source": "...", "notes": "..." }` (the URL must include `https://`).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, AWS S3

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
