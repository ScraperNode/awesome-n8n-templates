# 🔧 Handle GDPR data deletion requests with Slack

> ⚡ **2,064 views** · 🔧 [Miscellaneous](../)

## Description

This workflow automatically deletes user data from different apps/services when a specific slash command is issued in Slack.

Watch this [talk and demo](https://www.youtube.com/watch?v=jG2aCOF0ICg&t=910s) to learn more about this use case. The demo uses Slack, but [Mattermost is Slack-compatible](https://docs.mattermost.com/developer/integration-faq.html#what-does-slack-compatible-mean), so you can also connect Mattermost in this workflow.

![workflow-screenshot](fileId:617)

## Prerequisites

- Accounts and [credentials](https://docs.n8n.io/integrations/credentials/) for the apps/services you want to use.
- Some basic knowledge of JavaScript.

## Nodes

- [Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) triggers the workflow when a [Slack slash command](https://slack.com/intl/en-gb/help/articles/360001623607-Create-commands-for-Slack-apps) is issued.
- [IF nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) confirm Slack's verification token and verify that the data has the expected format.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) simplifies the payload.
- [Switch node](https://docs.n8n.io/nodes/n8n-nodes-base.switch/) chooses the correct path for the operation to perform.
- [Respond to Webhook nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.respondToWebhook/) send responses back to Slack.
- [Execute Workflow nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.executeWorkflow/) call sub-workflows tailored to deleting data from each individual service.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/), [Crypto node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.crypto/), and [Airtable node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.airtable/) generate and store a log entry containing a hash value.
- [HTTP Request node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.httpRequest/) sends the final response back to Slack.

## 🔗 Nodes Used

Airtable, Function, HTTP Request, Start, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
