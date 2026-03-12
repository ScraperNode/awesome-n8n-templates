# ⚒️ Optimize n8n workflow JSON using Azure OpenAI GPT-4o-mini

> ⚡ **35 views** · ⚒️ [Engineering](../)

## Description

## 📊 Description
Automate the optimization of your n8n workflows using AI-powered analysis and restructuring 🤖. This workflow receives any existing n8n JSON via webhook, analyzes it using Azure OpenAI, and returns a fully optimized, import-ready workflow file. It improves execution speed, reduces redundant nodes, enhances API efficiency, and ensures structural cleanliness — all while preserving the original logic. Perfect for automation builders who want cleaner, faster, and production-ready workflows instantly. 🚀

## What This Template Does
📥 Receives an n8n workflow JSON via a secure POST webhook.
🔍 Extracts and validates the workflow body to ensure proper structure.
🤖 Sends the workflow to Azure OpenAI for performance and structural optimization.
🧹 Strips markdown, parses, and validates the AI-returned JSON.
📄 Converts the optimized workflow into a downloadable .json file.
📤 Returns the optimized workflow file directly to the caller.

## Key Benefits
✅ Automatically optimizes workflow performance and execution speed
✅ Reduces redundant nodes and unnecessary API calls
✅ Ensures clean, structured, import-ready n8n JSON
✅ Preserves original business logic and integrations
✅ Eliminates manual workflow refactoring
✅ Adds structural clarity and best-practice improvements

## Features
- Webhook trigger for receiving workflow JSON
- Azure OpenAI integration (GPT-4o-mini) for AI-driven optimization
- Automated JSON parsing and structural validation
- Markdown stripping and error-safe parsing logic
- Binary file conversion for direct n8n re-import
- Built-in validation to prevent broken or orphaned workflows
- Production-safe response handling

## Requirements
- Azure OpenAI credentials (azureOpenAiApi)
- Active Azure deployment (e.g., gpt-4o-mini)
- n8n instance with webhook access enabled

## Target Audience
- Automation agencies optimizing client workflows
- n8n template creators selling premium workflows
- SaaS founders improving internal automation performance
- Advanced n8n users maintaining large workflow libraries

## 🔗 Nodes Used

Webhook, AI Agent, Convert to File, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
