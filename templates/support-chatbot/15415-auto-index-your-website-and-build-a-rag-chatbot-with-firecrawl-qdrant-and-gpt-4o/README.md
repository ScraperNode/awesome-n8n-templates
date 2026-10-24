# 💬 Auto-index your website and build a RAG chatbot with Firecrawl, Qdrant, and GPT-4o-mini

> ⚡ **170 views** · 💬 [Support Chatbots](../)

## Description

Build a fully functional AI chatbot for any website using Retrieval-Augmented 
Generation (RAG). This workflow automatically crawls and indexes your entire 
site into a Qdrant vector database, then powers a conversational chatbot that 
searches your content to answer user questions — and escalates unresolved issues 
to your support team via Gmail.

## How it works

**Indexing Pipeline**
- A Code node defines which root domains to crawl
- Firecrawl maps every link across those domains before scraping begins, giving 
  you full visibility of what will be indexed without wasting credits
- Duplicate URLs are removed across all domains before any scraping starts
- Each unique page is scraped individually and returned as clean markdown
- Content is chunked into overlapping segments using a Recursive Character Text 
  Splitter (1000 characters, 200 overlap) to preserve context at chunk boundaries
- Mistral's codestral-embed-2505 model converts each chunk into a vector embedding
- All embeddings are stored in Qdrant Cloud in batches of 100
- A Wait node paces the loop to avoid hitting API rate limits on large sites

**AI Chatbot**
- A public Chat Trigger receives messages and generates an embeddable URL for 
  your website
- GPT-4o-mini processes each message with a 10-message memory window for 
  natural conversation
- The AI Agent searches the Qdrant vector store only when a question requires 
  it, retrieving the top 3 most relevant chunks per query
- When it cannot resolve an issue, it collects the user's email, writes a 
  summary, confirms with the user, then sends it via Gmail

## How to use

1. Add all required credentials in n8n Settings &gt; Credentials
2. Create a Qdrant Cloud collection (1536 dimensions, Cosine distance)
3. Update the collection name in both Qdrant Vector Store nodes
4. Open the "set urls to scrape" Code node and replace the placeholder URLs 
   with your own site's root domains
5. Update the Gmail tool with your support inbox address
6. Run the indexing pipeline manually using the Run Indexing trigger
7. Once indexing is complete, activate the workflow and test via Open Chat
8. Embed the chat trigger URL on your website

## Requirements

- **Firecrawl** — for site mapping and scraping (firecrawl.dev)
- **Mistral Cloud** — for embeddings in both indexing and retrieval (console.mistral.ai)
- **Qdrant Cloud** — for vector storage and semantic search (cloud.qdrant.io)
- **OpenAI** — for the GPT-4o-mini chat model (platform.openai.com)
- **Gmail OAuth2** — for support email escalation

## Customising this workflow

- Swap GPT-4o-mini for any chat model supported by n8n's LangChain nodes 
  including Gemini, Claude, or Mistral
- Change the embedding model — if you do, delete and recreate the Qdrant 
  collection with the correct dimensions and re-run indexing
- Add more URLs to the Code node array to index additional domains
- Adjust chunk size in the Text Splitter for denser or shorter content
- Increase the retrieval limit from 3 if answers feel incomplete
- Replace Gmail with Slack, Zendesk, or any other escalation tool
- Update the AI Agent system prompt to match your own website and brand voice

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Recursive Character Text Splitter, Default Data Loader, Embeddings Mistral Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
