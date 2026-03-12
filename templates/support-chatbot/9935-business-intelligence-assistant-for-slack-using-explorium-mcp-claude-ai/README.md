# 💬 Business intelligence assistant for Slack using Explorium MCP & Claude AI

> ⚡ **152 views** · 💬 [Support Chatbots](../)

## Description

# Explorium Agent for Slack

## AI-powered Slack bot for business intelligence queries using Explorium API through MCP.

## Prerequisites
- Slack workspace with admin access
- Anthropic API key (You can replace with other LLM Chat)
- Explorium API Key

## 1. Create Slack App

### Create App
1. Go to api.slack.com/apps
2. Click **Create New App** → **From scratch**
3. Give it name (e.g., "Explorium Agent") and select workspace

### Bot Permissions (OAuth & Permissions)
Add these **Bot Token Scopes**:
```
app_mentions:read
channels:history
channels:read
chat:write
emoji:read
groups:history
groups:read
im:history
im:read
mpim:history
mpim:read
reactions:read
users:read
```

### Enable Events
1. **Event Subscriptions** → Enable
2. Add **Request URL** (from n8n Slack Trigger node)
3. Subscribe to **bot events**:
   - app_mention
   - message.channels
   - message.groups
   - message.im
   - message.mpim
   - reaction_added

### Install App
1. **Install App** → **Install to Workspace**
2. Copy **Bot User OAuth Token** (xoxb-...)

## 2. Configure n8n

### Import & Setup
1. Import this JSON template
2. **Slack Trigger** node:
   - Add Slack credential with Bot Token
   - Copy webhook URL
   - Paste in Slack Event Subscriptions Request URL

3. **Anthropic Chat Model** node:
   - Add Anthropic API credential
   - Model: claude-haiku-4-5-20251001

(You can replace it with other chat models)

4. **MCP Client** node:
   - Endpoint: https://mcp.explorium.ai/mcp
   - Header Auth: Add Explorium API key


## Usage Examples
```
@ExploriumAgent find tech companies in SF with 50-200 employees
@ExploriumAgent show Microsoft's technology stack
@ExploriumAgent get CMO contacts at healthcare companies
```

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, Anthropic Chat Model, Simple Memory, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
