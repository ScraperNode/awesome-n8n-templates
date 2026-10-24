# ⚡ Run a personal assistant for calendar, Gmail and utilities with OpenAI and MCP

> ⚡ **192 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs a chat-based OpenAI assistant in n8n that calls three MCP servers for Google Calendar management, Gmail search and draft replies, and utility tools for weather, currency conversion, and calculations.

## How it works
1. Receives a chat message in n8n to start or continue a conversation.
2. Loads the assistant configuration (model, memory window, and system prompt) and sends the user message to an OpenAI chat model with short-term conversation memory.
3. When the assistant needs calendar actions, it calls an MCP server that searches, creates, updates, or deletes Google Calendar events.
4. When the assistant needs email actions, it calls an MCP server that searches Gmail messages and creates draft replies for user review.
5. When the assistant needs quick utilities, it calls an MCP server that fetches weather from wttr.in, converts currency using frankfurter.app, or runs calculations.
6. Returns the assistant’s response back to the chat, including any results from the MCP tool calls.

## Setup
1. Add credentials for OpenAI, Google Calendar (OAuth2), and Gmail (OAuth2) in n8n.
2. Activate the workflow, then copy each MCP Server Trigger Production URL for the Calendar, Gmail, and Utilities servers.
3. Replace https://YOUR-N8N-HOST/... in the three MCP Client endpoint URLs with the matching Production URLs.
4. Select the target Google Calendar in the Calendar tools and confirm any Gmail account/alias settings as needed.

## Additional info
# Build an MCP server and client AI assistant in n8n

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Build-an-MCP-server-and-client-AI-assistant-in-n8n-39d3d6550fd981c886b2ca8e77d27487)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Calculator, Chat Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
