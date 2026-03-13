# 🎬 Generate SEO-optimized blog content with Gemini, Scrapeless and Pinecone RAG

> ⚡ **1,511 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works

This advanced automation builds a **fully autonomous SEO blog writer** using **n8n**, **Scrapeless**, **LLMs**, and **Pinecone vector database**. It’s powered by a Retrieval-Augmented Generation (RAG) system that collects high-performing blog content, stores it in a vector store, and then generates new blog posts based on that knowledge—endlessly.

## Part 1: Build a Knowledge Base from Popular Blogs

- **Scrape existing articles** from a well-established writer (in this case, Mark Manson) using the Scrapeless node.
- **Extract content from blog pages** and store it in **Pinecone**, a powerful vector database that supports similarity search.
- **Use Gemini Embedding 001** or any other supported embedding model to encode blog content into vectors.
- **Result**: You’ll have a searchable vector store of expert-level content, ready to be used for content generation and intelligent search.

## Part 2: SERP Analysis & AI Blog Generation

- Use **Scrapeless' SERP node** to fetch search results based on your keyword and search intent.
- Send the results to an **LLM** (like Gemini, OpenRouter, or OpenAI) to generate a **keyword analysis report** in Markdown → then converted to HTML.
- Extract **long-tail keywords**, **search intent insights**, and **content angles** from this report.
- Feed everything into another LLM with access to your **Pinecone-stored knowledge base**, and generate a **fully SEO-optimized blog post**.


## Set up steps

### Prerequisites
- [**Scrapeless API key**](https://scrapeless.com/?utm_source=n8n&utm_campaign=ai-powered-blog-writer)

![image.png](fileId:1757)
- [Pinecone account and index setup](https://www.pinecone.io/)
- An embedding model (Gemini, OpenAI, etc.)
- n8n instance with **Community Node: `n8n-nodes-scrapeless`** installed

### Credential Configuration
- Add your Scrapeless and Pinecone credentials in n8n under the "Credentials" tab
- Choose embedding dimensions according to the model you use (e.g., 768 for Gemini Embedding 001)


## Key Highlights

- **Clones a real content creator**: Replicates knowledge and writing style from top-performing blog authors.
- **Auto-scrapes hundreds of blog posts** without being blocked.
- **Stores expert content** in a vector DB to build a reusable knowledge base.
- **Performs real-time SERP analysis** using Scrapeless to fetch and analyze search data.
- **Generates SEO blog drafts** using RAG with detailed keyword intelligence.
- **Output includes**: blog title, HTML summary report, long-tail keywords, and AI-written article body.


## RAG + SEO: The Future of Content Creation

This template combines:
- **AI reasoning** from large language models
- **Reliable data scraping** from Scrapeless
- **Scalable storage** via Pinecone vector DB
- **Flexible orchestration** using n8n nodes

This is **not just an automation**—it’s a **full-stack SEO content machine** that enables you to:
- Build a domain-specific knowledge base
- Run intelligent keyword research
- Generate traffic-ready content on autopilot


## 💡 Use Cases

- SaaS content teams cloning competitor success
- Affiliate marketers scaling high-traffic blog production
- Agencies offering automated SEO content services
- AI researchers building personal knowledge bots
- Writers automating first-draft generation with real-world tone

## 🔗 Nodes Used

Markdown, AI Agent, Basic LLM Chain, Simple Memory, Recursive Character Text Splitter, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
