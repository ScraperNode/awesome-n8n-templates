# ⚒️ [eBay] metadata API MCP server

> ⚡ **138 views** · ⚒️ [Engineering](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 8 Metadata API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Metadata API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Metadata API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.ebay.com{basePath}
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (8 total)

### 🔧 Country (1 endpoints)

• **GET /country/{countryCode}/sales_tax_jurisdiction**: Get Sales Tax Jurisdiction

### 🔧 Marketplace (7 endpoints)

• **GET /marketplace/{marketplace_id}/get_automotive_parts_compatibility_policies**: Get Get Automotive Parts Compatibility Policies
• **GET /marketplace/{marketplace_id}/get_extended_producer_responsibility_policies**: Get Get Extended Producer Responsibility Policies
• **GET /marketplace/{marketplace_id}/get_hazardous_materials_labels**: Get Get Hazardous Materials Labels
• **GET /marketplace/{marketplace_id}/get_item_condition_policies**: Get Get Item Condition Policies
• **GET /marketplace/{marketplace_id}/get_listing_structure_policies**: Get Get Listing Structure Policies
• **GET /marketplace/{marketplace_id}/get_negotiated_price_policies**: Get Get Negotiated Price Policies
• **GET /marketplace/{marketplace_id}/get_return_policies**: Get Get Return Policies

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Metadata API responses with full data structure

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
