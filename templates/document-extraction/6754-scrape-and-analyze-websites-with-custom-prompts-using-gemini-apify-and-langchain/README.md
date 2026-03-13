# 🔬 Scrape and analyze websites with custom prompts using Gemini, Apify, and LangChain

> ⚡ **2,286 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

# 🔍 AI-Powered Website Prompt Executor (Apify + OpenRouter)

This workflow combines the power of [Apify](https://apify.com) and [OpenRouter](https://openrouter.ai) to **scrape website content** and **execute any custom prompt** using AI. You define what you want — whether it’s extracting contact details, summarizing content, collecting job offers, or anything else — and the system intelligently processes the site to give you results.

## 🚀 Overview

This workflow allows you to:
1. Input a URL and define a prompt.
2. Scrape the specified number of pages from the website.
3. Process each page’s metadata and Markdown content.
4. Use AI to interpret and respond to the prompt on each page.
5. Aggregate and return structured output.

## 🧠 How It Works

### Input Example

```json
{
  "enqueue": true,
  "maxPages": 5,
  "url": "https://apify.com",
  "method": "GET",
  "prompt": "collect all contact informations available on this website"
}
````

### Workflow Steps

| Step | Action                                                                                                                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | Triggered by another workflow with JSON input.                                                                                                                                 |
| 2    | Calls the Apify actor [`firescraper-ai-website-content-markdown-scraper`](https://apify.com/mohamedgb00714/firescraper-ai-website-content-markdown-scraper) to scrape content. |
| 3    | Loops through the scraped pages.                                                                                                                                               |
| 4    | AI analyzes each page based on the input prompt.                                                                                                                               |
| 5    | Aggregates AI outputs across all pages.                                                                                                                                        |
| 6    | Final AI processing step to return a clean structured result.                                                                                                                  |

---

## 🛠 Technologies Used

* **Apify** – Scrapes structured content and Markdown from websites.
* **OpenRouter** – Provides access to advanced AI models like Gemini.
* **LangChain** – Handles AI agent orchestration and prompt interpretation.

---

## 🔧 Customization

Customize the workflow via the following input fields:

* `url`: Starting point for scraping
* `maxPages`: Limit the number of pages to crawl
* `prompt`: Define any instruction (e.g., “summarize this website,” “extract product data,” “list all emails,” etc.)

This allows dynamic, flexible use across various use cases.

---

## 📦 Output

The workflow returns a JSON result that includes:

* Processed prompt responses from each page
* Aggregated AI insights
* Structured and machine-readable format

---

## 🧪 Example Use Cases

* 🔍 Extracting contact information from websites
* 📄 Summarizing articles or company profiles
* 🛍️ Collecting product information
* 📋 Extracting job listings or news
* 📬 Generating outreach lists from public data
* 🤖 **Used as a tool within other AI agents for real-time web analysis**
* 🧩 **Integrated as an external tool in MCP (Multi-Component Prompt) servers to enhance AI capabilities**

---

## 🔐 API Credentials Required

You will need:

* **Apify API token** – For running the scraper actor
* **OpenRouter API key** – For AI-powered prompt processing

Set these credentials in your environment or n8n credential manager before running.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
