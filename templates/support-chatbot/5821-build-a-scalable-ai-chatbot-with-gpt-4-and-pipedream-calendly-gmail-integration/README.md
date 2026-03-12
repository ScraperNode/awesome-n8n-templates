# 💬 Build a scalable AI chatbot with GPT-4 and Pipedream: Calendly, Gmail integration

> ⚡ **2,029 views** · 💬 [Support Chatbots](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This n8n workflow integrates the powerful Pipedream MCP server with AI capabilities to create a smart, extensible assistant that can interact with over **2,700 APIs and 10,000+ tools** — all within a secure and modular structure.

![image](https://n3wstorage.b-cdn.net/n3witalia/pipedream_2.png)

This setup seamlessly integrates Pipedream's MCP server with n8n, **enabling your AI assistant to leverage thousands of APIs and tools securely**.

---

### **Benefits**

* **Massive Tool Access**: Instantly connect 2,700+ APIs using Pipedream MCP tools — from productivity apps to custom APIs — with zero-code integration.
* **Dynamic AI Agent**: The use of a LangChain agent allows for flexible tool execution and contextual conversations, powered by GPT.
* **Easy Customization**: Simply copy your MCP tool URL into the respective `sseEndpoint` field to extend the agent’s capabilities.
* **Scalable and Modular**: Add or remove tools (like Slack, Notion, Stripe, etc.) without altering the core logic.
* **Secure and Revocable**: Credentials and API access can be managed directly via Pipedream’s MCP dashboard.

---

### **How It Works**  
1. **Chat Trigger**: The workflow begins when a chat message is received via the `When chat message received` node, which acts as the entry point.  
2. **AI Agent Processing**: The message is passed to the `AI Agent` node, which orchestrates the interaction using the connected tools and memory.  
3. **Language Model**: The `OpenAI Chat Model` (GPT-4.1-mini) processes the user's input and generates responses or actions.  
4. **Memory**: The `Simple Memory` node retains context from the conversation to enable coherent multi-turn interactions.  
5. **Tool Integration**:  
   - The `Calendly` and `Gmail` nodes (connected via Pipedream's MCP server) allow the AI to perform actions like scheduling events or sending emails. These tools use SSE (Server-Sent Events) endpoints provided by Pipedream.  
6. **Response**: The AI Agent combines the model's output and tool responses to deliver a final reply to the user.  

---

### **Set Up Steps**  
1. **Sign Up for Pipedream**:  
   - Create an account on and set up your MCP server.  
2. **Configure MCP Tools**:  
   - Connect your accounts (e.g., Calendly, Gmail) in Pipedream and obtain the SSE endpoints for each tool (e.g., `https://mcp.pipedream.net/xxx/calendly_v2`).  
3. **Update n8n Nodes**:  
   - Replace the placeholder SSE endpoints in the `Calendly` and `Gmail` nodes with your Pipedream MCP URLs.  
4. **OpenAI Credentials**:  
   - Ensure the `OpenAI Chat Model` node has valid API credentials (configured under "OpenAi account").  
5. **Activate Workflow**:  
   - Enable the `When chat message received` node (currently disabled) and deploy the workflow.  

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
