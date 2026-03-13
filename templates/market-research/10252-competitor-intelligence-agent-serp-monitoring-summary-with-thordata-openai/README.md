# 📊 Competitor intelligence agent: SERP monitoring + summary with Thordata + OpenAI

> ⚡ **776 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Who this is for?

This workflow is designed for:

* **Marketing analysts**, **SEO specialists**, and **content strategists** who want automated intelligence on their online competitors.
* **Growth teams** that need quick insights from SERP (Search Engine Results Pages) without manual data scraping.
* **Agencies** managing multiple clients’ SEO presence and tracking competitive positioning in real-time.

### What problem is this workflow solving?

Manual competitor research is time-consuming, fragmented, and often lacks actionable insights.
This workflow automates the entire process by:

* Fetching SERP results from multiple search engines (Google, Bing, Yandex, DuckDuckGo) using Thordata’s Scraper API.
* Using **OpenAI GPT-4.1-mini** to analyze, summarize, and extract keyword opportunities, topic clusters, and competitor weaknesses.
* Producing structured, JSON-based insights ready for dashboards or reports.

Essentially, it transforms raw SERP data into strategic marketing intelligence — saving hours of research time.

### What this workflow does

Here’s a step-by-step overview of how the workflow operates:

#### Step 1: Manual Trigger

Initiates the process on demand when you click “Execute Workflow.”

#### Step 2: Set the Input Query

The “Set Input Fields” node defines your **search query**, such as:

&gt; “Top SEO strategies for e-commerce in 2025”

#### Step 3: Multi-Engine SERP Fetching

Four HTTP request tools send the query to **Thordata Scraper API** to retrieve results from:

* Google
* Bing
* Yandex
* DuckDuckGo

Each uses **Bearer Authentication** configured via “Thordata SERP Bearer Auth Account.”

#### Step 4: AI Agent Processing

The **LangChain AI Agent** orchestrates the data flow, combining inputs and preparing them for structured analysis.

#### Step 5: SEO Analysis

* The **SEO Analyst** node (powered by GPT-4.1-mini) parses SERP results into a structured schema, extracting:

  * Competitor domains
  * Page titles & content types
  * Ranking positions
  * Keyword overlaps
  * Traffic share estimations
  * Strengths and weaknesses

#### Step 6: Summarization

The **Summarize the content** node distills complex data into a concise executive summary using GPT-4.1-mini.

#### Step 7: Keyword & Topic Extraction

The **Keyword and Topic Analysis** node extracts:

* Primary and secondary keywords
* Topic clusters and content gaps
* SEO strength scores
* Competitor insights

#### Step 8: Output Formatting

The **Structured Output Parser** ensures results are clean, validated JSON objects for further integration (e.g., Google Sheets, Notion, or dashboards).


### 4. Setup

#### Prerequisites

* **n8n Cloud or Self-Hosted instance**
* **Thordata Scraper API Key** (for SERP data retrieval)
* **OpenAI API Key** (for GPT-based reasoning)

#### Setup Steps

1. **Add Credentials**

   * Go to *Credentials → Add New → HTTP Bearer Auth*
     → Paste your Thordata API token.
   * Add *OpenAI API Credentials* for the GPT model.

2. **Import the Workflow**

   * Copy the provided JSON or upload it into your n8n instance.

3. **Set Input**

   * In the “Set the Input Fields” node, replace the example query with your desired topic, e.g.:
     `“Google Search for Top SEO strategies for e-commerce in 2025”`

4. **Execute**

   * Click “Execute Workflow” to run the analysis.

### How to customize this workflow to your needs

#### Modify Search Query

Change the `search_query` variable in the **Set Node** to any target keyword or topic.

#### Change AI Model

In the **OpenAI Chat Model** nodes, you can switch from `gpt-4.1-mini` to another model for better quality or lower cost.

#### Extend Analysis

Edit the JSON schema in the “Information Extractor” nodes to include:

* Sentiment analysis of top pages
* SERP volatility metrics
* Content freshness indicators

#### Export Results

Connect the output to:

* **Google Sheets / Airtable** for analytics
* **Notion / Slack** for team reporting
* **Webhook / Database** for automated storage

### Summary

This workflow creates an AI-powered Competitor Intelligence System inside n8n by blending:

* Real-time SERP scraping (Thordata)
* Automated AI reasoning (OpenAI GPT-4.1-mini)
* Structured data extraction (LangChain Information Extractors)

## 🔗 Nodes Used

Google Sheets, AI Agent, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
