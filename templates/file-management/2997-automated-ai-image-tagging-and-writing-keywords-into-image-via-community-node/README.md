# 📁 Automated AI image tagging and writing keywords into image (via community node)

> ⚡ **1,647 views** · 📁 [File Management](../)

## Description

# Welcome to my Automated Image Metadata Tagging Workflow!

**DISCLAIMER: This workflow only works with self-hosted n8n instances! You have to install the [n8n-nodes-exif-data Community Node](https://www.npmjs.com/package/n8n-nodes-exif-data)!**

This workflow automatically analyzes the image content with the help of AI and writes it directly back into the image file as keywords.
(https://n8n.io/workflows/2995).**

![Screenshot 20250224 201346.png](fileId:964)

## This workflow has the following steps:

1. Google Drive trigger (scan for new files added in a specific folder)
2. Download the added image file
3. Analyse the content of the image
4. Merge Metadata and image file
5. Write the Keywords into the Metadata (dc:subject/keywords) and create new image file
6. Update the original file in the Google Drive folder

## The following accesses are required for the workflow:
- **You have to install the [n8n-nodes-exif-data Community Node](https://www.npmjs.com/package/n8n-nodes-exif-data)**
- Google Drive: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)

You can contact me via LinkedIn, if you have any questions: https://www.linkedin.com/in/friedemann-schuetz

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
