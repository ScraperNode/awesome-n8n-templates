# ⚙️ Check if workflows contain build-in nodes that are not of the latest version

> ⚡ **2,891 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How it works
- it will return workflows that have buil-in nodes not of latest version with information of node name, type, current version and latest version for that type

## Set up steps:
- You need to have n8n credentials set, you can get n8n API key under settings
- set your instance base URL in "instance base url" node

### Disclaimar:
Only check build-in nodes, community nodes are not supported

## 🔗 Nodes Used

HTTP Request, n8n, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
