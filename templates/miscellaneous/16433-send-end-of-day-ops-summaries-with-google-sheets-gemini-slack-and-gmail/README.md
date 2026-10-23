# 🔧 Send end-of-day ops summaries with Google Sheets, Gemini, Slack and Gmail

> ⚡ **46 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow runs daily at 6 PM to pull trade breaks, failed trades, and exceptions from Google Sheets, calculate resolved vs pending counts with a severity/trend classification, generate an end-of-day summary with Google Gemini, optionally alert Slack for high pending volume, email the report via Gmail, and log results back to Google Sheets.

## How it works
1. Runs every day at 6 PM on a schedule trigger.
2. Reads rows from three Google Sheets tabs containing trade breaks, failed trades, and exceptions, then merges them into a single dataset.
3. Filters to records with a non-empty Status field and calculates total issues plus resolved vs pending counts.
4. Classifies overall severity (LOW–CRITICAL) and trend (IMPROVING/WORSENING/STABLE) based on pending and resolved counts.
5. Sends the metrics to Google Gemini to generate a formatted Summary and Email body.
6. Posts a high-priority Slack alert when pending issues exceed 5, and then extracts the generated email body.
7. Sends the end-of-day summary via Gmail and appends the date, counts, severity, trend, and summary to a Google Sheets log tab.

## Setup
1. Connect a Google Sheets OAuth2 account and update the spreadsheet ID and sheet/tab IDs for the three input tabs and the output log tab.
2. Ensure each source sheet includes a Status column with values such as “resolved” so the workflow can compute resolved vs pending.
3. Add a Google Gemini (PaLM) API credential for the AI-generated summary and email text.
4. Add a Slack OAuth2 credential and select the destination channel for high-priority alerts.
5. Add a Gmail OAuth2 credential and set the recipient(s) in the Gmail node so the end-of-day email goes to the right inbox.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
