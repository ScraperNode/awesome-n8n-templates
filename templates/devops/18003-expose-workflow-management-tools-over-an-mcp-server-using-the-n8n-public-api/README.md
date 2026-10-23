# ⚙️ Expose workflow management tools over an MCP server using the n8n Public API

> ⚡ **48 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow exposes an MCP (Model Context Protocol) server endpoint that lets an MCP client manage workflows and executions in an n8n instance via the n8n Public API, including searching, reading, creating, updating, activating/deactivating, deleting, and rerunning workflows.

## How it works
1. Exposes an MCP server webhook endpoint that receives tool calls from an MCP client.
2. Routes each tool call to the same workflow with an `operation` and `payload`, then normalizes and JSON-parses the payload (including nested JSON-string fields).
3. Logs the request metadata to n8n execution custom data to make operations searchable in execution history.
4. Based on the requested operation, calls the n8n Public API to list workflows, search workflows by name, fetch workflow details or a specific node, and list or fetch executions (including node input/output from an execution).
5. For write operations, sends the appropriate n8n Public API request to create a workflow, update a workflow, add/update/remove a node, activate/deactivate a workflow, delete a workflow, or rerun a workflow by retrying an execution with `loadWorkflow=true`.
6. Returns a structured success/error response to the MCP client, and stops with an explicit error if an unsupported operation is requested.

## Setup
1. In the Config step, set your n8n base URL (`host`, no trailing slash) and create/paste an n8n API key (`api_key`) from Settings → n8n API.
2. Activate the workflow and copy the MCP webhook URL from the MCP Trigger (path `n8n-mcp`) into your MCP client configuration.
3. If you already run another MCP server on the same n8n instance, change the MCP path to a unique value to avoid webhook conflicts.
4. Review the available management tools and remove any write/destructive capabilities (for example delete, update, remove node, rerun) before sharing access to the MCP endpoint.

## Requirements
- n8n api key

## 🔗 Nodes Used

HTTP Request, Stop and Error, Execute Workflow Trigger, Execution Data, Call n8n Workflow Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
