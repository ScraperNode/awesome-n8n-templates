# 🎣 Extract, Transform LinkedIn Data with Bright Data MCP Server & Google Gemini

> ⚡ **844 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Disclaimer
This template is only available on n8n self-hosted as it's making use of the community node for MCP Client.

![Extract, Transform LinkedIn Data with Bright Data.png](fileId:1221)

### Who this is for?

The Extract, Transform LinkedIn Data with Bright Data MCP Server & Google Gemini workflow is an automated solution that scrapes LinkedIn content via Bright Data MCP Server then transforms the response using a Gemini LLM. The final output is sent via webhook notification and also persisted on disk.

This workflow is tailored for:​
1. **Data Analysts** : Who require structured LinkedIn datasets for analytics and reporting.

2. **Marketing and Sales Teams** : Looking to enrich lead databases, track company updates, and identify market trends.

3. **Recruiters and Talent Acquisition Specialists** : Who want to automate candidate sourcing and company research.

4. **AI Developers** : Integrating real-time professional data into intelligent applications.

5. **Business Intelligence Teams** : Needing current and comprehensive LinkedIn data to drive strategic decisions.

### What problem is this workflow solving?

Gathering structured and meaningful information from the web is traditionally slow, manual, and error-prone.

This workflow solves:

1. Reliable web scraping using Bright Data MCP Server LinkedIn tools.

2. LinkedIn person and company web scrapping with AI Agents setup with the Bright Data MCP Server tools.

3. Data extraction and transformation with Google Gemini LLM.

4. Persists the LinkedIn person and company info to disk.

5. Performs a Webhook notification with the LinkedIn person and company info.

### What this workflow does?

This n8n workflow performs the following steps:

1. **Trigger**: Start manually.

2. **Input URL(s)**: Specify the LinkedIn person and company URL.

3. **Web Scraping (Bright Data)**: Use Bright Data's MCP Server, LinkedIn tools for the person and company data extract.

4. **Data Transformation & Aggregation**: Uses the Google LLM for handling the data transformation.

5. **Store / Output**: Save results into disk and also performs a Webhook notification.

### Pre-conditions

1. Knowledge of Model Context Protocol (MCP) is highly essential. Please read this blog post - [model-context-protocol](https://www.anthropic.com/news/model-context-protocol)
2. You need to have the [Bright Data](https://brightdata.com/) account and do the necessary setup as mentioned in the **Setup** section below.
3. You need to have the Google Gemini API Key. Visit [Google AI Studio](https://aistudio.google.com/)
3. You need to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)
4. You need to install the [n8n-nodes-mcp](https://github.com/nerding-io/n8n-nodes-mcp)

### Setup

1. Please make sure to setup n8n locally with MCP Servers by navigating to [n8n-nodes-mcp](https://github.com/nerding-io/n8n-nodes-mcp)
2. Please make sure to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)  on your local machine.
2. Sign up at [Bright Data](https://brightdata.com/).
3. Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
4. Create a Web Unlocker proxy zone called mcp_unlocker on Bright Data control panel.
5. In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
6. In n8n, configure the credentials to connect with MCP Client (STDIO) account with the Bright Data MCP Server as shown below.
![MCPClientAccount.png](fileId:1220)
Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;.
7. Update the LinkedIn URL person and company workflow.
8. Update the Webhook HTTP Request node with the Webhook endpoint of your choice.
9. Update the file name and path to persist on disk.

### How to customize this workflow to your needs

1. **Different Inputs**: Instead of static URLs, accept URLs dynamically via webhook or form submissions.

2. **Data Extraction**: Modify the **LinkedIn Data Extractor** node with the suitable prompt to format the data as you wish.

3. **Outputs**: Update the Webhook endpoints to send the response to Slack channels, Airtable, Notion, CRM systems, etc.

## 🔗 Nodes Used

Function, HTTP Request, Read/Write Files from Disk, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
