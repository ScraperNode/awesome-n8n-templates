# ⚒️ API queries data from GraphQL

> ⚡ **5,230 views** · ⚒️ [Engineering](../)

## Description

![workflow-screenshot](fileId:26)

Simpe API which queries the received country code via GraphQL and returns it.

Example URL: [https://n8n.exampl.ecom/webhook/1/webhook/webhook?code=DE](https://n8n.exampl.ecom/webhook/1/webhook/webhook?code=DE)

1. Receives country code from an incoming HTTP Request
1. Reads data via GraphQL
1. Converts the data to JSON
1. Constructs return string

## 🔗 Nodes Used

Function, Webhook, GraphQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
