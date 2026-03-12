# ⚡ Send daily weather updates to a phone number via Plivo

> ⚡ **1,385 views** · ⚡ [Personal Productivity](../)

## Description

This workflow allows you to send daily weather updates via an SMS message using the Plivo node.

![workflow-screenshot](fileId:460)

**Cron node:** The Cron node will trigger the workflow daily at 9 AM.

**OpenWeatherMap node:** This node will return data about the current weather in Berlin. To get the weather updates for your city, you can enter the name of your city instead.

**Plivo node:** This node will send an SMS with the weather update, which was sent by the previous node.

## 🔗 Nodes Used

Cron, OpenWeatherMap, Plivo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
