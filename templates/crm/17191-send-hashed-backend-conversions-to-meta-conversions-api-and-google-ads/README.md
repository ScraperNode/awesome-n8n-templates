# 🤝 Send hashed backend conversions to Meta Conversions API and Google Ads

> ⚡ **18 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow reads backend conversion events, normalizes and SHA-256-hashes required identifiers, and then sends each conversion to Meta Conversions API, Google Ads Enhanced Conversions, or both using HTTP requests with environment-based access tokens.

## How it works
1. Runs manually to start the conversion upload.
2. Sets the Meta Pixel ID, Meta/Google API versions, and Google Ads customer and conversion action IDs used to build requests.
3. Loads backend conversion records (example rows) that include a destination flag (meta, google, or both) plus identifiers and conversion value data.
4. Normalizes the identifier fields and hashes the required PII fields (email, phone, name, city/state/zip/country) with SHA-256.
5. Regroups hashed identifiers with the original non-hashed fields (such as external_id, fbc/fbp, IP address, and user agent) into a per-conversion payload structure.
6. Routes each conversion to Meta and/or Google based on the destination flag.
7. Sends conversions to the Meta Conversions API and uploads conversions to the Google Ads API using authenticated HTTP requests.

## Setup
1. Replace the example conversion source with your own data source (for example Supabase, Postgres, or Google Sheets) and ensure each record includes destination, identifiers, event details, and value/currency.
2. Update the configuration values for META_PIXEL_ID, GOOGLE_ADS_CUSTOMER_ID, GOOGLE_ADS_CONVERSION_ACTION, and any API version or test event settings.
3. Set the required environment variables in n8n: META_ACCESS_TOKEN, GOOGLE_ADS_ACCESS_TOKEN, and GOOGLE_ADS_DEVELOPER_TOKEN.
4. If needed, set GOOGLE_ADS_LOGIN_CUSTOMER_ID for manager-account access, and set META_TEST_EVENT_CODE to test Meta events before going live.

## Customization
- Adjust the trigger and source data as per your CRM/Event source

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
