# 💬 Recover abandoned Shopify carts with Gmail, WhatsApp, and Slack alerts

> ⚡ **93 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow listens for Shopify checkout creations, waits 15 minutes, checks whether the checkout converted into an order, and if not sends a recovery message via Gmail and WhatsApp, while reporting any workflow errors to a Slack channel.

## How it works
1. Triggers in Shopify when a checkout is created.
2. Waits 15 minutes to give the customer time to complete the purchase.
3. Calls the Shopify Admin Orders API to check whether an order exists for the checkout token.
4. Stops if an order is found, indicating the cart converted.
5. If no order is found, compiles the customer email, phone, cart item summary, discount code, and recovery URL from the Shopify checkout data.
6. Sends a personalized recovery email through Gmail and a recovery message through WhatsApp using the same discount code and checkout link.
7. If the workflow errors at any point, posts the error details to Slack for operational alerting.

## Setup
1. Connect your Shopify Admin credentials for the Shopify trigger and ensure it can receive the `checkouts/create` topic.
2. Configure the HTTP request to your store by replacing `YOUR_STORE` (or ensuring the checkout payload provides `domain`) and add Shopify Admin API authentication for `/admin/api/2024-01/orders.json`.
3. Connect your Gmail OAuth credentials and update the sender/subject/body content as needed.
4. Connect your WhatsApp Business credentials, set the `phoneNumberId`, and ensure the checkout payload contains a valid customer phone number.
5. Connect your Slack OAuth credentials and replace the target `channelId` for ops alerts.
6. Update the wait duration and the hardcoded discount code (`COMEBACK10`) to match your recovery strategy.

## 🔗 Nodes Used

HTTP Request, Slack, Shopify Trigger, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
