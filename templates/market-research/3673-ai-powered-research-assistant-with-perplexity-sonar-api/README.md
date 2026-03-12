# 📊 AI-powered research assistant with Perplexity Sonar API

> ⚡ **1,749 views** · 📊 [Market Research & Insights](../)

## Description

Name:
AI-Powered Research Agent using Perplexity Sonar

Description:
This workflow acts as an AI-powered research assistant using the Perplexity Sonar model. When triggered by another workflow, it sends a user-defined prompt to the Perplexity API to retrieve up-to-date search results. The response is then parsed into a clean format for downstream processing.

How it Works:
Trigger: Activated from another workflow via Execute Workflow Trigger.

Prompt Setup: Sets a system role message and user query dynamically.

API Call: Sends a POST request to Perplexity's /chat/completions endpoint with your credentials.

Response Handling: Extracts the message content from the API response.

Output: Returns the result, ready for display or further processing.

Requirements:
A Perplexity AI API Key

Set up authentication via Header Auth with Bearer token

Ensure your account allows outbound HTTP requests in n8n

Customization Tips:
Modify the system prompt to suit your research domain

Chain this workflow with other automation like blog creation, summaries, etc.

Replace the output handling logic to fit into Google Sheets, Notion, or Telegram

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
