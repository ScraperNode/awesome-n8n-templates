# ⚒️ Expose workflows as an MCP server for Claude and OpenAI agents

> ⚡ **73 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow exposes selected n8n workflows as Model Context Protocol (MCP) tools, letting MCP clients (like Claude Desktop) discover, allowlist, and execute tagged workflows. It uses the n8n API to list workflows and an n8n Data Table to manage an “available” execution pool, with an optional OpenAI-powered test agent.

## How it works
1. Exposes an MCP server endpoint that provides five tools: search_workflows, add_workflow, remove_workflow, list_workflows, and execute_workflow.
2. Receives tool calls with an operation name plus optional workflow IDs and parameters, then routes the request to the matching operation handler.
3. For search_workflows, queries the n8n API for workflows with the configured tag and returns each workflow’s ID, name, sticky-note description snippet, and inferred input schema from its Sub-workflow trigger.
4. For add_workflow and remove_workflow, validates the requested workflow IDs and upserts or deletes them in the mcp_available_workflows n8n Data Table to control which workflows are allowed to run.
5. For list_workflows, reads the full allowlisted pool from the Data Table and returns the stored workflow profiles and input schemas.
6. For execute_workflow, checks the Data Table allowlist and, if present, runs the selected n8n workflow with the provided parameters and returns the execution result.
7. Optionally, accepts chat messages in n8n and uses an OpenAI-backed agent plus an MCP client connection to test the MCP tools interactively.

## Setup
1. Create an n8n API key (Settings → n8n API) and select it for both n8n API nodes that list workflows.
2. Create an n8n Data Table named mcp_available_workflows with string columns workflowId, name, description, and inputSchema, then select it in all Data Table nodes.
3. Tag each workflow you want to expose with the configured tag (default: mcp) and ensure each target workflow has a Sub-workflow trigger with defined inputs.
4. (Optional) Add an OpenAI API credential for the built-in test agent and set the MCP client endpoint URL to the MCP Server Trigger Production URL.
5. Activate the workflow, copy the MCP Server Trigger Production URL, and configure it in your MCP client (for example, Claude Desktop).

## Additional info
# Turn your n8n workflows into an MCP server for Claude and AI agents
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Turn-your-n8n-workflows-into-an-MCP-server-for-Claude-and-AI-agents-39e3d6550fd981aca9e1e805d6bd0403)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Execute Sub-workflow, n8n, Execute Workflow Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
