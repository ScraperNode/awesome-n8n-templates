# ⚙️ Manage custom incident response in PagerDuty and Jira

> ⚡ **3,063 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow automatically follows the steps in a custom incident response playbook and manages incidents in PagerDuty, Jira tickets, and notifies the on-call team in Mattermost.

This workflow consists of three sub-workflows, each automating specific steps in the playbook. Read more about this use case and learn how to set up the workflows step-by-step in the blog tutorial [*How to automate every step of an incident response workflow*](https://n8n.io/blog/automated-incident-response-workflow/).

## Prerequisites

- A PagerDuty account and [credentials](https://docs.n8n.io/integrations/credentials/pagerduty/)
- A Mattermost account and [credentials](https://docs.n8n.io/integrations/credentials/mattermost/)
- A Jira account and [credentials](https://docs.n8n.io/integrations/credentials/jira/)

## Nodes

- [Webhook nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) trigger the workflows when an incident is created in PagerDuty, and when the incidedent is acknowledged and resolved.
- [Mattermost nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.mattermost/) create an auxiliary channel for the on-call team to discuss the incident with buttons to acknowledge the incident and mark it as resolved.
- [PagerDuty nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.pagerduty/) update the status of the incident.
- [Jira nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.jira/) create an issue about the incident and update its status when it's resolved.

## 🔗 Nodes Used

Webhook, Mattermost, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
