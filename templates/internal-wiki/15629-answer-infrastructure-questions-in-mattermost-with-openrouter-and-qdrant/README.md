# 📖 Answer infrastructure questions in Mattermost with OpenRouter and Qdrant

> ⚡ **68 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Overview
AI-powered sub-workflow that answers questions about a your infrastructure configuration directly in a Mattermost channel or thread

## Requirements
* OpenRouter/OpenAI/Anthropic API key
* Google Gemini API key — for embeddings
* Jira API credentials — Cloud or Server. 
* Mattermost API credentials — to post the reply back to the channel
* Qdrant instance
* Remote MCP servers  (see MCP section)
* A sub-workflow that analyses attachments 
* A [parent workflow](https://n8n.io/workflows/15051) that triggers this one via "Execute Workflow" with a properly shaped payload

## How it works
1. The workflow is triggered by another workflow
1. `ReadIncidentContext` logs the request and forwards the payload
1. Call '`attachmentsAnalyzer` invokes a vision sub-workflow with the file_ids
1. `SetVars` sets workflow-level constants
1. `AI agent` generates a response based on the system prompt, knowledge base, and access to repositories.
1. The agent's response is posted back to Mattermost via the `Post a message` node

## How to use
* Upload your infrastructure documentation (Markdown, YAML, runbooks) into Qdrant
* Import the [attachmentsAnalyzer sub-workflow](https://n8n.io/workflows/15612) and update the workflow
reference inside
* Deploy or point to your MCP servers
* Configure credentials
* Edit the AI Agent system message to describe your infrastructure
* In SetVars, replace the example 
* Wire this workflow up to an upstream router

## 🔗 Nodes Used

Mattermost, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Qdrant Vector Store, Embeddings Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
