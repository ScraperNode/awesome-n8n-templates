# ⚙️ Monitor scheduled workflow health in n8n with automatic trigger checks

> ⚡ **72 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Automatically detect when your scheduled or polling-trigger workflows stop running. Unlike error handlers that catch failures when workflows execute, this catches the silent killer: workflows that simply never trigger at all — broken schedules, accidental deactivation, or trigger node bugs.

No hardcoded workflow list needed. It auto-discovers every active scheduled workflow and infers the expected run frequency from their trigger configuration.

## How it works

1. Fetches all active workflows via the n8n API
2. Filters to those with a Schedule Trigger or polling trigger (Outlook, Gmail, Google Sheets, IMAP, etc.)
3. Parses cron expressions and interval settings to calculate the maximum allowed time since last execution
4. Fetches the latest execution for each discovered workflow
5. Raises an error listing any workflows that are overdue — pair with an Error Workflow for Slack, email, or other alerts

The max age calculation adds safety margins automatically: daily workflows get 48 hours (to survive weekends), weekly gets 8 days, monthly gets 35 days, and so on.

## Setup

1. Import the workflow and add your **n8n API credential** to the two n8n nodes ("Fetch All Active Workflows" and "Get Latest Execution")
2. Tag this workflow with `skip-monitoring` so it doesn't try to monitor itself
3. Optionally set `PROJECT_ID` in the "Discover Scheduled Workflows" code node to limit monitoring to a specific n8n project
4. Set an **Error Workflow** in the workflow settings to receive alerts (e.g. a workflow that sends Slack messages or emails on error)
5. Activate the workflow

## Customization

- **Schedule**: Default is daily at 9am. Adjust the Schedule Trigger to your preference.
- **Project scope**: Set `PROJECT_ID` to monitor only one project, or leave empty to monitor all.
- **Exclude workflows**: Tag any workflow with `skip-monitoring` to opt it out.
- **Sensitivity**: The cron parser handles minutes, hours, days, weeks, months, weekday-only schedules, and every-N-day patterns. Adjust the `parseCronMaxAge` function if you need different thresholds.

## 🔗 Nodes Used

Stop and Error, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
