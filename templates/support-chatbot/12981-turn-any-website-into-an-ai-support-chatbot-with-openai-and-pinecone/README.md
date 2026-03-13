# 💬 Turn any website into an AI support chatbot with OpenAI and Pinecone

> ⚡ **209 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Complete AI support system using website data (RAG pipeline)

This template provides a full end-to-end Retrieval-Augmented Generation (RAG) system using n8n. It includes two connected workflows:

1. A data ingestion pipeline that crawls a website and stores its content in a vector database.
2. A customer support chatbot that retrieves this knowledge and answers user queries in real time.

Together, these workflows allow you to turn any public website into an intelligent AI-powered support assistant grounded in real business data.

---

## Use cases

- AI customer support chatbot for your website  
- Internal company knowledge assistant  
- Product FAQ automation  
- Helpdesk or IT support bot  
- AI receptionist for services  
- Semantic search over company content  

---

## How it works

### Ingestion workflow
1. Discover all URLs from a website sitemap.
2. Filter and normalize the URLs.
3. Fetch each page and extract readable text.
4. Clean HTML into plain text.
5. Split text into overlapping chunks.
6. Generate embeddings using OpenAI.
7. Store vectors in Pinecone with metadata.

### Chatbot workflow
1. A user sends a message via chat webhook.
2. The agent queries Pinecone for relevant knowledge.
3. Retrieved content is passed to OpenAI.
4. OpenAI generates a grounded response.
5. Short-term memory maintains conversation context.

---

## How to use

### Step 1 – Run ingestion
1. Set your target website URL.
2. Add Firecrawl, OpenAI, and Pinecone credentials.
3. Create a Pinecone index.
4. Execute the ingestion workflow.
5. Wait until all pages are indexed.

### Step 2 – Run chatbot
1. Deploy the chatbot workflow.
2. Set the same Pinecone index and namespace.
3. Copy the chat webhook URL.
4. Connect it to a website, chat widget, or WhatsApp bot.
5. Start chatting with your AI assistant.

---

## Requirements

- Firecrawl account  
- OpenAI API key  
- Pinecone account and index  
- Public website to crawl  
- Optional: frontend chat interface  

---

## Good to know

- The chatbot never answers from memory for business data.
- All company knowledge comes from Pinecone.
- If Pinecone returns nothing, the bot fails safely.
- HTML cleaning is basic and can be replaced with:
  - Mozilla Readability  
  - Jina Reader  
  - Unstructured  
- Chunk size and overlap affect retrieval quality.
- Pinecone can be replaced with:
  - Qdrant  
  - Weaviate  
  - Supabase Vector  
  - Chroma  

---

## Customising this workflow

You can extend this system by:
- Adding PDF or document loaders
- Scheduling ingestion daily or weekly
- Connecting CRM or ticketing systems
- Adding appointment booking tools
- Switching to local or open-source models
- Adding multilingual support
- Storing raw content in a database
- Adding feedback or logging

---

## What this n8n template demonstrates

- Real-world RAG architecture  
- Web crawling pipelines  
- Text chunking strategies  
- Vector database integration  
- AI agent orchestration  
- Memory-controlled conversations  
- Production-grade AI support systems  
- End-to-end AI infrastructure with n8n  

---

## Architecture overview

This template follows a modern AI system design:

Website → Ingestion → Embeddings → Pinecone → Retrieval → OpenAI → User

It separates:
- Data preparation (offline)
- Knowledge storage
- Runtime inference

This makes the system scalable, maintainable, and safe for production use.

---

## Need a custom setup?

If you want a similar AI system built for your business (custom data sources, CRM integration, WhatsApp bots, booking systems, dashboards, or private deployments), feel free to reach out at dinakars2003@gmail.com.

I help companies design and deploy production-ready AI workflows.

## 🔗 Nodes Used

HTTP Request, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
