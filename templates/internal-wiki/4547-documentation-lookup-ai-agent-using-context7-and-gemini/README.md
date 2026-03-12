# 📖 Documentation Lookup AI Agent using Context7 and Gemini

> ⚡ **1,713 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

**This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

This workflow demonstrates how to build and expose a sophisticated n8n AI Agent as a single, callable tool using the Multi-Agent Collaboration Protocol (MCP). It allows external clients or other AI systems to easily query software library documentation via Context7, without needing to manage the underlying tool orchestration or complex conversational logic.

**Core Idea:**
Instead of building complex agentic loops on the client-side (e.g., in Python, a VS Code extension, or another AI development environment), this workflow offloads the entire agent's reasoning and tool-use process to n8n. The client simply sends a natural language query (like "How do I use Flexbox in Tailwind CSS?") to an SSE endpoint, and the n8n agent handles the rest.

**Key Features & How It Works:**

1.  **Public MCP Endpoint:**
    *   The main workflow uses the `Context7 MCP Server Trigger` node to create an SSE endpoint. This makes the agent accessible to any MCP-compatible client.
    *   The path for the endpoint is kept long and random for basic 'security by obscurity'.
2.  **Tool Workflow as an Interface:**
    *   A `Tool Workflow` node (named `call_context7_ai_agent` in this example) is connected to the MCP Server Trigger. This node defines the single "tool" that external clients will see and call.
3.  **Dedicated AI Agent Sub-Workflow:**
    *   The `call_context7_ai_agent` tool invokes a separate sub-workflow which contains the actual AI logic.
    *   This sub-workflow starts with a `Context7 Workflow Start` node to receive the user's `query`.
    *   A `Context7 AI Agent` node (using Google Gemini in this example) is the brain, equipped with:
        *   A system prompt to guide its behavior.
        *   `Simple Memory` to retain context for each execution (using `{{ $execution.id }}` as the session key).
        *   Two specialized Context7 MCP client tools:
            *   `context7-resolve-library-id`: To convert library names (e.g., 'Next.js') into Context7-specific IDs.
            *   `context7-get-library-docs`: To fetch documentation using the resolved ID, with options for specific topics and token limits.
4.  **Seamless Tool Use:** The AI Agent autonomously decides when and how to use the `resolve-library-id` and `get-library-docs` tools based on the user's query, handling the multi-step process internally.

**Benefits of This Approach:**

*   **Simplified Client Integration:** Clients interact with a single, powerful tool, sending a simple query.
*   **Reduced Client-Side Token Consumption:** The detailed prompts, tool descriptions, and conversational turns are managed server-side by n8n, saving tokens on the client (especially useful if the client is another LLM).
*   **Centralized Agent Management:** Update your agent's capabilities, tools, or LLM model within n8n without any changes needed on the client side.
*   **Modularity for Agentic Systems:** Perfect for building complex, multi-agent systems where this n8n workflow can act as a specialized "expert" agent callable by others (e.g., from environments like Smithery).
*   **Cost-Effective:** By using a potentially less expensive model (like Gemini Flash) for the agent's orchestration and leveraging the free tier or efficient pricing of services like Context7, you can build powerful solutions economically.

**Use Cases:**

*   Providing an intelligent documentation lookup service for coding assistants or IDE extensions.
*   Creating specialized AI "micro-agents" that can be consumed by larger AI applications.
*   Building internal knowledge base query systems accessible via a simple API-like interface.

**Setup:**

*   Ensure you have the necessary n8n credentials for Google Gemini (or your chosen LLM) and the Context7 MCP client tools.
*   The `Path` in the `Context7 MCP Server Trigger` node should be unique and secure.
*   Clients connect to the "Production URL" (SSE endpoint) provided by the trigger node.

This workflow is a great example of how n8n can serve as a powerful backend for building and deploying modular AI agents.

I've made a video to try and explain this a bit too https://www.youtube.com/watch?v=dudvmyp7Pyg

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool, Google Gemini Chat Model, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
