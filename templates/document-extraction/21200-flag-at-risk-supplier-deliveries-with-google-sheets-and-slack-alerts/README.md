# 🔬 Flag at-risk supplier deliveries with Google Sheets and Slack alerts

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Youtube Video: https://youtube.com/shorts/LumCvtioHXg?feature=share

This workflow runs every 6 hours to read purchase order, supplier history, customer commitment, and carrier tracking data from Google Sheets, score late-delivery risk, log flagged orders to a Risk Register sheet, send a Slack alert, and record each run in a Google Sheets Run Log.

## How it works
1. Runs every 6 hours on a schedule trigger.
2. Reads Purchase Orders, Supplier History, Customer Commitments, and Carrier Tracking from a Google Sheets spreadsheet.
3. Joins the datasets and calculates delay indicators, supplier reliability metrics, impact scores, and a risk level per open purchase order.
4. Filters to only at-risk orders (or exits the alert path if no risks are found).
5. Appends the at-risk orders (including a prewritten supplier escalation email draft) to a Google Sheets “Risk Register” sheet.
6. Builds a summary message and posts a Slack alert to the configured channel.
7. Appends a run summary (counts checked, at-risk, and high/critical items) to a Google Sheets “Run Log” sheet.

## Setup
1. Create a Google Sheets file with the required tabs: Purchase Orders, Supplier History, Customer Commitments, Carrier Tracking, Risk Register, and Run Log.
2. Add a Google Sheets Service Account credential in n8n, share the spreadsheet with the service account email, and set the spreadsheet ID in the config step.
3. Add a Slack credential in n8n and set the target Slack channel in the config step.
4. Review and update the risk thresholds in the config step (lateGraceDays and highImpactOrderValue) to match your operations rules.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
