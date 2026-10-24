# 🧾 Benchmark invoice data extraction accuracy with easybits

> ⚡ **10 views** · 🧾 [Invoice Processing](../)

## Description

## What This Workflow Does
Upload the same invoice in different qualities (original PDF, scanned copy, phone photo, compressed JPEG, etc.) and instantly see how accurately each field was extracted. The workflow compares every extracted value against a fixed ground truth and returns a per-field pass/fail report with an overall accuracy percentage – directly in the browser.

## How It Works
1. **Upload** – A document is submitted through the n8n web form
2. **Extract** – easybits Extractor processes the file and returns structured data
3. **Compare** – Each extracted field is compared against the known correct values
4. **Report** – A completion screen shows which fields matched and the overall accuracy

## Setup Guide

### 1. Create Your easybits Extractor Pipeline
1. Go to [extractor.easybits.tech](https://extractor.easybits.tech/) and create a new pipeline
2. Upload one of the example invoices as your reference document – you can find them [here](https://github.com/felix-sattler-easybits/n8n-workflows/tree/88d7c9818b150e71dd749bf9f665359fa57efcb9/data-extraction-stresstest).
3. Click **Auto-Mapping** – the Extractor will automatically detect and set up all fields for you
4. Save the pipeline and copy your **Pipeline ID** and **API Key**

### 2. Connect Your easybits Credentials
Open the **easybits Extractor** node in the workflow and connect your credentials (Pipeline ID & API Key). The node will use the pipeline you just created – no further configuration needed.

### 3. Adjust the Ground Truth (if needed)
The **Ground Truth** node contains the expected values for all 10 fields. If you're testing with a different document, update these values to match your reference invoice.

### 4. Activate & Test the workflow by uploading your first test document

---

## 🔄 Want to Test a Different Extraction Solution?
You can swap out the easybits Extractor node for an **HTTP Request node** pointing at any other extraction API. As long as your HTTP node returns the same field names under `json.data` (e.g. `data.invoice_number`, `data.amount_paid`, etc.), the rest of the workflow – ground truth comparison, validation, and results display – works identically. This makes it easy to benchmark multiple solutions side by side using the exact same test documents and accuracy criteria.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
