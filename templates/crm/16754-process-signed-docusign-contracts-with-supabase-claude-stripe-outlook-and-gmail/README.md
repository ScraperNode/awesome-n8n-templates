# 🤝 Process signed DocuSign contracts with Supabase, Claude, Stripe, Outlook and Gmail

> ⚡ **47 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow listens for DocuSign Connect envelope-completed events, looks up the related assessment in Supabase, updates contract and client records, sends a welcome email (optionally drafted with Anthropic), creates an onboarding session and invite, and for non-pilot clients creates a Stripe Checkout payment link and emails it.

## How it works
1. Receives a POST webhook from DocuSign Connect and continues only when the envelope status indicates the contract is completed.
2. Queries Supabase for the assessment record matching the DocuSign envelope ID and normalizes the returned data to a single assessment object.
3. Updates the assessment in Supabase to mark the contract as completed, upserts a client record in Supabase, and calls an internal webhook to fetch the signed contract.
4. Sends either a pilot welcome email or a standard welcome email via Microsoft Outlook, with the standard email body drafted by Anthropic and optionally logged to a separate cost-tracking workflow.
5. Generates a resume token, creates an onboarding session in Supabase, waits 24 hours, then sends the onboarding questionnaire invite via Microsoft Outlook and emails an internal notification via Gmail.
6. For non-pilot clients, creates a Stripe customer and Checkout session (one-time setup fee plus recurring retainer), stores the Stripe customer ID back in Supabase, and emails the Stripe payment link via Microsoft Outlook.

## Setup
1. Configure DocuSign Connect to send envelope event webhooks to this workflow’s webhook URL and ensure it includes the envelope ID and completion status fields used by the workflow.
2. Add Supabase API credentials and replace all `YOUR-PROJECT.supabase.co` placeholders, plus confirm the `assessments`, `clients`, and `onboarding_sessions` tables and fields match the workflow.
3. Add Microsoft Outlook credentials and replace the sender address, portal/onboarding URLs, and any hard-coded recipient values used in the emails.
4. Add Gmail credentials for the internal notification email and set the destination internal address.
5. Add Anthropic API credentials (or remove the drafting step) and, if used, set the sub-workflow ID for cost logging.
6. Add Stripe API credentials and update the Stripe success/cancel URLs and line-item wording to match your billing setup.

## Requirements
- n8n instance (cloud or self-hosted)
- DocuSign account with Connect (webhook) pointed at this workflow's webhook URL
- Supabase project, or adapt the Supabase nodes to your own database
- Email provider (Outlook + Gmail here) for client + internal messages
- Stripe account (for the billing branch)
- Optional: Anthropic (Claude) key for the AI-drafted welcome email

## Customization
- Swap the Claude-drafted welcome for a fixed template, or change its tone
- Adjust the onboarding wait time (24 hours) to your cadence
- Edit the Stripe checkout (product wording, coupon, line items)
- Remove the cost-logging node if you do not track token usage
- The pilot branch lets you treat trial clients differently from full clients

## Additional info
Part 2 of 2. Pair it with DocuSign Send Envelope (Part 1). This is the receiving half: it fires when a contract is signed, records the client, sends a welcome, kicks off onboarding, and starts Stripe billing. Full setup guide and support: https://docs.google.com/document/d/e/2PACX-1vRBQFcz55jjPdHvjMQyYsq_BPHNmEaCH9CSck6JORhgNx-6r9hV8JZNtyEof7w90wGgU0Kry3-0btd4/pub. Questions? Email support@priscgroup.com

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, Gmail, Microsoft Outlook, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
