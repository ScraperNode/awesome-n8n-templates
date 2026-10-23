# 🔬 Verify Polish VAT White List supplier accounts with forms and Data Tables

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow provides an n8n form to validate a supplier’s NIP and bank account, checks them against Poland’s Ministry of Finance VAT White List API, and logs each verification (including requestId) to an n8n Data Table before showing a pay/no-pay verdict to the user.

## How it works
1. Receives a submission from an n8n Form with the supplier NIP, bank account number, invoice number, and gross amount in PLN.
2. Normalizes the inputs and validates the NIP checksum and the Polish bank account number checksum (NRB/PL IBAN).
3. If the input is invalid, displays a form completion message listing the validation errors.
4. If the input is valid, calls the Poland VAT White List (wykazpodatnikowvat.mf.gov.pl) API to retrieve the supplier’s VAT status and check whether the bank account is assigned to the NIP for today’s date.
5. Combines the API responses into a verdict (OK/NOT_ON_LIST/NOT_FOUND/CHECK/ERROR) and builds a user-facing explanation including the official requestId when available.
6. Writes an audit record of the check to an n8n Data Table and then displays the verdict and details back to the form submitter.

## Setup
1. Run the manual “create the checks table” trigger once to create the `vat_whitelist_checks` n8n Data Table.
2. Activate the workflow and share the production URL of the n8n Form used for payment checks.
3. Optionally adjust the API base URL, timezone, and the large-payment threshold (default 15,000 PLN) in the workflow settings values.

## Requirements
- An n8n instance with Data Tables and multi-page Forms (recent n8n version, cloud or self-hosted)
- Internet access to the public VAT White List API of the Polish Ministry of Finance (no API key or account needed)

## Customization
- Send NOT_ON_LIST and CHECK results to Slack, email or Telegram so the person approving payments is alerted.
- Replace the form with a Google Sheets or accounting-system trigger to check a whole list of pending payments.
- Add the requestId to your bank transfer export or payment description to keep the proof of the check next to the payment.
- Change the large-payment threshold and timezone in the Settings node.

## Additional info
- The White List API is free but has daily query limits per IP address; check the current limits on the Ministry of Finance website before using it at scale.
- The API moved to https://wykazpodatnikowvat.mf.gov.pl/api on 15 October 2026. The base URL is a single value in the Settings node, so it is easy to update.
- Only accounts of active VAT payers are listed. This workflow is a due-diligence helper, not tax or legal advice.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
