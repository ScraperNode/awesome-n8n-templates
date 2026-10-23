# 🔬 Track policy and meeting minutes acknowledgments with Gmail and Google Sheets

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow uses a single n8n webhook to email policy or meeting-minute links via Gmail, track per-recipient acknowledgments in an n8n Data Table, and mirror completed acknowledgments to Google Sheets, while also serving a secret-protected HTML status page of outstanding recipients.

## How it works
1. Receives a webhook request on `/policy-ack-tracker` and routes it by the `action` parameter, enforcing a shared secret for `distribute` and `status` requests.
2. For `action=distribute`, splits the provided audience email list into individual recipients and generates an HMAC-SHA256 token for each person using the document ID and recipient email.
3. Stores one pending record per recipient in an n8n Data Table (Policy Ack Ledger) and sends each person a Gmail message containing the document link and their unique acknowledgment URL.
4. For `action=ack`, looks up the matching ledger entry by `docId` and `email`, validates the token, and serves a confirmation landing page to avoid recording from link-scanner visits.
5. When the recipient clicks confirm (`confirm=yes`), updates the ledger row to `acknowledged` with a timestamp, appends the acknowledgment to a Google Sheets “Ack Log” worksheet, and returns a confirmation page.
6. For `action=status`, reads all ledger rows and returns an HTML status page grouped by document that lists outstanding recipients and completion counts.

## Setup
1. Set `PUBLIC_BASE_URL`, `HMAC_SECRET`, `API_SHARED_SECRET`, and `ACK_LOG_SHEET_ID` in the workflow’s configuration values so links, token signing, and authorization work correctly.
2. Create an n8n Data Table named “Policy Ack Ledger” with the fields used in the workflow (docId, docTitle, docLink, recipientEmail, token, sentAt, ackStatus, acknowledgedAt).
3. Add Gmail OAuth2 credentials to the Gmail node so the workflow can send acknowledgment emails.
4. Add Google Sheets OAuth2 credentials, create a spreadsheet with a worksheet named “Ack Log”, and ensure it has columns for docId, docTitle, recipientEmail, acknowledgedAt, and ackStatus.
5. After activating the workflow, copy the production webhook URL and call it with `action=distribute` (POST) or `action=status` (GET) including the shared secret as shown in the workflow’s request parameters.

## Requirements
- An n8n instance on a version that offers Data Tables, since four nodes in the workflow read and write the Policy Ack Ledger and there is no external database fallback.
- An n8n instance reachable from the public internet at the address you put in PUBLIC_BASE_URL, because recipients open their acknowledgment link from their own mail client and browser.
- Gmail sending headroom for the whole audience, since each distribute run sends one separate message per recipient with no batching or BCC.
- Every distribute call needs docId, docTitle, docLink and an audience array of plain email strings in the JSON body, since the fan out splits on body.audience and each ledger row is written straight from that payload. The secret travels in that same body, while status reads it from the query string instead.
- A docId that is unique and stable per document, since acknowledgment lookups match on docId plus recipient email and the status page groups outstanding people by docId.
- A document link every recipient can already open, because the email passes the URL through as given and grants nobody access to it.

## Customization
- Rewrite the subject and HTML body in Email Acknowledgment Link to add a deadline, a policy owner or your own tone, leaving the acknowledgment link expression in place.
- Restyle the inline HTML in Respond Landing Page, including the green #1a7f37 confirm button, and in Respond Confirmation Page, where the recorded time is formatted as yyyy-MM-dd HH:mm.
- Build Chase Table Page treats every row whose ackStatus is not 'acknowledged' as outstanding, so edit that filter to list completions instead, or add a docId condition to Fetch Ledger Rows so the page covers one document rather than the whole ledger.
- The Sheets append is a mirror, not the source of truth, so point it at a different spreadsheet, swap it for Airtable or Notion, or remove Mirror Ack To Sheets Log and wire Record Acknowledgment straight to Respond Confirmation Page.
- Add columns such as a due date or a department to the Policy Ack Ledger, fill them in Record Ledger Row, then print them as extra table cells in the Build Chase Table Page code.
- Add a version string to the value hashed in Sign Recipient Token so that reissuing a document invalidates every link from the earlier round.

## Additional info
The acknowledgment link proves possession of a token, not identity, so a forwarded link can be confirmed by whoever holds it and the result is an internal compliance record rather than a legal e-signature. Nothing chases anyone: there is no schedule trigger, no reminder mail and no due date field, so follow-up runs off the status page by hand. Distribute is not idempotent, so calling it twice for the same document and audience writes a second set of pending rows and mails everyone again. The Gmail and Sheets nodes are set to continue on error, so a bounced address or a failed append surfaces nowhere, and the distribution response counts the recipients split out of the audience rather than mail actually delivered. Tokens carry no expiry, and reissuing a document under the same docId regenerates the identical token, so an older link keeps working; revoking one means deleting that person's ledger row by hand, since the workflow has no revoke action.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
