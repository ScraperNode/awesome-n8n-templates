# 📊 Create an event in PostHog when a request is made to a webhook URL

> ⚡ **1,389 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automatically creates an event in PostHog when a request is made to a webhook URL.

## Prerequisites

- A PostHog account and [credentials](https://docs.n8n.io/integrations/credentials/posthog/)

## Nodes

- [Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) triggers the workflow when a URL is accessed.
- [PostHog node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.posthog/) creates a new event in PostHog.

## 🔗 Nodes Used

Webhook, PostHog

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
