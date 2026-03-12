# 🔬 Convert unstructured contact data to JSON with GPT-4 for system integration

> ⚡ **564 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This **n8n workflow template** helps you automatically convert unstructured contact information—such as customer details copied from emails, web forms, or chat messages—into clean, structured **JSON** using an **AI agent**.

### What It Does:
- Accepts unstructured contact data via a **Webhook** (as `form-data` under the key `prompt`)
- Uses AI to intelligently extract key fields such as:
  - Company Name  
  - First Name  
  - Last Name  
  - Address  
  - City  
  - Country  
  - Phone  
  - Fax  
  - Email
- Parses and formats the extracted data into a valid JSON object
- Prepares the output for seamless integration into systems like:
  - **Dolibarr**  
  - **Other ERP/CRM platforms**  
  - Any service that consumes JSON via API or webhook

### Use Cases:
- Automate manual data entry from emails into your ERP system  
- Clean and normalize contact data from various input sources  
- Reduce human error in your customer onboarding workflows

This template saves you time and ensures consistency across your business systems.  
Simply connect your systems and let the automation handle the rest.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
