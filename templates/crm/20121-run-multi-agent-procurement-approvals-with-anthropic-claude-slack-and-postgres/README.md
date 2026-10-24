# 🤝 Run multi-agent procurement approvals with Anthropic Claude, Slack and Postgres

> ⚡ **15 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow accepts a procurement request via webhook or manual trigger, uses Anthropic Claude agents to plan, negotiate, validate, and decide on supplier offers, escalates approvals to Slack when needed, and stores the full offer and decision audit trail in Postgres.

## How it works
1. Receives a purchase request from a manual trigger or a POST webhook request.
2. Applies procurement policy settings, normalizes the incoming payload with defaults, and uses Anthropic Claude (Planner Agent) to generate a structured sourcing plan.
3. Iterates through each supplier and uses Anthropic Claude (Negotiator Agent) to propose counter-offers across multiple rounds while simulating supplier responses until an agreement, walk-away, or max rounds is reached.
4. Uses Anthropic Claude (Validator Agent) plus deterministic policy checks (budget, lead time, minimum supplier rating) to validate each negotiated outcome and upserts each offer into Postgres.
5. Scores and ranks eligible offers, then uses Anthropic Claude (Approval Agent) to recommend auto-approve, escalate, or reject while enforcing hard guardrails in code.
6. If escalation is required, posts an approval request to Slack with Approve/Reject links and waits for a human decision via a resume webhook.
7. Writes the final decision to Postgres and posts the approved/rejected outcome to Slack.

## Setup
1. Add an Anthropic API key using HTTP Header Auth (x-api-key) and ensure the workflow can reach the Anthropic Messages API.
2. Configure Postgres credentials and create the required tables (procurement_offers and procurement_decisions) in your database.
3. Add Slack credentials, ensure the target channel exists, and set the channel name in the procurement config.
4. If using webhook intake, copy the webhook URL from the “procurement-request” endpoint and configure your source system to POST the procurement JSON payload to it.
5. Review and adjust policy values in the procurement config (auto-approve limit, max negotiation rounds, minimum supplier rating, max risk score) to match your organization’s rules.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
