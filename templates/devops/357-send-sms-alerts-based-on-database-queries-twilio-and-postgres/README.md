# ⚙️ Send SMS alerts based on database queries (Twilio and Postgres)

> ⚡ **3,401 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow automatically queries a Postgres database to find outlier readings for which SMS notifications have not been sent.
This is Workflow 2 in the blog tutorial [Database activity monitoring and alerting](https://blog.n8n.io/database-monitoring-and-alerting-with-n8n/).

## Prerequisites

- A Postgres database set up and [credentials](https://docs.n8n.io/integrations/credentials/postgres/)
- A Twilio account and [credentials](https://docs.n8n.io/integrations/credentials/twilio/)

## Nodes

- [Cron node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.cron/) triggers the workflow every minute, so the database is queried at regular intervals.
- [Postgres nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.postgres/) extract values from, and update values in the database.
- [Twilio node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.twilio/) sends an alert SMS about the outlier reading to a specified phone number.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) sets the notification value to *true*.

## 🔗 Nodes Used

Cron, Postgres, Twilio

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
