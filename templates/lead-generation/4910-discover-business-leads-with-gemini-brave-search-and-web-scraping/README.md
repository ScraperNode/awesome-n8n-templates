# 🎣 Discover business leads with Gemini, Brave Search and web scraping

> ⚡ **3,851 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

Uncover new business leads with this AI-Powered Prospect Discovery Agent! This n8n workflow acts as a specialized intelligent assistant that, given a business type and location, uses multiple search strategies to identify a list of potential prospect companies and their websites.

Stop manually trawling through search results! This agent automates the initial phase of lead generation by:
*   Understanding your target business profile (type, location, keywords).
*   Strategically using web search tools (Brave Search, Google Gemini Search) to find relevant businesses.
*   Performing quick validations to confirm relevance.
*   Returning a clean, structured JSON list of prospect names and their website URLs.

**How it Works:**

The workflow is built around an AI agent powered by Google Gemini. This agent is equipped with tools like:

*   **Brave Web Search:** For broad initial sourcing of potential business candidates.
*   **Google Gemini Search:** For advanced, context-aware discovery and finding businesses mentioned in various online sources.
*   **Brave Local Search (Selective):** For quick verification of local presence or finding website URLs for identified names.
*   **Jina AI Web Page Scraper (Very Selective):** For extremely rapid relevance checks on uncertain websites by scanning page content for keywords.

The agent's system prompt guides it to use these tools efficiently to build a list of prospects without getting bogged down in deep research on any single one at this discovery stage.

**Use Cases:**

*   **Lead Generation:** Automatically generate lists of potential clients based on industry and location.
*   **Market Research:** Identify key players or types of businesses in a specific geographical area.
*   **Sales Development:** Provide SDRs with initial lists of companies to research further.
*   **Called as a Sub-Workflow:** Designed to be easily integrated as a "tool" into more complex orchestrating AI agents (e.g., a BNI Pitch Planner that first needs to identify who to target).

**Setup:**

1.  **Import the workflow.**
2.  **Configure Credentials:** You'll need n8n credentials for:
    *   Google Gemini (for the Chat model and the Gemini Search/Vertex AI Search tool).
    *   Brave Search (e.g., via Smithery MCP, or adapt if you have direct API access).
    *   Jina AI (for the web scraper).
    Assign these to the respective nodes.
3.  **Review System Prompt:** The `prospect_discovery_agent` node contains a detailed system prompt. You can fine-tune this to adjust its search strategies or the strictness of its matching.
4.  **Inputs:** This workflow is triggered by an "Execute Workflow Trigger" node (`prospect_discovery_workflow`). It expects the following inputs:
    *   `business_type` (string): e.g., "artisan bakery"
    *   `location_query` (string): e.g., "Portland, Oregon"
    *   `desired_num_prospects` (number): e.g., 5
    *   `additional_keywords` (string, optional): e.g., "organic, gluten-free"

**To Use (as a Sub-Workflow/Tool):**

This workflow is typically called by another n8n workflow (e.g., using a "Tool Workflow" node from the Langchain nodes). The calling workflow would provide the inputs listed above. The "Prospect Discovery" workflow will then execute and its final node (the `prospect_discovery_agent`) will output a JSON array of found prospects, like:

```json
[
  {
    "business_name": "Rose Petal Bakery",
    "website_url": "https://rosepetalbakerypdx.com"
  },
  {
    "business_name": "The Daily Bread Artisans",
    "website_url": "https://dailybreadpdx.com"
  }
]
```
If no prospects are found, it returns an empty array `[]`.

This template provides a powerful and focused tool for automating the initial stages of prospect identification.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool, Google Gemini Chat Model, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
