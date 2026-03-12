# 🔬 Send a file from S3 to AWS Textract

> ⚡ **2,759 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow shows how to download an image file from S3 and pass it on to Textract for text extraction.

![](https://docs.n8n.io/assets/img/workflow.51d5f2fc.png)

The workflow uses two nodes:
- **AWS S3**: This node will download a receipt file from S3
- **AWS Textract**: This node connects to Aamazon's Textract service to extract text from the receipt file

## 🔗 Nodes Used

Start, AWS S3, AWS Textract

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
