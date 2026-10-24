# 🔬 Validate and enrich refund approval requests in an n8n sub-workflow

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This sub-workflow validates a refund approval request and adds simulated customer context before an AI agent drafts a proposal. It is called by the Exercise 5 parent workflow from the n8n Production AI Playbook on Audit & Trace.

## How it works
1. When Executed by Another Workflow receives the request from the parent workflow and passes the input through.
2. Validate Request, an If node, checks for a non-empty requestId and reason and a positive whole-number amount in cents.
3. Invalid requests stop at Reject Request, a Stop and Error node, so the parent execution fails with a clear error.
4. Enrich Request, an Edit Fields node, returns the request with a simulated customer tier and prior refund count.

## Setup
1. Import this workflow, save it, and publish it so the parent workflow can call it.
2. Import the Exercise 5 parent workflow, Trace a human approval across a wait, and select this workflow in its Enrich Request Sub-workflow node.
3. No credentials are needed for this sub-workflow.
4. With OpenTelemetry tracing enabled, its workflow span appears nested under the parent workflow span in your trace viewer.

## Requirements
- n8n Cloud or a self-hosted n8n instance
- The Exercise 5 parent workflow

## Customization
- Replace the simulated values in Enrich Request with a lookup against your CRM or billing system.

## Additional info
Customer data is synthetic.

## 🔗 Nodes Used

Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
