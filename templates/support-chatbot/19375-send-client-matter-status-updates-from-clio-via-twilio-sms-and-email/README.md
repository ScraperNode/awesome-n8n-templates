# 💬 Send client matter status updates from Clio via Twilio SMS and email

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow responds to client case-status requests received via Twilio SMS or an IMAP inbox by matching the sender to a Clio contact, fetching the client’s open matters from Clio, and sending a status-only reply via SMS or email after a compliance sub-workflow approves delivery.

## How it works
1. Receives an inbound status request either through a Twilio webhook for SMS or by reading new messages from an IMAP mailbox.
2. Extracts the sender phone number or email address and searches Clio contacts to find an exact client match.
3. If no matching client is found, sends a generic “not found” response back via Twilio SMS or SMTP email.
4. If a client is found, checks a per-sender cooldown window stored in n8n to avoid sending repeated replies within a short time.
5. When not in cooldown, fetches the client’s open matters from Clio and composes a reply that lists the current matter status values.
6. Sends the draft reply through a separate compliance/opt-out guardrail workflow and only delivers it via Twilio or SMTP if approved.

## Setup
1. Add Clio OAuth2 (or compatible) credentials, set CLIO_BASE_URL, and ensure the workflow can access Clio contacts and matters.
2. Configure Twilio credentials, set FIRM_TWILIO_NUMBER, and point your Twilio number’s inbound SMS webhook to the workflow’s webhook URL.
3. Configure IMAP credentials for the monitored mailbox and SMTP credentials for sending replies, and set FIRM_FROM_EMAIL (and optionally FIRM_NAME).
4. Import and configure the compliance/guardrail sub-workflow and set GUARDRAIL_WORKFLOW_ID to its workflow ID.
5. Set STATUS_REPLY_COOLDOWN_MINUTES to your desired throttle window (defaults to 5 minutes).

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request, Twilio, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
