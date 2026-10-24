# 🔬 Track supplier SLA breaches and corrective actions with Google Sheets, Gemini, and Gmail

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This scheduled workflow pulls SLA targets and supplier performance from Google Sheets, compares actuals to targets, logs any breaches back to Google Sheets, uses Google Gemini to generate corrective action recommendations, and sends a consolidated HTML email alert via Gmail.

## How it works
1. Runs on an hourly schedule.
2. Reads SLA rules and supplier performance data from Google Sheets and merges them by supplier_id and metric_type.
3. Compares each metric’s SLA target to the actual value, calculates deviation, and classifies breach severity.
4. Routes compliant records to a no-op path and enriches non-compliant records with summaries, urgency flags, and contract-end timing.
5. Appends each detected breach to an SLA breach log in Google Sheets for audit tracking.
6. Aggregates all breaches into a single report, sends it to Google Gemini for recommended actions and escalation guidance, and formats a styled HTML email.
7. Sends the email notification to the configured supplier manager using Gmail.

## Setup
1. Create a Google Sheets file with tabs for SLA rules, supplier performance, and an SLA breach log, and ensure both rule and performance tabs include supplier_id and metric_type columns.
2. Add a Google Sheets OAuth2 credential in n8n and select the correct spreadsheet and sheet tabs in all Google Sheets steps.
3. Add a Google Gemini (PaLM) API credential and select the desired Gemini model in the Google Gemini chat model step.
4. Add a Gmail OAuth2 credential and set the recipient address by filling in manager_email used by the email step.
5. Verify the SLA rule fields (for example sla_target, unit, penalty_clause, contract dates) and performance fields (actual_value, measurement_date, notes) match the column names referenced by the workflow.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
