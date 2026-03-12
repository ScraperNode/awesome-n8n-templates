# ⚒️ Build a full REST-API with n8n webhooks

> ⚡ **38 views** · ⚒️ [Engineering](../)

## Description

# What is it?
A clean, extensible **REST-style API routing template** for n8n webhooks with up to 3 path levels.

# How does it work?
1. Serves API routes via Webhooks with path variables

2. Normalizes incoming requests into "global" _REQUEST and _CFG nodes

3. Flexible routing with Switch-nodes based on path segments & request method

# Key features
- No setup required
- Supports multiple HTTP methods
- Global config via code node
- Separation of concern between config/request and implementation data flow
- Easy to extend

# Use cases
- Prototyping backend APIs via JSON-responses
- Serving interactive websites via HTML-nodes + TEXT responses

## 🔗 Nodes Used

Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
