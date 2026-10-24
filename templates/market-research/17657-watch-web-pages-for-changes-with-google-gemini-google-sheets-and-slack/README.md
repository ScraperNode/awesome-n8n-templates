# 📊 Watch web pages for changes with Google Gemini, Google Sheets, and Slack

> ⚡ **10 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow checks a specified web page every 6 hours, stores snapshots in Google Sheets, and when the page text changes it uses Google Gemini to summarise what changed and posts the summary to a Slack channel.

## How it works
1. Runs every 6 hours on a schedule.
2. Fetches the configured URL via HTTP and posts a Slack alert if the page cannot be retrieved.
3. Strips the HTML down to cleaned plain text (limited to 6,000 characters) for comparison.
4. Reads the last stored snapshot from Google Sheets and compares it to the current cleaned text.
5. If this is the first run, saves the current text as a baseline snapshot in Google Sheets.
6. If the text changed, sends the previous and current versions to Google Gemini to generate a 2–3 sentence change summary.
7. Posts the change summary and page link to Slack, then updates the snapshot in Google Sheets so the same change is only reported once.

## Setup
1. Add credentials for Google Sheets OAuth, Google Gemini (PaLM) API, and Slack OAuth.
2. Update the label, URL, and CSS selector in the page configuration to match the page section you want to monitor.
3. Select your Google Sheets document and ensure a “Snapshots” sheet exists with a column for stored page text (for example, “Text”).
4. Choose the target Slack channel (for example, #monitoring) for both change notifications and fetch-failure alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
