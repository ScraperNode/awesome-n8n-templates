# ⚙️ Monitor [PROD] workflows in real time with the n8n Public API dashboard

> ⚡ **5 views** · ⚙️ [DevOps & CI/CD](../)

## Description

A real-time monitoring dashboard for your n8n production workflows, accessible directly from the browser via webhook.

Tag any workflow with [PROD] and it will automatically appear on the dashboard showing:

→ Healthy vs error workflows
→ Success rate per workflow
→ Total errors and successes
→ Last error timestamp
→ 7-day error history chart

The dashboard auto-refreshes every 30 seconds. No external tools required — it uses only the n8n Public API.


![Captura de imagem_20260224_143620.png](fileId:4552)![Captura de imagem_20260224_143639.png](fileId:4553)

## How it works

When the webhook is triggered, the workflow:
1. Fetches all workflows tagged [PROD] via the n8n API
2. Retrieves the last 50 executions (success + error) for each workflow
3. Calculates metrics and renders a dark-themed HTML dashboard
4. Returns the dashboard directly in the browser

## Requirements

- n8n self-hosted (any version with Public API enabled)
- n8n API credential configured
- At least one workflow tagged [PROD]

## Setup

1. Enable the n8n Public API under Settings → API
2. Create an n8n API credential with your API key
3. Open the Config node and set your n8n base URL
4. Connect the credential to all HTTP Request nodes
5. Activate the workflow and open the webhook URL in your browser

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
