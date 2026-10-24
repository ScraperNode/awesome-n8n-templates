# ⚙️ Coordinate outage incident response with Postgres, Slack, and email

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow turns monitoring alerts into coordinated incident response by tracking incidents in Postgres, creating Slack war-room channels, paging responders via email, escalating if nobody acknowledges, sending periodic status updates, and closing incidents with resolution notifications.

## How it works
1. Receives incident alerts via the `POST /bc-alert` webhook (simple JSON or Prometheus Alertmanager) and normalizes them into a standard service, severity, and status format.
2. Creates a new incident in Postgres or attaches the alert to the existing open incident for the same service, then returns a 202 response with the incident ID and deduplication status.
3. For new incidents, loads service metadata and team contacts from Postgres, creates a Slack war-room channel, posts an incident brief and checklist, and emails each responder a unique acknowledgement link.
4. Accepts the first responder acknowledgement via `GET /bc-ack`, updates the incident in Postgres, responds to the request, and posts a Slack message naming the incident commander.
5. Runs every 5 minutes to find unacknowledged incidents that need escalation and open incidents that are due for status updates, then sends escalation emails/Slack notices or posts Slack and email stakeholder updates.
6. Accepts incident resolution via `POST /bc-resolve`, marks the incident resolved in Postgres, responds to the request, posts the resolution and duration to Slack, and emails stakeholders (and executives for SEV1) with the post-incident review due date.

## Setup
1. Add credentials for Postgres, SMTP email (n8n Email node), and Slack API HTTP Header Auth (Bearer token) with at least `channels:manage` and `chat:write` scopes.
2. Run the workflow once with the manual trigger to create the Postgres tables and seed the demo team/service data.
3. Update the configuration values in Set Continuity Config (public webhook base URL, sender email, default Slack channel ID, escalation contacts, stakeholder lists, and acknowledgement/status update timings).
4. Replace the demo teams and services in Postgres (or in the setup SQL) with your real service IDs, owner/dependent teams, customer-facing flags, and runbook URLs/steps.
5. Configure your monitoring system to send alerts to the production webhook URL for `POST /bc-alert`, and use `POST /bc-resolve` plus the emailed/posted `GET /bc-ack` links during incident response.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
