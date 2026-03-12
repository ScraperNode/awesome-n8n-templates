# 🤝 Export new deals from HubSpot to Slack and Airtable

> ⚡ **1,845 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow is triggered when a new deal is created in HubSpot. Then, it processes the deal based on its value and stage.

The first branching follows three cases:

- If the deal is closed and won, a message is sent in a Slack channel, so that the whole team can celebrate the success.
- If a presentation has been scheduled for the deal, then a Google Slides presentation template is created.
- If the deal is closed and lost, the deal’s details are added to an Airtable table. From here, you can analyze the data to get insights into what and why certain deals don’t get closed.

The second branching follows two cases:

- If the deal is for a new business and has a value above 500, a high-priority ticket assigned to an experienced team member is created in HubSpot
- If the deal is for an existing business and has a value below 500, a low-priority ticket is created.

![workflow-screenshot](fileId:536)

## 🔗 Nodes Used

Airtable, Slack, HubSpot, HubSpot Trigger, Google Slides

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
