# 🔬 Legal Case Research Extractor, Data Miner with Bright Data MCP & Google Gemini

> ⚡ **1,840 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

![Legal Case Research Extractor.png](fileId:1376)

### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for
The Legal Case Research Extractor is a powerful automated workflow designed for legal tech teams, researchers, law firms, and data scientists focused on transforming unstructured legal case data into actionable, structured insights.

This workflow is tailored for:

- Legal Researchers automating case law data mining

- Litigation Support Teams handling large volumes of case records

- LawTech Startups building AI-powered legal research assistants

- Compliance Analysts extracting case-specific insights

- AI Developers working on legal NLP, summarization, and search engines

### What problem is this workflow solving?
Legal case data is often locked in semi-structured or raw HTML formats, scattered across jurisdiction-specific websites. Manually extracting and processing this data is tedious and inefficient.

This workflow automates:

- Extraction of legal case data via Bright Data's powerful MCP infrastructure

- Parsing of HTML into clean, readable text using Google Gemini LLM

- Structuring and delivering the output through webhook and file storage


### What this workflow does

**Input**

- Set the Legal Case Research URL node is responsible for setting the legal case URL for the data extraction.

**Bright Data MCP Data Extractor**

- Bright Data MCP Client For Legal Case Research node is responsible for the legal case extraction via the Bright Data MCP tool - scrape_as_html

**Case Extractor**

- Google Gemini based Case Extractor is responsible for producing a paginated list of cases

**Loop through Legal Case URLs**

- Receives a collection of legal case links to process

- Each URL represents a different case from a target legal website

**Bright Data MCP Scraping**

- Utilizes Bright Data’s scrape_as_html MCP mode

- Retrieves raw HTML content of each legal case

**Google Gemini LLM Extraction**

- Transforms raw HTML into clean, structured text

- Performs additional information extraction if required (e.g., case summary, court, jurisdiction etc.)

**Webhook Notification**

- Sends extracted legal case content to a configurable webhook URL

- Enables downstream processing or storage in legal databases

**Binary Conversion & File Persistence**

- Converts the structured text to binary format

- Saves the final response to disk for archival or further processing

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

![MCPClientAccount.png](fileId:1375)

Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;

### How to customize this workflow to your needs

**Target New Legal Portals**
- Modify the legal case input URLs to scrape from different state or federal case databases


**Customize LLM Extraction**
- Modify the prompt to extract specific fields: case number, plaintiff, case summary, outcome, legal precedents etc.

- Add a summarization step if needed

**Enhance Loop Handling**
- Integrate with a Google Sheet or API to dynamically fetch case URLs

- Add error handling logic to skip failed cases and log them

**Improve Security & Compliance**
- Redact sensitive information before sending via webhook

- Store processed case data in encrypted cloud storage

**Output Formats**
- Save as PDF, JSON, or Markdown

- Enable output to cloud storage (S3, Google Drive) or legal document management systems

## 🔗 Nodes Used

Function, HTTP Request, Basic LLM Chain, Structured Output Parser, Read/Write Files from Disk, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
