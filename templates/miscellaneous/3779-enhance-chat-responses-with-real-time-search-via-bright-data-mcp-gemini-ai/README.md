# 🔧 Enhance Chat Responses with Real-Time Search via Bright Data MCP & Gemini AI

> ⚡ **604 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Disclaimer
This template is only available on n8n self-hosted as it's making use of the community node for MCP Client.

![Enhance Chat Responses with RealTime Search Data.png](fileId:1224)

### Who this is for?

The Chat Conversations with Bright Data MCP Search Engines & Google Gemini workflow is designed for users who need real-time, AI-enhanced conversations powered by live search engine results. 

This workflow is tailored for:​

1. **Data Analysts** - Who want live, search-based data fused with AI reasoning.

2. **Marketing Researchers** - Seeking up-to-the-minute market or competitor insights via conversational AI.

3. **Product Managers** - Exploring user needs, market trends, and competitor analysis in real time.

4. **AI Developers** - Building dynamic applications that combine live search data with intelligent conversation agents.

5. **Growth Hackers** - Who need fast, conversational research tools for campaign ideation, outreach, or content creation.

### What problem is this workflow solving?

Traditional chatbots and AI systems often rely on static, outdated data. 

This workflow enables AI agents to fetch live search engine data and converse intelligently about it, making interactions dynamic, accurate, and highly contextual.

This workflow solves the major gaps of:

1. **Outdated Knowledge**: Regular chatbots lack up-to-date information from live web searches.

2. **Manual Search Fatigue**: Manually searching for information and interpreting it is time-consuming.

3. **Context Bridging**: Connecting search results into meaningful, conversational replies requires human-level reasoning.

### What this workflow does?

1. Accepts a user's conversational query input.

2. Triggers a search request to Bright Data’s MCP Search Engines API (Google, Bing, etc.) based on the query.

3. Waits for the search task to complete.

4. Retrieves real-time search results.

5. Feeds the search results and original question into Google Gemini.

6. Generates a human-like, contextually accurate AI response combining live information and conversational flow.

7. Outputs the response back into a chat app.

### Pre-conditions

1. Knowledge of Model Context Protocol (MCP) is highly essential. Please read this blog post - [model-context-protocol](https://www.anthropic.com/news/model-context-protocol)
2. You need to have the [Bright Data](https://brightdata.com/) account and do the necessary setup as mentioned in the **Setup** section below.
3. You need to have the Google Gemini API Key. Visit [Google AI Studio](https://aistudio.google.com/)
3. You need to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)
4. You need to install the [n8n-nodes-mcp](https://github.com/nerding-io/n8n-nodes-mcp)

### Setup
1. Please make sure to setup n8n locally with MCP Servers by navigating to [n8n-nodes-mcp](https://www.youtube.com/watch?v=NUb73ErUCsA)
2. Please make sure to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp) on your local machine. Also, do "Account Setup" as mentioned in the [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp) URL.
3. Sign up at [Bright Data](https://brightdata.com/).
4. Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
5. In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
6. In n8n, configure the credentials to connect with MCP Client (STDIO) account with the Bright Data MCP Server as shown below.

![MCPClientAccount.png](fileId:1222)
Make sure to copy the Bright Data Web Unlocker **API Token** within the Environments textbox above as API_TOKEN=&lt;your-token&gt;.
7. Update the **HTTP Request for Webhook Notification** node for sending the Webhook notification for chat responses.

### How to customize this workflow to your needs

1. **Change Search Engine**:
- Add or Remove the Search Engine MCP tools based upon the Bright Data MCP Server updates.

2. **Expand Outputs**:
- Send AI chat responses to Slack, Discord, custom chat UIs, WhatsApp, or CRM systems.
- Store conversation logs in a database (PostgreSQL, MongoDB, etc.) for future audits or training.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Google Gemini Chat Model, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
