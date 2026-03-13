# 📊 Intelligent web query and semantic re-ranking flow using Brave and Google Gemini

> ⚡ **5,257 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Workflow Description**


This workflow is a powerful, fully automated **web query and semantic reranking system** that allows users to perform precise, detailed searches, intelligently rank search results and provide high-quality, structured output. Built with **AI-powered components**, the workflow leverages **semantic query generation, result re-ranking, and real-time reporting** to deliver actionable insights.

It is particularly well-suited for **real-time data retrieval**, **market research**, and any domain requiring automated yet customizable search result processing.

---

### **How It Works**

1. **Webhook Integration for Input**:  
   - The workflow begins with a **Webhook Node** that captures the user's search query as input, enabling seamless integration with other systems.  

2. **Step 1: Semantic Query Generation** (Powered by "Semantic Search - Query Maker"):  
   - Using AI (Google Gemini), the initial query is refined and transformed into a **context-aware, expert-level search query**.  
   - The process ensures that the search engine retrieves the most relevant and precise results.

3. **Step 2: Web Search Execution**:  
   - A free Brave Search API processes the refined query to fetch search results, ensuring speed and cost efficiency.

4. **Step 3: Semantic Re-Ranking of Results** (Powered by "Semantic Search - Result Re-Ranker"):  
   - The workflow reranks the search results based on relevance to the original question, prioritizing the most relevant URLs dynamically.  
   - Results are passed through **AI-powered intelligent reranking** to ensure the final output reflects optimal relevance and quality.

5. **Step 4: Structured Output Generation**:  
   - Results are converted into a well-structured, organized JSON format, ranking the **top 10 search results** with their titles, links, and descriptions.  
   - Missing ranks (if fewer than 10 results) are handled gracefully with placeholders, ensuring consistency.

6. **Step 5: Real-Time Reporting**:  
   - The reranked search results are sent back to the user or integrated system via the Webhook Node in a **JSON-formatted response**.  
   - Reports are highly structured and ready for downstream processing or consumption.

---

### **Key Features**

1. **AI-Powered Query Refinement**:  
   - Transforms basic queries into detailed, expert-level search terms for optimal results.

2. **Dual-Stage Semantic Search**:  
   - Combines **query generation** and **result reranking** for precise, high-relevance outputs.

3. **Top 10 Result Reranking**:  
   - Dynamically ranks and organizes the top 10 results based on semantic relevance to the query.

4. **Customizable Integration**:  
   - Fully modifiable for alternative APIs or integrations, such as other search engines or custom ranking logic.

5. **JSON-Formatted Structured Results**:  
   - Outputs reranked results in a standardized format, ideal for integration into systems requiring machine-readable data.

6. **Webhook-Based Flexibility**:  
   - Works seamlessly with Webhook inputs for easy deployment in diverse workflows.

7. **Cost-Effective API Usage**:  
   - Pre-integrated with the free Brave Search API, minimizing operational costs while delivering accurate search results.

---

### **Instructions for API Setup**

1. **Brave Search API**:  
   - Visit [api.search.brave.com](https://api.search.brave.com) to obtain a free-tier API key for web search.  
2. **AI Integration** (Google Gemini):  
   - Visit Google AI Studio and generate an API key for semantic query generation and reranking.  
3. **Webhook Configuration**:  
   - Set up the input Webhook to capture search queries and the output Webhook to deliver reranked results.

---

### **Why Choose This Workflow?**

- **Precision and Relevance**: Combines AI-based query generation with advanced reranking for accurate results.  
- **Fully Customizable**: Easily adapt the workflow to alternative APIs, search engines, or ranking logic.  
- **Real-Time Insights**: Provides structured, real-time output ready for immediate use.  
- **Scalable and Modular**: Ideal for businesses, researchers, and data analysts needing a robust, repeatable solution.

---

### **Tags**  
AI Workflow, Semantic Search, Query Refinement, Search Result Reranking, Real-Time Search, Web Search Automation, Google Search, Brave Search, News Search, API Integration, Market Research, Competitive Intelligence, Business Intelligence,Google Gemini, Anthropic Claude, OpenAI, GPT, LLM

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Anthropic Chat Model, OpenAI Chat Model, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
