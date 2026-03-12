# 💬 💥🛠️Build a web search chatbot with GPT-4o and MCP Brave Search

> ⚡ **24,578 views** · 💬 [Support Chatbots](../)

## Description

##  MCP AI Chatbot using Brave Search

Disclaimer:  This workflow only works with local installations of n8n because it uses a community MCP node

![image.png](fileId:1017)

### **Who is this for?**
This workflow is ideal for developers, automation enthusiasts, and businesses looking to integrate AI-powered chat capabilities into their workflows. It's particularly useful for those leveraging Brave Search and MCP tools to enhance user interactions and streamline data retrieval.

### **What problem is this workflow solving?**
This workflow addresses the challenge of creating an intelligent chatbot that can process user queries, execute searches using Brave Search, and provide responses enriched by AI. It simplifies the integration of multiple tools into a cohesive system, saving time and effort for users who need a robust conversational AI solution.

### **What this workflow does**
- Listens for incoming chat messages using the **Chat Trigger** node.
- Processes user input with an **AI Agent** powered by GPT-4o.
- Retrieves relevant tools using the **MCP Get Brave Tools** node.
- Executes specific search queries via the **MCP Execute Brave Search** node.
- Maintains short-term memory of conversations with the **Simple Memory** node.

### **Setup**
1. **Prerequisites**:
   - Access to an n8n instance (self-hosted).
   - API credentials for OpenAI and MCP Client Tools.
   - Brave Search API key.

2. **Steps**:
   - Import the workflow JSON into your n8n instance.
   - Configure the API credentials for OpenAI and MCP Client Tools in their respective nodes.
   - Set up your Brave Search API key in the MCP nodes. https://brave.com/search/api/

3. **Testing**:
   - Use the built-in chat interface to send test messages.
   - Verify that the chatbot processes queries and returns results as expected.

### **How to customize this workflow to your needs**
- Modify the AI Agent's prompt settings to tailor responses to your specific use case.
- Adjust the memory buffer in the Simple Memory node to retain more or less conversational context.
- Replace or add additional tools in the MCP nodes to expand functionality.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
