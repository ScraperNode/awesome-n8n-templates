# 📈 Get blockchain insights from chat using GPT-4 and Nansen MCP

> ⚡ **876 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works

This workflow listens for an incoming chat message and routes it to an **AI Agent**. The agent is powered by your preferred **Chat Model** (such as OpenAI or Anthropic) and extended with the **Nansen MCP** tool, which enables it to retrieve onchain wallet data, token movements, and address-level insights in real time.

The Nansen MCP tool uses **HTTP Streamable** transport and requires API Key authentication via **Header Auth**.

Read the Documentation: [https://docs.nansen.ai/nansen-mcp/overview](https://docs.nansen.ai/nansen-mcp/overview)

## Set up steps

1. **Get your Nansen MCP API key**  
   - Visit: [https://app.nansen.ai/account?tab=api](https://app.nansen.ai/account?tab=api)  
   - Generate and copy your personal API key.

2. **Create a credential for authentication**  
   - From the homepage, click the **dropdown next to "Create Workflow" → "Create Credential"**.  
   - Select `Header Auth` as the method.  
   - Set the **Header Name** to: `NANSEN-API-KEY`  
   - Paste your API key into the **Value** field.  
   - Save the credential (e.g., `Nansen MCP Credentials`).

3. **Configure the Nansen MCP tool**  
   - **Endpoint**: `https://mcp.nansen.ai/ra/mcp/`  
   - **Server Transport**: `HTTP Streamable`  
   - **Authentication**: `Header Auth`  
   - **Credential**: Select `Nansen MCP Credentials`  
   - **Tools to Include**: Leave as `All` (or restrict as needed)

4. **Configure the AI Agent**  
   - Connect your preferred **Chat Model** (e.g., OpenAI, Anthropic) to the `Chat Model` input.  
   - Connect the **Nansen MCP** tool to the `Tool` input.  
   - *(Optional)* Add a `Memory` block to preserve conversational context.

5. **Set up the chat trigger**  
   - Use the **"When chat message received"** node to start the flow when a message is received.

6. **Test your setup**  
   Try sending prompts like:
   - `What tokens are being swapped by 0xabc...123?`
   - `Get recent wallet activity for this address.`
   - `Show top holders of token XYZ.`

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
