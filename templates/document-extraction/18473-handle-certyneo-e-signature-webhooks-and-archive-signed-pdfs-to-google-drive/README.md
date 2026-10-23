# 🔬 Handle Certyneo e-signature webhooks and archive signed PDFs to Google Drive

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Sends a contract for signature from a Certyneo template, verifies the HMAC signature on every event Certyneo posts back, then files the sealed PDF and its audit trail in Google Drive as soon as the signer is done.

## How it works
1. Everything you configure lives in one Set node: your Certyneo template ID, the signer's name and email, the subject and the message.
2. Creates a draft envelope from that template through the Certyneo REST API, then sends it to the signer in a second call.
3. Receives Certyneo's signature events on a Webhook node configured to keep the untouched request bytes alongside the parsed body.
4. Recomputes the HMAC-SHA256 of those raw bytes with a Crypto node and compares it against the X-Certyneo-Signature header, so a mismatch stops the run instead of reaching your Drive.
5. Keeps only envelope.completed events, then downloads the sealed PDF and the audit trail from the Certyneo API as binary files.
6. Uploads both documents to your Google Drive, each named after the envelope ID.

## Setup
1. In Certyneo, open Settings then REST API and create an API key with the envelopes and webhooks scopes. It is shown only once.
2. In n8n, add a Header Auth credential named Authorization whose value is Bearer followed by that key, and select it on every Certyneo HTTP Request node.
3. Open the Certyneo signature event node, copy its Production URL into the url field of Register the Certyneo webhook, and run that node once.
4. Paste the secret returned by that call into a Crypto credential as the Hmac Secret. That is what the signature check compares against.
5. Connect your Google account on the two archive nodes. They upload to the root of My Drive by default; pick a folder if you prefer.

## Requirements
- A Certyneo account on a plan that includes REST API access, and a Google account for the Drive archive. A sandbox key starting sk_test_ runs the whole flow without emailing a real signer.

## Customization
- The subscription covers every Certyneo event, so change the Filter to envelope.declined, or swap it for a Switch, to react to refusals as well. Replace the Google Drive nodes with S3, SharePoint or a Slack upload: they consume the same binary field. Swap templateId for documentIds to build an envelope without a saved template.

## Additional info
This workflow was rebuilt after the 2026-08-19 review: the four "Do nothing" branches are gone and the flow now completes a full contract loop. Inside the JSON it is named "Send contracts for signature with Certyneo and archive signed PDFs in Google Drive". The title shown on this page is the one from the first submission, and the portal offers no field to change it.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Stop and Error, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
