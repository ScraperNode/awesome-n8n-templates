# 📋 Answer WooCommerce order and DHL tracking questions with GPT-4 chat

> ⚡ **40 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow serves a demo web page with an n8n chat widget and runs an OpenAI-powered support agent that looks up WooCommerce orders and DHL tracking details by calling the same workflow as a tool.

## How it works
1. Serves a demo HTML page via a webhook that embeds the n8n Chat widget configured to start a chat session.
2. Triggers a new conversation when the chat widget connects and provides a customer email (mocked in this template) as session metadata.
3. Uses an OpenAI (GPT-4) chat model with short-term memory to answer order-related questions and decide when to fetch live order data.
4. Calls the same workflow as a tool with the customer email (and optional comma-separated order IDs) to retrieve matching WooCommerce orders.
5. Looks up the WooCommerce customer by email, fetches their orders, and extracts shipment tracking metadata from each order.
6. For orders with DHL tracking numbers, queries the DHL API for current shipment status, then merges tracking results back into the order data.
7. Returns a JSON response containing the customer’s orders and any available DHL tracking details to the agent for use in the chat reply.

## Setup
1. Add a WooCommerce API credential and update the store URL used for the WooCommerce orders request.
2. Add an OpenAI API credential for the GPT-4 chat model.
3. Add a DHL API credential for shipment tracking lookups.
4. If you use the demo page, replace the chat widget’s `webhookUrl` in the embedded HTML with your n8n Chat Trigger URL.
5. If you pass customer emails via widget metadata, enable the decrypt step and replace the hardcoded AES password in the encrypt/decrypt code with a securely stored secret.

## 🔗 Nodes Used

Send Email, HTTP Request, ClickUp, Zoom, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
