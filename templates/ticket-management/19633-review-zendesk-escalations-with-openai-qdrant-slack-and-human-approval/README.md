# 🎫 Review Zendesk escalations with OpenAI, Qdrant, Slack and human approval

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow ingests Zendesk escalation events via a secured webhook, uses OpenAI plus Qdrant knowledge to draft an evidence-backed action plan, and routes it to Slack for human approval before writing a guarded private note back to Zendesk, while tracking state in PostgreSQL and caching snapshots in Redis.

## How it works
1. Receives a POST webhook event containing an eventId and Zendesk ticketId, validates the payload, and loads tenant deployment configuration from PostgreSQL.
2. Atomically claims the event in PostgreSQL for idempotent processing, acknowledges the request, and fetches the current Zendesk ticket.
3. Loads a short-lived redacted conversation snapshot from Redis or fetches the latest public Zendesk comments, then stores the redacted snapshot back in Redis.
4. Enriches the case with account facts from PostgreSQL and runs OpenAI specialists to triage, research against tenant-approved Qdrant documents, decide a recommendation, draft a private-note action plan, and independently QA the proposal.
5. Applies deterministic gating rules and either posts a manual-review alert to Slack or sends an approval message to Slack with approve/reject actions and an expiry window.
6. If approved, rechecks the Zendesk ticket for changes, writes a guarded private note (and non-decreasing priority) to Zendesk, verifies the audit marker, records the outcome in PostgreSQL, and notifies Slack.
7. Separately, accepts a human-reviewed case outcome via a secured webhook, confirms the Zendesk ticket is solved/closed, embeds the reviewed resolution with OpenAI, upserts it into Qdrant as approved “resolved_case” memory, and a schedule watchdog posts Slack alerts for expired approvals or stalled work.

## Setup
1. Provision a PostgreSQL database using the provided schema (database.sql) and configure the default deployment row in swl_escalation.deployments (Zendesk subdomain, Qdrant URL/collection, Slack channel ID, thresholds, and approval timing).
2. Create a Qdrant collection with 1536 dimensions and cosine distance, add the required payload indexes (tenant_id, approved, kind), and add a Qdrant API key credential.
3. Add credentials for Zendesk (HTTP Basic Auth with API token), OpenAI API, Redis, PostgreSQL, Slack bot token, and two separate Header Auth credentials for the intake and feedback webhooks.
4. Create or choose a private Slack review channel, invite the Slack bot, and set the channel ID in the deployment config.
5. Copy the webhook URLs for /swl-escalation-intake-v1 and /swl-escalation-feedback-v1 and configure your source systems to call them with the required headers and payloads.

## 🔗 Nodes Used

HTTP Request, Postgres, Redis, Slack, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
