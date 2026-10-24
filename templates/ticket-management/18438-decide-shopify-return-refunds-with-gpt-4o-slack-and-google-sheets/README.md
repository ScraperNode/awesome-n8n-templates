# 🎫 Decide Shopify return refunds with GPT-4o, Slack, and Google Sheets

> ⚡ **11 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives Shopify return/RMA requests via webhook, fetches order details from the Shopify Admin API, uses OpenAI (GPT-4o) to decide whether to approve, review, or deny the refund, then posts exceptions to Slack, logs all RMAs to Google Sheets, and responds with the decision.

## How it works
1. Receives a POST webhook request containing a return request with an order ID and reason.
2. Calls the Shopify Admin API to fetch the related order (and any included customer context) for decisioning.
3. Computes basic return metrics such as days since order creation, order total, and the customer’s historical return rate.
4. Sends the return details and computed metrics to OpenAI (GPT-4o) to produce a structured JSON decision with refund type, rationale, and fraud risk.
5. Routes the request based on the AI decision, issuing a refund in Shopify for auto-approved cases or posting the case to a Slack #returns-review channel for manual review/denial.
6. Appends the outcome and request details to a Google Sheets “RMA Log” sheet and returns the decision as JSON in the webhook response.

## Setup
1. Configure your return portal or Shopify app to send return requests to the workflow’s webhook URL (path: /shopify-return) with at least order_id and reason.
2. Add Shopify Admin API authentication to the HTTP requests and replace https://your-store.myshopify.com with your store domain.
3. Add an OpenAI credential and ensure the OpenAI node is allowed to call the GPT-4o model.
4. Add a Slack credential and set up/confirm the target channel #returns-review.
5. Add a Google Sheets credential, replace REPLACE_WITH_SHEET_ID with your spreadsheet ID, and ensure a sheet/tab exists for the “RMA Log” destination.

## Requirements
- Shopify Admin API Access: An active Shopify store with a Custom App created to generate the necessary API credentials and permissions for reading orders and issuing refunds
OpenAI Account: An active OpenAI account with API credits and permissions to access the GPT-4o model.
Slack Workspace: Admin or integration permissions in a Slack workspace to connect n8n and post to a dedicated channel (e.g., #returns-review).
Google Account: A Google account to authenticate the Google Sheets node and an existing spreadsheet to act as the RMA log
Webhook Trigger Source: A custom frontend return portal, third-party app, or custom code on your storefront capable of capturing the customer's return request and sending the initial POST payload (order_id and reason) to the n8n webhook URL.

## Customization
- AI Policy Alignment: You can easily customize the prompt inside the OpenAI node to perfectly match your store's unique return policies (e.g., strict 14-day windows, final sale item exclusions, or VIP customer exceptions).
- Routing Logic: The workflow can be modified to automatically deny high-risk fraudulent returns instead of sending them to manual review, or you can add secondary approval steps for high-value orders.
- Notification Channels: If your team doesn't use Slack, the Slack node can be seamlessly swapped out for Microsoft Teams, Discord, or an email node (like Gmail/SendGrid).
- Expanded Data Logging: You can add additional columns to your Google Sheet (such as customer email, specific SKUs, or detailed AI reasoning) and map those extra data points from the Shopify API directly into the Sheets node.

## Additional info
API Costs: Keep in mind that processing every return request through GPT-4o will incur OpenAI API usage costs. Monitor your volume and adjust to a smaller model (like gpt-4o-mini) if cost becomes a concern.

Testing Recommendation: It is highly recommended to thoroughly test this workflow using test orders or a Shopify development store before pushing it live to production. This ensures the AI makes accurate decisions and prevents accidental real-world refunds.

Customer Communication: This workflow currently returns the decision to the webhook source. You can easily extend this automation by adding an email node at the end of the flow to automatically notify the customer of the approved or denied outcome.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
