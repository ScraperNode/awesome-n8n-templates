# ⚙️ Incident response workflow - part 2

> ⚡ **1,721 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow is the second of three. You can find the other workflkows here:

1. [Incident Response Workflow - Part 1](https://n8n.io/workflows/353)
2. [Incident Response Workflow - Part 2](https://n8n.io/workflows/354)
3. [Incident Response Workflow - Part 3](https://n8n.io/workflows/355)


We have the following nodes in the workflow:
1. Webhook node: This trigger node listens to the event when the Acknowledge button is clicked.
2. PagerDuty node: This node changes the status of the incident report from 'Triggered' to 'Acknowledged' in PagerDuty.
3. Mattermost node: This node publishes a message in the auxiliary channel saying that the status of the incident report has been changed to Acknowledged.

## 🔗 Nodes Used

Webhook, Mattermost, PagerDuty

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
