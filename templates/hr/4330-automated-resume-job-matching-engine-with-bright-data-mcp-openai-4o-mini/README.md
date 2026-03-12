# 👥 Automated resume job matching engine with Bright Data MCP & OpenAI 4o mini

> ⚡ **2,969 views** · 👥 [HR & Recruitment](../)

## Description

![Automated Resume Job Matching Engine.png](fileId:1368)

### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for
The Automated Resume Job Matching Engine is an intelligent workflow designed for career platforms, HR tech startups, recruiting firms, and AI developers who want to streamline job-resume matching using real-time data from LinkedIn and job boards.

This workflow is tailored for:

- **HR Tech Founders** - Building next-gen recruiting products

- **Recruiters & Talent Sourcers** - Seeking automated candidate-job fit evaluation

- **Job Boards & Portals** - Enriching user experience with AI-driven job recommendations

- **Career Coaches & Resume Writers** - Offering personalized job fit analysis

- **AI Developers** - Automating large-scale matching tasks using LinkedIn and job data

### What problem is this workflow solving?
Manually matching a resume to job description is time-consuming, biased, and inefficient. Additionally, accessing live job postings and candidate profiles requires overcoming web scraping limitations.

This workflow solves:

- Automated LinkedIn profile and job post data extraction using Bright Data MCP infrastructure

- Semantic matching between job requirements and candidate resume using OpenAI 4o mini

- Pagination handling for high-volume job data

- End-to-end automation from scraping to delivery via webhook and persisting the job matched response to disk

### What this workflow does

**Bright Data MCP for Job Data Extraction**
- Uses Bright Data MCP Clients to extract multiple job listings (supports pagination)

- Pulls job data from LinkedIn with the pre-defined filtering criteria's

**OpenAI 4o mini LLM Matching Engine**
- Extracts paginated job data from the Bright Data MCP extracted info via the MCP scrape_as_html tool.

- Extracts textual job description information via the scraped job information by leveraging the Bright Data MCP scrape_as_html tool.

- AI Job Matching node handles the job description and the candidate resume compare to generate match scores with insights

**Data Delivery**
- Sends final match report to a Webhook Notification endpoint

- Persistence of AI matched job response to disk 

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
![MCPClientAccount.png](fileId:1367)
Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;.
7. Update the Set input fields for candidate resume, keywords and other filtering criteria's.
8. Update the Webhook HTTP Request node with the Webhook endpoint of your choice.
9. Update the file name and path to persist on disk.

### How to customize this workflow to your needs

**Target Different Job Boards**

- Set input fields with the sites like Indeed, ZipRecruiter, or Monster

**Customize Matching Criteria**
- Adjust the prompt inside the AI Job Match node

- Include scoring metrics like skills match %, experience relevance, or cultural fit

**Automate Scheduling**
- Use a Cron Node to periodically check for new jobs matching a profile

- Set triggers based on webhook or input form submissions

**Output Customization**
- Add Markdown/PDF formatting for report summaries

- Extend with Google Sheets export for internal analytics

**Enhance Data Security**
- Mask personal info before sending to external endpoints

## 🔗 Nodes Used

Function, HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
