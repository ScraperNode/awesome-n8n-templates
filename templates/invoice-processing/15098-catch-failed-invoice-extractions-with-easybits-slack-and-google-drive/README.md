# 🧾 Catch failed invoice extractions with easybits, Slack, and Google Drive

> ⚡ **13 views** · 🧾 [Invoice Processing](../)

## Description

## What This Workflow Does
Monitors incoming invoice emails and catches extraction failures before they slip through. When **easybits Extractor** can't extract the invoice number from an attachment, the workflow sends a Slack alert to finance so nothing gets lost. Successfully extracted invoices are archived to Google Drive – only clean, validated files land there.

## How It Works
1. **Gmail Trigger** – Polls for new emails with attachments every minute
2. **Extraction** – The attachment is sent to easybits Extractor
3. **Validation** – An IF node checks if `invoice_number` was successfully extracted
4. **On failure** – A Slack alert is sent to finance for manual review
5. **On success** – The file is merged back with its extracted data and archived to Google Drive

## Why This Matters
Extractor returns null when it can't confidently identify a data point – which is the right behavior (better than hallucinating a value). But without a safety net, those nulls can propagate into your Sheets, your approval flow, or your accounting system. This workflow makes silent failures visible.

## Setup Guide

### 1. Set Up Your easybits Extractor Pipeline
1. Go to [extractor.easybits.tech](https://extractor.easybits.tech) and create a pipeline for invoice extraction
2. Make sure your pipeline includes an `invoice_number` field (this is the field the validation step checks)
3. Click **"Auto-Map Fields"** to let the Extractor suggest fields from a sample invoice, then review and save
4. Copy your **Pipeline ID** and **API Key** from **Pipeline Details → View Pipeline**

&gt; 💡 **Tip:** You can validate against any field that's critical for your use case – just swap `invoice_number` in the IF node for whatever field you define as mandatory (e.g. `total_amount`, `vendor_name`).

### 2. Install the easybits Extractor Node
- **n8n Cloud:** The node is **verified** – just search for "easybits Extractor" in the node panel
- **Self-hosted:** Go to **Settings → Community Nodes → Install** and enter `@easybits/n8n-nodes-extractor`

### 3. Connect Your Credentials
1. **Gmail Trigger: New Invoice** – Add your Gmail OAuth2 credential and confirm the polling interval
2. **easybits: Extract Invoice Number** – Enter your Pipeline ID and API Key
3. **Slack: Notify – Extraction Failed** – Add your Slack credential and update the target user or channel
4. **Upload to Invoice Folder** – Add your Google Drive credential and select the folder where archived invoices should land

### 4. Adjust the Validation Field (Optional)
The IF node currently checks `{{ $json.data.invoice_number }}` with the **is empty** operator. If your pipeline uses a different critical field, update this expression to point at that field.

### 5. Activate & Test
1. Click **Active** in the top-right corner of n8n
2. Send yourself a test email with an invoice that's hard to read (blurry photo, scanned copy with poor contrast) to force an extraction failure
3. Confirm you receive the Slack alert
4. Send a clean invoice to confirm the success branch uploads correctly to Google Drive

## 🔄 Extending This Pattern
This error handling branch can sit in front of any workflow in the easybits series:

- **Invoice Approval Pipeline** – catch failed extractions before they hit Slack approval
- **Document Classification Pipeline** – flag documents that couldn't be classified confidently
- **Receipt-to-Sheet** – prevent null rows from polluting your expense tracker

The pattern is always the same: Extractor → IF (is empty) → error branch alongside your main path.

## 🔗 Nodes Used

Slack, Google Drive, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
