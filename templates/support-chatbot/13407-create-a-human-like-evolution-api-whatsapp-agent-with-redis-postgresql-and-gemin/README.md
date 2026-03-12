# 💬 Create a human-like Evolution API WhatsApp agent with Redis, PostgreSQL and Gemini

> ⚡ **963 views** · 💬 [Support Chatbots](../)

## Description

## 🤖 Human-like Evolution API Agent with Redis & PostgreSQL

This production-ready template builds a sophisticated AI Agent using **Evolution API** that mimics human interaction patterns. Unlike standard chatbots that reply instantly to every incoming message, this workflow uses a **Smart Redis Buffering System**. It waits for the user to finish typing their full thought (text, audio, or image albums) before processing, creating a natural, conversational flow.

It features a **Hybrid Memory Architecture**: active conversations are cached in Redis for ultra-low latency, while the complete chat history is securely stored in PostgreSQL. To optimize token usage and maintain long-term coherence, a **Context Refiner Agent** summarizes the conversation history before the Main AI generates a response.

### ✨ Key Features

-   **Human-like Buffering:** The agent waits (configurable time) to group consecutive messages, voice notes, and media albums into a single context. This prevents fragmented replies and feels like talking to a real person.
-   **Hybrid Memory:** Combines **Redis** (Hot Cache) for speed and **PostgreSQL** (Cold Storage) for permanent history.
-   **Context Refinement:** A specialized AI step summarizes past interactions, allowing the Main Agent to understand long conversations without exceeding token limits or increasing costs.
-   **Multi-Modal Support:** Natively handles text, audio transcription, and image analysis via Evolution API.
-   **Parallel Processing:** Manages "typing..." status and session checks in parallel to reduce response latency.

### 📋 Requirements

To use this workflow, you must configure the Evolution API correctly:

1.  **Evolution API Instance:** You need a running instance of Evolution API.
    -   [Configuration Guide](https://community.n8n.io/t/evolution-api-and-n8n-how-to-configure/96559)
2.  **N8n Community Node:** Install the Evolution API node in your n8n instance.
    -   [n8n-nodes-evolution-api](https://www.npmjs.com/package/n8n-nodes-evolution-api)
3.  **Database:** A **PostgreSQL** database for chat history and a **Redis** instance for the buffer/cache.
4.  **AI Models:** API keys for your LLM (OpenAI, Anthropic, or Google Gemini).

### ⚙️ Setup Instructions

1.  **Install the Node:** Go to `Settings &gt; Community Nodes` in n8n and install `n8n-nodes-evolution-api`.
2.  **Credentials:** Configure credentials for Redis, PostgreSQL, and your AI provider (e.g., OpenAI/Gemini).
3.  **Database Setup:** Create a `chat_history` table in PostgreSQL (columns must match the Insert node).
4.  **Redis Connection:** Configure your Redis credentials in the workflow nodes.
5.  **Global Variables:** Set the following in the "Global Variables" node:
    -   `wait_buffer`: Seconds to wait for the user to stop typing (e.g., 5s).
    -   `wait_conversation`: Seconds to keep the cache alive (e.g., 300s).
    -   `max_chat_history`: Number of past messages to retrieve.
6.  **Webhook:** Point your Evolution API instance to this workflow's Webhook URL.

### 🚀 How it Works

1.  **Ingestion:** Receives data via Evolution API. Detects if it's text, audio, or an album.
2.  **Smart Buffering:** Holds the execution to collect all parts of the user's message (simulating a human reading/listening).
3.  **Context Retrieval:** Checks Redis for the active session. If empty, fetches from PostgreSQL.
4.  **Refinement:** The Refiner Agent summarizes the history to extract key details.
5.  **Response:** The Main Agent generates a reply based on the refined context and current buffer, then saves it to both Redis and Postgres.
## 💡 Need Assistance?

If you’d like help customizing or extending this workflow, feel free to reach out:  

📧 Email: [johnsilva11031@gmail.com](mailto:johnsilva11031@gmail.com)  
🔗 LinkedIn: [John Alejandro Silva Rodríguez](https://www.linkedin.com/in/john-alejandro-silva-rodriguez-48093526b/)

## 🔗 Nodes Used

Postgres, Redis, Webhook, Execute Sub-workflow, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
