# 🔧 Manage transfers automatically in Wise

> ⚡ **1,118 views** · 🔧 [Miscellaneous](../)

## Description

This workflow allows you to create a quote and a transfer, execute the transfer and get the information of the transfer using the Wise node.

![workflow-screenshot](fileId:451)

**Wise node:** This node will create a new quote in Wise.

**Wise1 node:** This node will create a new transfer for the quote that we created in the previous node.

**Wise2 node:** This node will execute the transfer that we created in the previous node.

**Wise3 node:** This node will return the information of the transfer that we executed in the previous node.

## 🔗 Nodes Used

Wise

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
