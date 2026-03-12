# 📁 Download and merge multiple PDFs from URLs with the CustomJS API

> ⚡ **2,421 views** · 📁 [File Management](../)

## Description

![image.png](fileId:1038)
This n8n template demonstrates how to download multiple PDF files from public URLs and merge them into a single PDF using the PDF Toolkit from [www.customjs.space](https://www.customjs.space).

[@custom-js/n8n-nodes-pdf-toolkit](https://www.npmjs.com/package/@custom-js/n8n-nodes-pdf-toolkit)

## What this workflow does

- **Defines** an array of PDF URLs.
- **Splits** the array to process each URL individually.
- **Downloads** each PDF using an HTTP Request.
- **Merges** all downloaded PDFs using the Merge PDF node from the @custom-js/n8n-nodes-pdf-toolkit.
- **Writes** the final merged PDF to disk.

## Requirements

A free CustomJS account.
An API Key saved in n8n as credentials of type CustomJS account.

## Notice

Community nodes can only be installed on self-hosted instances of n8n.

## Usage

### Get API key from [customJS](https://www.customjs.space)

- Sign up to customJS platform.
- Navigate to your profile page
- Press "Show" button to get API key
![image.png](fileId:1042)

### Set Credentials for CustomJS API on n8n

Copy and paster your API key generated from CustomJS here.
![image.png](fileId:1037)

### Design workflow

- A Manual Trigger for starting workflow.
- A code node that returns URLs of PDF files as an array
- Split Out node for concurrent processing
- HTTP node for downloading PDF file locally
- Merge PDFs node for merging files
- Write to Disk node for saving merged PDF file.

You can replace logic for triggering and returning results.
For example, you can trigger this workflow by calling a webhook and get a result as a response from webhook. Simply replace Manual Trigger and Write to Disk nodes.

## Perfect for

- Bundling reports or invoices.
- Generating document sets from external sources.
- Automating PDF handling without writing custom code.
![workflow.png](fileId:1040)![1.png](fileId:1041)![2.png](fileId:1039)

## 🔗 Nodes Used

HTTP Request, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
