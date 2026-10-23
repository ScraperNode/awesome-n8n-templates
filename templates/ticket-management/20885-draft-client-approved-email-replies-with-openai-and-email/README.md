# 🎫 Draft client-approved email replies with OpenAI and email

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Let your client approve, edit or reject an AI-drafted email reply from a link, without an n8n account. Only the exact approved text is sent; every draft is SHA-256 fingerprinted. Free, MIT. Made by Keelstamp (keelstamp.com): client approval and verifiable receipts for agencies running AI automations.

## How it works
1. Receives a POST request on a webhook with a client ID, message/task, recipient email, and subject, then validates the payload.
2. Looks up the client in an n8n Data Table, applies client settings (approver email, instructions, expiry, approval requirement), and logs the request to an approval_requests table.
3. Builds a prompt and uses an OpenAI chat model (via an AI agent) to draft a reply, then fingerprints the draft with SHA-256.
4. If approval is required, emails the approver a link to an n8n form where they can approve, edit, request changes, or reject, and waits until a reminder time or the final deadline.
5. On “request changes,” loops back to regenerate a revised draft (up to the configured max rounds), and on approval/rejection/expiry records the decision and fingerprints in the Data Table.
6. When approved, verifies the text to send matches the approved fingerprint, sends the reply to the recipient via email, and updates the request log; otherwise it emails the workflow owner that nothing was sent.
7. Provides a GET webhook endpoint to list currently waiting requests and sends a daily email digest of waiting approvals on a schedule.

## Setup
1. Create the n8n Data Tables approval_clients and approval_requests with the columns referenced by the workflow, and add at least one active client row with a valid approver_email.
2. Add OpenAI credentials for the chat model and configure an SMTP/Email credential for all email-sending steps (approver emails, owner notifications, and digest).
3. Configure Header Auth for both webhooks and update the X-Api-Key (or equivalent) in the calling system that submits draft requests and checks pending requests.
4. Update the Settings and Digest settings values (company name, sender address, owner email, expiry/reminder limits, and model/token limits) to match your environment.
5. Publish the workflow so the approval form resume links work, and point your source system to the POST /webhook/client-approval/draft endpoint.

## Requirements
- n8n with Data tables, an OpenAI API key and SMTP.

## Customization
- Replace "Send the approved reply" with your own step (Gmail, a helpdesk reply, a CMS post) and keep the fingerprint check in front of it.

## Additional info
Keelstamp (https://keelstamp.com) is in development; the Founding Partner pre-order is open at https://keelstamp.com/founding. Questions: contact@keelstamp.com
Prepared with AI assistance. Editorial responsibility: PowerQuant ApS.

## 🔗 Nodes Used

Send Email, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
