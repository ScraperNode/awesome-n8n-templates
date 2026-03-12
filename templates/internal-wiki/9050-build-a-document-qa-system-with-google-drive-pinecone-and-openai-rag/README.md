# 📖 Build a document QA system with Google Drive, Pinecone, and OpenAI RAG

> ⚡ **441 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Title

**RAG AI Agent for Documents in Google Drive → Pinecone → OpenAI Chat (n8n workflow)**

---

## Short Description

This n8n workflow implements a **Retrieval-Augmented Generation (RAG)** pipeline + AI agent, allowing users to drop documents into a Google Drive folder and then ask questions about them via a chatbot. New files are indexed automatically to a Pinecone vector store using OpenAI embeddings; the AI agent loads relevant chunks at query time and answers using context plus memory.

---

## Why this workflow matters / what problem it solves

* Large language models (LLMs) are powerful, but they lack up-to-date, domain-specific knowledge.
* RAG augments the LLM with relevant external documents, reducing hallucination and enabling precise answers. ([Pinecone][1])
* This workflow automates the ingestion, embedding, storage, retrieval, and chat logic — with minimal manual work.
* It’s modular: you can swap data sources, vector DBs, or LLMs (with some adjustments).
* It leverages the built-in **AI Agent** node in n8n to tie all the parts together. ([n8n][2])

---

## How to get the required credentials

| Service                   | Purpose in Workflow                         | Setup Link                                                                                                                                               | What you need / steps                                                                                                               |
| ------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Google Drive (OAuth2)** | Trigger new file events & download the file | [https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/) | Create a Google Cloud OAuth app, grant it Drive scopes, get client ID & secret, configure redirect URI, paste into n8n credentials. |
| **Pinecone**              | Vector database for embeddings              | [https://docs.n8n.io/integrations/builtin/credentials/pinecone/](https://docs.n8n.io/integrations/builtin/credentials/pinecone/)                         | Sign up at Pinecone, in dashboard create an index, get API key + environment, paste into n8n credential.                            |
| **OpenAI**                | Embeddings + chat model                     | [https://docs.n8n.io/integrations/builtin/credentials/openai/](https://docs.n8n.io/integrations/builtin/credentials/openai/)                             | Log in to OpenAI, generate a secret API key, paste into n8n credentials.                                                            |

You’ll configure these under **n8n → Credentials → New Credential**, matching credential names referenced in your workflow nodes.

---

## Detailed Walkthrough: How the Workflow Works

Here’s a step-by-step of what happens inside your workflow (matching your JSON):

### 1. **Google Drive Trigger**

* Watches a specified folder in Google Drive. Whenever a new file appears (fileCreated event), the workflow is triggered (polling every minute).
* You must set the *folder ID* (in “folderToWatch”) to the Drive folder you want to monitor.

### 2. **Download File**

* Takes the file ID from the trigger and downloads the file content (binary).

### 3. **Indexing Path: Embeddings + Storage**

(This path only runs when new files arrive)

* The file is sent to the **Default Data Loader** node (via the **Recursive Character Text Splitter**) to break it into chunks with overlap (so context is preserved).
* Each chunk is fed into **Embeddings OpenAI** to convert text into embedding vectors.
* Then **Pinecone Vector Store** (insert mode) ingests the vector + text metadata into your Pinecone index.
* This ensures your vector store stays up-to-date with files you drop into Drive.

### 4. **Chat / Query Path**

(Triggered by user chat via webhook)

* When a chat message arrives via **When Chat Message Received**, it gets passed into the **AI Agent** node.
* Before generation, the AI Agent calls the **Pinecone Vector Store1** set in “retrieve-as-tool” mode, which runs a vector-based retrieval using the user query embedding. The relevant text chunks are pulled as tools/context.
* The **OpenAI Chat Model** node is linked as the language model for the agent.
* **Simple Memory** node provides conversational memory (keeping history across messages).
* The agent combines retrieved context + memory + user input and instructs the model to produce a response.

### 5. **Connections / Flow Logic**

* The **Embeddings OpenAI** node’s output is wired into **Pinecone Vector Store** (insert) and also into **Pinecone Vector Store1** (so the same embeddings can be used for retrieval).
* The **AI Agent** has tool access to Pinecone retrieval and memory.
* The **Download File** node triggers the insert path.
* The **When chat message** triggers the agent path.

---

## Similar Workflows / Inspirations & Comparisons

To help understand how your workflow fits into what’s already out there, here are a few analogues:

* **n8n Blog: “Build a custom knowledge RAG chatbot”** — they show a workflow that ingests documents from external sources, indexes them in Pinecone, and responds to queries via n8n + LLM. ([n8n Blog][3])
* **Index Documents from Google Drive to Pinecone** — this is nearly identical for the ingestion part: trigger on Drive, split, embed, upload. ([n8n][4])
* **Build & Query RAG System with Google Drive, OpenAI, Pinecone** — shows the full RAG + chat logic, same pattern. ([n8n][5])
* **Chat with GitHub API Documentation (RAG)** — demonstrates converting API spec into chunks, embedding, retrieving, and chatting. ([n8n][6])
* **Community tutorials & forums** talk about using the AI Agent node with tools like Pinecone, and how the RAG part is often built as a sub-workflow feeding an agent. ([n8n Community][7])

What sets your workflow apart is your explicit combination: **Google Drive → automatic ingestion → chat agent with tool integration + memory**. Many templates show either ingestion or chat, but fewer show them combined cleanly with n8n’s AI Agent.

---

## Suggested Published Description (you can paste/adjust)

&gt; **RAG AI Agent for Google Drive Documents (n8n workflow)**
&gt;
&gt; This workflow turns a Google Drive folder into a live, queryable knowledge base. Drop PDF, docx, or text files into the folder → new documents are automatically indexed into a Pinecone vector store using OpenAI embeddings → you can ask questions via a webhook chat interface and the AI agent will retrieve relevant text, combine it with memory, and answer in context.
&gt;
&gt; **Credentials needed**
&gt;
&gt; * Google Drive OAuth2 (see: [https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/))
&gt; * Pinecone (see: [https://docs.n8n.io/integrations/builtin/credentials/pinecone/](https://docs.n8n.io/integrations/builtin/credentials/pinecone/))
&gt; * OpenAI (see: [https://docs.n8n.io/integrations/builtin/credentials/openai/](https://docs.n8n.io/integrations/builtin/credentials/openai/))
&gt;
&gt; **How it works**
&gt;
&gt; 1. Drive trigger picks up new files
&gt; 2. Download, split, embed, insert into Pinecone
&gt; 3. Chat webhook triggers AI Agent
&gt; 4. Agent retrieves relevant chunks + memory
&gt; 5. Agent uses OpenAI model to craft answer
&gt;
&gt; This is built on the core RAG pattern (ingest → retrieve → generate) and enhanced by n8n’s AI Agent node for clean tool integration.
&gt;
&gt; **Inspiration & context**
&gt; This approach follows best practices from existing n8n RAG tutorials and templates, such as the “Index Documents from Google Drive to Pinecone” ingestion workflow and “Build & Query RAG System” templates. ([n8n][4])
&gt;
&gt; You're free to swap out the data source (e.g. Dropbox, S3) or vector DB (e.g. Qdrant) as long as you adjust the relevant nodes.

---

If you like, I can generate a polished Markdown README for you (with badges, diagrams, instructions) ready for GitHub/n8n community publishing. Do you want me to build that?

[1]: https://www.pinecone.io/learn/retrieval-augmented-generation/?utm_source=chatgpt.com "Retrieval-Augmented Generation (RAG) - Pinecone"
[2]: https://n8n.io/integrations/agent/?utm_source=chatgpt.com "AI Agent integrations | Workflow automation with n8n"
[3]: https://blog.n8n.io/rag-chatbot/?utm_source=chatgpt.com "Build a Custom Knowledge RAG Chatbot using n8n"
[4]: https://n8n.io/workflows/4552-index-documents-from-google-drive-to-pinecone-with-openai-embeddings-for-rag/?utm_source=chatgpt.com "Index Documents from Google Drive to Pinecone with OpenAI ... - N8N"
[5]: https://n8n.io/workflows/4501-build-and-query-rag-system-with-google-drive-openai-gpt-4o-mini-and-pinecone/?utm_source=chatgpt.com "Build & Query RAG System with Google Drive, OpenAI GPT-4o-mini ..."
[6]: https://n8n.io/workflows/2705-chat-with-github-api-documentation-rag-powered-chatbot-with-pinecone-and-openai/?utm_source=chatgpt.com "Chat with GitHub API Documentation: RAG-Powered Chatbot ... - N8N"
[7]: https://community.n8n.io/t/step-by-step-tutorial-create-a-rag-chatbot-with-n8n-ai-agents-in-minutes/55244?utm_source=chatgpt.com "Step-by-Step Tutorial: Create a RAG Chatbot with n8n AI Agents in ..."

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
