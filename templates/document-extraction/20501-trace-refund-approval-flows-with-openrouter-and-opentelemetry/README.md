# 🔬 Trace refund approval flows with OpenRouter and OpenTelemetry

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow enriches a refund request, drafts an approval proposal with an AI agent, and waits for a human decision, so you can follow one execution across the wait with OpenTelemetry tracing. It is Exercise 5 from the n8n Production AI Playbook on Audit & Trace.

## How it works
1. Receives a POST webhook request with a requestId, amount in cents, reason and a traceparent header.
2. Enrich Request Sub-workflow validates the request and adds simulated customer context.
3. Policy Service Call sends an HTTP request that carries the trace context to an echo service.
4. Approval Proposal Agent drafts a proposal using an OpenRouter chat model.
5. Return Approval Request responds with the proposal, executionId and resumeUrl.
6. Wait for Human Approval pauses until a decision is posted to the resume URL.
7. Validate Approval checks the decision and Record Approval saves it. Invalid decisions stop at Reject Approval.

## Setup
1. Import, save and publish the Exercise 5 enrichment sub-workflow, then select it in Enrich Request Sub-workflow.
2. Add an OpenRouter API credential to OpenRouter - Approval.
3. Optionally enable OpenTelemetry tracing in Settings > OpenTelemetry.
4. Select Execute workflow and POST {"requestId":"REQ-2001","amount":4999,"reason":"duplicate charge"} with a traceparent header.
5. POST {"approved":true,"approver":"Demo reviewer"} to the returned resumeUrl, then search your traces by n8n.execution.id to find both parts of the run.

## Requirements
- n8n Cloud or a self-hosted n8n instance
- An OpenRouter API key
- The Exercise 5 enrichment sub-workflow
- A trace viewer such as Jaeger to inspect the spans (optional)

## Customization
- Replace Policy Service Call with a call to your own instrumented service so its spans join the same trace.

## Additional info
No payment is processed. The approver field is a demo value. In production, take the reviewer's identity from an authenticated login and protect the resume endpoint.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, Stop and Error, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
