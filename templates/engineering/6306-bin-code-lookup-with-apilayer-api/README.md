# ⚒️ BIN code lookup with apilayer API

> ⚡ **71 views** · ⚒️ [Engineering](../)

## Description

This workflow is designed to validate and fetch information about a card using the BIN code. It utilizes apilayer's BIN Check API and provides details like the card brand, type, issuing bank, and country.

Prerequisites:
- An apilayer account
- API Key for the BIN Check API

---

Steps in n8n:

Step 1: Manual Trigger
- Node Type: Manual Trigger
- Purpose: Starts the workflow manually

Step 2: Set BIN Code and API Key
- Node Type: Set
- Fields to set:
  - bin_code: A sample BIN like JH4KA7560RC003647
  - apikey: Your apilayer API key

Step 3: HTTP Request
- Node Type: HTTP Request
- Method: GET
- URL: https://api.apilayer.com/bincheck/{{ $json.bin_code }}
- Headers:
  - Name: apiKey
  - Value: {{ $json.apikey }}

(Optional) Step 4: Handle the Output
- Add nodes to store, parse, or visualize the API response.

---

Expected Output:
The response from apilayer contains detailed information about the provided BIN:
- Card scheme (e.g., VISA, MasterCard)
- Type (credit, debit, prepaid)
- Issuing bank
- Country of issuance

---

Example Use Case:
Use this to build a fraud prevention microservice, pre-validate card data before sending to payment gateways, or enrich card-related logs.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
