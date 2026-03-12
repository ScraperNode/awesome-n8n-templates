# 🎫 Post unassigned Zendesk tickets to Slack

> ⚡ **984 views** · 🎫 [Ticket Management & Triage](../)

## Description

&gt; This has been updated to support the Query feature added to the Zendesk node in [0.144.0](0.144)

This workflow will post all New and Open tickets without an agent assigned to a Slack channel on a schedule.

![workflow-screenshot](fileId:550)

The function node is used in this example to merge multiple inputs into one output message which is then used as the Slack message.

The output in Slack will be similar to the below message, The "TICKET_ID" will be a link to the ticket.

&gt; **Unassigned Tickets**
[TICKET_ID](#) [STATUS] - TICKET_SUBJECT

**Usage**
Update the Cron schedule, The default value is 16:30 daily.
Update the Credentials in the Zendesk nodes
Update the Credentials and Channel in the Slack Node
Grab a coffee and enjoy!

**Zendesk Query**
In the Zendesk node we are using the query `assignee:none status&lt;pending` this returns all New and Open tickets with no assignee allowing us to remove the extra nodes.

## 🔗 Nodes Used

Cron, Function, Slack, Start, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
