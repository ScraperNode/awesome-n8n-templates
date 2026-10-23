# 👥 Verify employee offboarding and access revocation via webhook and HTTP APIs

> ⚡ **0 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow receives an employee offboarding request via webhook, calls external IAM, SaaS, and IT/HR HTTP endpoints to revoke and verify access removal, then returns a final compliance report with per-step statuses to the requester.

## How it works
1. Receives an offboarding payload via a POST webhook.
2. Validates required fields (such as employeeId, email, and lastDay) and prepares request data, target URLs, and a request ID.
3. Calls an IAM revoke API over HTTP to disable/delete the identity, then calls an IAM verify API to confirm the account is revoked.
4. Calls a SaaS revoke API over HTTP with an apps list (for example Slack, Google Workspace, and GitHub), then calls a SaaS verify API to confirm access is removed.
5. Calls an IT/HR finalize API over HTTP to complete offboarding actions such as disabling email and updating HR status.
6. Aggregates all results into a compliance status (fully_revoked/partial/failed) and returns the report to the webhook caller with an appropriate HTTP status code.

## Setup
1. Configure the system that initiates offboarding to send a POST request to this workflow’s webhook URL with fields like employeeId, email, and lastDay.
2. Replace the placeholder httpbin.org URLs with your real IAM, SaaS, and IT/HR API endpoints and ensure they accept the JSON bodies this workflow sends.
3. If your endpoints require authentication, add the necessary HTTP headers or credentials to the HTTP Request steps.
4. Review the SaaS application list (slack, google_workspace, github, notion, jira) and adjust it to match the services you need to revoke and verify.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
