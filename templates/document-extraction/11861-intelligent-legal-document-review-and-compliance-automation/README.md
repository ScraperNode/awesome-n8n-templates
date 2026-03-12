# 🔬 Intelligent legal document review and compliance automation

> ⚡ **740 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This template automates legal document review by extracting text, analyzing clauses with OpenAI, checking compliance standards, and generating alternative wordings. Target audience: legal teams, contract managers, and compliance officers seeking efficient document processing. Problem solved: manual clause extraction and compliance review is time-consuming and error-prone. Workflow extracts document text, performs parallel AI-powered clause analysis and compliance verification via OpenAI, consolidates findings, generates alternative wordings for non-compliant clauses, creates summary reports, stores results in databases, and notifies stakeholders via email.

## Setup Steps
1. Configure OpenAI API with clause analysis and compliance prompts. 
2. Connect Google Sheets for database staging. 
3. Set Gmail for notifications. 
4. Input document source (upload node). 
5. Test with sample contracts.

## Prerequisites
OpenAI API key, Gmail account, Google Sheets access, document upload capability.

## Use Cases
Legal teams reviewing SaaS contracts, compliance departments auditing vendor agreements 

## Customization
Modify OpenAI prompts for industry-specific clauses. Swap Google Sheets for your database. 

## Benefits
Reduces manual review time by 80%, ensures consistent clause standardization

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
