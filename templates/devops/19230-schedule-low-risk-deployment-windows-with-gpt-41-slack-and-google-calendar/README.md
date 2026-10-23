# ⚙️ Schedule low-risk deployment windows with GPT-4.1, Slack, and Google Calendar

> ⚡ **29 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow receives a deployment request via webhook, uses OpenAI with internal HTTP APIs (traffic, incidents, deployment history, and availability) to recommend a low-risk deployment window, logs the recommendation to Postgres, and requests approval in Slack before creating a Google Calendar hold and scheduling a CI/CD trigger.

## How it works
1. Receives a deployment request via a webhook with service, version, change details, and optional earliest/latest deploy-by constraints.
2. Uses an OpenAI agent with session memory to query traffic analytics, incident history, deployment failure history, and team availability APIs as needed to select a primary and fallback deployment window with a risk score.
3. Parses the agent’s JSON output and logs the recommendation details (window, risk, rationale, approvers, status, timestamp) to a Postgres table for audit.
4. If the risk score is high, posts a high-risk notice to Slack and returns the recommendation details in the webhook response.
5. If the risk score is not high, posts an approval request to Slack and waits for an approval webhook response.
6. When approved, creates a Google Calendar event to hold the deployment window, calls a CI/CD scheduling API to dispatch the deployment at the window start, and posts a confirmation to Slack (otherwise it posts a resubmission notice).

## Setup
1. Configure the incoming webhook endpoint path in the system that submits deployment requests (for example, your CI/CD pipeline) and send the expected fields (service, version, changeDescription, requestedBy, earliestDeployBy, latestDeployBy, slackChannel).
2. Add an OpenAI credential for the Chat Model used by the analysis agent.
3. Update the internal HTTP API endpoints and authentication for traffic analytics, incident management, deployment history, team availability, and the CI/CD scheduling endpoint.
4. Add a Postgres credential and create a `deployment_window_recommendations` table with columns matching the insert (service, version, requested_by, recommended_window, fallback_window, risk_score, rationale, required_approvers, status, created_at).
5. Add Slack credentials and set up an interactive approval action that calls the workflow’s Wait node resume webhook with an `approved` flag and approver identity.
6. Add Google Calendar credentials and select the target calendar where deployment holds should be created.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, Google Calendar, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
