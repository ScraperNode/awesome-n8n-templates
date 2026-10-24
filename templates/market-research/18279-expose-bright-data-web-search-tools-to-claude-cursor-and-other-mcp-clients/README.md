# 📊 Expose Bright Data web search tools to Claude, Cursor, and other MCP clients

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow exposes a bearer-protected MCP server that gives Claude, Cursor, or other MCP clients web search and page-reading tools backed by Bright Data (Google search, Google AI Overview, People Also Ask questions, Bing search, Bing news, and a markdown page reader).

## How it works
1. Publishes an MCP server endpoint protected with bearer authentication.
2. Sends Google search requests to Bright Data and returns only trimmed organic result fields (rank, title, link, description, source).
3. Fetches Google’s AI Overview for a query via Bright Data and returns the overview text plus cited references.
4. Retrieves Google “People Also Ask” related questions via Bright Data and returns the ranked question list.
5. Runs Bing web search and Bing News search via Bright Data and returns trimmed result fields with direct links.
6. Reads any given URL through Bright Data’s Web Unlocker and returns the page content as markdown.
7. Optionally lets you test the MCP tools in n8n Chat using an OpenAI Chat Model-powered agent that calls the same MCP server.

## Setup
1. Create a Bright Data API key and add it to an HTTP Header Auth credential (Authorization: Bearer YOUR_KEY) used by all six Bright Data tool requests.
2. Ensure your Bright Data zones exist and match the workflow settings (serp_api1 for searches and web_unlocker1 for page reads), or update the zone values in the tool configurations.
3. Add a Bearer Auth credential to the MCP Server Trigger and configure the same token in your MCP client.
4. If you use the in-workflow test agent, add OpenAI credentials and update the MCP client endpoint URL (defaults to http://localhost:5678/mcp/bright-data-web) to match where n8n is reachable.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
