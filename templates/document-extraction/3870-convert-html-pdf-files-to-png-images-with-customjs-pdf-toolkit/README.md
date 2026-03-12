# 🔬 Convert HTML & PDF files to PNG images with CustomJS PDF Toolkit

> ⚡ **4,490 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![workflow.png](fileId:1271)
This n8n workflow shows how to convert PDF files into PNG format with the PDF Toolkit from www.customjs.space.

[@custom-js/n8n-nodes-pdf-toolkit](https://www.npmjs.com/package/@custom-js/n8n-nodes-pdf-toolkit)

### Notice

Community nodes can only be installed on self-hosted instances of n8n.

### What this workflow does

- **Generate** PDF file from the requested HTML.
- **Convert** the PDF to PNG images.
- **Use** a Code node to handle URLs that point to PDF files.
- **Convert** the PDF to PNG format.

### Requirements

- **Self-hosted** n8n instance.
- **CustomJS API key** for converting PDF to PNG.
- **HTML** Data to convert PDF files.
- **Code node** for handling URL that indicates PDF file.

### Workflow Steps:

1. **Manual Trigger**:

   - Runs with user interaction.

2. **HTML to PDF**:

   - Request HTML Data.
   - Convert HTML to PDF.
   - Request PDF from Code.

3. **Convert PDF to PNG**:
   - Convert the generated PNG from PDF

---


### Usage

### Get API key from [customJS](https://www.customjs.space)

- Sign up to customJS platform.
- Navigate to your profile page
- Press "Show" button to get API key
![1.png](fileId:1272)

### Set Credentials for CustomJS API on n8n

Copy and paste your API key generated from CustomJS here.
![2.png](fileId:1270)

### Design workflow

- A Manual Trigger for starting workflow.
- HTTP Request Nodes for downloading PDF files.
- Code node for handling URL that indicates PDF file.
- Convert PDF to PNG.

You can replace logic for triggering and returning results.
For example, you can trigger this workflow by calling a webhook and get a result as a response from webhook. Simply replace Manual Trigger and Write to Disk nodes.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
