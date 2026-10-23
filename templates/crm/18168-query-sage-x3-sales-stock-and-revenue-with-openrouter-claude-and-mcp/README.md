# 🤝 Query Sage X3 sales, stock, and revenue with OpenRouter Claude and MCP

> ⚡ **63 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow lets users ask natural-language sales, stock, and revenue questions about Sage X3, using an OpenRouter-hosted Claude model to select from predefined Sage X3 SQL tools, and optionally exposing the same tools through a Bearer-authenticated MCP endpoint for MCP clients.

## How it works
1. Receives a user question through the n8n chat interface.
2. Uses a Claude model via OpenRouter plus conversation memory to interpret the request and keep context for follow-up questions.
3. Resolves customer and item names into Sage X3 codes when needed by querying Sage X3 reference data.
4. Queries Sage X3 for stock levels, stock movements, sales order history, or revenue aggregates/details using parameterized SQL tools.
5. Formats a concise answer based only on the returned Sage X3 data, including currency and time horizon when relevant.
6. Exposes the same Sage X3 query and order-creation tools as an MCP server endpoint protected by Bearer authentication.

## Setup
1. Install the community node package `n8n-nodes-nx3` so the Sage X3 SOAP/SQL tools are available.
2. Create Sage X3 SOAP API credentials (server URL, folder, username, password) and select them on each Sage X3 tool node.
3. Add an OpenRouter API key credential for the language model used by the AI agent.
4. Configure a Bearer Auth credential and set your desired MCP path in the MCP trigger, then use the generated MCP URL in your MCP client.
5. Replace the `YOUR_X3_USER` placeholder used for sales order creation with the Sage X3 user code that should create orders, or remove the order-creation tool if you do not want write access exposed.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, OpenRouter Chat Model, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
