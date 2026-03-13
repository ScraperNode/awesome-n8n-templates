# 📊 Scrape Web Data with Bright Data, Google Gemini and MCP Automated AI Agent

> ⚡ **4,063 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Disclaimer
This template is only available on n8n self-hosted as it's making use of the community node for MCP Client.

![Scrape Web Data with Bright Data  MCP Client.png](fileId:1219)
### Who this is for?

The Scrape Web Data with Bright Data and MCP Automated AI Agent workflow is built for professionals who need to automate large-scale, intelligent data extraction by utilizing the Bright Data MCP Server and Google Gemini.

This solution is ideal for:

1. **Data Analysts** - Who require structured, enriched datasets for analysis and reporting.

2. **Marketing Researchers** - Seeking fresh market intelligence from dynamic web sources.

3. **Product Managers** - Who want competitive product and feature insights from various websites.

4. **AI Developers** - Aiming to feed web data into downstream machine learning models.

5. **Growth Hackers** - Looking for high-quality data to fuel campaigns, research, or strategic targeting.

### What problem is this workflow solving?

Manually scraping websites, cleaning raw HTML data, and generating useful insights from it can be slow, error-prone, and non-scalable.

This workflow solves these problems by:

1. Automating complex web data extraction through Bright Data’s MCP Server.

2. Reducing the human effort needed for cleaning, parsing, and analyzing unstructured web content.

3. Allowing seamless integration into further automation processes.

### What this workflow does?

This n8n workflow performs the following steps:

1. **Trigger**: Start manually.

2. **Input URL(s)**: Specify the URL to perform the web scrapping.

3. **Web Scraping (Bright Data)**: Use Bright Data’s MCP Server tools to accomplish the web data scrapping with markdown and html format.

4. **Store / Output**: Save results into disk and also performs a Webhook notification.

### Setup
1. Please make sure to setup n8n locally with MCP Servers by navigating to [n8n-nodes-mcp](https://www.youtube.com/watch?v=NUb73ErUCsA)
2. Please make sure to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)  on your local machine.
3. Sign up at [Bright Data](https://brightdata.com/).
4. Create a Web Unlocker proxy zone called mcp_unlocker on Bright Data control panel.
5. Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
6. In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
7. In n8n, configure the credentials to connect with MCP Client (STDIO) account with the Bright Data MCP Server as shown below.

![MCPClientAccount.png](fileId:1218)

Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;.
8. Update the LinkedIn URL person and company workflow.
9. Update the Webhook HTTP Request node with the Webhook endpoint of your choice.
10. Update the file name and path to persist on disk.

### How to customize this workflow to your needs
1. **Different Inputs**: Instead of static URLs, accept URLs dynamically via webhook or form submissions.

2. **Outputs**: Update the Webhook endpoints to send the response to Slack channels, Airtable, Notion, CRM systems, etc.

## 🔗 Nodes Used

Function, HTTP Request, AI Agent, Simple Memory, Read/Write Files from Disk, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
