# 🎣 Validate emails in a table using Mailcheck

> ⚡ **1,805 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow allows you to validate emails stored in a table using the Mailcheck node.

![workflow-screenshot](fileId:485)

**Airtable node:** This node will list all the records from a table. Based on your use case, you might want to replace this node.

**Mailcheck node:** This node will check the emails that got returned by the previous node.

**Set node:** We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.

**Airtable1 node:** This node will update the Valid field in the table. Based on your use case, you might want to replace this node.

## 🔗 Nodes Used

Airtable, Mailcheck

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
