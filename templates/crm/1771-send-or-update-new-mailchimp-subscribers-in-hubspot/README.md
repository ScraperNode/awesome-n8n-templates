# 🤝 Send or update new Mailchimp subscribers in HubSpot

> ⚡ **1,222 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow sends new Mailchimp subscribers to HubSpot as new or updated contacts. 

## Prerequisites
- Mailchimp account and [Mailchimp credentials](https://docs.n8n.io/integrations/builtin/credentials/mailchimp/)
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/)

## How it works
1. Cron node triggers this workflow every day at 7:00.
2. Mailchimp node searches for new subscribers.
3. New Mailchimp subscribes get sent to HubSpot.
3. HubSpot node either updates the existing contact or adds a new one to the pipeline.

## 🔗 Nodes Used

Cron, Function Item, Start, Mailchimp, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
