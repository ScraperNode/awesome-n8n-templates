# ⚒️ Build an endpoint to perform CRUD operations with multiple HTTP methods

> ⚡ **4,680 views** · ⚒️ [Engineering](../)

## Description

This n8n workflow template allows you to create a CRUD endpoint that performs the following actions:

- Create a new record
- Get a record
- Get many records
- Update a record
- Delete a record

This template is connected with Airtable but you can replace the Airtable nodes with anything you need to interact with (e.g. Postgres, MySQL, Notion, Coda...).

The template uses the n8n Webhook node setting 'Allow Multiple HTTP Methods' to enable multiple HTTP methods on the same node.

# Features

- Just two nodes to create 5 endpoints
- Use it with Airtable or replace the Airtable nodes for your own customization
- Add your custom logic exploiting all n8n's possibilities

# Workflow Steps

- **Webhook node**: exposes the endpoints to get many records and create a new record
- **Webhook (with ID) node**: exposes the endpoints to get, update, and delete a record. Due to a n8n limitation, this endpoint will have an additional code in the path (e.g. https://my.app.n8n.cloud/webhook/580ccc56-f308-4b64-961d-38323501a170/customers/:id). Keep this in mind when using these endpoints in your application
- **Various Airtable nodes**: execute various specific operations to interact with Airtable records

# Getting Started

To deploy and use this template:

1. Import the workflow into your n8n workspace
2. Customize the endpoint paths by tweaking the 'Path' parameters in the 'Webhook' and 'Webhook (with ID)' nodes (currently *customers*)
3. Set up your Airtable credentials by following [this guide](https://docs.n8n.io/integrations/builtin/credentials/airtable/) and customize the Airtable nodes by selecting your base, table, and the correct fields to update. *...or...* replace the Airtable nodes and connect the endpoint to any other service (e.g. Postgres, MySQL, Notion, Coda)


# How to use the workflow

1. Activate the workflow
2. Connect your app to the endpoints (production URLs) to perform the various operations allowed by the workflow

Note that the Webhook nodes have two URLs, one for testing and one for production. The testing URL is activated when you click on 'Test workflow' button and can't be used for production. The production URL is available after you activate the workflow. More info [here](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/#webhook-urls).

Feel free to get in touch with me if you have questions about this workflow.

## 🔗 Nodes Used

Airtable, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
