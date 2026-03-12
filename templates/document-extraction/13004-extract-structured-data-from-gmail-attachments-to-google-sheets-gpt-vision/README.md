# 🔬 Extract structured data from Gmail attachments to Google Sheets, GPT vision

> ⚡ **96 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Automatically extract structured information from emails using AI-powered document analysis. This workflow processes emails from specified domains, classifies them by type, and extracts structured data from various attachment formats.

## Who is this for
Operations teams, coordinators, and business professionals who receive proposals or reports from multiple sources via email and need to consolidate the information into a structured database.

## What this workflow does
1. **Monitors Gmail** every 30 minutes for emails from specified domains
2. **Classifies emails** into three categories based on customizable keywords
3. **Processes attachments** intelligently based on file type and email classification
4. **Extracts structured data**: dates, times, names, amounts, and other fields
5. **Saves to Google Sheets** with full metadata and classification
6. **Labels processed emails** in Gmail for tracking

## Setup requirements
- Gmail OAuth2 credentials
- OpenAI API key (GPT-4 Vision)
- Google Sheets OAuth2 credentials
- AWS S3 bucket for temporary image storage
- ConvertAPI account for PPTX/PDF conversion

## How to customize
Edit the domain list and classification keywords in the code nodes to adapt for your specific use case.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AWS S3, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
