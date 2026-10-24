# 🔬 Classify and route email attachments with easybits, Gmail and Google Drive

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What This Workflow Does
Receive any business document via email. The attachment is automatically **classified** (Invoice, Contract, or Purchase Order) using easybits Extractor, then **routed** down the correct path where a second Extractor pulls out document-specific data. Each route stores the file in Google Drive and triggers the appropriate action – Invoices go to a finance spreadsheet, Contracts and Purchase Orders trigger Slack notifications.

## How It Works
1. **Receive** – Gmail polls for new emails with attachments every minute
2. **Classify** – easybits Extractor identifies the document type and returns a class label
3. **Route** – A Switch node sends the item down the matching path (Invoice / Contract / PO)
4. **Merge Binary** – The original file is merged back into the routed item (classification strips the binary)
5. **Extract** – A second easybits Extractor pulls fields specific to that document type
6. **Merge Data + File** – Extracted JSON and original binary are combined for upload
7. **Store & Notify** – The file is uploaded to Google Drive; Invoices update a spreadsheet, Contracts and POs trigger Slack alerts

---

## Setup Guide

### 1. Create Your easybits Classification Pipeline
1. Go to **extractor.easybits.tech** and create a new pipeline
2. Add **one field** called `document_class`
3. In the field prompt, describe your classification categories and how to identify each one (see the "easybits: Classify Document" node for a reference prompt)
4. The prompt should instruct the model to return exactly one category label – no explanations, no extra text
5. Adjust the categories and identification criteria to match your specific document types
6. Copy your **Pipeline ID** and connect the credential in the classification node

&gt; 💡 **Tip:** The classification prompt is the heart of this workflow. The more specific your category descriptions and decision rules are, the more accurate your results will be.

### 2. Create Three Extraction Pipelines
Create one pipeline per document type on **extractor.easybits.tech**:
- **Invoice pipeline** – fields: `invoice_number`, `total_amount`, `currency`, `due_date`, `vendor_name`
- **Contract pipeline** – fields: `client_name`, `contract_type`, `contract_value`, `currency`, `start_date`, `notice_period`
- **Purchase Order pipeline** – fields: `supplier_name`, `po_number`, `order_date`, `expected_delivery_date`, `total_amount`, `currency`

Connect each pipeline's credentials to the matching Extractor node.

### 3. Set Up Gmail
Connect your Gmail account via OAuth2. Optionally filter by label to only process specific emails. Make sure **Download Attachments** is enabled in the node options.

### 4. Set Up Google Drive
Create three folders in Google Drive: **Invoices**, **Contracts**, **Purchase Orders**. Select the correct folder in each Upload node. Set the **Input Binary Field** to `attachment_0` (or whichever field carries the PDF).

### 5. Set Up Google Sheets
Create a spreadsheet (or use an existing Master Finance File). Make sure the column headers match the field mappings in the "Update Master Finance Sheet" node.

### 6. Set Up Slack
Connect your Slack workspace. Select the channel for contract notifications (e.g. `#contracts`) and the channel for PO updates (e.g. `#operations`). Adjust the message templates if your extracted field names differ.

### 7. Activate & Test
Set the workflow to active and send a test email with an invoice, contract, and purchase order attached to verify each route works end to end.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
