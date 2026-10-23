# 🔬 Route client onboarding webhook events through RabbitMQ to Gmail alerts

> ⚡ **37 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Publish Subscribe Example - Webhook to RabbitMQ, RabbitMQ to GMAIL

## How it works

This workflow demonstrates a resilient publish/subscribe automation pattern using n8n, RabbitMQ, JSON Schema validation, and Gmail.

It contains two flows in the same workflow:

1. A publisher flow receives client onboarding JSON through a webhook.
2. The payload is validated against a JSON Schema.
3. If valid, the workflow publishes the event to RabbitMQ.
4. A subscriber flow listens to the RabbitMQ queue.
5. The subscriber validates the received event again.
6. If the message is valid, it prepares and sends a Gmail notification.
7. Invalid messages and processing failures are routed to a dead-letter/error queue.

This template is useful for client onboarding, accounting intake, document processing, form submissions, internal notifications, and event-driven workflow automation.

## Set up steps

1. Create or connect a RabbitMQ instance.
2. Create the following RabbitMQ resources:
   - Exchange: `client.onboarding.exchange`
   - Exchange type: `topic`
   - Main queue: `client.onboarding.queue`
   - Routing key: `client.onboarding.received`
   - Dead letter/error queue: `client.onboarding.dlq`

3. In n8n, configure your RabbitMQ credentials.
4. Replace the RabbitMQ credential placeholder with your own RabbitMQ credential.
5. Replace the JSON Schema Validator placeholder nodes with your preferred JSON Schema validation node or validation service.
6. Configure the Gmail credential.
7. Replace the Gmail placeholder node with the Gmail Send Email node.
8. Update the recipient email address in the “Prepare Gmail Email” node.
9. Test the publisher webhook with a sample client onboarding JSON payload.
10. Confirm the message is published to RabbitMQ and then consumed by the subscriber flow.
11. Confirm Gmail receives the formatted notification email.

## Required credentials

- RabbitMQ credentials
- Gmail OAuth2 credentials
- Optional JSON Schema validator community node or external validation service

## Example input JSON

```json
{
  "clientId": "C1001",
  "clientName": "John Smith",
  "email": "john.smith@example.com",
  "serviceType": "Individual Tax Return",
  "taxYear": 2025,
  "documents": [
    {
      "documentType": "Photo ID",
      "fileName": "john-smith-passport.pdf"
    },
    {
      "documentType": "PAYG Summary",
      "fileName": "john-smith-payg-summary.pdf"
    }
  ]
} 
```

## Resilience and Error Handling

This template includes:
- Validation before publish
- Validation after subscribe
- Correlation ID
- Schema version
- Dead-letter queue
- Email failure branch
- Invalid message branch
- RabbitMQ publish failure branch

Invalid or failed messages are routed to `client.onboarding.dlq`.

## 🔗 Nodes Used

Webhook, Gmail, RabbitMQ, RabbitMQ Trigger, Execution Data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
