# ⚙️ Analyze alerts from Alertmanager and send diagnostic reports to Slack

> ⚡ **38 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Overview
This workflow helps automatically analyze alerts occurring in the infrastructure and suggest solutions even before the on-duty engineer sees the alert.
## How It Works
The workflow receives an alert from Alertmanager via Webhook.
The variables required for operation are set.
A prompt is prepared for the agent containing only the data necessary for analysis.
The agent performs diagnostics as described in the system prompt. During operation, it can access various systems via MCP to obtain additional information.
A message in a Slack channel corresponding to the processed alert is found.
A report is sent to the Slack thread.
## How to Use
Generate webhook credentials and use them in Alertmanager.
Add the alert fingerprint to the Slack message template.
Set variables in the SetVars node.
Add your own rules and recommendations to the system prompt.
Run MCP servers.
Choose the Slack channel with alerts.

## 🔗 Nodes Used

Slack, Webhook, AI Agent, OpenAI Chat Model, Qdrant Vector Store, Embeddings Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
