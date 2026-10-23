# 🎣 Verify phone and email leads with Zelnum via HTTP request

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Verify a phone number or email lead before updating your CRM. This Zelnum realtime workflow checks current products, previews pricing without a charge, and requires explicit billing approval before returning per-product verdicts and spending details.

## How it works
1. Runs manually to start a verification request for one phone number or email address.
2. Fetches Zelnum’s current realtime product catalog to ensure the selected product IDs exist and match the chosen series (phone or email).
3. Validates the input identifier, country (for phone), product selection, and billing controls, then requests a non-billable quote from the Zelnum realtime quote endpoint.
4. Checks the quote total and expiry and branches based on whether billing is explicitly enabled.
5. If billing is not enabled, returns a quote-only preview (no charge) so you can review pricing.
6. If billing is enabled and within the max USDT limit, submits the billable realtime check to Zelnum using an idempotency key and the quote token.
7. Parses the Zelnum response into CRM-friendly output including overall verification_state and per-product results with valid/invalid/unknown verdicts and billing status.

## Setup
1. [Register with Zelnum](https://app.zelnum.com), open API Center, and create an API key. Add an n8n HTTP Header Auth credential with header name `X-API-Key` and your private key, then select it on the quote and billable check HTTP Request nodes. Never publish the key or real contact data.
2. In the configuration step, set `series` (phone or email), the `identifier`, and (for phone) a two-letter `country` code when using a national number.
3. Run once to inspect the product catalog output, then set 1–10 matching Zelnum realtime `product_ids` for the chosen series.
4. To run paid checks, set a stable `idempotency_key`, set `max_total_usdt`, and change `execute_billable` to true after reviewing the quote preview.
5. Add your downstream CRM/database nodes after the final output to store or route the verdicts (for example, flag `manual_review` items for follow-up).

## Requirements
- A Zelnum account with API access, sufficient balance for paid checks, and compatible built-in n8n nodes. Run quote previews first; keep `execute_billable=false` until you approve the price.

## Customization
- After private testing, connect your CRM or an authenticated form trigger. Route inconclusive results to manual review rather than treating them as invalid.

## Additional info
Read the [Zelnum API documentation](https://docs.zelnum.com) for product coverage, billing, and error codes. Visit [Zelnum](https://zelnum.com) for the platform overview. Product verdicts do not establish contact consent or guarantee email deliverability.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
