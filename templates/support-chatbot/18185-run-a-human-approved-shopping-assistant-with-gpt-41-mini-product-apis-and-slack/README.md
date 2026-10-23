# 💬 Run a human-approved shopping assistant with GPT-4.1-mini, product APIs and Slack

> ⚡ **3,411 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow powers a chat-based shopping assistant using OpenAI for conversation, an HTTP product-catalog search API for live item data, and a checkout/order API to place orders with explicit user approval, then posts the final order status to a Slack channel.

## How it works
1. Triggers from an n8n Chat Trigger (or a manual test run) when a user submits a shopping request.
2. Uses OpenAI (GPT-4.1-mini) with short-term memory and function calling to query a product-catalog search API for real-time price and availability before recommending up to three items.
3. Parses the agent’s structured JSON response into a reply, an optional product shortlist, and a purchase-intent signal with selected product and quantity.
4. If there is no purchase intent, returns the direct reply message; if there is purchase intent, pauses for the user to confirm the product selection via a resume webhook.
5. Pauses again for an explicit purchase approval via a second resume webhook, then submits the order to the store checkout API with the selected item, quantity, customer, payment method, and shipping details.
6. Waits for an asynchronous order-confirmation callback via a third resume webhook, then formats the order status and posts it to Slack.

## Setup
1. Add credentials for OpenAI, Slack, and HTTP Header Auth for both the product-catalog search API and the checkout/order API.
2. Update the configuration values for catalog and order base URLs, currency, customer ID, default shipping address, payment method ID, max budget, and the target Slack channel.
3. Copy the resume webhook URLs from the selection, approval, and order-confirmation wait steps and wire them into your chat UI buttons and your store/payment provider’s order-status callback.

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
