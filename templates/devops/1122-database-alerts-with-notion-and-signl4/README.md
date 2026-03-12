# ⚙️ Database alerts with Notion and SIGNL4

> ⚡ **975 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Objective
In industry and production sometimes machine data is available in databases. That might be sensor data like temperature or pressure or just binary information.
In this sample flow reads machine data and sends an alert to your SIGNL4 team when the machine is down. When the machine is up again the alert in [SIGNL4](https://www.signl4.com/) will get closed automatically.
## Setup
We simulate the machine data using a Notion table.

![image.png](fileId:511)
When we un-check the Up box we simulate a machine-down event. In certain intervals n8n checks the database for down items. If such an item has been found an alert is send using SIGNL4 and the item in Notion is updates (in order not to read it again).

![workflow-screenshot](fileId:509)

Status updates from SIGNL4 (acknowledgement, close, annotation, escalation, etc.) are received via webhook and we update the Notion item accordingly.

This is how the alert looks like in the [SIGNL4](https://www.signl4.com/) app.

![image.png](fileId:510)

The flow can be easily adapted to other database monitoring scenarios.

## 🔗 Nodes Used

Function, Interval, Start, Webhook, SIGNL4, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
