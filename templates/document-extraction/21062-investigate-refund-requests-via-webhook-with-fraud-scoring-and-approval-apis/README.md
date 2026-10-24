# 🔬 Investigate refund requests via webhook with fraud scoring and approval APIs

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives refund requests via webhook, calculates an internal fraud risk score, calls external HTTP endpoints for fraud checking and multi-level approvals, attempts to process or reject the refund, and returns a final decision with an audit trail.

## How it works
1. Receives a POST refund investigation payload through an n8n webhook.
2. Validates required fields (like paymentId, amount, and customerId) and calculates an internal fraud risk score to determine whether Level 1 and Level 2 approvals are required.
3. Calls an external fraud/risk scoring HTTP endpoint and captures the response status for the decision record.
4. Sends the case to a Level 1 approver endpoint and then, if required, to a Level 2 approver endpoint.
5. Calls a processing endpoint intended to execute the refund or record a rejection at the payment gateway.
6. Aggregates the fraud-check, approval, and processing results into a final approve/reject status with an audit trail and returns it in the webhook response.

## Setup
1. Configure the source system to send a POST request to the workflow webhook URL at `/refund-investigation`.
2. Replace the placeholder httpbin.org URLs in the workflow code with your real fraud scoring service, Level 1 approver, Level 2 approver, and payment/refund processing endpoints.
3. If your endpoints require authentication, add the needed HTTP Request credentials/headers (for example, API keys or OAuth2) to the HTTP Request steps.
4. Ensure the incoming payload includes `paymentId`, `amount`, and `customerId` (and optionally `refundId`, `reason`, `daysSincePurchase`, and `previousRefunds`) so validation and risk scoring work as expected.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
