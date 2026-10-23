# ⚡ Manage a self-hosted grocery list with webhooks and Data Tables

> ⚡ **46 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow hosts a simple, mobile-friendly grocery list web page in n8n and stores items in n8n Data Tables (default), PostgreSQL, or Google Sheets, letting you view the list, add items, and check items off via webhooks.

## How it works
1. Receives a GET request on the /groceries webhook, optionally using a store query parameter to filter the list.
2. Loads grocery items from the selected backend (n8n Data Tables, PostgreSQL, or Google Sheets) and groups them into unchecked and checked items.
3. Renders an HTML page with the current list, a store filter form, and forms to add new items and check off existing ones.
4. Responds to the GET request with the generated HTML page.
5. Receives a POST request on the /groceries/add webhook, writes the submitted item fields to the selected backend, and redirects back to the list page.
6. Receives a POST request on the /groceries/check webhook, marks the selected item as checked in the selected backend, and redirects back to the list page.
7. If a backend operation fails, returns a JSON error response with HTTP 500.

## Setup
1. Choose one storage backend by enabling only its nodes: n8n Data Tables (default), PostgreSQL, or Google Sheets.
2. For n8n Data Tables, run the manual setup trigger once to create the grocery_items table and then select that table in the three Data Table nodes.
3. For PostgreSQL, add a Postgres credential, enable the Postgres setup and Postgres backend nodes, run the setup trigger to create the grocery_items table, and select the credential in all Postgres nodes.
4. For Google Sheets, add a Google Sheets OAuth credential, enable the Google Sheets setup and backend nodes, run the setup trigger to create the spreadsheet, and select the created spreadsheet and sheet in all Sheets nodes.
5. Activate the workflow, copy the Production URL from the “View List (GET)” webhook, and bookmark it; keep the webhook URLs private because they have no built-in authentication.

## Requirements
- A running n8n instance. The default backend, n8n Data Tables, needs nothing else. 
-  The optional Google Sheets backend needs a Google Sheets credential, useful if you also want to edit the list as a spreadsheet
- The optional Postgres backend needs a Postgres credential.

## Customization
- Add fields like price or aisle to the form.
- Restyle the built-in CSS.
- Add Basic Auth in front of the webhooks if you want more than URL-based privacy.

## 🔗 Nodes Used

Google Sheets, Postgres, Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
