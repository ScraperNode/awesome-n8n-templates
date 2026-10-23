# 👥 Track mandatory paid leave with Gemini, Gmail, Google Sheets and Slack

> ⚡ **4 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This monthly workflow reads employee and leave data from Google Sheets, calculates who risks missing Japan’s mandatory paid-leave minimum, generates Japanese reminder copy with Google Gemini, then emails employees via Gmail, posts a summary to Slack, and logs each notification back to Google Sheets.

## How it works
1. Runs on the first day of each month.
2. Loads the employee roster and paid-leave records from two tabs in Google Sheets and combines them by employee ID.
3. Calculates each active employee’s current leave-year grant date, deadline, days taken, and remaining shortfall against the required minimum.
4. Keeps only employees who still have a shortfall and whose deadline is within the configured alert window.
5. Uses Google Gemini to generate two Japanese messages: a short employee-friendly reminder and a one-line HR summary.
6. Sends the employee reminder via Gmail, posts the HR summary to a Slack channel, and appends a record of the notification to a Google Sheets log tab.

## Setup
1. Add credentials for Google Sheets, Google Gemini (PaLM) API, Gmail, and Slack.
2. Provide your Google Sheets spreadsheet ID in the configuration values and ensure it contains the tabs Employees, LeaveLog, and NotificationLog with the expected columns (including employeeId).
3. Set your leave rules in the configuration values (grantMethod and fixedGrantMonthDay if used, requiredDays, and alertBeforeDays).
4. Set the target Slack channel name in the configuration values (and invite the Slack app/bot to that channel).
5. Confirm employee email addresses and leave dates are stored in a format the workflow can parse (YYYY-MM-DD), then run once and activate.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
