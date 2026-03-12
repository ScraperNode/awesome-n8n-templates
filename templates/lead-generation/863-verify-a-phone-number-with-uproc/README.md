# 🎣 Verify a phone number with uProc

> ⚡ **1,586 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Do you want to avoid communication problems when launching phone calls? 

This workflow verifies landline and mobile phone numbers using the uProc [**Get Parsed and validated phone tool**](https://app.uproc.io/#/tools/processor/get/phone/parsed) with worldwide coverage.

![workflow-screenshot](fileId:362)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

Node "Create Phone Item" can be replaced by any other supported service with phone values, like databases (MySQL, Postgres), or Typeform.

The "uProc" node returns the next fields per every parsed and validated phone number:
- country_prefix: contains the international country phone prefix number.
- country_code: contains the 2-digit ISO country code of the phone number.
- local_number: contains the phone number without international prefix.
- formatted: contains a formatted version of the phone number, according to country detected.
- valid: detects if the phone number has a valid format and prefix.
- type: the phone number type (mobile, landline, or something else).

"If" node checks if the phone number is valid.

You can use the result to mark invalid phone numbers in your database or discard them from future telemarketing campaigns.

## 🔗 Nodes Used

Function Item, Start, uProc

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
