# 🔬 Classify documents and score confidence with easybits Extractor and Slack

> ⚡ **46 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What This Workflow Does
Upload a document (PDF, PNG, or JPEG) via a hosted web form and let the **easybits Extractor** classify it into one of your defined categories – **with a self-reported confidence score** on every classification. Low-confidence or unclassifiable documents are routed to Slack for manual review. Everything else continues through your pipeline.

## Why Confidence Scoring Matters
Classification without confidence scoring is a black box: you never know whether the model was sure or guessing. By asking the extractor to return both `document_class` and `confidence_score` in a single call, you get a clean signal for routing decisions and a trivial error-handling pattern – no separate model call, no extra latency, no extra cost.

## How It Works
1. **Form Upload** – A user uploads a file through the n8n web form.
2. **Classify + Score via easybits** – The file is sent to the easybits Extractor, which returns two fields: `document_class` (e.g. `medical_invoice`, `hotel_invoice`, or `null` if uncertain) and `confidence_score` (a decimal between 0.0 and 1.0).
3. **Validation** – An IF node checks whether the class is empty OR the confidence is below 0.5. Either condition routes the document to Slack for manual review. Everything else passes through to the success branch.
4. **Continue Pipeline** – From here, extend the workflow however you like: route to Google Drive folders, log to a spreadsheet, trigger type-specific extraction, etc.

## Setup Guide

### 1. Create Your easybits Extractor Pipeline
1. Go to **extractor.easybits.tech** and create a new pipeline.
2. Add **two fields** to the mapping:
   - `document_class` – for the classification label
   - `confidence_score` – for the self-reported confidence
3. In the description of each field, paste the matching prompt. Use the two prompt sticky notes in this workflow as starting points – they're production-tested.
4. Adjust the categories and threshold guidance to fit your use case.

### 2. Install the easybits Extractor Node
1. The node is **verified** and works on n8n Cloud out of the box – just search for it in the node panel.
2. For self-hosted instances: **Settings → Community Nodes → Install** `@easybits/n8n-nodes-extractor`.

### 3. Configure the Node
1. Add the **easybits Extractor** node to your workflow.
2. Enter your **Pipeline ID** and **API Key** from the pipeline details page.

The node reads binary data directly from the previous node. No Base64 conversion or manual HTTP configuration needed.

### 4. Tune the Confidence Threshold
The default threshold in the IF node is **0.5**. Raise it (e.g. 0.7) if your downstream pipeline is sensitive to misclassification, or lower it if you'd rather catch more edge cases manually. Adjust based on your review capacity.

### 5. Activate & Test
1. Click **Active** in the top-right corner of n8n.
2. Open the form URL and upload a test document – try both a clear-cut case and an ambiguous one.
3. Check the execution output: you should see your `document_class` and `confidence_score` in the response, and the review branch should fire on the ambiguous document.

## Credentials to Configure
- **easybits Extractor** – Pipeline ID + API Key
- **Slack** – workspace credentials and the channel/user to receive review alerts

## 🔗 Nodes Used

Slack, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
