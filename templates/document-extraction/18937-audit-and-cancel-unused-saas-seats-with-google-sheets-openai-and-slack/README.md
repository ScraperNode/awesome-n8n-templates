# 🔬 Audit and cancel unused SaaS seats with Google Sheets, OpenAI and Slack

> ⚡ **32 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly to audit SaaS seats listed in Google Sheets, fetches last-activity data from Google Workspace, Slack, Zoom, or a generic usage API, uses OpenAI (gpt-4o-mini) to decide whether seats are unused, and cancels seats directly or after Slack approval while logging outcomes.

## How it works
1. Runs on a weekly schedule trigger.
2. Reads the subscription seat inventory from a Google Sheets “Subscriptions” tab and processes seats one by one.
3. For each seat, calls the relevant usage endpoint (Google Workspace Admin API, Slack API, Zoom API, or a custom SaaS API) to retrieve recent activity details.
4. Normalizes the returned usage data into a consistent format and sends it to OpenAI (gpt-4o-mini) to classify the seat as unused or active with a recommended action.
5. Cancels unused low-cost seats immediately, and posts unused high-cost seats to Slack for approval before proceeding.
6. Logs each decision (kept, cancelled, or rejected) to a Google Sheets “Audit Log” tab.
7. After all seats are processed, posts a completion summary to Slack and sends a Slack alert if the workflow errors.

## Setup
1. Add Google Sheets OAuth2 credentials, create a spreadsheet with “Subscriptions” and “Audit Log” tabs, and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
2. Add an OpenAI API credential for the GPT-4o-mini assessment step.
3. Add Slack OAuth2 credentials and set the target channel for approval requests, summaries, and failure alerts (replace YOUR_SLACK_CHANNEL_ID where used).
4. Configure authentication and any required fields for the platform usage calls (Google Workspace Admin, Slack, Zoom, and your generic SaaS usage endpoint URL).
5. Configure authentication for the cancellation HTTP request (header auth) and adjust the “high-cost” threshold value (default is $50/month per seat) to match your policy.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
