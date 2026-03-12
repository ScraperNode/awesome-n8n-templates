# 📖 Turn websites into RAG chatbot knowledge bases with Apify, OpenAI and Pinecone

> ⚡ **78 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## This n8n template transforms any website into a fully functional RAG-ready chatbot knowledge base. It crawls sites using the AI Training Data Scraper community node, chunks content intelligently, generates embeddings, and stores everything in Pinecone for semantic search-powered conversations. Perfect for turning documentation, blogs, or marketing sites into instant AI chat assistants.

**Use cases**
- Convert documentation sites into intelligent support chatbots
- Build product knowledge bases from marketing websites
- Create internal search tools from company intranets
- Power customer support agents with scraped competitor analysis
- Generate training data for fine-tuning company-specific AI models

**Good to know**
This workflow connects to external services requiring API credentials. Works on n8n Cloud and self-hosted instances. Initial setup takes 10 minutes including community node installation.

### Requirements
- n8n Cloud or self-hosted instance
- Community Node
- Apify API key
- OpenAI API key 
- Pinecone account & index 

### Customising this workflow
- Replace Pinecone with Qdrant, Weaviate, or pgvector for self-hosted vector storage
- Swap OpenAI embeddings with Ollama or Hugging Face for zero-cost processing
- Add content filtering by language, code presence, or section type
- Extend with conversation memory using Redis or Postgres
- Build a frontend dashboard for managing multiple website indexes
- Add multi-site RAG (query across multiple domains simultaneously)

## 🔗 Nodes Used

Pinecone Vector Store, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
