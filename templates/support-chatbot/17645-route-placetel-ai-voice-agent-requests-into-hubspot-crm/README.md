# 💬 Route Placetel AI voice agent requests into HubSpot CRM

> ⚡ **12 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This webhook-based workflow connects a Placetel AI voice agent to HubSpot CRM to look up callers, create contacts, log callback requests and call notes, and create or query tickets, returning a JSON response with a speakable `speech` text.

## How it works
1. Receives a POST request from Placetel AI via a webhook containing a `vorgang` (or `action`) value plus caller details.
2. Routes the request by `vorgang` to one of several HubSpot CRM actions.
3. For `bestandskunde_pruefen`, searches HubSpot contacts by normalized phone/mobile number and email, then returns whether the caller is an existing customer with a personalized `speech` response.
4. For `kontakt_anlegen`, searches for an existing HubSpot contact and either returns an “already exists” response or creates a new contact in HubSpot and returns the created contact ID.
5. For `rueckruf_erfassen`, finds the contact (or uses a provided contact ID) and creates a HubSpot task engagement describing the callback request.
6. For `ticket_status`, fetches a HubSpot ticket by `ticket_id`, maps the pipeline stage to a readable status, and returns a speakable ticket-status response.
7. For `ticket_anlegen` and `gespraech_protokollieren`, looks up the contact and either creates a HubSpot ticket associated to the contact or logs a completed HubSpot call engagement containing intent/summary/transcript details.
8. If `vorgang` is missing or unknown, returns a fallback JSON response asking to hand off to a human.

## Setup
1. Create and connect HubSpot OAuth2 credentials in n8n (or update all HubSpot nodes to use your HubSpot connection) with permissions for Contacts, Tickets, and Engagements (tasks/calls).
2. Activate the workflow, copy the production webhook URL, and configure it as a POST “function” endpoint in Placetel AI.
3. Ensure Placetel AI sends `vorgang` with one of the supported values and includes the required fields for each action (for example `ticket_id` for `ticket_status`, and `email` for creating contacts in HubSpot).

## 🔗 Nodes Used

Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
