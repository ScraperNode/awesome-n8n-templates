# 🤝 🛠️ Monica CRM tool MCP server 💪 all 52 operations

> ⚡ **131 views** · 🤝 [CRM & Sales Operations](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Monica CRM Tool operations to AI agents. Zero configuration needed - all 52 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Monica CRM Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Monica CRM Tool tool with full error handling

## 📋 Available Operations (52 total)

Every possible Monica CRM Tool operation is included:

### 🔧 Activity (5 operations)

• **Create an activity**
• **Delete an activity**
• **Get an activity**
• **Get many activities**
• **Update an activity**

### 🔧 Call (5 operations)

• **Create a call**
• **Delete a call**
• **Get a call**
• **Get many calls**
• **Update a call**

### 📇 Contact (5 operations)

• **Create a contact**
• **Delete a contact**
• **Get a contact**
• **Get many contacts**
• **Update a contact**

### 🔧 Contactfield (4 operations)

• **Create a contact field**
• **Delete a contact field**
• **Get a contact field**
• **Update a contact field**

### 🔧 Contacttag (2 operations)

• **Add a tag to a contact**
• **Remove a tag from a contact**

### 🔧 Conversation (4 operations)

• **Create a conversation**
• **Delete a conversation**
• **Get a conversation**
• **Update a conversation**

### 🔧 Conversationmessage (2 operations)

• **Add a message to a conversation**
• **Update a message in a conversation**

### 🔧 Journalentry (5 operations)

• **Create a journal entry**
• **Delete a journal entry**
• **Get a journal entry**
• **Get many journal entries**
• **Update a journal entry**

### 🔧 Note (5 operations)

• **Create a note**
• **Delete a note**
• **Get a note**
• **Get many notes**
• **Update a note**

### 🔧 Reminder (5 operations)

• **Create a reminder**
• **Delete a reminder**
• **Get a reminder**
• **Get many reminders**
• **Update a reminder**

### 🏷️ Tag (5 operations)

• **Create a tag**
• **Delete a tag**
• **Get a tag**
• **Get many tags**
• **Update a tag**

### 🔧 Task (5 operations)

• **Create a task**
• **Delete a task**
• **Get a task**
• **Get many tasks**
• **Update a task**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Monica CRM Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Monica CRM Tool operation available
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
