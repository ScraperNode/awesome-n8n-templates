# 📱 Get top 5 products on Product Hunt every hour

> ⚡ **5,259 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow gets the top 5 products from Product Hunt and shares them on the Discord server.

![workflow-screenshot](fileId:556)

**Cron node:** This node triggers the workflow every hour. Based on your use case, you can update the node to trigger the workflow at a different time.

**GraphQL node:** This node makes the API call to the [Product Hunt GraphQL API](https://api.producthunt.com/v2/docs). You will need an API token from Product Hunt to make the call.

**Item Lists node:** This node transforms the single item returned by the previous node into multiple items.

**Set node:** The Set node is used to return only the name, description, and votes of the product.

**Discord node:** This node is used to send the top 5 products to the Discord server.

## 🔗 Nodes Used

Cron, Discord, GraphQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
