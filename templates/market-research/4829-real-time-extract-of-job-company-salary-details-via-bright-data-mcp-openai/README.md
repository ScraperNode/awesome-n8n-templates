# 📊 Real-time extract of job, company, salary details via Bright Data MCP & OpenAI

> ⚡ **880 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Realtime Extract of Job Description, Salary Details via Bright Data MCP  OpenAI 4o mini.png](fileId:1579)
### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for

This workflow automates the real-time extraction of Job Descriptions and Salary Information from job listing pages using Bright Data MCP and analyzes content using OpenAI GPT-4o mini. 

This workflow is ideal for:

- **Recruiters & HR Tech Startups**: Automate job data collection from public listings

- **Market Intelligence Teams**: Analyze compensation trends across companies or geographies

- **Job Boards & Aggregators**: Power search results with structured, enriched listings

- **AI Workflow Builders**: Extend to other career platforms or automate resume-job match analysis

- **Analysts & Researchers**: Track hiring signals and salary benchmarks in real time

### What problem is this workflow solving?

Traditional scraping of job portals can be challenging due to cluttered content, anti-scraping measures, and inconsistent formatting. Manually analyzing salary ranges and job descriptions is tedious and error-prone.

This workflow solves the problem by:

- Simulating user behavior using Bright Data MCP Client to bypass anti-scraping systems

- Extracting structured, clean job data in Markdown format

- Using OpenAI GPT-4o mini to analyze and extract precise salary details and refined job descriptions

- Merging and formatting the result for easy consumption

- Delivering final output via webhook, Google Sheets, or file system

### What this workflow does

Components & Flow

**Input Nodes**
- job_search_url: The job listing or search result URL

- job_role: The title or role being searched for (used in logging/formatting)

**MCP Client Operations**
- MCP Salary Data Extractor

	- Simulates browser behavior and scrapes salary-related content (if available)

	- MCP Job Description Extractor

Extracts full job description as structured Markdown content

**OpenAI GPT-4o mini Nodes**

Salary Information Extractor

- Uses GPT-4o mini to detect, clean, and standardize salary range data (if any)

Job Description Refiner

- Extracts role responsibilities, qualifications, and benefits from unstructured text

Company Information Extractor

- Uses Bright Data MCP and GPT-4o mini to extract the company information

**Merge Node**
- Combines the refined job description and extracted salary information into a unified JSON response object

**Aggregate node**
- Aggregates the job description and salary information into a single JSON response object

**Final Output Handling**

The output is handled in three different formats depending on your downstream needs:

- **Save to Disk**

	-	Output stored with filename including timestamp and job role

- **Google Sheet Update**

	- Adds a new row with job role, salary, summary, and link

- **Webhook Notification**

	- Pushes merged response to an external system


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
5. In n8n, configure the OpenAi account credentials.
6. In n8n, configure the credentials to connect with MCP Client (STDIO) account with the Bright Data MCP Server as shown below.

![MCPClientAccount.png](fileId:1471)

Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;

### How to customize this workflow to your needs

**Modify Input Source**

- Change the job_search_url to point to any job board or aggregator

- Customize job_role to reflect the type of jobs being analyzed

**Tweak LLM Prompts (Optional)**

- Refine GPT-4o mini prompts to extract additional fields like benefits, tech stacks, remote eligibility

**Change Output Format**

- Customize the merged object to output JSON, CSV, or Markdown based on downstream needs

- Add additional destinations (e.g., Slack, Airtable, Notion) via n8n nodes

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, OpenAI Chat Model, Read/Write Files from Disk, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
