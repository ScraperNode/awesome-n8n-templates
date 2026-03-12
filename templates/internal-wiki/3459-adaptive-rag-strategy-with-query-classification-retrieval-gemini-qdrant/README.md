# 📖 Adaptive RAG strategy with query classification & retrieval (Gemini & Qdrant)

> ⚡ **3,255 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This n8n workflow implements a version of the Adaptive Retrieval-Augmented Generation (RAG) framework. It recognizes that the best way to retrieve information often depends on the type of question asked. Instead of a one-size-fits-all approach, this workflow adapts its strategy based on the user's query intent.

## 🌟 How it Works

1. **Receive Query:** Takes a user query as input (along with context like a chat session ID and Vector Store collection ID if used as sub-workflow).
2. **Classify Query:** First, the workflow classifies the query into a predefined category. This template uses four examples:
    * **Factual:** For specific facts.
    * **Analytical:** For deeper explanations or comparisons.
    * **Opinion:** For subjective viewpoints.
    * **Contextual:** For questions relying on specific background.
3. **Select & Adapt Strategy:** Based on the classification, it selects a corresponding strategy to prepare for information retrieval. The example strategies aim to:
    * *Factual:* Refine the query for precision.
    * *Analytical:* Break the query into sub-questions for broad coverage.
    * *Opinion:* Identify different viewpoints to look for.
    * *Contextual:* Incorporate implied or user-specific context.
4. **Retrieve Info:** Uses the output of the selected strategy to search the specified knowledge base (Qdrant vector store - change as needed) for relevant documents.
5. **Generate Response:** Constructs a response using the retrieved documents, guided by a prompt tailored to the original query type.

By adapting the retrieval strategy, this workflow aims to provide more relevant results tailored to the user's intent.

## ⚙️ Usage & Flexibility

* **Sub-Workflow:** Designed to be called from other n8n workflows, passing `user_query`, `chat_memory_key`, and `vector_store_id` as inputs.
* **Chat Testing:** Can also be triggered directly via the n8n Chat interface for easy testing and interaction.
* **Customizable Framework:** The query categories (Factual, Analytical, etc.) and the associated retrieval strategies are examples. You can modify or replace them entirely to fit your specific domain or requirements.

## 🛠️ Requirements

* **Credentials:** You will need API credentials configured in your n8n instance for:
    * Google Gemini (AI Models)
    * Qdrant (Vector Store)

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Simple Memory, Summarize, Chat Trigger, Qdrant Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
