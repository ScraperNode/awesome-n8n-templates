# 🧾 Issue sequential invoice and ticket numbers via webhook and Data Table

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow exposes a POST webhook that issues the next gapless sequential number (for invoices, tickets, or other sequences) by reading and updating a counter stored in an n8n Data Table, and returns a formatted number with an optional prefix and zero padding.

## How it works
1. Receives a POST request on a webhook endpoint with a `sequence_key` and optional `prefix` and `pad` parameters.
2. Validates and normalizes the request values, falling back to safe defaults if inputs are missing or malformed.
3. Looks up the matching counter row in the n8n Data Table `number_sequences` using the provided `sequence_key`.
4. Calculates the next counter value, applies the requested or stored prefix, and formats the number using the requested zero-padding width.
5. Upserts the updated counter back into the `number_sequences` Data Table keyed by `sequence_key`.
6. Returns a JSON response containing the issued formatted number, the updated counter value, and a timestamp.

## Setup
1. Create an n8n Data Table named `number_sequences` with columns `sequence_key` (string), `current_value` (number), `prefix` (string), and `updated_at` (string).
2. Ensure the Data Table name/reference in the read and upsert steps points to `number_sequences` and that `sequence_key` is used as the matching column.
3. Activate the workflow, copy the production webhook URL for `/next-number`, and configure your calling system to POST a JSON body such as `{ "sequence_key": "invoice", "prefix": "INV-", "pad": 6 }`.
4. If you require strictly no gaps, serialize requests to this endpoint (for example, by ensuring a single caller or limiting concurrent executions) to avoid simultaneous reads of the same counter value.

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
