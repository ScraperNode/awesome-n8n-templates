# ⚡ Receive updates of the position of the ISS every minute

> ⚡ **619 views** · ⚡ [Personal Productivity](../)

## Description

This workflow demonstrates the use of static data in n8n. The workflow is built on the concept of polling.

![workflow-screenshot](fileId:371)

**Cron node:** The Cron node triggers the workflow every minute. You can configure the time based on your use-case.

**HTTP Request node:** This node makes an HTTP Request to an API that returns the position of the ISS.

**Set node:** In the Set node we set the information that we need in the workflow. Since we only need the timestamp, latitude, and longitude we set this in the node. If you need other information, you can set them in this node.

**Function node:** The Function node, checks if the incoming data is similar to the data that was returned in the previous execution or not. If the data is different the Function node returns this new node, otherwise, it returns a message 'No New Items'. The data is also stored as static data with the workflow.

Based on your use-case, you can build the workflow further. For example, you can use it send updates to Mattermost or Slack

## 🔗 Nodes Used

Cron, Function, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
