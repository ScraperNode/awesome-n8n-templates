# ⚙️ Analyze Alertmanager incidents and post diagnostic reports to Mattermost

> ⚡ **93 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Overview
This workflow helps automatically analyze alerts occurring in the infrastructure and suggest solutions even before the on-duty engineer sees the alert.
## How it work
1. Workflow receives alert from Alertmanager via Webhook.
1. The variables required for operation are set
1. Preparing a prompt for the agent containing only the data necessary for analysis
1. Optional step to deduplicating duplicate alerts
1. Getting the trigger condition
1. The agent performs diagnostics as described in the system prompt. During operation, it can access various systems via MCP to obtain additional information.
1. Search for a message in a Slack channel corresponding to a processed alert
1. Send report to Slack thread.
## How to use
1. Generate webhook credentials and use it in Alertmanager
2. Add Alert fingerprint into Slack message template
3. Set variables it SetVars node
4. Add your own Rules and recomendations to system promt
5 Run mcp servers
6. Choose Slack channel with alerts

## 🔗 Nodes Used

HTTP Request, Webhook, Mattermost, AI Agent, OpenAI Chat Model, Qdrant Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
