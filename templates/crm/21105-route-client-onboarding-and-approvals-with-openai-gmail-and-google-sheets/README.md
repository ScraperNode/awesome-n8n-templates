# 🤝 Route client onboarding and approvals with OpenAI, Gmail and Google Sheets

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow accepts client onboarding requests via webhook, uses OpenAI to analyze scope and delivery risk, routes high-risk work to Gmail-based human approval, and writes an audit trail to Google Sheets, with a daily scheduled sweep to log control-tower checks.

## How it works
1. Receives a client intake request via a POST webhook and normalizes the payload while validating required fields.
2. Sends the onboarding details to OpenAI to return a structured scope summary, deliverables, assumptions, red flags, and a numeric risk score.
3. Routes requests with a risk score of 40 or higher to Gmail to request human approval, including the risk summary and approval details.
4. For lower-risk requests, generates a project provisioning plan including a project key, workspace/folder name, and task list derived from the deliverables.
5. Receives an approval decision via a second POST webhook and normalizes the reviewer’s decision.
6. If approved, rebuilds the project plan as approved; if rejected, sends a rejection notification via Gmail to pause delivery.
7. Appends an audit record for key events (intake/provisioning/approval decisions/sweeps) to a Google Sheets log, and runs a daily scheduled sweep that logs checks for stale or blocked items.

## Setup
1. Add OpenAI credentials and set the model name via the OPENAI_MODEL environment variable (or leave the default).
2. Add Gmail OAuth2 credentials and replace the placeholder recipient emails for the approval inbox and delivery lead.
3. Add Google Sheets OAuth2 credentials, set CONTROL_TOWER_AUDIT_SHEET_ID (and optionally CONTROL_TOWER_AUDIT_SHEET_NAME), and ensure the target sheet has columns for event, clientId, riskScore, approvalId, occurredAt, and executionId.
4. Copy the two webhook URLs (intake and approval decision) and configure your intake form/system and approval mechanism to POST the expected fields (including decision, reviewerEmail, and comments for approvals).

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
