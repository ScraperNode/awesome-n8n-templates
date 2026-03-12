# 📊 Extract structured data from Brave Search with Bright Data MCP & Google Gemini

> ⚡ **350 views** · 📊 [Market Research & Insights](../)

## Description

![BraveSearchWithBrightDataMCP.png](fileId:1418)

### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for
The Brave Search Structured Data Extractor workflow is designed for professionals and teams that need high-quality, structured insights from Brave search results in real time. Whether you're performing market research, tracking competitors, training AI models, or powering content engines, this workflow offers a robust and automated solution.

This workflow is tailored for:

**Market Researchers** - Who analyze trends across multimedia channels

**AI Developers** - Who require clean, structured datasets for model fine-tuning

**SEO & Content** - Analysts looking to monitor visibility across news, images, and videos

**Media Researchers** - Curating timely and relevant information across formats

**Automation Engineers** - Integrating search insights into downstream workflows

### What problem is this workflow solving?
Traditional web scraping and search result parsing is fragmented, inconsistent, and prone to errors, especially when dealing with multimedia (images, videos, news) data from search engines. This workflow provides:

- Centralized Brave search data extraction across all content types. Switches the search execution based upon the type of search that is being set. ex: news, images, videos, all

- Automated structured data transformation using Google Gemini

- Unified output persistence and notification across disk, webhook, and Google Sheets

### What this workflow does

**Input Configuration**

- Define your Brave search query

- Set the search type: videos, images, news, or all

- Configure your Bright Data MCP zone

**Bright Data MCP Search Execution**

- Initiates a Brave search via Bright Data MCP using the correct URL pattern for each search type

- Returns raw HTML of search results

**Google Gemini LLM** 

- Structured Data Extraction

- Transforms raw results into structured data (e.g., title, URL, source, snippet)

**Output Handling**

- Save to disk (e.g., JSON or CSV file)

- Send Webhook notification with structured data (e.g., Slack, internal dashboards)

- Store in Google Sheets for team-wide access or dashboarding

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

![MCPClientAccount.png](fileId:1417)

Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;

### How to customize this workflow to your needs

**Enhance Output Analysis**
Add additional LLM prompts for topic classification, sentiment scoring, or trend forecasting.

**Output Format Options**
Choose to output CSV, Markdown, or HTML reports based on your integration target.

**Schedule Automation**
Trigger the workflow on a schedule (daily/weekly) to keep monitoring topical content.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Basic LLM Chain, Structured Output Parser, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
