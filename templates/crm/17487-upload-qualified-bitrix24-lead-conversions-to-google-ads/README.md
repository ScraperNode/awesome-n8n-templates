# 🤝 Upload qualified Bitrix24 lead conversions to Google Ads

> ⚡ **59 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow triggers on Bitrix24 deal updates, checks whether a deal is qualified and has a GCLID, then uploads an offline click conversion to the Google Ads API with hashed first-party customer identifiers and logs the result back to the Bitrix24 deal timeline.

## How it works
1. Receives a webhook from Bitrix24 when a deal is updated.
2. Fetches the full deal details from the Bitrix24 REST API and checks eligibility (GCLID present, qualified field matches, not previously sent, and a short dedupe window).
3. If eligible, loads the linked Bitrix24 contact and normalizes email, phone, and name fields to Google Ads formatting rules.
4. Hashes the normalized customer identifiers using SHA-256 and builds a Google Ads UploadClickConversions request with the GCLID, conversion action, value, and optional enhanced conversions identifiers.
5. Sends the conversion to the Google Ads API and validates the response for partial failures.
6. Writes a success or error comment to the Bitrix24 deal timeline and, on success, updates the deal to mark it as sent.

## Setup
1. Configure Bitrix24 by creating an outbound webhook for deal updates (for example, ONCRMDEALUPDATE) that points to this workflow’s production webhook URL.
2. Update the values in the Settings step, including your Bitrix24 inbound webhook base URL, Google Ads customer ID, login customer ID (MCC, if used), developer token, API version, conversion action ID, and the Bitrix24 custom field IDs for GCLID, qualification, and the sent flag.
3. Add a Google Ads OAuth2 credential to authenticate the Google Ads API request.
4. Ensure your Bitrix24 deals store the GCLID in the configured custom field and that the qualified field/value matches your pipeline stage or qualification logic.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
