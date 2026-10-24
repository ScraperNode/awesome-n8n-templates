# ⚙️ Route Alertmanager incidents with OpenAI GPT-4.1, Slack, PagerDuty, and ClickUp

> ⚡ **3 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow receives Prometheus Alertmanager webhooks, deduplicates and rate-limits incidents in Postgres, runs an OpenAI tool-calling RCA agent, and routes tiered notifications to Slack/Email/PagerDuty while creating or updating ClickUp incident tickets and logging pipeline health.

## How it works
1. Receives an Alertmanager webhook for a firing or resolved alert.
2. Normalizes key fields (fingerprint, severity, source, affected service) and closes the incident in Postgres and notifies Slack immediately when the alert is resolved.
3. Checks Postgres for an existing open incident, suppressing alert storms and repeated alerts within a cooldown window while still incrementing an occurrence counter.
4. Classifies the alert as client-side or backend-side and runs an OpenAI-powered RCA agent that can query client telemetry APIs, Prometheus metrics, recent deployments, and a vector search of past incidents.
5. Validates the agent’s structured JSON output and routes malformed results to a dead-letter path for logging and investigation.
6. Upserts the incident record in Postgres, applies an escalation policy, sends notifications to Slack and (for high/critical or flapping) Email and PagerDuty, and creates or comments on a ClickUp incident ticket.
7. Logs execution outcome to a Postgres health table and returns a JSON response to the webhook caller.

## Setup
1. Configure Alertmanager to send firing and resolved notifications to the workflow’s webhook URL.
2. Add credentials for OpenAI, Slack, Postgres, ClickUp, PagerDuty, and an email provider (SMTP or supported email transport), and set the target Slack channels, email recipients, PagerDuty service, and ClickUp List ID.
3. Create the required Postgres tables (at minimum `incidents`, `dead_letter_events`, and `workflow_health_log`) and map their columns to match the workflow’s insert/update operations.
4. Update the HTTP tool endpoints for client telemetry, Prometheus query access, deployments, and the vector store connection used for RAG over past incidents.
5. Configure this workflow as its own n8n error workflow so execution failures trigger dead-letter logging and the Slack pipeline-failure alert.

## 🔗 Nodes Used

Send Email, Postgres, Slack, Webhook, ClickUp, PagerDuty

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
