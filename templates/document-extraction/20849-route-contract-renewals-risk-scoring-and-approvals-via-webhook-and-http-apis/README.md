# 🔬 Route contract renewals, risk scoring and approvals via webhook and HTTP APIs

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a webhook to intake contract data, calculates renewal urgency, calls external HTTP endpoints for risk scoring and approvals, and returns a lifecycle decision with a detailed report and request ID.

## How it works
1. Receives contract details via a POST webhook request.
2. Validates required fields and normalizes the incoming contract metadata.
3. Calculates days to contract expiry and flags whether renewal action is needed based on the configured renewal window.
4. Sends the contract context to an external risk analysis HTTP endpoint and derives a risk score and tier from the response (with a fallback heuristic if needed).
5. Determines the required approval levels (or auto-approval) based on contract value, risk tier, and renewal status.
6. Submits the contract to an external approval system HTTP endpoint (unless it is auto-approved) and interprets the approval result into a final lifecycle status.
7. Builds a lifecycle report and responds to the webhook with the decision, audit details, and an HTTP status code.

## Setup
1. Configure the source system to send a POST request to the workflow’s webhook URL at `/contract-lifecycle` with fields like title, vendor, value, and endDate.
2. Replace the default risk and approval endpoint URLs in the workflow configuration (currently set to httpbin.org) with your real Risk Analysis and Approval System API endpoints.
3. Ensure the external APIs accept JSON requests and return appropriate HTTP status codes (and optionally a `score`/`riskScore` field for risk scoring) to drive the workflow’s decisions.
4. Review and adjust the built-in policy thresholds (auto-approval and approval level cutoffs) and the renewal window days to match your organization’s approval rules.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
