# 🎣 Qualify B2B leads with OpenAI, PostgreSQL, and human email approval

> ⚡ **43 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives B2B lead submissions via webhook, stores them in PostgreSQL, and uses an OpenAI-powered n8n AI Agent with Postgres-backed memory to score and draft next steps. It routes low-confidence outputs to manual review and requires human email approval before outreach or conversion.

## How it works
1. Receives a POST request on a webhook with lead details (email and message required).
2. Normalizes and validates the payload, returning HTTP 400 for invalid submissions.
3. Upserts the lead into PostgreSQL and runs an OpenAI AI Agent that looks up prior lead history, applies a deterministic policy calculator, and saves the assessment and activity log back to PostgreSQL.
4. Normalizes and validates the agent’s structured decision, and if the output is unreliable it marks the lead for manual review, emails the reviewer, and returns HTTP 202.
5. If the policy result is no_action, it logs the outcome in PostgreSQL and returns HTTP 200 with the qualification result.
6. If the policy requires approval, it creates an approval record in PostgreSQL, returns HTTP 202 with an approval ID, and emails the reviewer a draft for approve/reject.
7. When approved, it either sends the follow-up email via SMTP and logs the contact attempt, or converts the lead into a client record in PostgreSQL and logs the conversion; when rejected or timed out, it records the rejection and takes no sensitive action.

## Setup
1. Add PostgreSQL credentials and ensure the workflow can create tables, then run the “Create Agent Tables” step once to initialize the database.
2. Add an OpenAI API credential and set the model name in the workflow configuration.
3. Add an SMTP credential for the reviewer notification, approval request, and approved follow-up email steps.
4. Update the workflow configuration values (business name, services, thresholds, memory window, from/to emails, and booking URL) to match your process.
5. Copy the webhook URL and configure your lead source to send a POST request with at least email and message fields.

## 🔗 Nodes Used

Send Email, Postgres, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
