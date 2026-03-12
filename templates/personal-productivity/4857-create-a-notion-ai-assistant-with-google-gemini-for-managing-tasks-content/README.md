# ⚡ Create a Notion AI assistant with Google Gemini for managing tasks & content

> ⚡ **1,354 views** · ⚡ [Personal Productivity](../)

## Description

**This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

# Build an AI agent for Notion (with Notion official MCP server)

![Screenshot 20250610 at 15.11.56.png](fileId:1475)

## Use case

This template empowers Notion power-users to build their own AI assistant, deeply integrated with their workspace. It solves the constant problem of copy-pasting and context-switching between a separate AI chat and Notion by creating a direct, conversational bridge. Now you can interact with an intelligent agent that can create, retrieve, and update your Notion databases and pages on your behalf, turning your workspace into a truly dynamic productivity hub.

![Screenshot 20250610 at 13.52.46.png](fileId:1474)

## How it works

When you send a message via the chat interface, the workflow passes it to your chosen AI model. The model, connected to the official Notion tool server, analyzes your request to see if it can be fulfilled by one of its available Notion actions. If it matches a tool, the workflow executes the command using the Notion API—like creating a new page or searching a database—and the AI then confirms the action is complete back in the chat.

## Setup

**Prerequisite:** This template is for **self-hosted n8n instances only**, as it requires a community node. 

1. Copy this workflow into your self-hosted n8n instance 
2. Install the required community node (n8n-nodes-mcp).
3. Add your credentials for your chosen AI Model and the Notion MCP Server.
4. Test the workflow by starting chatting with your new Notion assistant.

## How to adjust it to your needs

- You can use the AI model you want and even easily compare different AI models.
- You can start from this template and then provide other tools to your AI agent to build more powerful workflows.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
