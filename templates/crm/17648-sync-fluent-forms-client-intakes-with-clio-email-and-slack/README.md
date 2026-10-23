# 🤝 Sync Fluent Forms client intakes with Clio, email, and Slack

> ⚡ **3 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives client intake submissions via a webhook (for example from Fluent Forms), deduplicates and creates or reuses a contact in Clio, opens a new matter, notifies staff by email and optional Slack, and sends an optional client confirmation email after running a compliance sub-workflow.

## How it works
1. Receives a client intake payload via a webhook and validates required fields while normalizing values like email, phone format, and practice area.
2. Searches Clio for an existing contact by email and decides whether to reuse the matched contact or create a new Person contact in Clio.
3. Creates a new Clio matter linked to the selected contact and sets details such as practice area, description, and open status.
4. If matter creation succeeds, emails staff an intake routing summary and optionally posts the same summary to Slack via an Incoming Webhook.
5. Builds a client confirmation message and runs an Execute Workflow call to a Bar-Compliance Guardrail workflow to approve and append required disclaimer text.
6. Sends the compliance-approved confirmation email to the client (or skips if not approved) and responds to the original webhook request with a success payload.
7. If Clio matter creation fails, emails staff about the failure and returns an error response to the webhook caller, while any unhandled errors trigger a separate staff error email.

## Setup
1. Create a Clio API key and add an HTTP Header Auth credential in n8n (Authorization: Bearer <token>), then set CLIO_BASE_URL in n8n variables (for example https://app.clio.com or https://eu.app.clio.com).
2. Configure an SMTP credential for n8n Email Send and set FIRM_FROM_EMAIL and FIRM_EMAIL variables for staff notifications and client emails.
3. Activate the workflow and copy the webhook Production URL, then configure your form tool (for example Fluent Forms) to POST submissions to that URL with fields like full_name, email, phone, matter_type, and case_details.
4. (Optional) Create a Slack Incoming Webhook and set FIRM_SLACK_WEBHOOK_URL in n8n variables to enable Slack staff alerts.
5. Deploy the Bar-Compliance Guardrail workflow and set GUARDRAIL_WORKFLOW_ID in n8n variables to the guardrail workflow’s numeric ID.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
