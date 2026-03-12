# 🤝 Stripe → Pipedrive: Auto create contacts and deals from payments

> ⚡ **146 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Stripe → Pipedrive (Automatic Person + Deal Creation)

## Prerequisites / Requirements
- n8n instance (cloud or self-hosted) with HTTPS reachable webhook endpoint
- Stripe account and secret API key
- Pipedrive account with API access and custom fields defined
- Users should create custom fields in Pipedrive and copy their field IDs (e.g. amount, payment method, status, Stripe Event ID)

## How it works (Step-by-Step)
**Stripe Webhook:** n8n triggers on payment events from Stripe via an HTTP POST.

**Edit / Set node:** Extracts eventId, eventType, and payload.

**HTTP Request:** Confirms Stripe event via Stripe API (adds security).

**Search Person:** Looks up Pipedrive contact by email from the Stripe payload.

**IF:** Checks whether the person exists.
    - If exists → skip to deal creation.
        - If node - Check if Event id is not the same
            - If same - Skip the deal creation
            - If different - Create a deal linked to that person with the payment amount
    - If not → create new Person.

**Create Person:** Adds new Pipedrive contact, populates custom fields (amount, payment method, status, source).

**Create Deal:** Creates a deal linked to that person with the payment amount.

## Description 
**This workflow connects Stripe to Pipedrive. Whenever a new payment (or checkout success) occurs in Stripe, this automation will:
- Fetch the full Stripe event data
- Find or create a customer (“Person”) in Pipedrive
- Create a “Deal” record corresponding to that payment
- Log custom fields like amount, source, payment method, status

### It’s ideal for 
- SaaS 
- Subscription businesses
- Agencies, or 
- Teams who want payments mirrored inside their CRM without manual work.

## Modification Notes / Extensions

You can extend this workflow by:
- Adding Slack or Gmail notifications after deal creation.
- Logging every event in Google Sheets or Notion for audit.
- Enriching the customer using OpenAI / CRM data.
- Handling refunds, subscription cancellations, etc.

## 🔗 Nodes Used

HTTP Request, Pipedrive, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
