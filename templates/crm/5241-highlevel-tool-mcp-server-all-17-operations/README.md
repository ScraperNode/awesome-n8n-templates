# 🤝 🛠️ HighLevel tool MCP server 💪 all 17 operations

> ⚡ **296 views** · 🤝 [CRM & Sales Operations](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all HighLevel Tool operations to AI agents. Zero configuration needed - all 17 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every HighLevel Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n HighLevel Tool tool with full error handling

## 📋 Available Operations (17 total)

Every possible HighLevel Tool operation is included:

### 📇 Contact (5 operations)

• **Create or update a contact**
• **Delete a contact**
• **Get a contact**
• **Get many contacts**
• **Update a contact**

### 🔧 Opportunity (5 operations)

• **Create an opportunity**
• **Delete an opportunity**
• **Get an opportunity**
• **Get many opportunities**
• **Update an opportunity**

### 🔧 Task (5 operations)

• **Create a task**
• **Delete a task**
• **Get a task**
• **Get many tasks**
• **Update a task**

### 🔧 Calendar (2 operations)

• **Book appointment in a calendar**
• **Get free slots of a calendar**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native HighLevel Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every HighLevel Tool operation available
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
