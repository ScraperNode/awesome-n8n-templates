# 📊 Ai-powered multi-stage web search and research suite

> ⚡ **783 views** · 📊 [Market Research & Insights](../)

## Description

# **Description**:
The closest definition to this workflow is a cheaper Modular Version of Perplexity online API empowered by LLM models that outperform the Perplexity Lama Model. 
This flow provides a seamless way to conduct detailed web searches, extract data, and generate insightful reports based on real-time information. It provides a webhook-based flow that gets any search question and reports back the results via a multi-level web search analysis and domain-specific emulation of an agent to deliver an unbiased expert report. This Flow is Ideal for market research, competitive analysis, or any scenario where actionable, structured insights are needed.

A more complete, step-by-step guide is provided within the workflow, ensuring you have all the details to set up and customize each component. This tool is designed to function similarly to Perplexity by performing semantic search, reranking, and follow-up queries. However, it offers a unique advantage—complete customization at every stage. Modify any part of the process, from query refinement to data extraction, allowing you to tailor the workflow to your specific needs.

## **Key Features**:
- **AI-Powered Query Generation and Expert Emulation**: Uses Google Gemini to transform user queries into expert-level searches, providing accurate and context-aware results.
- **Dual-Stage Semantic Search with Intelligent Reranking**: Performs an initial search, reranks results, and refines the query based on findings to conduct a second, more targeted search.
- **Top-Result Data Extraction**: Extracts content from the top three results of each search, capturing relevant insights from six total sources.
- **Customizable API Options**: Pre-configured with free APIs (Google Gemini, DuckDuckGo, and Article Extraction APIs) but easily adaptable to other APIs if preferred.
- **Automated, Insightful Reporting**: Synthesizes data into a cohesive report, providing expert-level insights tailored to the user’s query.

# **Instructions for API Setup**:
This workflow is designed to work with free-tier APIs, offering a cost-effective way to retrieve high-quality data. Here’s how to set up each API, with detailed instructions included in the workflow:

1. **Google Gemini API (for Query Generation and Analysis)**:
   - Visit [Google AI Studio](https://aistudio.google.com/app/welcome) and log in.
   - Create a free API key under "Get API Key" → "Create API Key in New Project."
   The free tier includes up to 15 requests per minute, 1 million tokens per minute, and up to 1,500 requests per day.

2. **Brave Search API (for Web Search)**:
To attain the free web search API tier from Brave, follow these steps:
- Visit api.search.brave.com
- Create an account
- Subscribe to the free plan (no charge)
- Navigate to the API Keys section
- Generate an API key. For the subscription type, choose "Free".

3. **Article Extraction API (for Content Extraction)**:
   - Register on [RapidAPI.com](https://rapidapi.com/) and subscribe to the [Article Extraction API](https://rapidapi.com/pwshub-pwshub-default/api/article-extractor2/playground/apiendpoint_6710e06d-d607-486f-b514-0812c7935cbc).
   - The free plan allows up to 300 extractions per month. Enter your API key in each of the 6 extraction nodes for content retrieval.
   - **Alternative**: In the workflow, we have provided the full instructions on how to replace the current flow with alternative API Keys and provided suggestions such as [Scraper Tech API](https://rapidapi.com/alexanderxbx/api/scraper-tech/playground/apiendpoint_599d266e-c763-4bc5-819b-3841cf2af4b0).

*Additional Tip*: To use other APIs, you can generate a cURL request in RapidAPI’s playground, and then paste it into the HTTP Request node in n8n. This approach streamlines integration by automatically filling in headers and request details.

### **Why Choose This Workflow?**
The *Intelligent Online Web Researcher* offers an all-in-one solution for complex, customizable online research. Unlike other tools that provide automated semantic search, this workflow is fully modifiable, allowing you to tailor each step, from the initial query and reranking to data extraction and reporting. With built-in instructions and a structure that’s easy to adapt, it’s ideal for commercial applications that require real-time, high-quality insights.


**Tags**:
Online Research, Web Search, Market Analysis, Web Search Automation, Data Extraction, Semantic Search, API Integration, Competitive Intelligence, Business Intelligence, Real-Time Reporting, Web Scrape, Data Crawler, Perplexity

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Auto-fixing Output Parser, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
