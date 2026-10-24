# 🎫 Triage museum microclimate excursions with OpenAI, Jira, Slack, and Google Drive

> ⚡ **3 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs every 30 minutes to pull museum microclimate sensor readings, compare them with prior state stored in Postgres, and, for meaningful excursions, uses OpenAI to extract conservation risk before creating a Jira task, posting a Slack alert, archiving evidence to Google Drive, and saving the latest snapshot.

## How it works
1. Runs every 30 minutes on a schedule to start a sensor sweep for the configured museum zones.
2. Fetches current temperature and relative-humidity readings from a sensor vendor HTTP API and loads the prior readings for those zones from Postgres.
3. Calculates per-zone deltas against the prior state and keeps only readings that exceed the configured RH or temperature change thresholds.
4. If any meaningful changes exist, processes each changed reading and uses OpenAI (Chat model via the Information Extractor) to return a structured conservation-risk assessment with evidence and a recommended response window.
5. Combines the AI risk output with the measured deltas to compute a severity score and assigns a route (watch, urgent, or critical).
6. Based on the route, creates a Jira issue, sends a Slack message, or uploads a JSON evidence file to Google Drive, then merges outcomes.
7. Writes a new snapshot of all readings to Postgres to preserve an auditable record for the next run.

## Setup
1. Add credentials for the sensor vendor API (HTTP Request), Postgres, OpenAI, Jira, Slack, and Google Drive.
2. Replace all placeholder values, including the sensor API base URL, Jira project key, and the Google Drive folder ID.
3. Ensure your Postgres database has the expected tables/fields used by the queries (for example, a prior-state table keyed by zone_id and a snapshots table for captured_at and readings_json).
4. Update the zone IDs and the RH/temperature delta thresholds in the workflow configuration to match your galleries and alerting policy.
5. Set the destination Slack channel and confirm Jira issue type/fields align with your Jira project configuration.

## Requirements
- n8n Environment: Self-hosted (Docker/npm) or n8n Cloud instance.
- Database: PostgreSQL instance (to store and read sensor state history).
- API Credentials & Keys:
- Sensor Vendor API Access (Header Auth)
- OpenAI API Key (GPT-4o or GPT-4o-mini for risk evaluation)
- Jira Account & Project Key (For automated ticket generation)
- Slack Bot Token / Webhook URL (For team alerts)
- Google Drive Account (OAuth / Service Account for evidence archiving)

## Customization
- Sensor Limits & Deltas: Easily adjust humidity, temperature, or lux delta thresholds in the Detect Material Deltas node.
- AI Severity Prompting: Custom-tailor the Score Conservation Severity prompt to match your museum’s specific collection sensitivity rules.
- Alert & Ticket Routing: Seamlessly map emergency severity tiers to your local workflow or swap Slack/Jira with Teams, Telegram, or Zendesk.
- Storage Provider: Swap Google Drive for AWS S3, Azure Blob, or a local institutional DAM.

## Additional info
Ready-to-import n8n JSON workflow file, node configuration guide, and test sample payload.

Setup Time: Estimated 35–50 minutes.

Error Handling: External actions continue on regular output and retry 3 times with a 2-second delay. Connect the workflow setting to your standard error workflow.

API Cost & Limits: One sensor pull and one model call per changed item; tune the schedule to vendor quotas.

Privacy: Sensor labels may reveal collection locations; restrict Drive, Jira, and database access.

Limitations: AI does not replace a conservator; sensor calibration and object sensitivity data must be maintained.

Creator: Swapnil AI Labs — swapnil.mandloi7@gmail.com — swapnilailabs.netlify.app

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Google Drive, Jira Software, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
