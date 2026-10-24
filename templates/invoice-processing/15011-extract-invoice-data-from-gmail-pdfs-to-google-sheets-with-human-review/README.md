# 🧾 Extract invoice data from Gmail PDFs to Google Sheets with human review

> ⚡ **80 views** · 🧾 [Invoice Processing](../)

## Description

This workflow processes invoices (PDFs and images) using Cradl AI’s all-in-one document processing capabilities, including LLM-powered data extraction, validation, human-in-the-loop review, and RAG-powered learning to improve accuracy over time — all within a single node.

## 💡 What problem does this workflow solve?
Data extraction workflows often break in production due to hallucinations, lack of validation and error handling, and the difficulty of learning from past errors. This workflow shows how to solve this using Cradl AI as a single node that handles the entire document data extraction pipeline.

## 👥 Who It's For

n8n users looking for a production-ready invoice data extraction pipeline.

## ✅ Benefits

* All-in-one node for document processing (extraction, validation, and error handling)  
* Automatic learning — every human-reviewed invoice improves the model over time  
* Built-in human-in-the-loop review for uncertain predictions  
* Anti-hallucination and confidence checks to improve data reliability  
* Automatic error handling and retries  
* Invite accounting team members as reviewers and notify them when input is needed  

## ⚙️ Customization

The template is intentionally minimal — import and export tend to vary between setups. The following are easy to swap:

* **Extracted fields** — configured directly in your Cradl AI agent  
* **Trigger** — Gmail by default, replaceable with other email providers, OneDrive, or any other source  
* **Export destination** — Google Sheets by default, replaceable with Xero, QuickBooks, or any other target  

## 🚀 Quick Start

1. **Gmail trigger**. Connect your Gmail and Google Sheets credentials in the workflow  
2. **Cradl AI**. Create a free account, run the setup wizard, and select the _Invoices_ template. Fields can be customized later  
3. **Google Sheets**. Connect credentials and map the extracted fields from the Cradl AI output to your sheet columns

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
