# 🔍 Forget Trello 🛠️ Wekan (open source) tool MCP server 💪 all 24 operations

> ⚡ **133 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Wekan Tool operations to AI agents. Zero configuration needed - all 24 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Wekan Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Wekan Tool tool with full error handling

## 📋 Available Operations (24 total)

Every possible Wekan Tool operation is included:

### 🔧 Board (4 operations)

• **Create a board**
• **Delete a board**
• **Get a board**
• **Get many boards**

### 🔧 Card (5 operations)

• **Create a card**
• **Delete a card**
• **Get a card**
• **Get many cards**
• **Update a card**

### 🔧 Cardcomment (4 operations)

• **Create a comment on a card**
• **Delete a comment from a card**
• **Get a card comment**
• **Get many card comments**

### 🔧 Checklist (4 operations)

• **Create a checklist**
• **Delete a checklist**
• **Get a checklist**
• **Get many checklists**

### 🔧 Checklistitem (3 operations)

• **Delete a checklist item**
• **Get a checklist item**
• **Update a checklist item**

### 📝 List (4 operations)

• **Create a list**
• **Delete a list**
• **Get a list**
• **Get many lists**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Wekan Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Wekan Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
