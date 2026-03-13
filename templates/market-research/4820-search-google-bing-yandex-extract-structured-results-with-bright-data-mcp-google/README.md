# 📊 Search Google, Bing, Yandex & extract structured results with Bright Data MCP & Google Gemini

> ⚡ **2,095 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Perform Google, Bing, Yandex Search with Bright Data MCP Agent  Google Gemini.png](fileId:1466)
### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for?

The Search Engine Intelligence Extractor is a powerful n8n automation that leverages Bright Data’s MCP based AI Agents to simulate human-like searches across Google, Bing, and Yandex, and then distills clean, structured insights using Google Gemini.

This workflow is tailored for:

- SEO analysts researching competitors or market trends

- Market researchers needing real-time search visibility

- Journalists & content writers gathering contextual insights

- AI developers creating intelligent assistants

- Digital marketers tracking brand mentions or news

### What problem is this workflow solving?

Traditional scraping of search engines is often blocked, cluttered, or filled with irrelevant information. Manually analyzing and cleaning this data for insight is time-consuming.

This workflow solves the problem by:

- Simulating real user search behavior via Bright Data MCP based AI Agent

- Performing multi-platform search (Google, Bing, Yandex) in one unified flow

- Extracting clean, human-readable results (stripping ads, navigation, etc.)

- Structuring the content using Google Gemini LLM

- Automating delivery via Webhook or saving to disk

### What this workflow does

**Input Fields Node:**

- Accepts the search query

- Accepts action for example - Perform a google search. Replace the action with bing, yandex etc. for other search providers

- Accepts Webhook notification URL

**Bright Data MCP Agent Execution:**

- Triggers Bright Data’s intelligent search agent

- Handles search navigation, result loading, pagination

**Human Readable Data Extractor:**

- Cleanses HTML, removes ads, footers, irrelevant links

- Produces a readable narrative of results

**Final Output Handling:**

- Saves the processed response to disk

- Sends the structured data to a Webhook for real-time use

### Pre-conditions

1. Knowledge of Model Context Protocol (MCP) is highly essential. Please read this blog post - [model-context-protocol](https://www.anthropic.com/news/model-context-protocol)
2. You need to have the [Bright Data](https://brightdata.com/) account and do the necessary setup as mentioned in the **Setup** section below.
3. You need to have the Google Gemini API Key. Visit [Google AI Studio](https://aistudio.google.com/)
3. You need to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)
4. You need to install the [n8n-nodes-mcp](https://github.com/nerding-io/n8n-nodes-mcp)

### Setup
1. Please make sure to setup n8n locally with MCP Servers by navigating to [n8n-nodes-mcp](https://www.youtube.com/watch?v=NUb73ErUCsA)
2. Please make sure to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)  on your local machine.
3. Sign up at [Bright Data](https://brightdata.com/).
4. Create a Web Unlocker proxy zone called mcp_unlocker on Bright Data control panel.
5. Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
6. In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
7. In n8n, configure the credentials to connect with MCP Client (STDIO) account with the Bright Data MCP Server as shown below.

![MCPClientAccount.png](fileId:1465)

Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;

### How to customize this workflow to your needs

**Add Scheduled Execution**
- Add a Cron trigger to run this workflow on a set schedule (e.g., daily/weekly keyword tracking).

**Push Results to Custom Destinations**

Connect output to:

- Google Sheets (for analytics or dashboards)

- PostgreSQL or MySQL DBs (for structured storage)

- Notion or Airtable (for content pipelines)

- Slack or Email (for alerting teams)


**Customize Webhook Notifications**
- Update the Webhook URL in the notification node to push processed results to external APIs, CRMs, or real-time dashboards.

## 🔗 Nodes Used

Function, HTTP Request, AI Agent, Read/Write Files from Disk, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
