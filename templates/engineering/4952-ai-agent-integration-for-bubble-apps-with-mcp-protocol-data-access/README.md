# ⚒️ AI agent integration for Bubble apps with MCP protocol data access

> ⚡ **707 views** · ⚒️ [Engineering](../)

## Description

Let AI agents fetch communicate with your Bubble app automatically. It connects direcly with your Bubble data API. This workflow is designed for teams building AI tools or copilots that need seamless access to Bubble backend data via natural language queries.


**How it works**
- Triggered via a webhook from an AI agent using the MCP (Model-Chain Prompt) protocol.
- The agent selects the appropriate data tool (e.g., projects, user, bookings) based on user intent.
- The workflow queries your Bubble database and returns the result.
- Ideal for integrating with ChatGPT, n8n AI-Agents, assistants, or autonomous workflows that need real-time access to app data.


**Set up steps**
- Enable access to your Bubble data or backend APIs (as needed).
- Create a Bubble admin token.
- Add your Bubble node/s to your n8n workflow.
- Add your Bubble admin token.
- Configer your Bubble node/s.
- Copy the generated webhook URL from the MCP Server Trigger node and register it with your AI tool (e.g., LangChain tool loader).
- (Optional) Adjust filters in the “Get an Object Details” node to match your dataset needs.

Once connected, your AI agents can automatically retrieve context-aware data from your Bubble app, no manual lookups required.

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
