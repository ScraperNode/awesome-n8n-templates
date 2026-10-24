# ⚙️ Route workflow error incidents to Slack alerts with a Notion incident log

> ⚡ **24 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow captures n8n workflow execution errors, classifies and deduplicates them, logs incidents to a Notion database, and routes high-severity alerts to a Slack channel, with an optional daily Slack digest of open incidents.

## How it works
1. Triggers when an n8n workflow execution fails via the built-in Error Trigger.
2. Normalizes the error payload and extracts key metadata like workflow, execution, node, and stack details.
3. Classifies the error into a category, severity, and suggested fix using rule-based text matching.
4. Builds an incident fingerprint and formatted Slack message, then searches a Notion database for an existing incident with the same fingerprint.
5. If a matching Notion incident exists, it updates the page’s last-seen timestamp, severity, suggested fix, and occurrence count and optionally posts a repeated Slack alert based on the minimum severity threshold.
6. If no incident exists, it creates a new Notion incident page and posts a Slack alert only when the severity meets or exceeds the configured threshold.
7. Runs daily on a schedule, fetches unresolved incidents from Notion, and posts a summary digest to the same Slack channel when any open incidents exist.

## Setup
1. Create a Notion database with the required properties (Incident, Fingerprint, Workflow fields, Error details, Severity/Status selects, Occurrences, and timestamps) and note the database ID.
2. Add Notion credentials in n8n with access to the target database.
3. Add Slack OAuth2 credentials in n8n and choose a Slack channel to receive alerts and the daily digest.
4. Update the placeholders in SetTemplateConfig (notion_database_id, slack_channel_id, minimum_slack_severity, default_incident_status, and resolved_incident_status) to match your Notion select options and alert preferences.
5. (Optional) Adjust the daily digest schedule time and the maximum number of incidents retrieved from Notion to fit your reporting needs.

## Requirements
- -Notion account and Notion integration credentials
-Notion incident database with the required properties
-Slack workspace and Slack OAuth2 credentials
-Slack channel ID for alerts and daily digest
-n8n account with access to Error Trigger workflows

## Customization
- -Change minimum_slack_severity in SetTemplateConfig to Low, Medium, High, or Critical.
-Update default_incident_status and resolved_incident_status to match your Notion Status options.
-Adjust the ClassifyErrorSeverity code to add custom error categories, severity rules, and suggested fixes.
-Change the daily digest schedule from the Schedule Trigger node.
-Edit the Slack message format in BuildIncidentInfo and BuildDigestMessage.

## Additional info
This template does not use paid AI or external paid APIs. Error classification is rule-based, so users can customize the logic directly inside the Code node.

Before production use, users must replace the placeholders in SetTemplateConfig with their own Notion database ID and Slack channel ID. They must also connect their own Notion and Slack credentials.

The Notion database should include the properties listed in the workflow sticky note. Property names should match exactly to avoid Notion node errors.

## 🔗 Nodes Used

Slack, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
