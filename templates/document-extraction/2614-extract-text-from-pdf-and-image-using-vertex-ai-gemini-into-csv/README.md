# 🔬 Extract text from PDF and image using Vertex AI (Gemini) into CSV

> ⚡ **32,473 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![Cover1024x576.png](fileId:873)

# Case Study

I'm too lazy to record every transaction for my expense tracking. Since all my expenses are digital, I just extract the transactions from bank PDF statements and screenshots into CSV to import into my budgeting software.

[Click here to watch Youtube tutorial](https://www.youtube.com/watch?v=cDqrtSO_rHU)

# What this workflow does

- Upload your PDF or screenshots into Google Drive 
- It then passes the PDF/image to Vertex Gemini to do some A.I. image recognition
- It then sends the transactions as CSV and stores it into another Google Drive folder

# Setup
1. Set up 2 google drive folders. 1 for uploading and 1 for the output.
2. Input your Google Drive crendtials
3. Input your Vertex Gemini credentials

# How to adjust it to your needs
- You can upload other types of documents for information extraction. 
- You can extract any text data from any image or PDF
- You can adjust the A.I. prompt to do different things

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Basic LLM Chain, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
