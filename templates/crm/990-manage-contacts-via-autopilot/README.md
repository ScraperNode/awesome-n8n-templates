# 🤝 Manage contacts via Autopilot

> ⚡ **611 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow allows you to create a new list, add a new contact to that list, update the contact, and get all contacts in the list using the Autopilot node.

![workflow-screenshot](fileId:449)

**Autopilot node:** This node will create a new list called `n8n-docs` in Autopilot.

**Autopilot1 node:** This node creates a new contact and adds it to the list created in the previous node.

**Autopilot2 node:** This node updates the information of the contact that we created in the previous node.

**Autopilot3 node:** This node returns all the contacts of the `n8n-docs` list that we created using the Autopilot node.

## 🔗 Nodes Used

Autopilot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
