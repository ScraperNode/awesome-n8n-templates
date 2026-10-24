# 🤝 Sync Shopify customers with Cegid Y2 on create or update

> ⚡ **32 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives Shopify customer create/update webhooks and syncs the customer record to CEGID Y2 by creating the customer when missing or updating the existing customer when CEGID reports a duplicate.

## How it works
1. Receives a POST webhook from Shopify when a customer is created or updated.
2. Builds a CEGID Y2 customer payload with identifiers, tax/currency details, and the default store/workspace settings.
3. Formats the customer address and chooses whether to send individual or company contact details based on whether a company name is present.
4. Sends the assembled payload to CEGID Y2 to create the customer.
5. If CEGID returns a “customer already exists” error, extracts the existing CEGID customer ID from the error message and sends a PATCH request to update that customer in CEGID.
6. If the create request fails for any other reason, stops the workflow and surfaces the CEGID error.

## Setup
1. In Shopify, create a customer webhook for create/update events and point it to this workflow’s webhook URL, matching the allowed shop domain.
2. Add CEGID Y2 HTTP Basic Auth credentials and ensure the API user has permission to create and update customers.
3. Update the CEGID API base URL, workspace, default creation store, and tax system values used to build the requests.

## Additional info
This workflow only syncs the data available in the Shopify webhook payload. Any customer fields not included in the webhook (or not sent by Shopify for a given event) will not be synced to CEGID.

## 🔗 Nodes Used

HTTP Request, Webhook, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
