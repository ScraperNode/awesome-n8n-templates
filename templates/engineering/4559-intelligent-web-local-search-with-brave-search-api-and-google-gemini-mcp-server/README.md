# ⚒️ Intelligent web & local search with Brave Search API and Google Gemini MCP Server

> ⚡ **1,867 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## Summary
This n8n workflow implements an AI-powered agent that intelligently uses the Brave Search API (via an external MCP service like Smithery) to perform both web and local searches. It understands natural language queries, selects the appropriate search tool, and exposes this enhanced capability as a single, callable MCP tool.

## Key Features
*   🤖 **Intelligent Tool Selection:** AI agent decides between Brave's web search and local search tools based on user query context.
*   🌐 **MCP Microservice:** Exposes complex search logic as a single, easy-to-integrate MCP tool (`call_brave_search_agent`).
*   🧠 **Powered by Google Gemini:** Utilizes the `gemini-2.5-flash-preview-05-20` LLM for advanced reasoning.
*   🗣️ **Conversational Memory:** Remembers context within a single execution flow.
*   📝 **Customizable System Prompt:** Tailor the AI's behavior and responses.
*   🧩 **Modular Design:** Connects to external Brave Search MCP tools (e.g., from Smithery).

## Benefits
*   🔌 **Simplified Integration:** Easily add advanced, AI-driven search capabilities to other applications or agent systems.
*   💸 **Reduced Client-Side LLM Costs:** Offloads complex prompting and tool orchestration to n8n, minimizing token usage for client-side LLMs.
*   🔧 **Centralized Logic:** Manage and update search strategies and AI behavior in one place.
*   🚀 **Extensible:** Can be adapted to use other search tools or incorporate more complex decision-making.

## Nodes Used
*   `@n8n/n8n-nodes-langchain.mcpTrigger` (MCP Server Trigger)
*   `@n8n/n8n-nodes-langchain.toolWorkflow`
*   `@n8n/n8n-nodes-langchain.agent` (AI Agent)
*   `@n8n/n8n-nodes-langchain.lmChatGoogleGemini` (Google Gemini Chat Model)
*   `n8n-nodes-mcp.mcpClientTool` (MCP Client Tool - for Brave Search)
*   `@n8n/n8n-nodes-langchain.memoryBufferWindow` (Simple Memory)
*   `n8n-nodes-base.executeWorkflowTrigger` (Workflow Start - for direct execution/testing)

## Prerequisites
*   An active n8n instance (v1.22.5+ recommended).
*   A Google AI API key for using the Gemini LLM.
*   Access to an external MCP service that provides Brave Search tools (e.g., a Smithery account configured with their Brave Search MCP). This includes the MCP endpoint URL and any necessary authentication (like an API key for Smithery).

## Setup Instructions
1.  **Import Workflow:** Download the `Brave_Search_Smithery_AI_Agent_MCP_Server.json` file and import it into your n8n instance.
2.  **Configure LLM Credential:**
    *   Locate the **'Google Gemini Chat Model'** node.
    *   Select or create an n8n credential for "Google Palm API" (used for Gemini), providing your Google AI API key.
3.  **Configure Brave Search MCP Credential:**
    *   Locate the **'brave_web_search'** and **'brave_local_search'** (MCP Client) nodes.
    *   Create a new n8n credential of type "MCP Client HTTP API".
        *   **Name:** e.g., `Smithery Brave Search Access`
        *   **Base URL:** Enter the URL of your Brave Search MCP endpoint from your provider (e.g., `https://server.smithery.ai/@YOUR_PROFILE/brave-search/mcp`).
        *   **Authentication:** If your MCP provider requires an API key, select "Header Auth". Add a header with the name (e.g., `X-API-Key`) and value provided by your MCP service.
    *   Assign this newly created credential to both the 'brave_web_search' and 'brave_local_search' nodes.
4.  **Note MCP Trigger Path:**
    *   Open the **'Brave Search MCP Server Trigger'** node.
    *   Copy its unique 'Path' (e.g., `/cc8cc827-3e72-4029-8a9d-76519d1c136d`). You will combine this with your n8n instance's base URL to get the full endpoint URL for clients.

## How to Use
This workflow exposes an MCP tool named `call_brave_search_agent`. External clients can call this tool via the URL derived from the 'Brave Search MCP Server Trigger'.

**Example Client MCP Configuration (e.g., for Roo Code):**
```json
"n8n-brave-search-agent": {
  "url": "https://YOUR_N8N_INSTANCE/mcp/cc8cc827-3e72-4029-8a9d-76519d1c136d/sse",
  "alwaysAllow": [
    "call_brave_search_agent"
  ]
}
```
*Replace `YOUR_N8N_INSTANCE` with your n8n's public URL and ensure the path matches your trigger node.*

**Example Request:**
Send a `POST` request to the trigger URL with a JSON body:
```json
{
  "input": { "query": "best coffee shops in London" }
}
```



The agent will stream its response, including the summarized search results.

## Customization
*   **AI Behavior:** Modify the System Prompt within the **'Brave Search AI Agent'** node to fine-tune its decision-making, response style, or how it uses the search tools.
*   **LLM Choice:** Replace the **'Google Gemini Chat Model'** node with any other compatible LLM node supported by n8n.
*   **Search Tools:** Adapt the workflow to use different or additional search tools by modifying the MCP Client nodes and updating the AI Agent's system prompt and tool definitions.

## Further Information
*   GitHub Repository: https://github.com/jezweb/n8n
*   The workflow includes extensive sticky notes for in-canvas documentation.

## Author
Jeremy Dawes (Jezweb)

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool, Google Gemini Chat Model, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
