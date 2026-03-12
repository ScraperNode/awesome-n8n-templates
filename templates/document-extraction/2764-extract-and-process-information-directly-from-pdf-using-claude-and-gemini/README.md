# 🔬 Extract and process information directly from PDF using Claude and Gemini

> ⚡ **16,356 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview
- This workflow helps you compare Claude 3.5 Sonnet and Gemini 2.0 Flash when extracting data from a PDF
- This workflow extracts and processes the data within a PDF in **one single step**, **instead of calling an OCR and then an LLM”**


## How it works
- The initial 2 steps download the PDF and convert it to base64.
- This base64 string is then sent to both Claude 3.5 Sonnet and Gemini 2.0 Flash to extract information.
- This workflow is made to let you compare results, latency, and cost (in their dedicated dashboard).


## How to use it
- Set up your Google Drive if not already done
- Select a document on your Google Drive
- Modify the prompt in "Define Prompt" to extract the information you need and transform it as wanted.
- Get a [Claude API key](https://console.anthropic.com/settings/keys) and/or [Gemini API key](https://aistudio.google.com/app/apikey)
- Note that you can deactivate one of the 2 API calls if you don't want to try both
- Test the Workflow

## 🔗 Nodes Used

HTTP Request, Google Drive, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
