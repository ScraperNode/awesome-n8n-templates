# 🧾 Process Stripe refunds with Allowly approval and reviewer checks

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs a Stripe test-mode refund only after an Allowly policy check allows it or a reviewer approves it via a secure callback, then creates the refund in Stripe and fetches the Allowly decision receipt as evidence.

## How it works
1. Starts manually and builds a refund request containing the Allowly authorization ID, Stripe PaymentIntent ID, amount, currency, reason, and a frozen resource string for approval binding.
2. Validates the request format and reads the Stripe PaymentIntent via the Stripe API to ensure it is a succeeded test payment with sufficient captured funds.
3. Sends the frozen resource and context to Allowly for a refund.create decision check.
4. If Allowly allows immediately, proceeds; if Allowly requires confirmation or escalation, waits for an authenticated HTTP callback with an approval decision and resolves the confirmation/escalation in Allowly before re-checking for a final allow.
5. If the final decision is allow, creates the Stripe refund using an idempotency key tied to the refund request ID.
6. Validates the Stripe refund response and then retrieves the Allowly receipt via the Allowly API to export the refund evidence (marking it pending if not yet signed).

## Setup
1. Add Stripe API credentials for a Stripe test account and select the same credential for both Stripe HTTP requests.
2. Add Allowly API credentials and select them on all Allowly nodes and the receipt-fetching HTTP request.
3. Create and store an Allowly authorization ID, then replace authorizationId, paymentIntentId, and other fields in the refund request payload as needed (this template only supports USD with reason requested_by_customer).
4. Configure the Wait for reviewer step to require header authentication, then copy its resume webhook URL and send POST reviews in the form {"approved": true|false, "resource": "<exact resource from the request>"} within 4 minutes.

## 🔗 Nodes Used

HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
