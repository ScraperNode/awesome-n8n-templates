# 🧾 Create draft invoice-receipts in InvoiceXpress with Portuguese NIF validation

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs manually to validate Portuguese NIF tax IDs, verify configured VAT taxes in InvoiceXpress, and then create a draft invoice-receipt (fatura-recibo) via the InvoiceXpress API, returning the new document ID and totals.

## How it works
1. Runs when you execute the workflow manually with the provided sample payment data.
2. Normalizes the payment fields (customer, NIF, items, amount, and VAT rate) into a consistent structure.
3. Validates the payment totals and VAT rates, checks the Portuguese NIF check digit, and falls back to “Consumidor final” when the NIF is missing/invalid based on your settings.
4. Calls the InvoiceXpress API to list available taxes and verifies that each configured tax name exists with the expected percentage.
5. Builds the InvoiceXpress payload with net unit prices, selected taxes, and optional series and tax-exemption reason.
6. Creates a draft invoice-receipt in InvoiceXpress and outputs the created document ID, total, and any validation warnings.

## Setup
1. Create an InvoiceXpress API key and add an n8n HTTP Custom Auth credential that sends it as a query string (for example: `{ "qs": { "api_key": "YOUR_API_KEY" } }`) and select it on both InvoiceXpress HTTP Request steps.
2. Update `invoicexpress_base_url` in the Configuration data to your account URL (for example: `https://YOUR-ACCOUNT.app.invoicexpress.com`).
3. Ensure your InvoiceXpress account has taxes set up to match your `taxas_iva` mapping (tax name per VAT rate) and fill `motivo_isencao` if you use any 0% VAT items.
4. Adjust the sample payment fields (customer details, NIF, description, amount, and `taxa_iva`) and then execute the workflow to generate a draft document.

## Requirements
- An InvoiceXpress account with API access.

## Customization
- Replace the manual trigger with a Webhook or Form trigger. Field names are Portuguese: nome (name), valor (amount with VAT), taxa_iva (VAT rate).

## Additional info
Tested on n8n 2.41.6 (self-hosted) with a simulated InvoiceXpress API built from the official docs; not yet tested on a real InvoiceXpress account.

Full version: the [full version on Gumroad](https://fluxopronto.gumroad.com/l/fatura-recibo-invoicexpress?utm_source=n8n-hub&utm_medium=produto-gratis&utm_campaign=invoicexpress-fatura-recibo) creates and finalises the invoice right after a Stripe or webhook payment, sends it to the customer, never duplicates invoices and alerts you by email when something fails.

Em português: valida o NIF e cria um rascunho de fatura-recibo no InvoiceXpress.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
