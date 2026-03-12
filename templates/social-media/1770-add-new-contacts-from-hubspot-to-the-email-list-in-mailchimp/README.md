# 📱 Add new contacts from HubSpot to the email list in Mailchimp

> ⚡ **1,644 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow adds new HubSpot contacts to the Mailchimp email list. 

## Prerequisites
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/)
- Mailchimp account and [Mailchimp credentials](https://docs.n8n.io/integrations/builtin/credentials/mailchimp/)

## How it works
1. Cron node triggers this workflow every day at 7:00.
2. HubSpot node searches for the new contacts created.
3. Mailchimp node creates a new contact in a certain audience and add a 'subscribed' status.

## 🔗 Nodes Used

Cron, Start, Mailchimp, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
