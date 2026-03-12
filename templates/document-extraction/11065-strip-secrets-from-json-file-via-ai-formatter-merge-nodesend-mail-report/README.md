# 🔬 Strip secrets from JSON file via AI Formatter + Merge node&send mail report

> ⚡ **211 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Description

This workflow sanitizes any uploaded n8n workflow JSON by removing credentials, webhook IDs, and sensitive metadata. Using AI and structured comparison, it generates a clean, secure workflow version, creates a downloadable sanitized file, and emails a detailed change-log report to the user.

## Key Features
• AI-powered sanitization of workflow JSON
• Automatic removal of secrets, credentials,  
  webhook IDs, and metadata
• Node-level change detection and comparison
• Generates sanitized workflow file (JSON)
• Sends formatted HTML email report with 
  attachment
• Supports customization for additional 
  filtering rules

## How It Works

The user uploads a workflow JSON file, which is extracted and formatted. AI then sanitizes the workflow and returns a secure version. Both original and sanitized workflows are merged for analysis, and a structured change-log is generated. A sanitized JSON file is created and emailed to the user with the report.

## How to Use

Upload your workflow JSON via the form. The workflow processes it automatically, generates a sanitized version, creates a change-log, and emails both the report and sanitized JSON file to you.

## Requirements
• OpenAI credentials
• Gmail or SMTP credentials 
• n8n workflow JSON exported from the editor

## Customising This Workflow

Modify sanitization rules, formatting logic, or email templates inside the JS and AI nodes to suit organizational security policies or custom metadata filtering.

## Support: 

Join n8n Discord https://discord.com/invite/n8n
or
Community Forum https://community.n8n.io/

README file available at https://bit.ly/GeneratesanitizedJSONfile

## 🔗 Nodes Used

Gmail, n8n Form Trigger, Convert to File, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
