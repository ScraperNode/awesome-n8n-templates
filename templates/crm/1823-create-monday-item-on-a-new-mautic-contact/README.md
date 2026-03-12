# 🤝 Create Monday item on a new Mautic contact

> ⚡ **1,300 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow creates a new item in a [Monday.com](http://monday.com/) board when a new contact is created in Mautic. Additional fields can be added to the workflow to send more data to [Monday.com](http://monday.com/).

## Prerequisites

- Monday account and [Monday credentials](https://docs.n8n.io/integrations/builtin/credentials/mondaycom/).
- Mautic account and [Mautic credentials](https://docs.n8n.io/integrations/builtin/credentials/mautic/).

## How it works

When a new contact is created in Mautic, the workflow creates a new item in the [Monday.com](http://monday.com/) board. By default the workflow will send the contact's email address to [Monday.com](http://monday.com/) and name the item after the contact's first and last name.

## Setup

This workflow requires that you set up a [Monday.com](http://monday.com/) board. To do so, follow the steps below:

1. In [Monday.com](http://monday.com/), create a new item board.
2. In the board, add the following columns:
    - Email (with type "Email")
    - Any other fields you require to the board.
3. If more columns are created, you will need to find out what their ID's are by turning on developer mode as explained in this [Monday article](https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s).
4. With these new IDs, you can add them to the `Create item` [Monday.com](http://monday.com/) node, this is explained further in the workflow as a sticky note.

## 🔗 Nodes Used

Mautic Trigger, Monday.com

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
