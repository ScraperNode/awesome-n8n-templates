# ⚒️ Paginate Shopify products with GraphQL cursor-based navigation

> ⚡ **560 views** · ⚒️ [Engineering](../)

## Description

## Shopify GraphQL cursor loop

Many Shopify GraphQL queries have the ability to return a cursor which you can loop over, however the N8N GraphQL node does not natively have the ability to fetch pages.  

This simple 3 node workflow displays how to setup a cursor to fetch all items in a collection. 

Note : The pageSize in the "Shopify, products" node is set to 5 to illustrate how querying by cursor works. In production set this to a much larger value. 

Also, Update the Endpoint in GraphQL node to reflect your Shopify store.

## 🔗 Nodes Used

GraphQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
