# 📋 Send weekly project health dashboard with Google Sheets, GPT-4o mini and Gmail

> ⚡ **159 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow runs every Friday at 5 PM, reads project metrics from three Google Sheets tabs, calculates a Red/Amber/Green health status, uses OpenAI (GPT-4o mini) to generate executive summaries, and sends a color-coded HTML dashboard email via Gmail, with Slack alerts for failures.

## How it works
1. Runs every Friday at 5 PM on a schedule.
2. Reads the latest rows from three Google Sheets tabs (Alpha, Beta, and Gamma) in parallel.
3. Merges the sheet data and calculates each project’s schedule variance, budget burn, open issue count, and overall RAG (Red/Amber/Green) status.
4. Sends a per-project prompt to OpenAI (GPT-4o mini) to generate a concise three-line executive health summary.
5. If the AI step fails for any project, posts an alert to a specified Slack channel.
6. Aggregates all projects into a styled HTML dashboard email with overall RAG counts and sends it to your leadership list via Gmail.
7. If the workflow errors at any point, posts an error alert to Slack using the workflow error trigger.

## Setup
1. Connect Google Sheets OAuth2 credentials and replace `YOUR_SPREADSHEET_ID` and the tab references so the three read steps point to your spreadsheet.
2. Ensure each Google Sheets tab includes the expected columns: `project_name`, `planned_end`, `forecast_end`, `budget_total`, `budget_spent`, `open_issues_count`, and `pct_complete`.
3. Add your OpenAI credentials and confirm the model selection (GPT-4o mini) is available in your OpenAI account.
4. Connect Gmail OAuth2 credentials and update the recipient address in the email step (`your-leadership-list@example.com`).
5. Connect Slack OAuth2 credentials and set the correct channel IDs for both the AI-failure alert and the workflow error alert.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
