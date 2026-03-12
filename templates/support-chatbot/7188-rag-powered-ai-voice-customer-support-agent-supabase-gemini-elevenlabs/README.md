# 💬 RAG-powered AI voice customer support agent (Supabase + Gemini + ElevenLabs)

> ⚡ **362 views** · 💬 [Support Chatbots](../)

## Description

Execution video: [Youtube Link](https://youtu.be/GGvJBnIZQsY?si=y-SPWiy8EFo473_s)

I built an **AI voice-triggered RAG assistant** where ElevenLabs’ conversational model acts as the front end and n8n handles the brain....here’s the real breakdown of what’s happening in that workflow:

1. **Webhook** (`/inf`)

   * Gets hit by ElevenLabs once the user finishes talking.
   * Payload includes `user_question`.

2. **Embed User Message** (Together API - BAAI/bge-large-en-v1.5)

   * Turns the spoken question into a dense vector embedding.
   * This embedding is the query representation for semantic search.

3. **Search Embeddings** (Supabase RPC)

   * Calls `matchembeddings1` to find the top 5 most relevant context chunks from your stored knowledge base.

4. **Aggregate**

   * Merges all retrieved `chunk` values into one block of text so the LLM gets full context at once.

5. **Basic LLM Chain** (LangChain node)

   * Prompt forces the model to only answer from the retrieved context and to sound human-like without saying “based on the context”....
   * Uses **Google Vertex Gemini 2.5 Flash** as the actual model.

6. **Respond to Webhook**

   * Sends the generated answer back instantly to the webhook call, so ElevenLabs can speak it back.

You essentially have:
**Voice → Text → Embedding → Vector Search → Context Injection → LLM → Response → Voice**

## 🔗 Nodes Used

HTTP Request, Webhook, Google Docs, Supabase, Basic LLM Chain, Google Vertex Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
