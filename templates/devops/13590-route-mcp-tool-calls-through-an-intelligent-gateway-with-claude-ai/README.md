# ⚙️ Route MCP tool calls through an intelligent gateway with Claude AI

> ⚡ **5 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow transforms traditional REST APIs into structured, AI-accessible MCP (Model Context Protocol) tools. It provides a unified gateway that allows Claude AI to safely, granularly, and auditibly interact with any business system — CRM, ERP, databases, SaaS — through a single MCP-compliant interface.

### How it works

1. **Receive MCP Tool Request** - Webhook ingests tool call from AI agent or MCP client
2. **Validate & Authenticate** - Verifies API key, checks JWT token, validates MCP schema
3. **Tool Registry Lookup** - Resolves requested tool name to backend API config and permission scope
4. **Claude AI Intent Verification** - Confirms tool call parameters are safe, well-formed, and within policy
5. **Rate Limit & Quota Check** - Enforces per-client tool call limits before execution
6. **Execute Backend API Call** - Routes to the correct business system API with mapped parameters
7. **Normalize & Enrich Response** - Standardizes API response into MCP tool result schema
8. **Audit & Log** - Writes immutable access log for compliance and observability
9. **Return MCP Tool Result** - Delivers structured response back to the AI agent

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI for intent verification and parameter validation
   - **Google Sheets** - Tool registry, rate limit tracking, and audit log
   - **SMTP** - Alert notifications for policy violations
3. Populate the Tool Registry sheet with your API endpoints
4. Set your MCP gateway API key in the validation node
5. Activate the workflow and point your MCP client to the webhook URL

### Sample MCP Tool Call Payload
```json
{
  "mcpVersion": "1.0",
  "clientId": "agent-crm-001",
  "apiKey": "mcp-key-xxxx",
  "toolName": "crm.get_customer",
  "parameters": {
    "customerId": "CUST-10042",
    "fields": ["name", "email", "tier"]
  },
  "requestId": "req-abc-123",
  "callerContext": "User asked: show me customer details"
}
```

### Supported Tool Categories
- **CRM Tools** — get_customer, update_contact, list_deals
- **ERP Tools** — get_inventory, create_order, update_stock
- **Database Tools** — query_records, insert_record, update_record
- **Communication Tools** — send_email, post_slack, create_ticket
- **Analytics Tools** — run_report, fetch_metrics, export_data

### Features
- **MCP-compliant schema** — works with any MCP-compatible AI agent
- **Granular permission scopes** — read/write/admin per tool per client
- **Claude AI intent guard** — blocks malformed or policy-violating calls
- **Rate limiting** — per-client quota enforcement
- **Full audit trail** — every tool call logged for SOC2 / ISO 27001

**Explore More Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
