# 🤝 Resolve ecommerce order exceptions with Anthropic Claude and Slack

> ⚡ **3 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives order exception events via a webhook, gathers order/customer/inventory context from your OMS APIs, asks Anthropic Claude to select a single approved resolution action, and then executes that action via payment, shipping, or OMS APIs or escalates to Slack, with pre/post execution logging.

## How it works
1. Receives an order exception payload via a webhook (or a manual test payload).
2. Fetches order details, customer profile/history, and inventory/substitute SKU options from your OMS and related APIs and combines them into a single context.
3. Sends the exception context to Anthropic Claude and asks it to return one action from a fixed allow-list with the required parameters.
4. Validates and, if needed, overrides the AI decision based on hard policies (allowed actions, fraud flag, approval thresholds, and refund/credit limits).
5. Logs the approved/overridden decision before execution and routes to the matching executor to call the payment API, carrier/shipping API, or OMS API, or escalates the case to a Slack channel.
6. Merges the execution outcome, records the post-execution result, and notifies the customer via an OMS notification endpoint unless the case is escalated.

## Setup
1. Add HTTP Header Auth credentials for your OMS/order API, customer API, inventory API, payment processor API, carrier/shipping API, and the Anthropic API.
2. Add Slack credentials and set the target escalation channel ID in the configuration values.
3. Update the configuration values for API base URLs, audit log sheet ID, and policy limits (refund/credit caps and human-approval threshold).
4. If using the webhook trigger, copy the webhook URL and configure your OMS/order platform to POST exception events to it.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
