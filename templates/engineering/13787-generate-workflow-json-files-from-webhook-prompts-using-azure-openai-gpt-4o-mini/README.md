# ⚒️ Generate workflow JSON files from webhook prompts using Azure OpenAI GPT-4o-mini

> ⚡ **23 views** · ⚒️ [Engineering](../)

## Description

## 📊 Description
Automate the creation of production-ready n8n workflows using AI 🤖. This template receives a plain-text automation idea via webhook, processes it with Azure OpenAI, and instantly generates a fully valid, import-ready n8n workflow JSON file. The automation sanitizes the prompt, enforces strict JSON validation, and returns a downloadable workflow file in seconds. Perfect for building scalable automation tools, SaaS workflow builders, or internal AI workflow generators ⏱️📤.

## What This Template Does
📥 Receives automation idea via Webhook – Accepts a POST request containing a workflow prompt.
🧹 Cleans and normalizes input – Formats and sanitizes the prompt for consistent AI processing.
🤖 Generates workflow using Azure OpenAI – AI Agent creates a complete, import-ready n8n JSON workflow.
✅ Parses and validates AI output – Ensures the returned JSON is valid and error-free.
📄 Converts JSON into a downloadable file – Wraps structured output into a binary .json file.
📤 Returns workflow file to caller – Sends the ready-to-import workflow back as an HTTP response.

## Key Benefits
✅ Instantly generate n8n workflows from plain English prompts
✅ Eliminates manual workflow building
✅ Ensures valid, import-ready JSON every time
✅ Perfect for SaaS workflow builders and automation marketplaces
✅ Fully automated AI → validation → export pipeline
✅ Scalable backend for AI-powered automation platforms

## Features
- Webhook trigger for dynamic workflow requests
- Azure OpenAI GPT model integration for intelligent workflow generation
- AI Agent with strict JSON enforcement rules
- Automatic JSON parsing and validation logic
- Binary file conversion for direct workflow download
- Error handling for invalid AI responses
- Fully connected, import-ready n8n workflow output

## Requirements
- Azure OpenAI credentials (azureOpenAiApi)
- Active Azure deployment (e.g., gpt-4o-mini)
- n8n instance with webhook access enabled

## Target Audience
🚀 SaaS founders building AI automation tools
🤖 Automation agencies creating workflow marketplaces
🛠️ n8n power users building internal workflow generators
💡 Developers building AI-powered no-code platforms

## 🔗 Nodes Used

Webhook, AI Agent, Convert to File, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
