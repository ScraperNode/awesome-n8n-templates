# 🔬 Send weekly KPI summary emails from Google Sheets using Gemini and Gmail

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs weekly to read metrics from Google Sheets, compute totals and averages, generate an executive summary with Google Gemini, and send a styled HTML report email via Gmail.

## How it works
1. Runs every week on a schedule trigger.
2. Reads the latest metrics rows from a Google Sheets worksheet.
3. Aggregates the rows to compute per-metric totals and averages and formats them as a text summary.
4. Sends the computed metrics to Google Gemini to write a short executive summary for the week.
5. Renders an HTML email containing the Gemini summary and a table of the computed KPIs.
6. Sends the HTML report to the specified recipients using Gmail.

## Setup
1. Connect Google Sheets OAuth credentials and select the target spreadsheet and worksheet containing your metrics.
2. Ensure your sheet includes Metric and Value columns (or equivalent fields the workflow can parse) with one row per measurement.
3. Add a Google Gemini (PaLM) API credential for the LLM summary step.
4. Add Gmail OAuth2 credentials and set the recipient email address used for the weekly report.
5. Adjust the weekly schedule (day and hour) and customize the email subject or HTML template as needed.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
