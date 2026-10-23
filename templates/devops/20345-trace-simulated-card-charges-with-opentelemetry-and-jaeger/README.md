# ⚙️ Trace simulated card charges with OpenTelemetry and Jaeger

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow simulates a card charge so you can send n8n's OpenTelemetry spans to a local Jaeger collector and compare a successful run with a deliberate failure. It needs no LLM credential. It is Exercise 3 from the n8n Production AI Playbook on Audit & Trace.

## How it works
1. Receives a POST webhook request with a requestId and amount.
2. Validate Amount, an If node, sends invalid amounts to Reject Request, a Stop and Error node.
3. Normalize Request, an Edit Fields node, converts the amount to cents.
4. Charge Card, an If node, routes requests with trigger_failure to Decline Charge, a Stop and Error node that fails with card_declined.
5. Capture Charge records the successful charge, and Respond returns it.

## Setup
1. Run Jaeger locally (image jaegertracing/jaeger:2.20.0 with ports 16686 and 4318) and expose port 4318 with cloudflared tunnel --url http://localhost:4318.
2. As an instance owner or admin, open Settings > OpenTelemetry, enter the tunnel URL as the OTLP endpoint, set the sample rate to 1, turn off Track published workflows only, and enable tracing.
3. Select Execute workflow and POST {"requestId":"REQ-3001","amount":49.99}, then {"requestId":"REQ-3002","amount":49.99,"trigger_failure":true}.
4. In Jaeger, search the tag n8n.execution.id with each execution ID and inspect the spans.

## Requirements
- n8n Cloud or a self-hosted n8n instance, with owner or admin access to Settings > OpenTelemetry
- Docker Desktop to run Jaeger locally
- cloudflared to give n8n Cloud an HTTPS address for the local collector

## Customization
- Send spans to your existing OpenTelemetry collector instead of a local Jaeger instance.

## Additional info
OpenTelemetry tracing in n8n is in Preview. No payment provider is called.

## 🔗 Nodes Used

Webhook, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
