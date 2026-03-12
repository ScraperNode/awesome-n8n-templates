# 🤝 Generate dynamic sales pipeline metrics for Slack using Airtable

> ⚡ **90 views** · 🤝 [CRM & Sales Operations](../)

## Description

## This n8n template generates a dynamic weekly sales report from Airtable and sends it to Slack. It calculates key sales metrics like total pipeline value, weighted pipeline (based on deal stage), top deal, closed revenue, and win rate.. all formatted in a clean Slack message.

## How it works

A schedule trigger starts the workflow (e.g., every Monday). It fetches deal data from Airtable, splits open vs closed deals, calculates all metrics with JavaScript, and formats the output. The message is then sent to Slack using Markdown for readability.

## How to use

Update the Airtable credentials and select your base and table with fields:
- Deal Name, Value, Status, etc.
Set the Slack channel in the final node to your preferred sales or ops channel.

## Requirements
- Airtable base with relevant deal data (see field structure)
- Slack webhook or token for sending messages

## Customising this workflow

You can adapt the logic to other CRMs like Salesforce or HubSpot, add charts, or tweak stage weights. You can also change the schedule or add filters (e.g., by rep or region).

## 🔗 Nodes Used

Airtable, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
