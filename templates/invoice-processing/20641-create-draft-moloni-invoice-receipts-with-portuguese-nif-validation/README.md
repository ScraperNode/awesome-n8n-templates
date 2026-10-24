# 🧾 Create draft Moloni invoice-receipts with Portuguese NIF validation

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs manually with sample payment data, validates a Portuguese NIF and VAT configuration, then uses the Moloni API to find or create the customer and generate a draft invoice-receipt (fatura-recibo) with the payment lines and tax rates.

## How it works
1. Runs when you execute the workflow manually to process the included sample payment data.
2. Normalizes the payment payload, validates required configuration values, checks the payment totals and VAT rate, and validates the Portuguese NIF check digit.
3. Requests an access token from the Moloni API and fetches the company’s VAT taxes to confirm each configured Moloni tax ID matches the expected percentage.
4. Looks up the customer in Moloni by VAT/NIF and creates the customer if it does not already exist (or uses “Consumidor final” when the NIF is missing/invalid based on configuration).
5. Builds the Moloni invoice-receipt payload with product lines, taxes, and payment details and sends it to Moloni to create the invoice-receipt as a draft.
6. Outputs the created Moloni document ID along with any validation warnings so you can review and finalize the document in Moloni.

## Setup
1. Create an n8n HTTP Custom Auth credential with your Moloni API parameters (client_id, client_secret, username, password) and select it in the Moloni access-token request.
2. Fill in the Moloni IDs in the Configuration step (company, document set, product, payment method, maturity date, language, country) and map each VAT percentage to the correct Moloni tax_id in taxas_iva.
3. If you invoice with 0% VAT, set motivo_isencao in Configuration so Moloni can accept exempt lines.
4. Update the Sample payment data fields (customer details, NIF, description, amount, VAT rate) and execute the workflow, ideally first against a Moloni demo/test company.

## Requirements
- A Moloni account with API access. Tested on n8n 2.41.6 (self-hosted) against a simulated Moloni API built from the official docs; not yet tested on a real Moloni account, so try it first on Moloni's demo account.

## Customization
- Replace the manual trigger with a Webhook or Form trigger. Field names are Portuguese: nome (name), valor (amount with VAT), taxa_iva (VAT rate).

## Additional info
Full version (paid, on Gumroad): issues the final invoice right after a Stripe or webhook payment, emails the PDF, never duplicates invoices and alerts you by email when something fails: https://fluxopronto.gumroad.com/l/fatura-recibo-moloni?utm_source=n8n-hub&utm_medium=produto-gratis&utm_campaign=moloni-fatura-recibo

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
