# ⚙️ Triage DevOps incidents from Slack with GPT-4.1, Prometheus, Jira and Terraform

> ⚡ **27 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow listens for incident reports in Slack, uses an OpenAI agent with tool-calling to query Prometheus, Loki, and a vector-store RAG knowledge base, logs the analysis to PostgreSQL, and—after explicit human approval—creates a Jira or GitHub ticket, runs Terraform remediation, and verifies recovery via Prometheus and Grafana.

## How it works
1. Triggers when a new message is posted in the configured Slack incident-response channel.
2. Normalizes the incident details (text, channel, thread timestamp, reporter) and creates a session ID for thread-based memory.
3. Uses an OpenAI GPT-4.1 agent with session memory to investigate by calling Prometheus (metrics), Loki (logs), and a vector-store RAG search over past incidents as needed, returning a structured RCA in JSON.
4. Parses the agent’s JSON output and stores the incident analysis (root cause, confidence, evidence, remediation, risk level, and service) in a PostgreSQL `incidents` table.
5. If no concrete remediation is proposed, posts an investigation update back to Slack and stops.
6. If a remediation is proposed, posts an approval request to Slack and waits for a reviewer decision via a resume webhook.
7. When approved, creates an incident ticket in Jira or GitHub Issues, triggers a Terraform Cloud run to apply the remediation, re-queries Prometheus, adds a Grafana annotation, and posts a resolution summary to the original Slack thread.
8. When rejected, posts a rejection notice to Slack and stops.

## Setup
1. Connect Slack credentials for the Slack Trigger and messaging nodes, and set the target channel (default: `#incident-response`).
2. Add an OpenAI API credential for the GPT-4.1 chat model and configure the vector store used by the RAG search tool.
3. Update the Prometheus, Loki, and Grafana base URLs (and add any required auth headers/tokens) in the HTTP request nodes.
4. Add PostgreSQL credentials and create a public `incidents` table with columns matching the insert mapping used by the workflow.
5. Configure either Jira or GitHub credentials (project/issue type for Jira or owner/repo for GitHub) and set `ticketingSystem` to `jira` or `github` in the configuration step.
6. Add Terraform Cloud API authentication, replace `REPLACE_WITH_WORKSPACE_ID`, and configure Slack interactive Approve/Reject actions to call the workflow’s wait/resume webhook with a `reviewerApproved` boolean.

## 🔗 Nodes Used

GitHub, HTTP Request, Postgres, Slack, Jira Software, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
