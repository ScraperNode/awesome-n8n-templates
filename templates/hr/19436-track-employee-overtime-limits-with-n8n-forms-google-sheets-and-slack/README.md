# 👥 Track employee overtime limits with n8n forms, Google Sheets and Slack

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects employees’ monthly overtime and holiday work via an n8n form, stores the data in Google Sheets, and checks weekly for anyone nearing monthly, rolling-average, or annual overtime limits before posting warnings (or an all-clear) to Slack.

## How it works
1. Receives a monthly hours submission from an n8n Form with employee details, month, overtime hours, and holiday work hours.
2. Normalizes the input, creates a per-employee-per-month key, and validates the month format and hour ranges, returning a plain-language error back to the form if anything is invalid.
3. Saves valid submissions to a Google Sheets document (MonthlyHours tab) by appending or updating the row so resubmissions for the same employee and month overwrite the previous values.
4. Runs every Monday morning, reads all rows from the MonthlyHours sheet, and calculates each employee’s remaining capacity against the monthly combined cap, 2–6 month rolling average caps (skipping averages with missing months), and the annual overtime cap.
5. If any employee’s remaining hours fall below the configured threshold, posts a per-employee warning to a Slack channel and appends the warning details to a Google Sheets WarningLog tab.
6. If nobody is close to any limit, posts a one-line confirmation message to Slack indicating how many employees were checked.

## Setup
1. Add Google Sheets OAuth2 credentials and Slack OAuth2 credentials in n8n.
2. Create a Google Sheets file with two tabs named MonthlyHours and WarningLog, and ensure the columns match the fields used in the workflow (employeeId, name, month, overtimeHours, holidayWorkHours, plus the WarningLog columns).
3. Paste your Google Sheets document ID into both workflow configuration fields: the spreadsheetId value in the submission normalization step and the spreadsheetId value in the limits configuration step.
4. Set the target Slack channel name in the limits configuration value and invite the Slack app/bot to that channel.
5. Adjust the monthly, rolling-average, annual limits and the warning threshold (warnWhenRemainingBelow) to match your policy, then share the form URL for submissions and activate the workflow.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
