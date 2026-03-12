# 🔬 Extract specific pages from PDFs with CustomJS API

> ⚡ **671 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![workflow.png](fileId:1276)
This n8n template shows how to extract selected pages from a generated PDF with the PDF Toolkit by www.customjs.space.

[@custom-js/n8n-nodes-pdf-toolkit](https://www.npmjs.com/package/@custom-js/n8n-nodes-pdf-toolkit)

## Notice

Community nodes can only be installed on self-hosted instances of n8n.

## What this workflow does

- **Downloads** each PDF using an HTTP Request.
- **Extract** pages from the PDF file as needed.

## Requirements

- **Self-hosted** n8n instance
- **CustomJS API key** for extracting PDF files.
- **PDF files to be merged** to be converted into a PDF

## Workflow Steps:

1. **Manual Trigger**:

   - Runs with user interaction.

2. **Download PDF File**:

   - Pass urls for PDF files to merge.

3. **Extract Pages from PDF**:
   - Extract selected pages from a generated PDF

---

## Usage

### Get API key from [customJS](https://www.customjs.space)

- Sign up to customJS platform.
- Navigate to your profile page
- Press "Show" button to get API key
![1.png](fileId:1278)

### Set Credentials for CustomJS API on n8n

Copy and paste your API key generated from CustomJS here.
![2.png](fileId:1277)

### Design workflow

- A Manual Trigger for starting workflow.
- HTTP Request Nodes for downloading PDF files.
- Extract Pages from PDF.

You can replace logic for triggering and returning results.
For example, you can trigger this workflow by calling a webhook and get a result as a response from webhook. Simply replace Manual Trigger and Write to Disk nodes.

## Perfect for

- Taking a note of specific pages from PDF files.
- Splitting PDF file into multiple parts.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
