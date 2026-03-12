# 🧾 Send new Clockify invoice to Notion database

> ⚡ **1,085 views** · 🧾 [Invoice Processing](../)

## Description

This workflow sends a new Clockify invoice to a Notion database of your choosing when a new invoice is created in Clockify.

## Prerequisites

- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/).
- Clockify account.

## How it works

1. `On new invoice in Clockify` webhook node will trigger when a new invoice is created in Clockify. Setup is involved.
2. `Create database page` Notion node will create a database page with the information specified from the Clockify trigger. You can add additional fields if required by following the setup.

### Setup

This workflow requires that you set up a webhook in Clockify. Follow the steps below to set up the webhook:

1. Create a Clockify webhook by going to the [webhooks section in Clockify](https://app.clockify.me/webhooks).
2. Create the webhook specifying the "Invoice created" event and paste in the URL provided from `On new invoice in Clockify` webhook step.

You will also have to set up a Notion database:

1. In Notion, create a new database.
2. Add the following columns to the database:
    - Invoice number (renamed from "Name")
    - Issue date (with type "Date")
    - Due date (with type "Date")
    - Amount (with type "Number")
    - Add any other fields you require to the database.
3. Share the database to n8n.
4. By default, the workflow will fill all the fields provided above, except for any other additional fields you add.

## 🔗 Nodes Used

Webhook, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
