# 📊 Advanced Medium API MCP server

> ⚡ **439 views** · 📊 [Market Research & Insights](../)

## Description

## ⚠️ ADVANCED USE ONLY - Medium MCP Server (32 operations)

### 🚨 This workflow is for advanced users only!

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

This MCP server contains **32 operations** which is significantly more than the recommended maximum of tools for most AI clients.

### 🔍 Recommended Alternative for basic use cases
**Seek a simplified MCP server** that utilizes the official n8n tool implementation for Medium if available, or an MCP server with only common operations as it will be more efficient and easier to manage.

### 🛠️ Advanced Usage Requirements

**BEFORE adding this MCP server to your client:**
### Disable or delete unused nodes - Review sections and disable/delete those you don't need

**AFTER adding the MCP server to your client:**
1.**Selective tool enabling** - Instead of enabling all tools (default), manually select only the specific tools you need for *that* Workflow's MCP client.
2. **Monitor performance** - Too many tools can slow down AI responses

### 💡 Pro Tips
**Keep maximum 40 enabled tools** - Most AI clients perform better with fewer tools
- Group related operations and only enable one group at a time
- Use the overview note to understand what each operation group does

- Ping me on [discord](https://discord.me/cfomodz) if your business needs this implemented professionally
## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Medium API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Medium API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://medium2.p.rapidapi.com
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (32 endpoints)

**General (1 operation)**
Get User Top Articles

**Article (6 operations)**
Get Article Info, Get Article's Content, Get Article Fans, Get Article's Markdown, Get Related Articles, Get Article Responses

**Latestposts (1 operation)**
Get Latest Posts

**List (3 operations)**
Get List Info, Get List Articles, Get List Responses

**Publication (4 operations)**
Get Publication ID, Get Publication Info, Get Publication Articles, Get Publication Newsletter

**Related Tags (1 operation)**
Get Related Tags

**Search (5 operations)**
Search Articles, Search Lists, Search Publications, Search Tags, Search Users

**Top Writer (1 operation)**
Get Top Writers

**Topfeeds (1 operation)**
Get Topfeeds

**User (9 operations)**
Get User ID, Get User Info, Get User's Articles, Get User Followers, and 5 more operations

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Medium API responses with full data structure

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
