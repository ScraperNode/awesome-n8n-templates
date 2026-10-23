# 🔬 Validate DigiParser purchase orders and export staging CSV files

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow validates DigiParser purchase order extraction events, flags problematic orders for review, and exports two CSV files: one with staging-ready line items and another with orders that need manual follow-up.

## How it works
1. Starts when you manually run the workflow to simulate processing DigiParser `document.exported` events.
2. Loads a batch of sample DigiParser payloads that contain purchase order header fields and line items.
3. Validates required PO fields, currency and date formats, line-item quantities and arithmetic, order-total reconciliation, and detects duplicate customer+PO pairs within the batch.
4. Splits the results into valid orders that are ready for staging and invalid orders that need review, including the reasons for failure.
5. Converts valid orders into a line-level CSV file for import into downstream order-entry or ERP staging.
6. Converts invalid orders into a separate CSV file so an operator can correct data issues and reprocess.

## Setup
1. Run the included synthetic demo first; no account connection is required. For real data, replace Load synthetic DigiParser events with a trusted source and map each item to event: document.exported, data.id and data.extracted_data. Match Customer Name, PO Number, PO Date, Currency, Order Total and Line Items to your parser fields.
2. For API output, map documentId to data.id and combine fields and tables into data.extracted_data. Store credentials in n8n. For webhook input, verify the DigiParser webhook signature before passing data into this workflow. The supplied JSON contains no public webhook endpoint.
3. Adjust the validation and mapping logic if your purchase orders include taxes, freight, discounts, different money precision, or different line-item field names.

## Requirements
- An n8n instance with JavaScript Code and Convert to File nodes. A DigiParser account and trusted extracted data are required only when replacing the synthetic demo source.

## Additional info
Contributed by DigiParser with AI assistance. Tested in n8n 2.41.7 using three synthetic events: one valid order produced two staging CSV rows, and two cases entered the review CSV. Live DigiParser authentication, extraction and ERP writes were not tested. Duplicate checks cover one batch only. Setup: https://www.digiparser.com/solutions/purchase-order-parser. Webhook documentation: https://www.digiparser.com/docs/api/webhooks.

## 🔗 Nodes Used

Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
