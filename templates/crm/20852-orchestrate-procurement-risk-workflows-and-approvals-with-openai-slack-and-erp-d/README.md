# 🤝 Orchestrate procurement risk workflows and approvals with OpenAI, Slack and ERP data

> ⚡ **15 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives procurement goals via webhook, uses OpenAI to interpret the request and assess supplier risk across spend, contract, and risk datasets, routes work to sub-workflows, requests human approval in Slack, and returns an audited outcome to the caller.

## How it works
1. Receives a POST request on a secured webhook endpoint with a procurement goal, priority, requester, and scope.
2. Validates the request payload, generates a unique procurement request ID, and uses OpenAI to produce a structured procurement plan that is parsed and validated.
3. Loads supplier, ERP spend, contract, and supplier-risk datasets (currently from mock data) and normalizes them into one combined supplier record per supplier.
4. Sends each supplier record to OpenAI for a JSON risk analysis, combines the AI output with the normalized data, and applies deterministic rules to decide whether to run Supplier Risk Assessment, Contract Review, or Supplier Monitoring sub-workflows.
5. Aggregates the sub-workflow results and uses OpenAI to generate a structured set of findings and recommended next actions.
6. Creates an approval request message and posts it to Slack, then waits for an approval or rejection and parses the response.
7. If approved, routes the approved action(s) to the relevant sub-workflow(s), verifies execution, writes an audit log, and responds to the original webhook call with the final status and details.

## Setup
1. Configure the Webhook header authentication credential and share the production webhook URL with the system that will submit procurement requests.
2. Add an OpenAI (or compatible) credential for the three AI steps (goal interpretation, supplier risk analysis, and final recommendation).
3. Connect Slack credentials and set the target channel for approval requests, and ensure your approvers can send a response the workflow can capture.
4. Replace the mock supplier/spend/contract/risk nodes with your real data sources (ERP, contract management, and supplier-risk feeds) or update the mock records to match your schema.
5. Ensure the referenced sub-workflows exist and are selected in the Execute Workflow steps (Supplier Risk Assessment, Contract Review, and Supplier Monitoring), and align their expected input fields with the mappings.
6. Test both approval and rejection paths end-to-end, including execution verification and the webhook response payload, before activating the workflow.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Execute Sub-workflow, Execute Workflow Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
