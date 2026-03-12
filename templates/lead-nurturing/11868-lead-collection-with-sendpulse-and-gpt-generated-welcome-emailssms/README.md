# 💬 Lead collection with SendPulse and GPT-generated welcome emails/SMS

> ⚡ **51 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works

This n8n template automates lead processing from your website. It receives customer data via a Webhook, stores the customer's contact (email or phone number) in the respective [**SendPulse**](https://sendpulse.com) address books, and uses the [**SendPulse MCP Server**](https://sendpulse.com/knowledge-base/account-settings/mcp-server)  to send personalized welcome messages (email or SMS) generated using AI.

The template also includes built-in SendPulse token management logic with caching in the Data Table, which reduces the number of unnecessary API requests.

[**SendPulse’s MCP server**](https://sendpulse.com/knowledge-base/account-settings/mcp-server) is a tool that helps you manage your account through a chat with an AI assistant. It uses SendPulse API methods to get information and perform actions, such as request statistics, run message campaigns, or update user data.

MCP server acts as middleware between your AI assistant and your [**SendPulse account**](https://sendpulse.com). It processes requests through the SendPulse API and sends results back to chat, so you can manage everything without leaving the conversation.

Once connected, the MCP server operates as follows:

1. You ask your AI assistant something in chat.
2. It forwards your request to the MCP server.
3. The MCP server calls the API to get data or perform an action.
4. The AI assistant sends the result back to your chat.

## Set up

### Requirements:
- An active SendPulse account.
- Client ID and Client Secret from your SendPulse account.
- An API key from your OpenAI account to power the AI agent.

### Set up steps:

1. Get your **OpenAI API Key** - [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Add your **OpenAI API Key** to **OpenAI Chat Model** node in n8n workflow.
3. Get your **Client ID** and **Client Secret** from your SendPulse account - [https://login.sendpulse.com/settings/#api](https://login.sendpulse.com/settings/#api)
4. Add your **Client ID** and **Client Secret** to **Workflow Configuration** node.
5. Add your **Client ID** and **Client Secret** to **SendPulse MCP Client** node as headers **X-SP-ID** і **X-SP-SECRET** in Multiple Headers Auth.
6. In the **Workflow Configuration** node, change the names of the mailing lists, senderName, senderEmail, smsSender, routeCountryCode and routeType fileds as needed.
7. Create a **tokens** table with the columns: **hash** (string), **accessToken** (string), **tokenExpiry** (string) in the Data tables section of your n8n platform account.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, MCP Client Tool, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
