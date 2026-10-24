# 🔬 Route multi-level approval decisions via webhook and HTTP approver APIs

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a webhook-based approval engine that evaluates policy rules to calculate risk and required authorization levels, then calls external approver endpoints for up to three approval steps and returns an approve/reject decision with a full audit trail.

## How it works
1. Receives an approval request via an HTTP POST webhook.
2. Validates and normalizes the request payload, loads the policy thresholds, and prepares the Level 1–3 approver endpoint URLs.
3. Evaluates the request against the policy rules to calculate a risk score and determine whether the request is auto-approved or requires Level 1–3 approvals.
4. Calls a Level 1 approver endpoint via HTTP, records the status code as the Level 1 decision, and determines whether to continue to Level 2.
5. Calls a Level 2 approver endpoint via HTTP, records the status code as the Level 2 decision, and determines whether to continue to Level 3.
6. Calls a Level 3 approver endpoint via HTTP, records the status code as the Level 3 decision, then aggregates all required decisions into a final status and returns it to the webhook caller with an audit trail.

## Setup
1. Configure the webhook path in n8n and copy the production webhook URL into the system that submits approval requests.
2. Update the Level 1, Level 2, and Level 3 approver URLs (currently set to httpbin.org) to your real approval/notification endpoints.
3. Review and adjust the in-workflow policy thresholds (amount limits, high-risk departments/types, and timeouts) to match your organization’s approval rules.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
