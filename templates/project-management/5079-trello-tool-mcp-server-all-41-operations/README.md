# 📋 🛠️ Trello tool MCP server 💪 all 41 operations

> ⚡ **213 views** · 📋 [Project Management](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Trello Tool operations to AI agents. Zero configuration needed - all 41 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Trello Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Trello Tool tool with full error handling

## 📋 Available Operations (41 total)

Every possible Trello Tool operation is included:

### 🔧 Attachment (4 operations)

• **Create an attachment**
• **Delete an attachment**
• **Get an attachment**
• **Get many attachments**

### 🔧 Board (4 operations)

• **Create a board**
• **Delete a board**
• **Get a board**
• **Update a board**

### 🔧 Boardmember (4 operations)

• **Add a board member**
• **Get many board members**
• **Invite a board member**
• **Remove a board member**

### 🔧 Card (4 operations)

• **Create a card**
• **Delete a card**
• **Get a card**
• **Update a card**

### 🔧 Cardcomment (3 operations)

• **Create a card comment**
• **Delete a card comment**
• **Update a card comment**

### 🔧 Checklist (9 operations)

• **Create a checklist**
• **Create checklist item**
• **Delete a checklist**
• **Delete a checklist item**
• **Get a checklist**
• **Get checklist items**
• **Get completed checklist items**
• **Get many checklists**
• **Update a checklist item**

### 🔧 Label (7 operations)

• **Add a label to a card**
• **Create a label**
• **Delete a label**
• **Get a label**
• **Get many labels**
• **Remove a label from a card**
• **Update a label**

### 📝 List (6 operations)

• **Archive/unarchive a list**
• **Create a list**
• **Get a list**
• **Get all cards in a list**
• **Get many lists**
• **Update a list**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Trello Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Trello Tool operation available
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
