# 📱 🛠️ Mautic tool MCP server 💪 all 20 operations

> ⚡ **145 views** · 📱 [Social Media & Email Marketing](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Mautic Tool operations to AI agents. Zero configuration needed - all 20 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Mautic Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Mautic Tool tool with full error handling

## 📋 Available Operations (20 total)

Every possible Mautic Tool operation is included:

### 🔧 Campaigncontact (2 operations)

• **Add a campaign contact**
• **Remove a campaign contact**

### 🔧 Company (5 operations)

• **Create a company**
• **Delete a company**
• **Get a company**
• **Get many companies**
• **Update a company**

### 🔧 Companycontact (2 operations)

• **Add a company contact**
• **Remove a company contact**

### 📇 Contact (8 operations)

• **Create a contact**
• **Delete a contact**
• **Edit a contact's points**
• **Add/remove contacts from/to the do not contact list**
• **Get a contact**
• **Get many contacts**
• **Send email to a contact**
• **Update a contact**

### 🔧 Contactsegment (2 operations)

• **Add a contact to a segment**
• **Remove a contact from a segment**

### 🔧 Segmentemail (1 operations)

• **Send an email to a segment**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Mautic Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Mautic Tool operation available
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
