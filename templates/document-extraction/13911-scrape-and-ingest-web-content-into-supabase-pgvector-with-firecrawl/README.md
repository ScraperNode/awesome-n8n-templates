# 🔬 Scrape and ingest web content into Supabase pgvector with Firecrawl

> ⚡ **962 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**What this does**

Receives a URL via webhook, uses Firecrawl to scrape the page into clean markdown, and stores it as vector embeddings in Supabase pgvector. A visual, self-hosted ingestion pipeline for RAG knowledge bases. Adding a new source is as simple as sending a URL.

The second part of the workflow exposes a chat interface where an AI Agent queries the stored knowledge base to answer questions, with Cohere reranking for better retrieval quality.

**How it works**

Part 1: Ingestion Pipeline

1. Webhook receives a POST request with a `url` field
2. Verify URL validates and normalizes the domain
3. Supabase checks if the URL was already ingested (deduplication)
4. If the URL already exists, ingestion is skipped; otherwise it continues
5. Firecrawl fetches the page and converts it to clean markdown
6. OpenAI generates vector embeddings from the scraped content
7. Default Data Loader attaches the source URL as metadata
8. Supabase Vector Store inserts the content and embeddings into pgvector
9. Respond to Webhook confirms how many items were added

Part 2: RAG Chat Agent

1. Chat trigger receives a user question
2. AI Agent (OpenRouter) queries the Supabase vector store filtered by URL
3. Cohere Reranker improves retrieval quality before the agent responds
4. Agent answers based solely on the ingested knowledge base

**Requirements**

- Firecrawl API key
- OpenAI API key (for embeddings)
- OpenRouter API key (for the chat agent)
- Cohere API key (for reranking)
- Supabase project with pgvector enabled

**Setup**

1. Create a Supabase project and run the following SQL in the SQL editor:

```sql
-- Enable the pgvector extension
create extension vector
with
  schema extensions;

-- Create a table to store documents
create table documents (
  id bigserial primary key,
  content text,
  metadata jsonb,
  embedding extensions.vector(1536)
);

-- Create a function to search for documents
create function match_documents (
  query_embedding extensions.vector(1536),
  match_count int default null,
  filter jsonb default '{}'
) returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
#variable_conflict use_column
begin
  return query
  select
    id,
    content,
    metadata,
    1 - (documents.embedding &lt;=&gt; query_embedding) as similarity
  from documents
  where metadata @&gt; filter
  order by documents.embedding &lt;=&gt; query_embedding
  limit match_count;
end;
$$;
```

2. Add your Firecrawl API key as a credential in n8n
3. Add your OpenAI API key as a credential (for embeddings)
4. Add your OpenRouter API key as a credential (for the chat agent)
5. Add your Cohere API key as a credential (for reranking)
6. Activate the workflow

**How to use**

Send a POST request to the webhook URL:

```bash
curl -X POST https://your-n8n-instance/webhook/your-id \
  -H "Content-Type: application/json" \
  -d '{"url": "https://firecrawl.dev/docs"}'
```

Then open the chat interface in n8n to ask questions about the ingested content.

## 🔗 Nodes Used

Webhook, Supabase, AI Agent, Embeddings OpenAI, Simple Memory, Supabase Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
