# 💬 MCP Supabase server for AI agent with RAG & multi-tenant CRUD

> ⚡ **14,494 views** · 💬 [Support Chatbots](../)

## Description

# Supabase AI Agent with RAG & Multi-Tenant CRUD  
**Version**: 1.0.0  
**n8n Version**: 1.88.0+  
**Author**: Koresolucoes 
**License**: MIT  

---

## Description  
A stateful AI agent workflow powered by **Supabase** and **Retrieval-Augmented Generation (RAG)**. Enables persistent memory, dynamic CRUD operations, and multi-tenant data isolation for AI-driven applications like customer support, task orchestration, and knowledge management.  

**Key Features**:  
- 🧠 **RAG Integration**: Leverages OpenAI embeddings and Supabase vector search for context-aware responses.  
- 🗃️ **Full CRUD**: Manage `agent_messages`, `agent_tasks`, `agent_status`, and `agent_knowledge` in real time.  
- 📤 **Multi-Tenant Ready**: Supports per-user/organization data isolation via dynamic table names and webhooks.  
- 🔒 **Secure**: Role-based access control via Supabase Row Level Security (RLS).  

---

## Use Cases  
1. **Customer Support Chatbots**: Persist conversation history and resolve queries using institutional knowledge.  
2. **Automated Task Management**: Track and update task statuses dynamically.  
3. **Knowledge Repositories**: Store and retrieve domain-specific information for AI agents.  

---

## Instructions  
### 1. Import Template  
- Go to **n8n &gt; Templates &gt; Import from File** and upload this workflow.  

### 2. Configure Credentials  
- Add your **Supabase** and **OpenAI** API keys under **Settings &gt; Credentials**.  

### 3. Set Up Multi-Tenancy (Optional)  
- **Dynamic Webhook Path**:  
  Replace the default webhook path with `/mcp/tool/supabase/:userId` to enable per-user routing.  
- **Table Names**:  
  Use a **Set Node** to dynamically generate table names (e.g., `agent_messages_{{userId}}`).  

### 4. Activate & Test  
- Enable the workflow and send test requests to the webhook URL.  

---

## Tags  
`AI Agent` `RAG` `Supabase` `CRUD` `Multi-Tenant` `OpenAI` `Automation`  

---

## Screenshots  
![Captura de tela 20250423 124013.png](fileId:1158)
![Captura de tela 20250423 123954.png](fileId:1159)

---

## License  
This template is licensed under the MIT License.

## 🔗 Nodes Used

Embeddings OpenAI, Supabase Vector Store, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
