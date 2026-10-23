# 🧾 Generate AR collection plans from overdue invoices with webhooks and HTTP APIs

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives an overdue-invoice collection request via webhook, enriches it with customer history, calls an AI endpoint to generate ranked collection actions, executes the primary action, logs the activity to an AR/CRM system, and returns a full collection plan and audit trail.

## How it works
1. Receives an accounts-receivable collection request via a POST webhook with invoice, customer, and overdue details.
2. Validates required fields, assigns a severity tier based on days overdue and balance, and prepares a customer context payload.
3. Calls an external HTTP endpoint to fetch the customer’s payment history and risk indicators.
4. Sends the enriched context to an external AI HTTP endpoint to generate a ranked list of personalized collection actions.
5. Calls an external HTTP endpoint to execute the primary recommended action (for example sending an email, creating a task, or initiating a call).
6. Logs the collection activity by calling an external AR/CRM HTTP endpoint.
7. Compiles the AI recommendations and execution results into a collection plan with status codes and next steps, then returns it in the webhook response.

## Setup
1. Configure the webhook endpoint URL (path: `/ar-collection`) in the system that submits overdue invoice/collection requests.
2. Replace the placeholder HTTP URLs (currently `httpbin.org`) with your real customer-history, AI action-generation, action-execution, and AR/CRM logging endpoints.
3. If your endpoints require authentication, add the required credentials/headers (for example API keys or OAuth tokens) to the HTTP request steps.
4. Ensure the webhook payload includes `invoiceId`, `customerId`, `email`, `amount`, and optionally `daysOverdue` and other context fields used for severity and action generation.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
