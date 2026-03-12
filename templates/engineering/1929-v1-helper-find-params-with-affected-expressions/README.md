# ⚒️ v1 helper - find params with affected expressions

> ⚡ **1,134 views** · ⚒️ [Engineering](../)

## Description

## v1 Helper

ℹ️ This workflow is to be run **after upgrading to n8n v1**.

This workflow returns all locations where a node in an active workflow contains a parameter using an **expression extension affected by [v1 changes](https://github.com/n8n-io/n8n/pull/6435)**.

For every location, please check that the workflow still behaves as intended.

## 🔗 Nodes Used

n8n

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
