# ⚒️ Manage incident reporting in PagerDuty and CrateDB

> ⚡ **1,034 views** · ⚒️ [Engineering](../)

## Description

This workflow automatically monitors the functionality of a factory. The workflow logs machine data coming from factory sensors in a CrateDB database, generates an incident report in PagerDuty, and notifies the responsible staff members when the temperature of a machine crosses the threshold value.

This workflow builds on a [workflow that generates factory data](https://n8n.io/workflows/608).

Read more about this use case and how to build both workflows with step-by-step instructions in the blog post [*How to automate your factory's incident reporting*](https://n8n.io/blog/learn-to-automate-your-factorys-incident-reporting-a-step-by-step-guide/).

## Prerequisites

- A PagerDuty account and [credentials](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.pagerduty/)
- AMQP, an ActiveMQ  connection, and [credentials](https://docs.n8n.io/integrations/credentials/amqp/)
- A CrateDB instance running locally or on a server, and [credentials](https://docs.n8n.io/integrations/credentials/cratedb/).

## Nodes

- [AMQP Trigger node](https://docs.n8n.io/integrations/trigger-nodes/n8n-nodes-base.amqptrigger/) starts the workflow.
- [IF node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filters sensor values higher than 50°C.
- [PagerDuty node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.pagerduty/) creates an incident in the account.
- [Set nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the required incident information and sensor data, respectively.
- [CrateDB nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.cratedb/) ingest the information data and machine sensor data, respectively.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/) converts degrees from Celsius to Fahrenheit.

## 🔗 Nodes Used

Function, AMQP Trigger, PagerDuty, CrateDB

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
