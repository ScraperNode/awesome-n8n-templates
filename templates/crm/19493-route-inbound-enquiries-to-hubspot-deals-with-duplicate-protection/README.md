# 🤝 Route inbound enquiries to HubSpot deals with duplicate protection

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives inbound lead enquiries (via a demo trigger or a webhook), validates and normalizes the payload, and routes each new event into HubSpot by finding or creating a Contact and creating an associated Deal with duplicate protection and delivery/SLA status fields.

## How it works
1. Starts from a manual test trigger (or a disabled POST webhook) that provides an inbound lead payload.
2. Normalizes fields (email/phone, service, message) and validates required data, returning a structured 400/500-style result for invalid payloads or missing configuration.
3. Searches HubSpot Deals by a unique source event key to prevent duplicates, returning a no-op result if the same event was already processed.
4. Searches HubSpot Contacts by email (or phone if email is missing) and stops for manual review if multiple matches are found.
5. Creates a new HubSpot Contact when no match exists, and if the write outcome is uncertain it re-searches by identity to safely recover the Contact ID.
6. Creates a HubSpot Deal for the enquiry with pipeline/stage/owner, initializes delivery and SLA properties, associates the Deal to the Contact, and verifies the created Deal by the event key before returning the final result (and webhook response when applicable).

## Setup
1. Add a HubSpot private app token credential and connect it to all HubSpot HTTP requests used for Deal and Contact search/creation.
2. In the HubSpot account, create the required Deal properties (including a unique `source_event_key`, `source_event_id`, `lead_received_at`, `first_human_response_at`, `delivery_status`, and `lead_response_sla_status` with the expected dropdown options).
3. In the workflow’s HubSpot configuration values, set your HubSpot pipeline ID, deal stage ID, owner ID, and confirm the event key property name matches the Deal property you created.
4. If using the webhook, configure a Header Auth credential on the webhook trigger and copy the webhook URL into the source system that sends inbound leads.

## Requirements
- A HubSpot account and an n8n-compatible HubSpot credential with permission to read and write Contacts and Deals.
- Create these Deal properties: lead_received_at, first_human_response_at, source_event_id, source_event_key, delivery_status, and lead_response_sla_status. Configure source_event_key as unique.
- You also need valid HubSpot pipeline, Deal stage, and owner IDs. A separate Header Auth credential is required when enabling the webhook.

## Customization
- Replace YOUR_PIPELINE_ID, YOUR_DEAL_STAGE_ID, and YOUR_OWNER_ID in the Configure HubSpot node. Connect your HubSpot credential to all six HubSpot HTTP Request nodes.
- You can customize the demo payload, webhook path, validation rules, Contact matching logic, Deal properties, and final response format.

## Additional info
The webhook is disabled by default for safe testing. Run the included demo lead twice and confirm the second run returns duplicate_event_no_op.

A Contact represents a person and a Deal represents one enquiry. A new event from an existing Contact creates a new Deal, while replaying the same event creates nothing. Store all secrets only in n8n Credentials.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
