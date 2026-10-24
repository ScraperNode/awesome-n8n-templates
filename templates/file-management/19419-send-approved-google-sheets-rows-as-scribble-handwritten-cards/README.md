# 📁 Send approved Google Sheets rows as Scribble handwritten cards

> ⚡ **1 views** · 📁 [File Management](../)

## Description

## Quick overview
Turn approved Google Sheets mailing rows into real handwritten cards with Scribble. The workflow checks the recipient fields and approval timestamp, prepares a stable sending reference, and sends only after you finish setup and enable the request.

## How it works
1. Triggers when the approval column changes on a selected Google Sheets worksheet.
2. Normalizes the updated row into a clean “mailing snapshot” payload with recipient, message, campaign identifiers, and Scribble design/handwriting IDs.
3. Validates that the row is approved, US-only, recently approved (under 23 hours), and meets format rules (state/ZIP/message length) with no existing card code.
4. Builds a stable reference value from the source, campaign_id, and send_id to use for idempotent sending.
5. Sends a POST request to the Scribble Cards API to create the handwritten card, using the stable reference as the Idempotency-Key.

## Setup
1. Connect Google Sheets Trigger OAuth2 credentials and set the Spreadsheet ID and worksheet/tab to monitor.
2. Ensure your sheet contains the required columns (including approval, approved_at, campaign_id, send_id, address fields, message, design_id, handwriting, and card_code) and keep ZIP and approved_at formatted as plain text.
3. Create an n8n HTTP Header Auth credential with Authorization: Bearer <your Scribble API key> (cards:send scope) and select it in the HTTP Request node.
4. Replace the source placeholders, choose valid Scribble design and handwriting IDs, and test the mapping while sending stays disabled. Before unattended sending, add a writeback step for the returned card ID and status. Keep approved rows immutable, then enable sending.

## Requirements
- An n8n instance, Google Sheets access, and a Scribble account with API access and available card credits.

## Additional info
A scheduled card uses one Scribble credit. Held results need review. The sender starts disabled; no result-writeback node is included. Keep the original approval timestamp and retry through the filter within 23 hours; reconcile uncertain sends before retrying. Learn more at [Scribble](https://scribblecards.com).

## 🔗 Nodes Used

HTTP Request, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
