# 🔬 Extract and store text from chat images using AWS S3

> ⚡ **4,687 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow extracts text from images sent in a Telegram chat and uploads the images to AWS S3.

![workflow-screenshot](fileId:588)

- **Telegram Trigger node** triggers the workflow when an image is sent in a Telegram channel.
- **AWS S3 node** uploads the sent image to an S3 bucket.
- **AWS Textract node** extracts text from the image.
- **Airtable node** adds the extracted text and image information to a table.

## 🔗 Nodes Used

Airtable, Telegram Trigger, AWS S3, AWS Textract

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
