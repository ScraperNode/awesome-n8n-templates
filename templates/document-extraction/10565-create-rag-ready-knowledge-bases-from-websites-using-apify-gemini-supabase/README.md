# 🔬 Create RAG-ready knowledge bases from websites using Apify, Gemini & Supabase

> ⚡ **368 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Convert any website into a searchable vector database for AI chatbots. Submit a URL, choose scraping scope, and this workflow handles everything: scraping, cleaning, chunking, embedding, and storing in Supabase.

   ## What it does
  - Scrapes websites using Apify (3 modes: full site unlimited, full site limited, single URL)
  - Cleans content (removes navigation, footer, ads, cookie banners, etc)
  - Chunks text (800 chars, markdown-aware)
  - Generates embeddings (Google Gemini, 768 dimensions)
  - Stores in Supabase vector database

  ## Requirements
  - Apify account + API token
  - Supabase database with pgvector extension
  - Google Gemini API key

  ## Setup
  1. Create Supabase `documents` table with embedding column (vector 768). *[Run this SQL query](https://docs.langchain.com/oss/javascript/integrations/vectorstores/supabase) in your Supabase project to enable the vector store setup* 
  2. Add your Apify API token to all three "Run Apify Scraper" nodes
  3. Add Supabase and Gemini credentials
  4. Test with small site (5-10 pages) or single page/URL first

  ## Next steps
  Connect your vector store to an AI chatbot for RAG-powered Q&A, or build semantic search features into your apps.

  **Tip:** Start with page limits to test content quality before full-site scraping. Review chunks in Supabase and adjust Apify filters if needed for better vector embeddings.

---


## Sample Outputs

**Apify actor "runs" in Apify Dashboard from this workflow**
![](https://i.postimg.cc/NMBqXSWs/Screenshot-2025-11-06-190813.png)


**Supabase `docuemnts` table with scraped website content ingested in chunks with vector embeddings**
![](https://i.postimg.cc/W4m0x8MG/Screenshot-2025-11-06-154326.png)

## 🔗 Nodes Used

HTTP Request, Recursive Character Text Splitter, n8n Form Trigger, Supabase Vector Store, Default Data Loader, Embeddings Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
