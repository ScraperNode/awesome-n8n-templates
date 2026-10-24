# 🔬 Log and verify Qersh wallet transfers via webhooks to Google Sheets

> ⚡ **13 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives signed Qersh wallet-transfer webhooks, verifies the request signature, and logs new incoming transfers to Google Sheets while avoiding duplicates by delivery ID and updating existing rows when a suspected forgery verdict arrives.

## How it works
1. Receives a POST webhook from Qersh containing a raw JSON delivery and signature headers.
2. Verifies the X-Qersh-Signature HMAC against the raw body using your connection key and rejects invalid requests with a 401 response.
3. Immediately returns a 200 OK response for valid deliveries, then stops processing if the event is a connection test.
4. Checks whether the event is a new incoming transfer (transfer.received) or an update event.
5. For transfer.received events, looks up the delivery_id in Google Sheets and appends a new row only if it is not already logged.
6. For update events flagged as suspected forgery, updates the matching Google Sheets row (by transfer_id) to set the status to “SUSPECTED FORGERY”.

## Setup
1. Replace the placeholder connection_key value in the Settings step with the Qersh connection key shown on the phone.
2. Create or choose a Google Sheet with columns for received_at, amount, currency, payer_number, payer_name, provider_txn_id, wallet, risk, auto_confirm_ok, transfer_id, delivery_id, and status.
3. Add a Google Sheets credential in n8n and select the target document and sheet in the Google Sheets read/append/update steps.
4. Activate the workflow and paste the Webhook Production URL into the Qersh app as your store URL.
5. If self-hosting n8n, set NODE_FUNCTION_ALLOW_BUILTIN=crypto so the signature verification code can use the crypto module.

## Requirements
- The Qersh app on the merchant's Android phone (it sends the signed webhook); a Google account with a sheet; self-hosted n8n with NODE_FUNCTION_ALLOW_BUILTIN=crypto, or n8n Cloud.

## Customization
- Add columns to the append step (for example balance_after or the payer handle). Keep 'Send sender details' on 'full name and number' in the wallet, or the payer number arrives masked.

## Additional info
Qersh (Qersh Pay) is a wallet notification relay, not a payment service provider: no money passes through Qersh or through n8n; the phone only tells your workflow that a transfer arrived. The phone retries a failed delivery for days, so a Sheets outage loses nothing. Docs: https://qersh.cfd/en/integrations/n8n . The Qersh community node (@qersh-pay/n8n-nodes-qersh) does the same with an encrypted credential.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
