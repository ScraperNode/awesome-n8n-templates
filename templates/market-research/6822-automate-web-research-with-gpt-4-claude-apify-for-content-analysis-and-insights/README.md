# 📊 Automate web research with GPT-4, Claude & Apify for content analysis and insights

> ⚡ **1,622 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n template demonstrates how to automate comprehensive web research using multiple AI models to find, analyze, and extract insights from authoritative sources.

Use cases are many: Try automating competitive analysis research, finding latest regulatory guidance from official sources, gathering authoritative content for reports, or conducting market research on industry developments!

## Good to know

Each research query typically costs $0.08-$0.34 depending on the number of sources found and processed. The workflow includes smart filtering to minimize unnecessary API calls.

The workflow requires multiple AI services and may need additional setup time compared to simpler templates.

Qdrant storage is optional and can be removed without affecting performance.

## How it works

Your research question gets transformed into optimized Google search queries that target authoritative sources while filtering out low-quality sites.

Apify's RAG Web Browser scrapes the content and converts pages to clean markdown format.

Claude Sonnet 4 evaluates each article for relevance and quality before full processing.

Articles that pass the filter get analyzed in parallel - one pipeline creates focused summaries while another extracts specific claims and evidence.

GPT-4.1 Mini ranks all findings and presents the top 3 most valuable insights and summaries.

All processed content gets stored in your Qdrant vector database to prevent duplicate processing and enable future reference.

## How to use

The manual trigger node is used as an example but feel free to replace this with other triggers such as webhook, form submissions, or scheduled research.

You can modify the configuration variables in the Set Node to customize Qdrant URLs, collection names, and quality thresholds for your specific needs.

## Requirements

OpenAI API account for GPT-4.1 Mini (query optimization, summarization, ranking)
Anthropic API account for Claude Sonnet 4 (content filtering)
Apify account for web scraping capabilities
Qdrant vector database instance (local or cloud)
Ollama with nomic-embed-text model for embeddings

## Customizing this workflow

Web research automation can be adapted for many specialized use cases. Try focusing on specific domains like legal research (targeting .gov and .edu sites), medical research (PubMed and health authorities), or financial analysis (SEC filings and analyst reports).

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
