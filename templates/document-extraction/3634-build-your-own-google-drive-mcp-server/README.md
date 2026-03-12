# 🔬 Build your own Google Drive MCP server

> ⚡ **7,476 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### This n8n demonstrates how to build a simple Google Drive MCP server to search and get contents of files from Google Drive.

This MCP example is based off an official MCP reference implementation which can be found here -[https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive)

### How it works
* A MCP server trigger is used and connected to 1x Google Drive tool and 1x Custom Workflow tool.
* The Google Drive tool is set to perform a search on files within our Google Drive folder.
* The Custom Workflow tool downloads target files found in our drive and converts the binaries to their text representation. Eg. PDFs have only their text contents extracted and returned to the MCP client.

### How to use
* This Google Drive MCP server allows any compatible MCP client to manage a person or shared Google Drive. Simple select a drive or for better control, specify a folder within the drive to scope the operations to.
* Connect your MCP client by following the n8n guidelines here - https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop
* Try the following queries in your MCP client:
  * "Please help me search for last month's expense reports."
 * "What does the company policy document say about cancellations and refunds?"

### Requirements
* Google Drive for documents.
* OpenAI for image and audio understanding.
* MCP Client or Agent for usage such as Claude Desktop - https://claude.ai/download

### Customising this workflow
* Add additional capabilities such as renaming, moving and/or deleting files.
* Remember to set the MCP server to require credentials before going to production and sharing this MCP server with others!

## 🔗 Nodes Used

Google Drive, Execute Workflow Trigger, Call n8n Workflow Tool, Extract from File, OpenAI, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
