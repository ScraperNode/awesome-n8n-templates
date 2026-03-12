# 🤝 eBay seller account management with AI agent integration (36 operations)

> ⚡ **418 views** · 🤝 [CRM & Sales Operations](../)

## Description

## ⚠️ ADVANCED USE ONLY - Account MCP Server (36 operations)

### 🚨 This workflow is for advanced users only!

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

This MCP server contains **36 operations** which is significantly more than the recommended maximum of tools for most AI clients.

### 🔍 Recommended Alternative for basic use cases
**Seek a simplified MCP server** that utilizes the official n8n tool implementation for Account if available, or an MCP server with only common operations as it will be more efficient and easier to manage.

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
2. **Credentials** Add Account API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Account API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.ebay.com{basePath}
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (36 total)

### 🔧 Advertising_Eligibility (1 endpoints)

• **GET /advertising_eligibility**: Check Advertising Eligibility

### 🔧 Custom_Policy (4 endpoints)

• **GET /custom_policy/**: Update Custom Policy
• **POST /custom_policy/**: Create/Search Custom Policy
• **GET /custom_policy/{custom_policy_id}**: Get {Custom Policy Id}
• **PUT /custom_policy/{custom_policy_id}**: Update {Custom Policy Id}

### 🔧 Fulfillment_Policy (6 endpoints)

• **GET /fulfillment_policy**: Update Fulfillment Policy
• **POST /fulfillment_policy/**: Create/Search Fulfillment Policy
• **GET /fulfillment_policy/get_by_policy_name**: This method retrieves the details for a specific fulfillment policy
• **DELETE /fulfillment_policy/{fulfillmentPolicyId}**: This method deletes a fulfillment policy
• **GET /fulfillment_policy/{fulfillmentPolicyId}**: This method retrieves the complete details of a fulfillment policy
• **PUT /fulfillment_policy/{fulfillmentPolicyId}**: This method updates an existing fulfillment policy

### 🔧 Kyc (1 endpoints)

• **GET /kyc**: Check KYC Status

### 🔧 Payment_Policy (6 endpoints)

• **GET /payment_policy**: Update Payment Policy
• **POST /payment_policy**: Create/Search Payment Policy
• **GET /payment_policy/get_by_policy_name**: This method retrieves the details of a specific payment policy
• **DELETE /payment_policy/{payment_policy_id}**: This method deletes a payment policy
• **GET /payment_policy/{payment_policy_id}**: This method retrieves the complete details of a payment policy
• **PUT /payment_policy/{payment_policy_id}**: This method updates an existing payment policy

### 🔧 Payments_Program (2 endpoints)

• **GET /payments_program/{marketplace_id}/{payments_program_type}**: Get {Payments Program Type}
• **GET /payments_program/{marketplace_id}/{payments_program_type}/onboarding**: Get Onboarding

### 🔧 Privilege (1 endpoints)

• **GET /privilege**: Get Seller Privileges

### 🔧 Program (3 endpoints)

• **GET /program/get_opted_in_programs**: List Opted-In Programs
• **POST /program/opt_in**: Opt In to Program
• **POST /program/opt_out**: Opt Out of Program

### 🔧 Rate_Table (1 endpoints)

• **GET /rate_table**: List Shipping Rate Tables

### 🔧 Return_Policy (6 endpoints)

• **GET /return_policy**: Update Return Policy
• **POST /return_policy**: Create/Search Return Policy
• **GET /return_policy/get_by_policy_name**: This method retrieves the details of a specific return policy
• **DELETE /return_policy/{return_policy_id}**: This method deletes a return policy
• **GET /return_policy/{return_policy_id}**: Get {Return Policy Id}
• **PUT /return_policy/{return_policy_id}**: This method updates an existing return policy

### 🔧 Sales_Tax (4 endpoints)

• **GET /sales_tax**: Update Sales Tax Rate
• **DELETE /sales_tax/{countryCode}/{jurisdictionId}**: This call deletes a sales tax table entry for a jurisdiction
• **GET /sales_tax/{countryCode}/{jurisdictionId}**: This call gets the current sales tax table entry for a specific tax jurisdiction
• **PUT /sales_tax/{countryCode}/{jurisdictionId}**: This method creates or updates a sales tax table entry for a jurisdiction

### 🔧 Subscription (1 endpoints)

• **GET /subscription**: List Subscriptions

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Account API responses with full data structure

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
