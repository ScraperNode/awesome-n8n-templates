# 🔧 Insert and retrieve data from a table in Stackby

> ⚡ **605 views** · 🔧 [Miscellaneous](../)

## Description

This workflow allows you to insert and retrieve data from a table in Stackby.

![workflow-screenshot](fileId:410)

**Set node:** The Set node is used to set the values for the name and id fields for a new record. You might want to add data from an external source, for example an API or a CRM. Based on your use-case, add the respective node before the Set node and configure your Set node accordingly.

**Stackby node:** This node appends data from the previous node to a table in Stackby. Based on the values you want add to your table, enter the column names in the ***Column*** field.

**Stackby1 node:** This node fetches all the data that is stored in the table in Stackby.

## 🔗 Nodes Used

Start, Stackby

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
