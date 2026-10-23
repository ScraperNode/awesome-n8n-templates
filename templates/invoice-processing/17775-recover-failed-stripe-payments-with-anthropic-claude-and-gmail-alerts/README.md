# 🧾 Recover failed Stripe payments with Anthropic Claude and Gmail alerts

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow listens for failed Stripe invoice payments, generates stage-appropriate dunning emails with Anthropic Claude, emails the customer via Gmail with the hosted Stripe invoice link, and sends an internal Gmail alert when the failure reaches the final retry attempt.

## How it works
1. Triggers when Stripe sends an `invoice.payment_failed` event for a failed invoice payment attempt.
2. Extracts key invoice details (attempt count, amount and currency, next retry date, hosted invoice URL, and customer contact info) and determines whether this is the first, repeat, or final attempt.
3. Sets the email “angle” and urgency based on the attempt stage to vary tone from gentle to final notice.
4. Calls the Anthropic Messages API to draft a short recovery email (subject and body) using the real invoice amount and retry date.
5. Parses the AI response and appends the Stripe hosted invoice payment link and support contact details, with a fallback template if the AI output is missing or invalid.
6. Sends the recovery email to the customer via Gmail and, if this is the final attempt, sends a separate alert email to the owner via Gmail.

## Setup
1. Create and connect Stripe credentials, then configure a Stripe webhook that points to the n8n Stripe Trigger and subscribes to `invoice.payment_failed`.
2. Provide an Anthropic API key as an environment variable named `ANTHROPIC_API_KEY`.
3. Connect Gmail credentials for both customer emails and internal alert emails.
4. Update the configuration values in the “Set config” step (brand name, sender name, support email, owner alert email, tone, model, and which attempt count is considered final).

## 🔗 Nodes Used

HTTP Request, Stripe Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
