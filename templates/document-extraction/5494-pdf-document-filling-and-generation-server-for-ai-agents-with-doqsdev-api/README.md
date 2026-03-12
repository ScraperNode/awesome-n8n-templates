# 🔬 Pdf document filling and generation server for AI agents with doqs.dev API

> ⚡ **990 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Complete MCP server exposing 14 doqs.dev | PDF filling API operations to AI agents.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)

1. **Import** this workflow into your n8n instance
2. **Credentials** Add doqs.dev | PDF filling API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the doqs.dev | PDF filling API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.doqs.dev/v1
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (14 total)

### 🔧 Designer (7 endpoints)

• **GET /designer/templates/**: List Templates
• **POST /designer/templates/**: Create Template
• **POST /designer/templates/preview**: Preview
• **DELETE /designer/templates/{id}**: Delete
• **GET /designer/templates/{id}**: List Templates
• **PUT /designer/templates/{id}**: Update Template
• **POST /designer/templates/{id}/generate**: Generate Pdf

### 🔧 Templates (7 endpoints)

• **GET /templates**: List 
• **POST /templates**: Create
• **DELETE /templates/{id}**: Delete 
• **GET /templates/{id}**: Get Template
• **PUT /templates/{id}**: Update
• **GET /templates/{id}/file**: Get File
• **POST /templates/{id}/fill**: Fill

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native doqs.dev | PDF filling API responses with full data structure

**Error Handling**: Built-in n8n HTTP request error management

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Cursor**: Add MCP server SSE URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n HTTP request handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
