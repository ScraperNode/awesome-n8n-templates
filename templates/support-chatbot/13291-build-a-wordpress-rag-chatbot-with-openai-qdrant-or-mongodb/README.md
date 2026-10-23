# 💬 Build a WordPress RAG chatbot with OpenAI, Qdrant or MongoDB

> ⚡ **129 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Build a WordPress chatbot that answers questions from your site content using Retrieval-Augmented Generation. n8n handles indexing and chat orchestration, while Qdrant or MongoDB Atlas provides vector search and OpenAI generates context-grounded responses.

## How it works
1. Content indexing — WordPress content is retrieved, cleaned, chunked, embedded, and stored in the selected vector database.
2. Intent routing — Incoming questions are classified so conversational requests, content searches, and optional profile/skills queries can follow different paths.
3. Semantic retrieval — Relevant chunks are retrieved by meaning rather than exact keyword matching.
4. Reranking — Cohere can rerank retrieved documents before response generation to improve relevance.
5. Response generation — OpenAI generates an answer using the retrieved context and configured assistant behavior.
6. WordPress delivery — The supplied WordPress integration exposes the chatbot through a responsive frontend and shortcode.
7. Security and logging — The architecture includes webhook authentication, input handling, server-side secrets, and privacy-oriented logging controls.

## Setup
1. Purchase the complete package — Obtain the workflows, WordPress plugin, test frontend, supporting scripts, and complete documentation.
2. Choose a vector backend — Configure either the Qdrant path or the MongoDB Atlas path according to the included deployment guide.
3. Configure AI credentials — Connect OpenAI and any optional reranking services used by your selected setup.
4. Import and configure workflows — Configure the indexing workflow first, then the real-time chatbot workflow and their required credentials.
5. Index WordPress content — Run the indexing process and verify that embeddings and document metadata are available in the vector store.
6. Deploy the frontend — Install/configure the WordPress integration, set the webhook and authentication values, and place the chatbot shortcode where required.
7. Test retrieval and security — Validate normal conversation, RAG queries, unavailable answers, authentication, and frontend behavior before production deployment.
8. Cohere API credentials for reranking (optional)
9. MongoDB-based profile/skills knowledge path (optional)
10. Standalone test micro-website (optional)
11. Additional content sources or vector collections (optional)

## Requirements
- WordPress site with REST API access
- n8n instance
- OpenAI API credentials
- Qdrant or MongoDB Atlas vector database
- HTTPS for production deployments
- Ability to install/configure the supplied WordPress integration

## Customization
- Knowledge sources — Extend indexing beyond WordPress posts or add separate collections for specialized data.
- Retrieval — Adjust chunking, top-K retrieval, metadata filters, vector backend, and reranking behavior.
- Assistant behavior — Modify intent classification, prompts, response style, language handling, and fallback behavior.
- Frontend — Customize WordPress styling, labels, placement, responsive behavior, and shortcode integration.
- Security — Adapt authentication, request validation, rate limiting, logging, and privacy controls to your deployment.
- Models and providers — Change supported LLM, embedding, or reranking components where the workflow architecture allows it.

## Additional info
The complete purchased package includes two n8n workflows, WordPress integration, test frontend, setup/customization documentation, and supporting tools.
The public repository preserves promotional images and frontend screenshots under assets/; the paid workflow package itself is distributed through the purchase channels.

## 🔗 Nodes Used

Webhook, Wordpress, Google Cloud Storage, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
