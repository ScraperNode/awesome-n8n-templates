# 🎫 Create HubSpot support tickets from Tally form submissions

> ⚡ **20 views** · 🎫 [Ticket Management & Triage](../)

## Description

&gt; ⚠️ **Self-hosted only** — This template uses a community node (`n8n-nodes-tallyforms`) and cannot run on n8n Cloud.

## Who it's for

This workflow is for support, operations, or customer success teams that use Tally for intake forms and HubSpot as their CRM. It automates ticket creation so no submission is lost and every ticket is linked to the right contact.

## How it works

1. A Tally form submission triggers the workflow via webhook.
2. HubSpot is searched for an existing contact matching the submitted email address.
3. An If condition checks whether a matching contact was found.
4. If no contact exists, a new HubSpot contact is created or updated with the submitted details.
5. Contact ID, first name, and last name are normalized from whichever branch was taken.
6. A new HubSpot support ticket is created and associated with the resolved contact.

## How to set up

- [ ] Install the `n8n-nodes-tallyforms` community node on your self-hosted n8n instance.
- [ ] Connect your Tally account and set the correct form ID in the Tally trigger node.
- [ ] Connect your HubSpot account (app token or OAuth) to the Search, Upsert, and Create Ticket nodes.
- [ ] Map Tally form fields (email, first name, last name) to HubSpot contact properties in the Upsert node.
- [ ] Configure ticket properties (pipeline, stage, subject) in the Create HubSpot Ticket node to match your HubSpot setup.

## Requirements

- Self-hosted n8n instance
- `n8n-nodes-tallyforms` community node
- Tally account with a published form
- HubSpot account with API access (app token or OAuth)

## How to customize

- Extend the Set node to pass additional Tally fields (e.g., message body, phone number) into the ticket description or custom properties.
- Add a follow-up step after ticket creation to send a confirmation email to the submitter via Gmail or SendGrid.
- Replace the Tally trigger with another form tool (e.g., Typeform or Jotform) by swapping the trigger node and remapping the field references.

## 🔗 Nodes Used

HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
