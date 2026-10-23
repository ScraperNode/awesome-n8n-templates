# 🤝 Monitor refund and chargeback ratio spikes with Google Sheets, Gemini, and Slack

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs daily to read sales and refund/chargeback data from Google Sheets, calculates a 7-day refund/chargeback ratio against a 90-day baseline, logs the results back to Google Sheets, and posts a Slack alert with a Google Gemini diagnostic summary when a spike is detected.

## How it works
1. Runs every day at 09:00 based on the n8n instance timezone.
2. Loads configuration values such as the anomaly threshold multiplier, optional monitoring date override, Google Sheets IDs/tab names, and the Slack channel.
3. Reads sales data and refund/chargeback data from two Google Sheets tabs.
4. Calculates current 7-day and historical 90-day refund/chargeback ratios, flags an anomaly when the current ratio exceeds the baseline by the configured multiplier, and assigns a status when there is insufficient data.
5. When an anomaly is detected, uses Google Gemini to generate a concise diagnostic summary, logs the metrics and summary to a Google Sheets log tab, and sends a Slack alert with the key metrics and diagnostic text.
6. When no anomaly is detected (or there is insufficient data), logs the metrics and status to the Google Sheets log tab without sending a Slack alert.

## Setup
1. Create a Google Sheets spreadsheet with three tabs for Sales, Refunds, and a log (for example: “Sales”, “Refunds”, and “Ratio Monitor Log”) and ensure the expected columns exist (Date/Order ID/Amount for sales; Date/Order ID/Type/Amount/Reason for refunds).
2. Add a Google Sheets OAuth credential in n8n and update the workflow’s spreadsheet ID and sheet/tab selections to point to your spreadsheet.
3. Add a Slack credential and set the target channel (name or ID) where alerts should be posted.
4. Add a Google Gemini (PaLM) API credential and select the model to generate diagnostic summaries.
5. Adjust the threshold multiplier (and optionally the monitoring date override for testing) in the configuration step before activating the workflow.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
