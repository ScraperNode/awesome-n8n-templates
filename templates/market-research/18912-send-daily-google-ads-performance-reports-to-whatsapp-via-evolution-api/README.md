# 📊 Send daily Google Ads performance reports to WhatsApp via Evolution API

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily and pulls today’s performance metrics from all enabled Google Ads sub-accounts in an MCC, aggregates the results, and sends a formatted daily report to a WhatsApp number via an Evolution API HTTP endpoint.

## How it works
1. Runs every day at 19:00 on a schedule.
2. Queries the Google Ads API to list all enabled, non-manager (sub) accounts under your MCC.
3. Requests today’s cost, clicks, impressions, and conversions for each sub-account from the Google Ads API.
4. Aggregates the metrics across accounts, calculates totals and CPAs where conversions exist, and formats a WhatsApp-ready text report.
5. Sends the report to the specified WhatsApp number using an Evolution API sendText HTTP request.

## Setup
1. Create and connect a Google Ads OAuth2 credential in n8n and ensure your MCC has access to the sub-accounts you want to report on.
2. Replace the placeholders for MCC ID and Google Ads developer token in the Google Ads HTTP requests.
3. Set your Evolution API base URL/endpoint, instance name, API key, and the destination WhatsApp number (with country code) in the WhatsApp HTTP request node.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
