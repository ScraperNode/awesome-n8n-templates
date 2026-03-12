# 🤝 Create or update Mautic contact on a new Calendly event

> ⚡ **1,087 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow creates or updates a Mautic contact when a new event is scheduled in Calendly. The first name and email address are the only two fields that get updated.

# Prerequisites

- Calendly account and [Calendly credentials](https://docs.n8n.io/integrations/builtin/credentials/calendly/).
- Mautic account and [Mautic credentials](https://docs.n8n.io/integrations/builtin/credentials/mautic/).

# How it works

1. Triggers on a new event in Calendly.
2. Creates a new contact in Mautic if the email address does not exist in Mautic.
3. Updates the contact's first name in Mautic if the email address exists in Mautic.

## 🔗 Nodes Used

Mautic, Calendly Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
