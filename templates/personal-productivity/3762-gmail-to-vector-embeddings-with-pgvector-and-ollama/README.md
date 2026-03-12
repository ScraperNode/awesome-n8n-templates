# ⚡ Gmail to vector embeddings with PGVector and Ollama

> ⚡ **3,445 views** · ⚡ [Personal Productivity](../)

## Description

Gmail to Vector Embeddings with PGVector and Ollama

# Who is this for?

**Everyone!** Did you dream of asking an AI "*what hotel did I stay in for holidays last summer?*" or "*what were my marks last semester like?*".

Dream no more, as [vector similarity searches](https://www.pinecone.io/learn/vector-embeddings/) and **this workflow** are the foundations to make it possible (as long as the information appears in your e-mails 😅).

## 100% local

This workflow is designed to use locally-hosted open source. **Ollama** as LLM provider, `nomic-embed-text` as the embeddings model, and **pgvector** as the vector database engine, on top of **Postgres**.

## But.. how?!

Firstly, specify the date you created your Gmail account on, then manually run the workflow in order to bulk read all your e-mail in monthly batches. Your database is now populated!

Now it's the task for other workflows to query the vector database.

**Activate the workflow** so that new e-mail is continuously added by the `Gmail Trigger` upon receiving it.

### Structured AND Vectorized

This workflow stores your e-mail activity in two ways:
- In a structured table
- In a vector embeddings table

And the information in both of them can be correlated by Gmail's messages `id`, which is stored in the vectors table as metadata property `emails_metadata.id`.

That way consumers can benefit from both worlds! ✨ Vector similarity searches enable semantic searches, while structured queries can retrieve more factual data like the message `id`, its *date* or who it came *from*.

### Other useful templates

My template [Chat with Your Email History using Telegram, Mistral and Pgvector for RAG](https://n8n.io/workflows/3763-chat-with-your-email-history-using-telegram-mistral-and-pgvector-for-rag/) is a ready-made solution to consume this workflow.

You may also pair this workflow with my other template to [Email Assistant: Convert Natural Language to SQL Queries with Phi4-mini and PostgreSQL](https://n8n.io/workflows/3761-email-assistant-convert-natural-language-to-sql-queries-with-phi4-mini-and-postgresql/) and you'll enable RAG workflows that use both structured and vectorized databases.

## Customizations

I suppose the e-mail provider could be changed, but then you'd have to identify an alternative `id` field. `Message-ID` would be a more standard option.

There are a few opinionated choices as to what metadata to store, but those shouldn't need adjustments.

## 🔗 Nodes Used

Postgres, Gmail, Gmail Trigger, Recursive Character Text Splitter, Default Data Loader, Embeddings Ollama

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
