# 🤝 Create next activities for uncovered Pipedrive deals with Slack summaries

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs every weekday morning (or on demand) to check open deals in Pipedrive for a “next activity” due within a defined horizon, creates the appropriate follow-up activity when one is missing, and posts a run summary (and optional escalations) to Slack via incoming webhooks.

## How it works
1. Runs on a weekday 07:00 schedule or when triggered manually.
2. Loads configuration (stages, activity rules, horizon, caps, and notification webhooks) and either reads open deals, activities, and deal field definitions from the Pipedrive API or generates a demo pipeline when Pipedrive isn’t configured.
3. Scans Pipedrive deal field names for PHI-like terms, blocks those fields from being read, and stops the run if the workflow is configured to use a field that looks like patient clinical data.
4. Evaluates each open deal to determine whether it has an unfinished activity due within the horizon, and flags deals that are uncovered, parked too far out, overdue, stale, or in a grace period.
5. Decides per uncovered deal whether to create a stage-based next activity, create a re-engagement activity for inactive partners, escalate overdue items instead of stacking tasks, or skip due to grace period or daily cap.
6. Creates activities in Pipedrive when write mode is enabled, records success or failure per deal, and compiles a run summary including coverage metrics and per-deal decisions.
7. Posts the run summary to a Slack incoming webhook when configured and posts a separate management escalation message when overdue or high-priority stalled deals are detected.

## Setup
1. Add your Pipedrive company domain and API token in the config section so the workflow can read deals and activities and (optionally) create activities.
2. Review and update the stage-to-activity mapping, horizon/grace/cap settings, and activity type keys to match your Pipedrive pipeline and activity types.
3. Choose your run mode by setting TEST_RUN and (optionally) TEST_OWNER_ID to preview, test-write to a single user, or go live assigning activities to the deal owner.
4. (Optional) Create Slack incoming webhooks and paste the webhook URLs into ALERT_WEBHOOK_URL and MANAGER_WEBHOOK_URL to receive summaries and escalations.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
