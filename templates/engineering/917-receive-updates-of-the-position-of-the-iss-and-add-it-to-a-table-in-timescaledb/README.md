# ⚒️ Receive updates of the position of the ISS and add it to a table in TimescaleDB

> ⚡ **666 views** · ⚒️ [Engineering](../)

## Description

This workflow allows you to receive updates about the positiong of the ISS and add it to a table in TimescaleDB.

![workflow-screenshot](fileId:398)

**Cron node:** The Cron node triggers the workflow every minute. You can configure the time based on your use-case.

**HTTP Request node:** This node makes an HTTP Request to an API that returns the position of the ISS. Based on your use-case you may want to fetch data from a different URL. Enter the URL in the ***URL*** field.

**Set node:** In the Set node we set the information that we need in the workflow. Since we only need the timestamp, latitude, and longitude we set this in the node. If you need other information, you can set them in this node.

**TimescaleDB node:** This node stores the information in a table named `iss`. You can use a different table as well.

## 🔗 Nodes Used

Cron, HTTP Request, TimescaleDB

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
