# 🎣 Send purchase conversions from Bitrix24 deals to Google Ads using offline click tracking

> ⚡ **16 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives Bitrix24 deal updates via a webhook, fetches the deal and contact details, and uploads an offline Purchase conversion to the Google Ads Click Conversion API using the deal’s GCLID and value, then writes success or error notes back to the deal and flags it as sent.

## How it works
1. Receives a POST webhook from Bitrix24 Business Process automation containing a deal payload.
2. Extracts the deal ID from the incoming payload and retrieves the full deal record from the Bitrix24 REST API.
3. Checks that the deal is in the WON stage, contains a GCLID, and has not been sent before, then builds a Google Ads click conversion payload (value, currency, timestamp, order ID) and optionally hashes contact identifiers (email/phone/address) for enhanced conversions.
4. Sends the conversion to the Google Ads API endpoint `uploadClickConversions` using Google Ads OAuth2 credentials.
5. Validates the Google Ads response, treating duplicate/already-exists/expired-event partial failures as terminal success and raising other partial failures as errors.
6. Adds a success or error comment to the Bitrix24 deal timeline with key details (GCLID, value, and any API error information).
7. If the conversion is accepted (or terminally duplicate), updates the Bitrix24 deal to set a custom “sent” flag so the workflow does not resend the same Purchase conversion.

## Setup
1. Create or reuse a Bitrix24 inbound webhook (or REST app) and replace `YOUR_PORTAL`, `USER_ID`, and `YOUR_WEBHOOK_CODE` in all Bitrix24 REST URLs.
2. Configure the Bitrix24 Business Process to call the n8n webhook URL for the `bitrix-google-purchase-bp` path and include the deal ID in the payload.
3. Add Google Ads OAuth2 credentials in n8n, then set your Google Ads customer ID and conversion action resource name in the request payload and URL.
4. Replace the custom Bitrix24 field IDs used for GCLID, conversion timestamp, and the “sent” flag (e.g. `UF_CRM_...`) to match your Bitrix24 deal/contact fields.
5. Ensure your Google Ads access includes the required developer token and (if applicable) login-customer-id header values used for your manager account setup.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
