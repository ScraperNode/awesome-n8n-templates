# ⚒️ Build your own SQLite MCP server

> ⚡ **2,677 views** · ⚒️ [Engineering](../)

## Description

**This template is for Self-Hosted N8N Instances only.**

### This n8n demonstrates how to build a simple SQLite MCP server to perform local database operations as well as use it for Business Intelligence.

This MCP example is based off an official MCP reference implementation which can be found here -[https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite)

### How it works
* A MCP server trigger is used and connected to 5 tools: 2 Code Node and 3 Custom Workflow.
* The 2 Code Node tools use the SQLLite3 library and are simple read-only queries and as such, the Code Node tool can be simply used.
* The 3 custom workflow tools are used for select, insert and update queries as these are operations which require a bit more discretion.
* Whilst it may be easier to allow the agent to use raw SQL queries, we may find it a little safer to just allow for the parameters instead. The custom workflow tool allows us to define this restricted schema for tool input which we'll use to construct the SQL statement ourselves.
* All 3 custom workflow tools trigger the same "Execute workflow" trigger in this very template which has a switch to route the operation to the correct handler.
* Finally, we use our Code nodes to handle select, insert and update operations. The responses are then sent back to the the MCP client.

### How to use
* This SQLite MCP server allows any compatible MCP client to manage a SQLite database by supporting select, create and update operations. You will need to have a SQLite database available before you can use this server.
* Connect your MCP client by following the n8n guidelines here - https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop
* Try the following queries in your MCP client:
  * "Please create a table to store business insights and add the following..."
  * "what business insights do we have on current retail trends?"
  * "Who has contributed the most business insights in the past week?"

### Requirements
* SQLite for database.
* MCP Client or Agent for usage such as Claude Desktop - https://claude.ai/download

### Customising this workflow
* If the scope of schemas or tables is too open, try restrict it so the MCP serves a specific purpose for business operations. eg. Confine the querying and editing to HR only tables before providing access to people in that department.
* Remember to set the MCP server to require credentials before going to production and sharing this MCP server with others!

## 🔗 Nodes Used

Execute Workflow Trigger, Code Tool, Call n8n Workflow Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
