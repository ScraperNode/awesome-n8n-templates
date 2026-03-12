# 🎣 Transf meeting booking into Notion's Task with verified information

> ⚡ **1,017 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow allows you to transform a meeting booking into Notion's task in order to centralize all of your activity.

![workflow-screenshot](fileId:564)

- **Calendly trigger**: This node triggers the workflow when a new event gets scheduled.

- **Dropcontact**: This node will find the verified email of the contact and enrich it to be able to contact him
- **Notion**: This node will create a new task in Notion using the information from the previous node.

## 🔗 Nodes Used

Calendly Trigger, Notion, Dropcontact

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
