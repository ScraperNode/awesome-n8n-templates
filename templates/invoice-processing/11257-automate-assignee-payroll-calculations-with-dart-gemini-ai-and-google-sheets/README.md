# 🧾 Automate assignee payroll calculations with Dart, Gemini AI, and Google Sheets

> ⚡ **54 views** · 🧾 [Invoice Processing](../)

## Description

## Task-based Assignee billing via Time Tracking
This workflow automates billing by scanning a target Dartboard on schedule, aggregating time logs from completed tasks, cross‑referencing assignee rates in Google Sheets, calculating total pay, and updating the sheet with final billable hours and amounts.

### Who's it for
Individuals, agencies, companies, and project managers automating payroll or client invoicing from task data.

### How to setup
- Link your [Dart](https://help.dartai.com/en/articles/12313191-n8n-integration) and Google accounts.
- Replace the dummy ID in the **List tasks** node with your actual target Dartboard ID.
- Set your preferred run frequency (e.g., Weekly).
- Create a Google Sheet with these exact headers: `Name`, `HourlyRate`, `TotalHours`, `TotalPay`, `DateCalculated`.
- Connect the Sheet nodes to your file. Pre-fill `Name` (matching Dart Assignees exactly) and `HourlyRate` in your Google Spreadsheet.
- Optional: Add a last header column in the sheet as a Status header to track if the bill is paid or pending.

### Customizing the workflow
- Choose your AI model for your AI time tracking and assignee scanner
- Use your own google sheet account and target spreadsheet document

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
