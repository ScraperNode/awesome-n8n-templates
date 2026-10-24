# 📊 Expose Hacker News tools as an MCP server for AI agents

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow exposes a Model Context Protocol (MCP)server in n8n that lets AI agents query Hacker News for top items, a specific article by ID, or a user profile via a single webhook endpoint. No API key or credentials required. Compatible with any MCP-enabled AI agent or orchestration framework.

## How it works
1. Receives MCP tool calls through an n8n MCP webhook trigger.
2. When the agent requests the “All” operation, it fetches Hacker News items with an optional limit or returns all results.
3. When the agent requests the “Article” operation, it retrieves a single Hacker News article by the provided article ID.
4. When the agent requests the “User” operation, it retrieves a Hacker News user profile by the provided username.
5. Returns the requested Hacker News data back to the MCP client as the tool response.

## Setup
1. Import the workflow and activate it to start the MCP server.
2. Copy the MCP webhook URL from the MCP trigger and configure it in your AI agent as an MCP server endpoint.
3. Ensure the Hacker News Tool node is available in your n8n instance (no credentials are required). Verify connectivity before use.

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
