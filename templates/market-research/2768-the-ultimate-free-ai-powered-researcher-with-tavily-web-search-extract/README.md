# 📊 🤖🔍 The ultimate free AI-powered researcher with Tavily web search & extract

> ⚡ **25,676 views** · 📊 [Market Research & Insights](../)

## Description

🔍 This n8n workflow integrates Tavily's search and extract APIs with AI summarization capabilities to process web content efficiently.

## Quick Setup
1. Get your Tavily API key from https://app.tavily.com/home
2. Replace `tvly-YOUR_API_KEY` in the "Tavily API Key" node
3. Connect your OpenAI credentials to the "OpenAI Chat Model" node
4. Deploy the workflow and start the chat trigger

## Core Features
Search & Extract 🎯
- Intelligent web searching with relevance filtering
- Automated content extraction from top results
- AI-powered content summarization in markdown format

User Interaction 💬
- Chat-based search topic input
- Real-time processing pipeline
- Structured markdown output

The workflow demonstrates practical implementation of Tavily's API endpoints while handling the complete process from search to summarization in a single automated pipeline.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
