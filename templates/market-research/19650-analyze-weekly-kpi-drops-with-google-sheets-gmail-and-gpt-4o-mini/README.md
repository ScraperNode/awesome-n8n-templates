# 📊 Analyze weekly KPI drops with Google Sheets, Gmail, and GPT-4o-mini

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow checks up to three service URLs every 30 minutes, logs each result to Google Sheets, and sends Gmail alerts only when a service transitions between UP and DOWN.

## How it works
1. Runs every 30 minutes on a schedule.
2. Builds a per-service checklist from your configured service names and URLs, skipping any services with blank or invalid URLs.
3. Sends an HTTP GET request to each service with a 10-second timeout and treats connection errors/timeouts as a DOWN result.
4. Determines whether the service is UP or DOWN (DOWN if the request fails or returns a 5xx status) and reads the service’s previous check history from Google Sheets.
5. Compares the current status to the most recent logged status to detect a new outage (UP→DOWN) or recovery (DOWN→UP).
6. Appends the current check (service, URL, status, HTTP code, timestamp) to the Google Sheets “Health Log” tab.
7. Sends a Gmail outage alert or recovery notice only when a status change is detected, otherwise it logs silently and ends.

## Setup
1. Add Google Sheets OAuth2 credentials (with the Google Sheets API enabled) and set the target spreadsheet ID and sheet/tab name in the workflow configuration.
2. Create a Google Sheets tab named “Health Log” with headers: Service, URL, Status, HTTP Code, Checked At.
3. Add Gmail OAuth2 credentials (with the Gmail API enabled) for sending outage and recovery emails.
4. Update the configuration values for each service name and URL (leave unused service URLs blank), plus the alert recipient email address and sender name.
5. If any monitored endpoint requires authentication, configure the HTTP request authentication details for that URL.
6. Activate the workflow and let the first run establish a baseline (no alert is sent on the very first check).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
