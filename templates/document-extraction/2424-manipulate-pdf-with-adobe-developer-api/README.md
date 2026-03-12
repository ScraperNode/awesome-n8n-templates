# 🔬 Manipulate PDF with Adobe developer API

> ⚡ **4,662 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Adobe developer API

Did you know that Adobe provides an API to perform all sort of manipulation on PDF files : 

- Split PDF, Combine PDF
- OCR
- Insert page, delete page, replace page, reorder page
- Content extraction (text content, tables, pictures)
- ...

The free tier allows up to 500 PDF operation / month. As it comes directly from Adobe, it works often better than other alternatives.

Adobe documentation: 

- [https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/)
- [https://developer.adobe.com/document-services/docs/overview/pdf-extract-api/gettingstarted/](https://developer.adobe.com/document-services/docs/overview/pdf-extract-api/gettingstarted/)

## What does this workflow do

The API is a bit painful to use. To perform a transformation on a PDF it requires to 

- Authenticate and get a temporal token
- Register a new asset (file)
- Upload you PDF to the registered asset
- Perform a query according to the transformation requested
- Wait for the query to be proccessed by Adobe backend
- Download the result

This workflow is a generic wrapper to perform all these steps for any transformation endpoint. I usually use it from other workflow with an `Execute Workflow` node.

Examples are given in the workflow.

## Example use case

This service is useful for example to **clean PDF data for an AI / RAG system**. 

My favorite use-case is to extract table as images and forward images to an AI for image recognition / description which is often more accuarate than feedind raw tabular data to a LLM.

## 🔗 Nodes Used

Dropbox, HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
