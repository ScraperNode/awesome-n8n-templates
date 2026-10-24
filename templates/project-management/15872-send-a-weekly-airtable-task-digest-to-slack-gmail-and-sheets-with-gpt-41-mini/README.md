# 📋 Send a weekly Airtable task digest to Slack, Gmail and Sheets with GPT-4.1-mini

> ⚡ **34 views** · 📋 [Project Management](../)

## Description

## How it works
This workflow automatically creates a weekly report of tasks. Every Friday morning, it collects all task details from Airtable, checks progress, and prepares a summary. It also highlights important or late tasks and sends the report to Slack, email, and saves it for record.

## Step-by-step
- **Trigger & fetch**
  - **Schedule: Every Friday 9AM** – Triggers the workflow automatically every Friday at 9 AM.
  - **Airtable: Fetch This Week** – Collects all task records from the Airtable base for the current week.

- **Analysis & formatting**
  - **Code: Analyze & Format** – Checks all tasks, detects fields, calculates completion rate, identifies overdue and urgent items, and builds the full Slack message with an `{{AI_SUMMARY}}` placeholder.

- **AI summary generation**
  - **OpenAI: Generate AI Summary** – Sends the weekly stats to GPT-4.1-mini with a structured prompt to produce a concise 2–3 sentence plain-English project manager summary.

- **Merge & prepare**
  - **Code: Merge AI Summary** – Injects the AI summary into the Slack message and prepares urgent alert messages for overdue or high-priority tasks.

- **Parallel output actions**
  - **Slack: Post Weekly Digest** – Posts the full formatted digest to a Slack channel with mrkdwn formatting.
  - **Gmail: Send Digest Email** – Sends an HTML-formatted email with stats cards, AI summary, and a task table.
  - **Google Sheets: Log Weekly Stats** – Appends week range, totals, completion rate, overdue count, AI summary, and status to a tracking sheet.

- **Conditional urgent alert**
  - **IF: Has Urgent or Overdue?** – Checks if overdue or urgent task count is greater than zero.
  - **Slack: DM Urgent Alert** – Sends a separate urgent action-required message to Slack if flagged items exist.
  - **Gmail: Send Urgent Alert** – Sends a red-header alert email listing overdue and urgent counts if flagged items exist.

## Why use this?
- Eliminates manual weekly reporting by automatically collecting, analyzing, and summarizing all Airtable task data
- Keeps the entire team informed across Slack and Email every Friday without lifting a finger
- AI-generated summaries give instant clarity on project health and what needs attention
- Logs every weekly digest to Google Sheets for long-term trend tracking and reporting
- Sends a separate urgent alert so critical or overdue tasks never get buried in the digest

## 🔗 Nodes Used

Airtable, Google Sheets, Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
