# 🤝 Report a referral pipeline funnel from Pipedrive to Google Sheets and Slack/Discord

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs weekly to read open deals and activities from Pipedrive, calculate referral-pipeline coverage and funnel KPIs, and then write a multi-tab management dashboard to Google Sheets and optionally post a summary to Slack/Discord via an incoming webhook.

## How it works
1. Runs every Monday at 08:00 (or manually) and loads all reporting settings such as stage definitions, KPI mappings, and output destinations.
2. Pulls open deals, recent activities, and deal field definitions from the Pipedrive API, or generates a deterministic demo pipeline when Pipedrive isn’t configured.
3. Checks deal-field names against a PHI keyword blocklist and stops the run if the workflow is configured to read fields that look like patient clinical data.
4. Evaluates each open deal to determine whether it has a valid upcoming “next activity” within the configured horizon and flags uncovered, parked, overdue, and stalled deals.
5. Aggregates weekly KPIs across deals, activities, and configured Pipedrive custom fields (writing missing result fields as “not captured” instead of zero), including breakdowns by rep and by practice.
6. If a Google Sheet ID is provided, appends a dashboard row and writes the gaps, by-rep, and by-practice tables to their respective Google Sheets tabs.
7. Builds a management digest and, if an incoming webhook URL is configured, posts it to Slack/Discord; otherwise the run ends without sending a message.

## Setup
1. Add your Pipedrive company domain and API token in the config, and optionally set the pipeline ID to restrict reporting to a single pipeline.
2. In the config, map RESULT_FIELDS (and any CONTEXT_FIELDS you use) to your Pipedrive deal custom-field keys and ensure none of the targeted field names contain PHI-like terms.
3. Create a Google Sheets document with the required tabs (Dashboard, Gaps, By rep, By practice), add Google Sheets credentials in n8n, and set the Sheet ID and tab names in the config.
4. Add a Slack or Discord incoming webhook URL in the config (and an optional separate manager webhook) to enable posting the weekly digest.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
