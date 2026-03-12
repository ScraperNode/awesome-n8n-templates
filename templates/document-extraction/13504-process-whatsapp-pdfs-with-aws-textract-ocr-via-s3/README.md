# 🔬 Process WhatsApp PDFs with AWS Textract OCR via S3

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n template demonstrates how to automatically extract text content from PDF documents received via WhatsApp messages using OCR.

It is designed for use cases where users submit documents through WhatsApp and the document content needs to be digitized for further processing — such as document analysis, AI-powered workflows, compliance checks, or data ingestion.

Good to know
* This workflow processes PDF documents only.
* OCR is handled using AWS Textract, which supports both scanned and digital PDFs.
* AWS Textract pricing depends on the number of pages processed. Refer to AWS Textract Pricing for up-to-date costs.
* An AWS S3 bucket is required as an intermediate storage layer for the PDF files.
* Processing time may vary depending on PDF size and number of pages.

How it works
1. The workflow is triggered when an incoming WhatsApp message containing a PDF document is received.
2. The PDF file is downloaded from WhatsApp’s media endpoint using an HTTP Request node.
3. The downloaded PDF is uploaded to an AWS S3 bucket to make it accessible for OCR processing.
4. AWS Textract is invoked to analyze the PDF stored in S3 and extract all readable text content.
5. The Textract response is parsed and consolidated into a clean, ordered text output representing the PDF’s content.

How to use
* The workflow can be triggered using a webhook connected to WhatsApp Cloud API or any compatible WhatsApp integration.
* Ensure your AWS credentials have permission to upload to S3 and invoke Textract.
* Once active, simply send a PDF document via WhatsApp to start the extraction process automatically.

Requirements
* WhatsApp integration (e.g. WhatsApp Cloud API or provider webhook)
* AWS account with:
  * S3 bucket access
  * Textract permissions
* n8n instance with HTTP Request and AWS nodes configured

Customising this workflow
* Store extracted text in a database or document store.
* Pass the extracted content to an AI model for summarization, classification, or validation.
* Split output by pages or sections.
* Add file type validation or size limits.
* Extend the workflow to support additional document formats.

## 🔗 Nodes Used

HTTP Request, AWS S3, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
