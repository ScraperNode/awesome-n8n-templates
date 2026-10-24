# 🔬 Triage chronic care vitals with Google Sheets, Gmail, Telegram and Slack

> ⚡ **39 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to read chronic care vitals from Google Sheets, merge them into a per-patient record, score risk using AHA/ADA threshold rules, and notify clinicians via Telegram and Gmail when escalation is needed, while logging all results back to Google Sheets.

## How it works
1. Runs every 24 hours on a schedule trigger.
2. Reads blood pressure, glucose, activity/sleep, and patient master data from Google Sheets.
3. Merges the sheets into a single structured record per patient for the current day.
4. Calculates a risk score and risk level (LOW–CRITICAL) by evaluating vitals against AHA/ADA guideline thresholds and detecting anomalies.
5. If escalation is required, generates a clinical intervention plan, sends a Telegram alert to the doctor, sends an HTML escalation email via Gmail, and appends/updates the escalated result in the Google Sheets DailyLog.
6. If escalation is not required, writes the routine result to the Google Sheets DailyLog and sends a routine status email via Gmail.
7. If any workflow error occurs, posts an error alert to a designated Slack channel.

## Setup
1. Add Google Sheets OAuth2 credentials and update each Google Sheets node with your spreadsheet document ID and tab names (BloodPressure, Glucose, Activity, Patients/Patient Master, and DailyLog).
2. Add Telegram Bot credentials and set the doctor’s chat ID in the Telegram alert message.
3. Add Gmail OAuth2 credentials and replace the placeholder doctor email address used in the escalation and routine email nodes.
4. Add Slack OAuth2 credentials and select the channel that should receive error notifications.
5. Review the risk thresholds and intervention text in the code steps to match your clinic’s protocols, and adjust the schedule interval/time as needed.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
