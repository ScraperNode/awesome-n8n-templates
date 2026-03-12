# ⚙️ Send structured logs to BetterStack from any workflow using HTTP request

> ⚡ **933 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Send structured logs to BetterStack from any workflow using HTTP Request

### Who is this for?

This workflow is perfect for **automation builders, developers, and DevOps teams** using n8n who want to send structured log messages to [BetterStack Logs](https://betterstack.com/logs). Whether you're monitoring mission-critical workflows or simply want centralized visibility into process execution, this reusable log template makes integration easy.

### What problem is this workflow solving?

Logging failures or events across multiple workflows typically requires duplicated logic. This workflow solves that by acting as a **shared log sender**, letting you forward consistent log entries from any other workflow using the **Execute Workflow** node.

### What this workflow does

- Accepts `level` (e.g., "info", "warn", "error") and `message` fields via `Execute Workflow Trigger`
- Sends the structured log to your BetterStack ingestion endpoint via **HTTP Request**
- Uses **HTTP Header Auth** for secure delivery
- Includes a **manual trigger** for testing and a sample call to demonstrate usage
- Comes with clear sticky notes to help you get started

### Setup

1. Copy your BetterStack Logs ingestion URL.
2. Create a **Header Auth credential** in n8n with your `Authorization: Bearer YOUR_API_KEY`.
3. Replace the URL in the HTTP Request node with your BetterStack endpoint.
4. Optionally modify the test data or log levels for custom scenarios.
5. Use `Execute Workflow` in any of your workflows to send logs here.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
