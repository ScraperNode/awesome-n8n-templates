# 🔬 Issue warehouse packing slips with pdfmill, Gmail, and Google Drive

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a paid-order webhook, validates the full fulfilment payload, generates a price-free packing slip PDF with pdfmill, emails it to the warehouse via Gmail, and archives the same PDF in Google Drive before returning a JSON confirmation.

## How it works
1. Receives a POST webhook request when a paid order is ready to fulfil.
2. Validates and normalizes order identity, dates, ship-from/ship-to addresses, warehouse email, and line items (SKU, description, positive integer quantity).
3. If validation fails, returns a single 400 JSON response describing the rejected fields and stops processing.
4. If valid, generates a packing slip PDF from the pdfmill “packing-slip” template using the validated order data.
5. Emails the PDF attachment to the warehouse using Gmail and uploads the same PDF to Google Drive for archiving.
6. Waits for both the Gmail send and Google Drive upload to complete, then responds to the webhook with `packing_slip_ready`, including the order number and total unit count.

## Setup
1. Create and add credentials for pdfmill, Gmail, and Google Drive in n8n.
2. In the Google Drive upload step, select the target Drive and folder where packing slips should be archived.
3. Copy the Production webhook URL for the `paid-order-packing-slip` endpoint and configure your ecommerce/OMS system to POST the required order payload (including `warehouseEmail`, `shipFrom`, `shipTo`, and `items`).

## 🔗 Nodes Used

Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
