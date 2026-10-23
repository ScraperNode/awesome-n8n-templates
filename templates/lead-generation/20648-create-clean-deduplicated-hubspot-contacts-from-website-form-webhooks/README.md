# 🎣 Create clean, deduplicated HubSpot contacts from website form webhooks

> ⚡ **20 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives website form submissions via a webhook, validates and normalizes the lead data, then searches HubSpot by email to update an existing contact or create a new one, returning a JSON response with the outcome.

## How it works
1. Receives a POST request on an n8n webhook endpoint containing form data (JSON or form-encoded).
2. Validates the submission (including an optional shared-secret header) and normalizes fields like email, name, phone, and country code.
3. Rejects invalid leads with an HTTP 400 response that lists validation errors.
4. Searches HubSpot CRM for an existing contact matching the submitted email address.
5. Builds a HubSpot contact properties payload and sets lifecycle stage and lead status for new contacts.
6. Updates the matching HubSpot contact or creates a new one, then returns an HTTP 200 JSON response indicating whether the contact was created or updated.

## Setup
1. Create a HubSpot private app token with `crm.objects.contacts.read` and `crm.objects.contacts.write` permissions.
2. In n8n, configure an HTTP Header Auth credential that sends `Authorization: Bearer <YOUR_TOKEN>` and select it on the HubSpot HTTP Request steps.
3. (Optional) Set a `sharedSecret` value in the Settings code step and configure your form to send it in the `x-form-secret` request header.
4. Activate the workflow and configure your form provider to POST submissions to the webhook’s Production URL.

## Requirements
- An n8n instance (cloud or self-hosted) and a HubSpot account with a private app token or service key that can read and write contacts

## Customization
- Map extra form fields to HubSpot properties in the Build Contact Payload step, or change the default lifecycle stage and lead status for new contacts

## Additional info
Need lead scoring, owner routing and Slack alerts on top of this? The full HubSpot Lead Router is at https://tidewellsystems.com/templates/

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
