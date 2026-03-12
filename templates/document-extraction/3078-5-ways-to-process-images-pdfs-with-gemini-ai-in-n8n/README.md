# 🔬 5 ways to process images & PDFs with Gemini AI in n8n

> ⚡ **25,701 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works

Many users have asked in the support forum about different methods to analyze images and PDF documents with Google Gemini AI in n8n. This workflow answers that question by demonstrating five different approaches:

- Single image with auto binary passthrough - The simplest approach using AI Agent's automatic binary handling
- Multiple images with predefined prompts - For customized analysis with different instructions per image
- Native n8n item-by-item processing - For handling multiple items using n8n's standard workflow paradigm
- PDF analysis via direct API - For document analysis and text extraction
- Image analysis via direct API - For direct control over API parameters
- Each method has advantages depending on your specific use case, data volume, and customization needs.

## Set up steps

**Setup time**: ~5-10 minutes

You'll need:

- A Google Gemini API key
- n8n with HTTP Request and AI Agent nodes
- Important: For the HTTP Request nodes making direct API calls to Gemini (Methods 3, 4, and 5), you'll need to set up Query Authentication with your Gemini API key. Add a parameter named "key" with your API key value in the Query Auth section of these nodes.

I'll updated this if I find better ways. Also let me know if you know other ways. Eager to learn :)

## 🔗 Nodes Used

HTTP Request, Filter, AI Agent, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
