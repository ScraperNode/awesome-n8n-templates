# 🔬 Replace images in Google Docs documents and download as PDF/Docx

> ⚡ **1,840 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Use Case
Automate image replacement in Google Docs:
- You need to update document images dynamically
- You want to create multiple versions of a template with different images
- You need to batch process document images from a URL database
- You want to generate shareable documents with custom images

## What this Workflow Does
The workflow automates image replacement in Google Docs:
- Accepts image URLs from your database
- Finds and replaces images in template documents
- Creates new document copies with updated images
- Optionally converts to PDF and makes documents shareable

## Setup
1. Connect your image URL database (column name must be "url")
2. Set up [Google Docs OAuth 2 API credentials](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledocs/)
3. Optional: Create a template document in Google Drive with placeholder images
4. Optional: Configure [Google Drive authentication](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/) for additional features

## How to Adjust it to Your Needs
- Remove template copying for single document processing
- Adjust image ID selection for documents with multiple images
- Configure sharing settings and download formats
- Customize file naming and storage location


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
