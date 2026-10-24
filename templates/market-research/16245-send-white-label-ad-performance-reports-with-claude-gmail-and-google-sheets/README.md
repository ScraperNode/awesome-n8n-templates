# 📊 Send white-label ad performance reports with Claude, Gmail and Google Sheets

> ⚡ **37 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This scheduled workflow pulls ad performance data from a configurable platform API, normalizes key metrics, generates a client-friendly narrative with Anthropic Claude, then emails a branded HTML report via Gmail and logs the results to Google Sheets.

## How it works
1. Runs on a monthly schedule trigger.
2. Loads white-label branding, client details, platform name, recipient email, and the reporting period label.
3. Fetches raw performance metrics from the selected ad platform using an HTTP request.
4. Normalizes the response into standard metrics (spend, impressions, clicks, conversions, revenue) and calculates current vs prior-period deltas.
5. Sends the metrics and deltas to the Anthropic Messages API (Claude) to produce a structured JSON summary with highlights, watch items, and next steps.
6. Builds a branded HTML report from the metrics and Claude summary, emails it to the client via Gmail, and appends a reporting row to a Google Sheets log.

## Setup
1. Update the ad platform reporting endpoint URL and configure an HTTP Header Auth credential for the platform API.
2. Configure an HTTP Header Auth credential for Anthropic using header name `x-api-key` and your Claude API key, and attach it to the Claude request.
3. Connect your Gmail account and set the recipient and branding values (agency name, logo URL, brand color, client name, platform name) in the configuration step.
4. Connect Google Sheets credentials, create a spreadsheet tab named `Client Reports`, and replace the placeholder Google Sheet document ID.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
