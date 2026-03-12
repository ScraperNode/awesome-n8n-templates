# ⚙️ Incident response workflow - Part 3

> ⚡ **2,046 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow is the third of three. You can find the other workflkows here:

1. [Incident Response Workflow - Part 1](https://n8n.io/workflows/353)
2. [Incident Response Workflow - Part 2](https://n8n.io/workflows/354)
3. [Incident Response Workflow - Part 3](https://n8n.io/workflows/355)

We have the following nodes in the workflow:
1. Webhook node: This trigger node listens to the event when the Resolve button is clicked.
2. PagerDuty node: This node changes the status of the incident report from Acknowledged to Resolved in PagerDuty.
3. Jira Software node: This node moves the incident issue to Done.
4. Mattermost node: This node publishes a message in the auxiliary channel mentioning that the incident has been marked as resolved in PagerDuty and Jira.
5. Mattermost node: This node publishes a message in the specified Incidents channel that the incident has been resolved by the on-call team.

## 🔗 Nodes Used

Webhook, Mattermost, Jira Software, PagerDuty

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
