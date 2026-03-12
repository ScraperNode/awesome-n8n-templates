# 📁 Automated AI image tagging and writing the keywords into the image file

> ⚡ **4,343 views** · 📁 [File Management](../)

## Description

# Welcome to my Automated Image Metadata Tagging Workflow!

This workflow automatically analyzes the image content with the help of AI and writes it directly back into the image file as keywords.

## This workflow has the following sequence:

1. Google Drive trigger (scan for new files added in a specific folder)
2. Download the added image file
3. Analyse the content of the image and extract the file as Base64 code
4. Merge Metadata and Base64 Code
5. Code Node to write the Keywords into the Metadata (dc:subject)
6. Convert to file and update the original file in the Google Drive folder

## The following accesses are required for the workflow:
- Google Drive: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)

You can contact me via LinkedIn, if you have any questions: https://www.linkedin.com/in/friedemann-schuetz

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Convert to File, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
