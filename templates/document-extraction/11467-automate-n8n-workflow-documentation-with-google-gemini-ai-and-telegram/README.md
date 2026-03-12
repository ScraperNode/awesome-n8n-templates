# 🔬 Automate n8n workflow documentation with Google Gemini AI and Telegram

> ⚡ **117 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## AI Workflow Description and Template Generator

This workflow automates the creation of professional documentation and template-ready sticky notes for any n8n workflow using AI.
## How it works
1. Receives an n8n workflow JSON file via Telegram
2. Validates the input file type and extracts workflow data
3. Scrubs sensitive information and analyzes workflow structure
4. Uses Google Gemini AI to generate comprehensive documentation
5. Assembles a complete template with main workflow sticky note and logical section stickies
6. Sends back the documented workflow file, usage checklist, and setup guide via Telegram

## Setup
1. Configure Telegram Trigger credentials for receiving files
2. Configure Telegram API credentials for sending messages
3. Configure Google Gemini Chat Model (Google PaLM API) credentials

## Customization
Adjust the prompt in the "AI Template Generator" node to modify documentation style, detail level, or specific requirements for your use case.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
