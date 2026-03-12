# ⚒️ Linking NocoDB records via API 🔗

> ⚡ **1,064 views** · ⚒️ [Engineering](../)

## Description

**How it works:**
The n8n flow grabs the needed IDs, fetches the current links, adds your new one, and sends a single HTTP request to NocoDB to update the record’s linked entries.

**Set up steps:**

* Plan for 10 minutes setup if you’re already running n8n and NocoDB.
* You’ll need to copy/paste table IDs, set up your HTTP node, and test once.
* No coding, just copy IDs.

## 🔗 Nodes Used

HTTP Request, NocoDB

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
