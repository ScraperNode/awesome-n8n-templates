# 📖 🤖 Build a Documentation Expert Chatbot with Gemini RAG Pipeline

> ⚡ **18,091 views** · 📖 [Internal Wiki & Knowledge Base](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## How it works

This template is a complete, hands-on tutorial for building a **RAG (Retrieval-Augmented Generation)** pipeline. In simple terms, you'll teach an AI to become an expert on a specific topic—in this case, the official n8n documentation—and then build a chatbot to ask it questions.

Think of it like this: instead of a general-knowledge AI, you're building an **expert librarian**.

The workflow is split into two main parts:

1.  **Part 1: Indexing the Knowledge (Building the Library)**
    This is a one-time process you run manually. The workflow automatically scrapes all pages of the n8n documentation, breaks them down into small, digestible chunks, and uses an AI model to create a special numerical representation (an "embedding") for each chunk. These embeddings are then stored in n8n's built-in **Simple Vector Store**. This is like a librarian reading every book and creating a hyper-detailed index card for every paragraph.

    **Important:** This in-memory knowledge base is temporary. It will be erased if you restart your n8n instance, and you will need to run the indexing process again.

2.  **Part 2: The AI Agent (The Expert Librarian)**
    This is the chat interface. When you ask a question, the AI agent doesn't guess the answer. Instead, it uses your question to find the most relevant "index cards" (chunks) from the knowledge base it just built. It then feeds these specific, relevant chunks to a powerful language model (Gemini) with a strict instruction: **"Answer the user's question using ONLY this information."** This ensures the answers are accurate, factual, and grounded in your provided documents.

## Set up steps

**Setup time: ~2 minutes (plus ~15-20 minutes for indexing)**

This template uses n8n's built-in tools, removing the need for an external database. Follow these simple steps to get started.

1.  **Configure Google AI Credentials:**
    *   You will need a Google AI API key for the Gemini models.
    *   In your n8n workflow, go to any of the three `Gemini` nodes (e.g., `Gemini 2.5 Flash`).
    *   Click the **Credential** dropdown and select `+ Create New Credential`.
    *   Enter your Gemini API key and save.

2.  **Apply Credentials to All Nodes:**
    *   Your new Google AI credential is now saved. Go to the other two `Gemini` nodes (`Gemini Chunk Embedding` and `Gemini Query Embedding`) and select your newly created credential from the dropdown list.

3.  **Build the Knowledge Base:**
    *   Find the `Start Indexing` manual trigger node at the top-left of the workflow.
    *   Click its **"Execute workflow"** button to start the indexing process.
    *   ⚠️ **Be Patient:** This will take **15-20 minutes** as it scrapes and processes the entire n8n documentation. You only need to do this once per n8n session. If you restart n8n, you must run this step again.

4.  **Chat with Your Expert Agent:**
    *   Once the indexing is complete, **Activate** the entire workflow using the toggle at the top of the screen.
    *   Open the **`RAG Chatbot`** chat trigger node (bottom-left) and copy its **Public URL**.
    *   Open the URL in a new tab and start asking questions about n8n! For example: "How does the IF node work?" or "What is a sub-workflow?".

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Filter, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
