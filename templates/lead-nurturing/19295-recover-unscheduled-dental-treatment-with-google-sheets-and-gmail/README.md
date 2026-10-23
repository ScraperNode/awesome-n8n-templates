# 💬 Recover unscheduled dental treatment with Google Sheets and Gmail

> ⚡ **3 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs daily and weekly to manage unscheduled dental treatment plans by reading patient and procedure data from Google Sheets, sending follow-up emails through Gmail, escalating long-unresponsive cases to the front desk, and emailing a weekly recovery summary to the practice owner.

## How it works
1. Runs every morning on a schedule and loads Patients and ProcedureLog data from Google Sheets.
2. Identifies treatment plans that are still unscheduled and not marked as recovered, then decides whether to send the 1st/2nd/3rd reminder (after 3/14/30 days) or escalate to staff (after 45 days) based on the existing follow-up stage.
3. Sends a detailed internal escalation email via Gmail to the front desk for cases that require a personal call.
4. Updates the matching ProcedureLog row in Google Sheets to record that the plan is escalated so it is not contacted automatically again.
5. Sends a generic patient reminder email via Gmail for cases due for the next step in the sequence.
6. Updates the matching ProcedureLog row in Google Sheets to record the new follow-up stage and last contact date.
7. Runs every Monday on a separate schedule, recomputes recovery and pipeline totals from ProcedureLog, and emails the weekly summary to the practice owner via Gmail.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the spreadsheet ID and tab names (Patients and ProcedureLog) to match your Google Sheet.
2. Connect Gmail OAuth2 credentials and set the recipient addresses for the front desk and owner summary emails.
3. Ensure your ProcedureLog sheet includes the fields used for routing and state (for example ProcStatus, PipelineStatus, DaysUnscheduled, FollowUpStage, LastContactDate, ProcFee, and a row_number for updates).
4. Ensure your Patients sheet includes the lookup fields used for outreach (for example PatNum, Email, WirelessPhone, Provider, FName, and LName).
5. Adjust the schedule times and follow-up cadence thresholds (3/14/30/45 days) if you want different sending and escalation rules.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
