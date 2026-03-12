# ⚒️ Build your own N8N workflows MCP server

> ⚡ **90,767 views** · ⚒️ [Engineering](../)

## Description

### This n8n template shows you how to create an MCP server out of your existing n8n workflows. With this, any MCP client connected can get more done with powerful end-to-end workflows rather than just simple tools.

Designing agent tools for outcome rather than utility has been a long recommended practice of mine and it applies well when it comes to building MCP servers; In gist, agents to be making the least amount of calls possible to complete a task.

This is why n8n can be a great fit for MCP servers! This template connects your agent/MCP client (like Claude Desktop) to your existing workflows by allowing the AI to discover, manage and run these workflows indirectly.

### How it works
* An MCP trigger is used and attaches 4 custom workflow tools to discover and manage existing workflows to use and 1 custom workflow tool to execute them.
* We'll introduce an idea of "available" workflows which the agent is allowed to use. This will help limit and avoid some issues when trying to use every workflow such as clashes or non-production.
* The n8n node is a core node which taps into your n8n instance API and is able to retrieve all workflows or filter by tag. For our example, we've tagged the workflows we want to use with "mcp" and these are exposed through the tool "search workflows".
* Redis is used as our main memory for keeping track of which workflows are "available". The tools we have are "add Workflow", "remove workflow" and "list workflows". The agent should be able to manage this autonomously.
* Our approach to allow the agent to execute workflows is to use the Subworkflow trigger. The tricky part is figuring out the input schema for each but was eventually solved by pulling this information out of the workflow's template JSON and adding it as part of the "available" workflow's description. To pass parameters through the Subworkflow trigger, we can do so via the passthrough method - which is that incoming data is used when parameters are not explicitly set within the node.
* When running, the agent will not see the "available" workflows immediately but will need to discover them via "list" and "search". The human will need to make the agent aware that these workflows will be preferred when answering queries or completing tasks.

### How to use
* First, decide which workflows will be made visible to the MCP server. This example uses the tag of "mcp" but you can all workflows or filter in other ways.
* Next, ensure these workflows have Subworkflow triggers with input schema set. This is how the MCP server will run them.
* Set the MCP server to "active" which turns on production mode and makes available to production URL.
* Use this production URL in your MCP client. For Claude Desktop, see the instructions here - [https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop).
* There is a small learning curve which will shape how you communicate with this MCP server so be patient and test. The MCP server will work better if there is a focused goal in mind ie. Research and report, rather than just a collection of unrelated tools.

### Requirements
* N8N API key to filter for selected workflows.
* N8N workflows with Subworkflow triggers!
* Redis for memory and tracking the "available" workflows.
* MCP Client or Agent for usage such as Claude Desktop - [https://claude.ai/download](https://claude.ai/download)

### Customising this workflow
* If your targeted workflows do not use the subworkflow trigger, it is possible to amend the executeTool to use HTTP requests for webhooks.
* Managing available workflows helps if you have many workflows where some may be too similar for the agent. If this isn't a problem for you however, feel free to remove the concept of "available" and let the agent discover and use all workflows!

## 🔗 Nodes Used

Redis, Execute Sub-workflow, n8n, Execute Workflow Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
