# 🔧 Prioritize exception queues with Gemini, Google Sheets, Slack and Gmail

> ⚡ **21 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow receives a webhook trigger, reads exception records from Google Sheets, uses Google Gemini (Generative Language API) to rank and summarize them, posts a prioritized report to Slack, writes summary metrics back to Google Sheets, and emails a critical alert via Gmail when needed.

## How it works
1. Receives a webhook request to start an exception-queue analysis run.
2. Reads the current exception list from a Google Sheets worksheet and stops with a “No open exceptions found” webhook response if there are no rows.
3. Formats the sheet rows into a structured text list and sends it to the Google Gemini API to generate a ranked, scored priority list plus summary counts.
4. Parses the Gemini response and builds Slack Block Kit content, an HTML email body for critical items, and fields for saving analysis metadata.
5. Appends or updates a summary row in a second Google Sheets worksheet with the AI summary and severity counts.
6. Posts the ranked exception report to a Slack channel.
7. If any critical exceptions are detected, sends an alert email via Gmail, then returns a JSON “Done” response to the original webhook caller with processing statistics.

## Setup
1. Add credentials for Google Sheets OAuth2, Slack OAuth2, and Gmail OAuth2 in n8n.
2. Provide a Google Gemini API key and update the HTTP request to use it (preferably via an n8n credential or environment variable rather than hard-coding).
3. Update the Google Sheets document ID and ensure Sheet1 contains columns like ExceptionID, Title, Severity, System, and ReportedAt, and Sheet2 has columns for summary and count fields used by the workflow.
4. Select the target Slack channel in the Slack node and confirm it matches where you want the priority report posted.
5. Configure the Gmail node with the recipient(s) and ensure your webhook URL (path: /exception-trigger) is used by the system that should trigger the analysis.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
