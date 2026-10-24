# ⚙️ Expose production tools to MCP clients with Slack approval gates

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow exposes n8n as an MCP server so MCP clients can request approved production tools, validating and audit-logging each call, routing destructive actions through Slack approval, and then executing narrowly scoped HTTP API requests before returning results to the client.

## How it works
1. Receives MCP tool-call requests via the MCP Server Trigger (and a webhook endpoint) from an MCP client.
2. Validates the requested tool name and required parameters against an allow-list and rejects invalid calls immediately.
3. Records valid tool calls to an audit payload before any production action runs.
4. Routes read-only tools directly to execution and sends destructive tools to Slack for human approval before continuing.
5. Executes the approved tool by calling the corresponding production HTTP API (deploy service, query production database, search knowledge base, or issue refund).
6. Normalizes the API response, appends the execution outcome to the audit payload, and returns the tool result back to the MCP client.

## Setup
1. Activate the MCP Server Trigger and copy its URL into your MCP client (for example Claude Desktop or Claude Code).
2. Create HTTP Header Auth credentials (or equivalent) for each production API used by the HTTP Request steps (deploy, internal data/query, knowledge base search, and payments/refunds) and replace the example API base URLs if needed.
3. Add Slack credentials, set the approval channel (for example `production-tools-approvals`), and ensure approvers can respond to resume the workflow.
4. Update the allow-list and required parameters in the validation code to match the tools and payloads you want to expose.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Code Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
