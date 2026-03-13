# ⚡ Ai-powered local event finder with multi-tool search

> ⚡ **863 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Summary
This n8n workflow implements an AI-powered "Local Event Finder" agent. It takes user criteria (like event type, city, date, and interests), uses a suite of search tools (Brave Web Search, Brave Local Search, Google Gemini Search) and a web scraper (Jina AI) to find relevant events, and returns formatted details. The entire agent is exposed as a single, easy-to-use MCP (Multi-Capability Peer) tool, making it simple to integrate into other workflows or applications.

This template cleverly combines the MCP server endpoint and the AI agent logic into a **single n8n workflow file** for ease of import and management.

## Key Features
*   **Intelligent Multi-Tool Search:** Dynamically utilizes web search, precise local search, and advanced Gemini semantic search to find events.
*   **Detailed Information via Web Scraping:** Employs Jina AI to extract comprehensive details directly from event web pages.
*   **Simplified MCP Tool Exposure:** Makes the complex event-finding logic available as a single, callable tool for other MCP-compatible clients (e.g., Roo Code, Cline, other n8n workflows).
*   **Customizable AI Behavior:** The core AI agent's behavior, tool usage strategy, and output formatting can be tailored by modifying its System Prompt.
*   **Modular Design:** Uses distinct nodes for LLM, memory, and each external tool, allowing for easier modification or extension.

## Benefits
*   **Simplifies Client-Side Integration:** Offloads the complexity of event searching and data extraction from client applications.
*   **Provides Richer Event Data:** Goes beyond simple search links to extract and format key event details.
*   **Flexible & Adaptable:** Can be adjusted to various event search needs and can incorporate new tools or data sources.
*   **Efficient Processing:** Leverages specialized tools for different aspects of the search process.

## Nodes Used
*   `MCP Trigger`
*   `Tool Workflow`
*   `Execute Workflow Trigger`
*   `AI Agent`
*   `Google Gemini Chat Model` (ChatGoogleGenerativeAI)
*   `Simple Memory` (Window Buffer Memory)
*   `MCP Client` (for Brave Search tools via Smithery)
*   `Google Gemini Search Tool`
*   `Jina AI Tool`

## Prerequisites
*   An active n8n instance.
*   **Google AI API Key:** For the Gemini LLM (`Google Gemini Chat Model` node) and the `Google Gemini Search Tool`. Ensure your key is enabled for these services.
*   **Jina AI API Key:** For the `jina_ai_web_page_scraper` node. A free tier is often available.
*   **Access to a Brave Search MCP Provider (Optional but Recommended):**
    *   This template uses `MCP Client` nodes configured for Brave Search via a provider like Smithery. You'll need an account/API key for your chosen Brave Search MCP provider to configure the `smithery brave search` credential.
    *   Alternatively, you could adapt these to call Brave Search API directly if you manage your own access, or replace them with other search tools.

## Setup Instructions
1.  **Import Workflow:** Download the JSON file for this template and import it into your n8n instance.
2.  **Configure Credentials:**
    *   **Google Gemini LLM:**
        *   Locate the `Google Gemini Chat Model` node.
        *   Select or create a "Google Gemini API" credential (named `Google Gemini Context7` in the template) using your Google AI API Key.
    *   **Google Gemini Search Tool:**
        *   Locate the `google_gemini_event_search` node.
        *   Select or create a "Gemini API" credential (named `Gemini Credentials account` in the template) using your Google AI API Key (ensure it's enabled for Search/Vertex AI).
    *   **Jina AI Web Scraper:**
        *   Locate the `jina_ai_web_page_scraper` node.
        *   Select or create a "Jina AI API" credential (named `Jina AI account` in the template) using your Jina AI API Key.
    *   **Brave Search (via MCP):**
        *   You'll need an MCP Client HTTP API credential to connect to your Brave Search MCP provider (e.g., Smithery).
        *   Create a new "MCP Client HTTP API" credential in n8n. Name it, for example, `smithery brave search`.
        *   Configure it with the Base URL and any required authentication (e.g., API key in headers) for your Brave Search MCP provider.
        *   Locate the `brave_web_search` and `brave_local_search` MCP Client nodes in the workflow.
        *   Assign the `smithery brave search` (or your named credential) to both of these nodes.
3.  **Activate Workflow:** Ensure the workflow is active.
4.  **Note MCP Trigger Path:**
    *   Locate the `local_event_finder` (MCP Trigger) node.
    *   The `Path` field (e.g., `0ca88864-ec0a-4c27-a7ec-e28c5a900697`) combined with your n8n webhook base URL forms the endpoint for client calls.
    *   Example Endpoint: `YOUR_N8N_INSTANCE_URL/webhooks/PATH-TO-MCP-SERVER`


## Customization
*   **AI Behavior:** Modify the "System Message" parameter within the `event_finder_agent` node to change the AI's persona, its strategy for using tools, or the desired output format.
*   **LLM Model:** Swap the `Google Gemini Chat Model` node with another compatible LLM node (e.g., OpenAI Chat Model) if desired. You'll need to adjust credentials and potentially the system prompt.
*   **Tools:** Add, remove, or replace tool nodes (e.g., use a different search provider, add a weather API tool) and update the `event_finder_agent`'s system prompt and tool configuration accordingly.
*   **Scraping Depth:** Be mindful of the `jina_ai_web_page_scraper`'s usage due to potential timeouts. The system prompt already guides the LLM on this, but you can adjust its usage instructions.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool, Google Gemini Chat Model, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
