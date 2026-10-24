# 📈 Detect India VIX regime shifts with GPT-4.1, Google Sheets, and Slack alerts

> ⚡ **1 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs daily to fetch the India VIX value over HTTP, classify it into volatility regimes, compare it to the last stored state in Google Sheets, and when a regime shift occurs, generate risk context with OpenAI and send a Slack alert while logging the transition.

## How it works
1. Runs every day at 15:30 based on a schedule.
2. Fetches the latest INDIA_VIX value via an HTTP request, validates it is numeric and non-negative, and normalizes the response into a consistent format.
3. Reads the previous VIX state from Google Sheets and classifies the current VIX into LOW, NORMAL, ELEVATED, or CRISIS based on thresholds.
4. Compares the current regime to the stored regime and stops with a “no change” log when the regime is unchanged.
5. When the regime changes, sends the regime transition details to OpenAI to generate JSON-formatted educational risk and position-sizing context.
6. Updates the current state in Google Sheets, appends a transition record to a history sheet, and sends a formatted Slack message with the VIX change and AI context.

## Setup
1. Create a Google Sheets spreadsheet with a CurrentState sheet (including a unique state_id such as VIX-001) and a RegimeHistory sheet, then update the document and sheet references if you use a different file.
2. Add Google Sheets OAuth credentials in n8n so the workflow can read and append/update rows in both sheets.
3. Add an OpenAI API credential and ensure the selected model (gpt-4.1-nano) is available for your account.
4. Add a Slack credential, set the target channel, and verify the workflow has permission to post messages.
5. Replace the placeholder HTTP endpoint with your real India VIX data source and keep the output compatible with the expected fields (value and timestamp) used by the normalization step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
