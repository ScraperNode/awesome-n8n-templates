# 🔧 Receive transfer updates from Wise and add to Airtable

> ⚡ **1,207 views** · 🔧 [Miscellaneous](../)

## Description

This workflow allows you to receive updates from Wise and add information of a transfer to a base in Airtable.

![workflow-screenshot](fileId:452)


**Wise Trigger node:** This node will trigger the workflow when the status of your transfer changes.

**Wise node:** This node will get the information about the transfer.

**Set node:** We use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We set the value of `Transfer ID`, `Date`, `Reference`, and `Amount` in this node.

**Airtable node:** This node will append the data that we set in the previous node to a table.

## 🔗 Nodes Used

Airtable, Wise, Wise Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
