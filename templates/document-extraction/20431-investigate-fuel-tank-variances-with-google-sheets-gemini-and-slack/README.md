# 🔬 Investigate fuel tank variances with Google Sheets, Gemini, and Slack

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/XHT46n4b1lg

This workflow receives a shift-close webhook and reconciles fuel tank wet-stock in Google Sheets, optionally using Google Gemini to explain anomalies, then logs results back to Google Sheets and posts investigation alerts to Slack.

## How it works
1. Receives a POST webhook at shift close with a station_id and shift_id.
2. Looks up the station’s active tanks and the shift’s tank readings, nozzle totalizer sales, deliveries, and prior audit history from Google Sheets.
3. Calculates per-tank expected vs actual closing volume, variance, tolerance, direction (loss/surplus), baseline z-score, drift patterns, and a risk score, and flags data gaps or meter/delivery issues.
4. When the variance warrants review, sends the computed context to Google Gemini to produce a non-accusatory JSON investigation summary with likely causes and recommended actions.
5. Writes the full reconciliation record (including AI verdict/summary when present) to an Audit_Log sheet in Google Sheets.
6. Formats and posts Slack messages for tanks that need notification (alerts, critical variances, delivery shortfalls, or data gaps) and returns a JSON summary response to the webhook caller.

## Setup
1. Create a Google Sheets Service Account credential in n8n and grant it access to the spreadsheet used for Tanks, Tank_Readings, Nozzle_Sales, Deliveries, and Audit_Log.
2. Update the Google Sheets document ID and ensure the sheet/tab names and required columns match what the workflow reads and appends.
3. Add a Google Gemini (Google PaLM) API credential for the LangChain Gemini chat model used for anomaly explanations.
4. Add Slack credentials, choose the target channel, and adjust the channel ID/message destination as needed.
5. Copy the webhook URL for the Shift Close endpoint and configure your POS/shift-close system to POST station_id and shift_id (and optionally shift_end) to it.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
