# 🎫 Send client matter status updates from Clio via webhooks and SMTP email

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow listens for Clio matter status change webhooks, fetches the latest matter and firm user details from the Clio API, and sends a compliance-checked status update email to the client via SMTP only when the status truly changes and a message is configured, while also renewing the Clio webhook subscription daily.

## How it works
1. Receives a Clio matter status webhook and either completes the one-time X-Hook-Secret verification handshake or immediately acknowledges the event.
2. Validates the payload contains a matter ID and skips processing if the event is unrelated or malformed.
3. Fetches the current matter details and the firm user directory from the Clio API to get the authoritative status, client email, and responsible attorney.
4. Compares the current matter status to the last recorded status in workflow static data and skips if it is the first time seen or a duplicate delivery.
5. Looks up a firm-written status message for the new status, builds a personalized email, and runs a separate compliance/opt-out guardrail workflow.
6. Sends the approved plain-text and HTML email to the client via SMTP, or skips sending if the client has opted out.
7. Runs daily on a schedule to list existing Clio webhook subscriptions and creates or renews the subscription when it is missing, unconfirmed, or nearing expiration.

## Setup
1. Add Clio OAuth2 credentials with Webhooks (read/write), Matters (read), and Users (read) access, and set the CLIO_BASE_URL variable.
2. Activate the workflow, copy the Webhook node Production URL, and save it as the FIRM_MATTER_WEBHOOK_URL variable so the daily renewal branch can register/renew the Clio webhook.
3. Set the FIRM_NAME, FIRM_EMAIL, and FIRM_FROM_EMAIL variables used to build the email content and sender address.
4. Configure the status-to-message map in the code step that defines client-facing updates (for example, Pending and Closed).
5. Set the GUARDRAIL_WORKFLOW_ID variable to an existing compliance/opt-out sub-workflow, and add SMTP credentials for sending the emails.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
