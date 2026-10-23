# 🧾 Validate Belgian VAT numbers and Peppol status with VIES and the Peppol API

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Check whether a Belgian company can actually receive your e-invoice. Validates the enterprise number, pulls the official name and address from VIES, and searches the Peppol Directory under both Belgian schemes. No credentials required.

## How it works
1. Receives a submission from an n8n form with a Belgian VAT or company number (and an optional email field).
2. Normalizes the input to a 10-digit Belgian number, formats it, and validates it using the mod 97 checksum.
3. Queries the EU VIES REST API to confirm whether the VAT number is active and to retrieve the registered name and address.
4. Searches the Peppol Directory for the participant using the Belgian enterprise number scheme (0208) and then the Belgian VAT scheme (9925).
5. Combines the checksum result, VIES status, and Peppol matches into a single verdict and fills in missing name details from Peppol when VIES does not return them.
6. Displays a completion page in the form with the formatted number, VAT validity, Peppol status, address, and a clear recommendation.

## Setup
1. There is nothing to configure. Both VIES and the Peppol Directory are public services that need no API key, no account and no credentials, so the workflow runs the moment you import it.
2. Open the workflow, click Execute workflow, and open the test form URL shown on the trigger node. Enter BE 0203.201.340 as a known-good example and you should see the company name and address come back, together with its Peppol status.
3. To use the form permanently, activate the workflow and share the production URL from the form trigger node with whoever needs it.

## Requirements
- No credentials, no accounts, no paid services

- n8n 1.x, self-hosted or cloud

- Outbound access to ec.europa.eu and directory.peppol.eu

## Customization
- Add a Google Sheets or Airtable node after the report step to log every check and build a customer list over time
- Replace the form trigger with a Google Sheets trigger to validate an entire customer base in one run, adding a Wait node to respect the rate limit
- Call the workflow by webhook from your invoicing tool so every new customer is checked automatically

## Additional info
The Peppol Directory allows two queries per second. This is never an issue for manual lookups, but add a Wait node when processing a list.

Both HTTP nodes are set to continue on error, so a temporary outage of either service returns "not found" instead of failing the run. If you get an unexpected "not found" for a company you are sure about, retry an hour later.

A company that is absent from Peppol is not necessarily doing anything wrong: businesses without VAT liability and foreign customers fall outside the Belgian mandate. The verdict therefore suggests sending a PDF for now, rather than reporting an error.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
