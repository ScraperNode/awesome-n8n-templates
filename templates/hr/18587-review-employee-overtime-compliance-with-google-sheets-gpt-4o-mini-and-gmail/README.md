# 👥 Review employee overtime compliance with Google Sheets, GPT-4o-mini, and Gmail

> ⚡ **16 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs weekly to total employee timesheet hours from Google Sheets, assess overtime thresholds, and use OpenAI to draft escalation notes for over-40-hour cases, then emails Payroll/HR via Gmail and logs outcomes back to Google Sheets.

## How it works
1. Runs every week on Sunday at 6:00 PM.
2. Reads the latest timesheet entries from a Google Sheets spreadsheet.
3. Groups entries by employee and sums weekly hours worked.
4. Calculates total hours, overtime hours, and a compliance status (compliant, approaching, or violation) based on 40- and 45-hour thresholds.
5. For employees over 40 hours, uses OpenAI to generate a short Payroll/HR note and sends an HTML escalation email via Gmail (CC’ing the manager).
6. Appends a record of each escalated employee (hours, status, timestamp, and department) to an “Overtime Log” sheet in Google Sheets.
7. For employees at or under 40 hours, appends a log entry to the same “Overtime Log” sheet without sending an email.

## Setup
1. Connect Google Sheets credentials and confirm the spreadsheet ID and sheet tabs for “Timesheet Entries” (source) and “Overtime Log” (destination).
2. Connect an OpenAI credential (Chat model) and confirm the model selection used by the agent.
3. Connect Gmail credentials and replace the “sendTo” address and CC behavior (manager email field) as needed for your Payroll/HR process.
4. Ensure your Timesheet Entries sheet includes the columns EmployeeName, EmployeeEmail, ManagerEmail, Department, and HoursWorked with consistent formatting.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
