# 🔒 🛠️ MISP tool MCP server 💪 all 44 operations

> ⚡ **168 views** · 🔒 [SecOps & Security Automation](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all MISP Tool operations to AI agents. Zero configuration needed - all 44 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every MISP Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n MISP Tool tool with full error handling

## 📋 Available Operations (44 total)

Every possible MISP Tool operation is included:

### 🔧 Attribute (6 operations)

• **Create an attribute**
• **Delete an attribute**
• **Get an attribute**
• **Get many attributes**
• **Get a filtered list of attributes**
• **Update an attribute**

### 📅 Event (8 operations)

• **Create an event**
• **Delete an event**
• **Get an event**
• **Get many events**
• **Publish an event**
• **Get a filtered list of events**
• **Unpublish an event**
• **Update an event**

### 🔧 Eventtag (2 operations)

• **Add a tag to an event**
• **Remove a tag from an event**

### 🔧 Feed (6 operations)

• **Create a feed**
• **Disable a feed**
• **Enable a feed**
• **Get a feed**
• **Get many feeds**
• **Update a feed**

### 🔧 Galaxy (3 operations)

• **Delete a galaxy**
• **Get a galaxy**
• **Get many galaxies**

### 🔧 Noticelist (2 operations)

• **Get a noticelist**
• **Get many noticelists**

### 🔧 Object (1 operations)

• **Get a filtered list of objects**

### 🔧 Organisation (5 operations)

• **Create an organization**
• **Delete an organization**
• **Get an organization**
• **Get many organizations**
• **Update an organization**

### 🏷️ Tag (4 operations)

• **Create a tag**
• **Delete a tag**
• **Get many tags**
• **Update a tag**

### 👤 User (5 operations)

• **Create a user**
• **Delete a user**
• **Get a user**
• **Get many users**
• **Update a user**

### 🔧 Warninglist (2 operations)

• **Get a warninglist**
• **Get many warninglists**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native MISP Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every MISP Tool operation available
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
