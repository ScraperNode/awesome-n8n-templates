# ⚒️ Orchestrate multi-store order allocation with OpenAI, Postgres, and Slack

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives new order webhooks, uses OpenAI to plan and execute inventory reservations across multiple stores via HTTP APIs, logs allocation decisions to Postgres, and either auto-confirms the order in an OMS or requests a manual approval in Slack for partial/failed fulfillment.

## How it works
1. Receives a POST webhook for a new order containing the order ID, customer ID, line items, and optional candidate stores.
2. Builds an order-scoped idempotency key and checks Postgres to ignore duplicate deliveries for orders that were already processed.
3. Uses an OpenAI agent with HTTP tools to check per-store stock, respect rate limits, reserve inventory idempotently, and release reservations when a multi-store plan must be rolled back.
4. Parses the agent’s JSON output and logs the allocation plan, reservations, verdict, and any shortfalls to Postgres for audit.
5. If the agent verdict is to confirm, sends the allocation plan to the OMS confirmation endpoint to auto-confirm the order.
6. If the order needs review, posts a shortfall summary and allocation details to a Slack channel, waits for an ops decision, and then confirms or cancels the order via the OMS API.

## Setup
1. Create Postgres tables (for example, `inventory_orders` and `inventory_reservations`) and add Postgres credentials, then update table/schema names if your database differs.
2. Add an OpenAI credential and ensure the selected chat model (gpt-4.1) is available in your OpenAI account.
3. Configure the inventory middleware/store API endpoints and authentication used by the HTTP tools that check stock, create reservations, release reservations, and read rate-limit status.
4. Add Slack credentials and set (or create) the target channel (for example, `#inventory-ops-review`) for manual review notifications.
5. Update the OMS API base URL and authentication in the HTTP request nodes for order confirm/cancel, and copy the webhook URL from n8n into your order source system to send new-order events.
6. If you use the built-in manual resolution step, share its resume webhook URL with your ops tooling so it can post `opsApproved=true/false` to continue the workflow.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
