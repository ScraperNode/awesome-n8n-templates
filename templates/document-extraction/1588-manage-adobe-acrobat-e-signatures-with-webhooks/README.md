# 🔬 Manage Adobe Acrobat e-signatures with webhooks

> ⚡ **1,062 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automatically manages Acrobat Sign signatures, respond with "intent" to Acrobat-Sign webhooks.

## Prerequisites

- [Adobe Acrobat Sign](https://www.adobe.com/sign.html) and [Sign webhook](https://helpx.adobe.com/sign/using/adobe-sign-webhooks-api.html)
- Basic knowledge of JavaScript

## Nodes

- [Webhook nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) trigger the workflow on new sign intents on a document
- [Respond to Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.respondToWebhook/) sets the response headers.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/) processes data returned by the previous node.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) sets the required values.

## 🔗 Nodes Used

Function, Start, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
