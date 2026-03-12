# 🤝 One-way sync Shopify customers to Baserow using GraphQL

> ⚡ **115 views** · 🤝 [CRM & Sales Operations](../)

## Description

This template extracts all customers from shopify using GraphQL and the shopify admin API and sync them into a Baserow table. 

Setup Notes
- Update the Endpoint in GraphQL node to reflect your Shopify store.
- In Baserow create a shopify database with a customer table in Baserow.
- Create columns in the Baserow customer table for first_name, last_name, and email.
- It takes about 1 second per row to insert.

## 🔗 Nodes Used

GraphQL, Baserow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
