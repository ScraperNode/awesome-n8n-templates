# 👥 Orchestrate employee onboarding via webhook across HR, IAM, IT and SaaS

> ⚡ **20 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow receives a new-hire POST request and orchestrates onboarding by calling HR, IAM, IT provisioning, and SaaS application APIs in sequence, then returns a consolidated status report to the requester.

## How it works
1. Receives a new-hire payload via an n8n webhook endpoint.
2. Validates required fields, normalizes the employee record, and prepares target API URLs and a request ID.
3. Sends the employee data to the HR system API and records the returned status and employee identifier.
4. Sends an identity provisioning request to the IAM API and captures the created user ID for downstream steps.
5. Sends an IT provisioning request to create core IT resources (such as email and a ticket) and records the outcome.
6. Sends a SaaS provisioning request to grant access to a configured app list and aggregates HR/IAM/IT/SaaS results into a single summary.
7. Responds to the original webhook call with a JSON report and an HTTP status that reflects completed, partial, or failed provisioning.

## Setup
1. Configure the webhook URL (path: `employee-onboard`) in your HR intake form, ATS, or other system that submits new-hire events.
2. Replace the example endpoints (currently `httpbin.org`) with your real HRIS, IAM/identity provider, IT service desk/provisioning, and SaaS provisioning API URLs.
3. Add any required authentication for those APIs (for example, API keys or OAuth headers) in the HTTP Request configurations.
4. Ensure the calling system sends the required fields (first name, last name, email, and start date), and optionally provide `simulateStatus` for testing.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
