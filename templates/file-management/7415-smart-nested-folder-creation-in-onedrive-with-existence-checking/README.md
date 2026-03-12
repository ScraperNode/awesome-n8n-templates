# 📁 Smart nested folder creation in OneDrive with existence checking

> ⚡ **565 views** · 📁 [File Management](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works

- It creates a nested folder in your OneDrive's My Files
- You could be creating folders like:

```
Foobar
Foobar/Barfur
Foobar/Barfur/Furbar
```

Workflow checks if any of the folders in the path exists and created only the ones that don't exist.

The usual case it to use it in your other workflows and execute it as Sub-workflow.

## Requirements

- `n8n-nodes-datastore` Community node
- Microsoft Drive account credential

## 🔗 Nodes Used

Microsoft OneDrive, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
