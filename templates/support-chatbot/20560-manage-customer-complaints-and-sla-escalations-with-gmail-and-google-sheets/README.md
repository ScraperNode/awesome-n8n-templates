# 💬 Manage customer complaints and SLA escalations with Gmail and Google Sheets

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow collects customer complaints via an n8n Form, logs each case in Google Sheets with a priority-based SLA deadline, and sends Gmail notifications to the customer and internal teams, escalating unresolved cases through Level 1 and Level 2 before closing resolved complaints.

## How it works
1. Receives a new complaint submission from an n8n Form.
2. Normalizes the submitted fields, validates required complaint details, and stops with an error payload if any mandatory data is missing.
3. Generates a case ID, assigns priority and responsible team based on complaint category, and calculates an SLA due time.
4. Appends the complaint as a new row in a Google Sheets register and sends acknowledgement and assignment emails via Gmail.
5. Waits until the SLA due time, then looks up the case in Google Sheets and checks whether the status is marked as Resolved.
6. If unresolved at the SLA deadline, sends a Level 1 escalation email via Gmail and updates the Google Sheets row with escalation status and timestamps.
7. Waits an additional priority-based review window, then re-checks Google Sheets and either escalates to Level 2 via Gmail and updates the sheet, or sends a resolution email and marks the case Closed in Google Sheets.

## Setup
1. Connect Google Sheets credentials and update the target spreadsheet/document and sheet to your complaint register.
2. Connect Gmail credentials and replace the internal notification and escalation recipient addresses with your team and management distribution lists.
3. Ensure your Google Sheets register includes the columns used by the workflow (for example: case_id, status, priority, assigned_team, sla_due_at, escalation_level, escalation_1_at, escalation_2_at, resolved_at, resolution_details).

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
