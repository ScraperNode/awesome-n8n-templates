# 💬 Answer masked customer support tickets with Claude and Google Gemini RAG

> ⚡ **2 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives support inquiries via webhook, masks personal data, searches similar past Q&A in an in-memory vector store using Google Gemini embeddings, and uses Anthropic Claude to draft safe auto-replies when confidence is high while logging and learning from staff answers in an n8n Data Table.

## How it works
1. Receives a new customer inquiry via a header-authenticated webhook and normalizes and masks common PII patterns in the message.
2. Generates an embedding with Google Gemini and searches an in-memory vector store for the most similar previously learned Q&A.
3. Applies a similarity threshold to decide whether there are adequate reference answers to attempt an auto-reply.
4. If there is a match, asks Anthropic Claude to draft a reply using only the retrieved reference Q&A and blocks the auto-reply if Claude indicates it cannot answer or the output is unsafe.
5. Logs auto-answered cases (including the masked question, match score, and generated reply) to an n8n Data Table and returns the reply payload to the webhook caller.
6. If no safe auto-reply is possible, logs the case as pending in the Data Table and returns a “waiting for staff” response.
7. Receives a staff answer via a second header-authenticated webhook, masks it with regex and an Anthropic Claude masking pass, and only then adds the masked Q&A to the vector store and updates the case as learned (or marks it as not learned for review).
8. Receives a rebuild request via a third header-authenticated webhook, loads all learned rows from the Data Table, and repopulates the in-memory vector store.

## Setup
1. Create an n8n Data Table named `cs_rag_cases` with the required columns and select it in every Data Table node that reads or writes cases.
2. Add credentials for Anthropic (Claude), Google Gemini (PaLM) API for embeddings, and Header Auth for all three webhooks (for example using an `X-API-Key` header).
3. Copy the three webhook URLs after activation and configure your inquiry source and staff tooling to POST to `/webhook/cs-rag-inquiry`, `/webhook/cs-rag-answer`, and `/webhook/cs-rag-reindex` with the expected JSON bodies.
4. Set the Data Table resource IDs in the Data Table nodes and tune the similarity `THRESHOLD` value in the similarity-check step based on your data and acceptable risk.
5. Populate the knowledge base by submitting a few inquiries and sending staff answers with `learn` enabled, then trigger reindexing after restarts to restore the in-memory vector store.

## Requirements
- An Anthropic API key (used by the two Claude nodes)
- A Google AI Studio (Gemini) API key for embeddings. Check Google's current limits and pricing
- A Header Auth credential for the three webhooks (for example header name X-API-Key)
- An n8n Data Table named cs_rag_cases with the columns listed in the sticky note

## Customization
- Replace the webhooks with your real entry point (Gmail trigger, a form, LINE) and connect the sending of replies and a notification for cases waiting for staff
- Tune THRESHOLD in the Check similarity node with your own data; scores depend on the embedding model
- For production, replace the in-memory vector store with Qdrant, Pinecone, Supabase or similar (three nodes)
- Add masking patterns for data that is not covered (the template covers emails, phone numbers, cards, postal codes and order or account IDs)

## Additional info
Masking is best-effort. The final check looks for patterns only, so it cannot tell whether the AI missed a name. Test with your own data before using real customer data, and decide how long raw questions and answers are kept.

In my small tests (a handful of English and Japanese questions) unrelated questions scored about 0.56 to 0.67 and related ones 0.84 to 0.96 with the Gemini embedding model. These numbers depend on the model and your data, so tune the threshold yourself. The in-memory vector store is lost when n8n restarts; the rebuild webhook restores it from the Data Table.

More write-ups of customer-support automations with n8n and Claude, and the problems found while testing them (in Japanese): https://outsidernotes.com/?utm_source=n8n&utm_medium=template&utm_content=support-rag

## 🔗 Nodes Used

Webhook, Simple Vector Store, Default Data Loader, Embeddings Google Gemini, Anthropic, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
