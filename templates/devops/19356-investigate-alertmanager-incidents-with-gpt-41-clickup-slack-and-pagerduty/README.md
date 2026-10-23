# ⚙️ Investigate Alertmanager incidents with GPT-4.1, ClickUp, Slack, and PagerDuty

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow receives Prometheus Alertmanager webhooks, uses an OpenAI-powered incident investigator agent to query logs and recent deployments, writes a root-cause analysis to Postgres, creates a ClickUp incident task, notifies a Slack channel, and pages PagerDuty for critical incidents.

## How it works
1. Receives a POST webhook from Prometheus Alertmanager containing the firing alert details.
2. Normalizes key fields (alert name, severity, affected service, description, start time) and derives a session ID from the alert fingerprint to keep follow-up alerts in the same investigation context.
3. Uses an OpenAI agent with session memory to investigate the incident, optionally querying your log API and your CI/CD deployment API multiple times before returning a structured RCA JSON.
4. Parses the agent’s JSON output into fields like root cause, confidence, evidence, likely deployment, severity, and recommended actions.
5. Inserts the analysis into a Postgres `incident_analyses` table for audit history.
6. Creates a ClickUp task for the incident and posts a formatted summary with the ticket link to a Slack DevOps channel.
7. If the agent-assessed severity is critical, creates a PagerDuty incident to page the on-call engineer, then returns a JSON response to the original webhook caller.

## Setup
1. Configure Alertmanager to send alerts to this workflow’s webhook URL (POST `/alertmanager-incident`).
2. Add an OpenAI credential for the Chat Model (set to `gpt-4.1`) and ensure the agent can use it.
3. Update the two HTTP tool endpoints (logs and deployments) and add any required authentication so they can query your log store (for example Loki/ELK/CloudWatch/Sentry) and your CI/CD or release-tracking system.
4. Add Postgres credentials and create a `public.incident_analyses` table with columns matching the insert (alert_fingerprint, alert_name, affected_service, root_cause, confidence, evidence, likely_deployment, severity, recommended_actions, created_at).
5. Add ClickUp credentials and set the target List ID where incident tasks should be created.
6. Add Slack credentials and set the target channel (for example `#devops-incidents`), and add PagerDuty API token credentials plus a Service ID if you want critical paging enabled.

## 🔗 Nodes Used

Postgres, Slack, Webhook, ClickUp, PagerDuty, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
