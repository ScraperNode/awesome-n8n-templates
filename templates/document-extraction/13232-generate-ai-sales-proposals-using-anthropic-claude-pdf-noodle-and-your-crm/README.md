# 🔬 Generate AI sales proposals using Anthropic Claude, PDF Noodle and your CRM

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What This Workflow Does

1. **Triggers via webhook** connected to your CRM
2. **Maps all the fields** needed for the proposal
3. **Transforms customer data and transcription** into a formatted output using an AI Agent
4. **Generates a custom PDF proposal** using PDF Noodle
5. **Sends the proposal via email** (you can change this to send using other formats as well)

## Setup Guide

1. Create a [pdf noodle](https://pdfnoodle.com) account and **use AI to create a custom proposal** for your brand.
2. Connect your **CRM webhook** and **Gmail** (with OAuth2 permissions) to n8n
3. Configure the **AI Agent** with your preferred model (OpenAI, Anthropic, Google, or Ollama)

## Requirements

- **PDF Noodle** access: [Create here](https://app.pdfnoodle.com/auth/sign-up)
- **AI API access** (e.g. via OpenAI, Anthropic, Google, or Ollama)
- **Google OAuth2** connected (with Gmail permission): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)

---

Feel free to contact me via [LinkedIn](https://www.linkedin.com/in/marceloamiranda) if you have any questions! 👋🏻

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
