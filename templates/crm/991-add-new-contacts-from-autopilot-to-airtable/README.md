# 🤝 Add new contacts from Autopilot to Airtable

> ⚡ **606 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow allows you to receive updates when a new contact is added in Autopilot and add them to a base in Airtable.

![workflow-screenshot](fileId:450)

**Autopilot Trigger node:**  The Autopilot Trigger node will trigger the workflow when a new contact is added in Autopilot.

**Set node:** We use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.

**Airtable node:** This node will store the data coming from the previous node in a table in Airtable.

## 🔗 Nodes Used

Airtable, Autopilot Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
