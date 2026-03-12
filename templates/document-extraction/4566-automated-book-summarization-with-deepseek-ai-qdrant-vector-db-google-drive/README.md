# 🔬 Automated book summarization with DeepSeek AI, Qdrant Vector DB & Google Drive

> ⚡ **1,329 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# 📚 AI Book Summarizer with Vector Search – n8n Automation

## Overview
This **n8n workflow** automates the process of summarizing uploaded books from Google Drive using vector databases and LLMs. It uses **Cohere for embeddings**, **Qdrant for storage and retrieval**, and **DeepSeek or your preferred LLM** for summarization and Q\&A. Designed for researchers, students, and productivity enthusiasts!

![AI Book Sum Thum.png](fileId:1423)

[Result Example](https://drive.google.com/file/d/14Z4V40jiSAGdELbocQTxrH_1fQZ9SYCC/view?usp=sharing)

---

## Problem 🛠️

⏳ Reading full books or papers to extract core ideas can take hours.
🧠 Manually summarizing or searching inside long documents is inefficient and overwhelming.

---

## Solution ✅

Use this workflow to:

* Upload a book to Google Drive 📥
* Auto-split and embed the content into Qdrant 🔍
* Summarize it using DeepSeek or another LLM 🤖
* Store the final summary back to Google Drive 📤
* Clean up the vector store afterward 🧹

---

## 🔥 Result

⚡ Instant AI-generated book summary
💡 Ability to perform semantic search and question-answering
📁 Summary saved back to your cloud
🧠 Enhanced productivity for learning and research

---

## Setup ⚙️ (4–8 minutes)

### 1. Google Drive Setup
* 🔗 Connect Google Drive credentials
* 📁 Create an input folder (e.g., `book_uploads`)
* 📁 Create an output folder (e.g., `book_summaries`)
* ⚡ Trigger: Use `File Created` node to monitor `book_uploads`
* 📥 Summary will be saved in `book_summaries`

### 2. LLM & Embeddings Setup
* 🔑 Create and test API keys for:
  * **DeepSeek/OpenAI** for summarization
  * **Cohere** for embeddings
  * **Qdrant** for vector storage
* 🧪 Ensure all credentials are added in n8n

---

## How It Works 🌟

1. 📂 A file is uploaded to Google Drive
2. ⬇️ File is downloaded
3. 🧱 It's processed, split into chunks, and sent to **Qdrant** using **Cohere** embeddings
4. ❓ A **Q\&A chain** with vector retriever performs information extraction
5. 🧠 A **DeepSeek AI Agent** analyzes and summarizes the book
6. 📤 The summary is saved to your Drive
7. 🧽 The Qdrant vector collection is deleted (clean-up)

---

## What’s Included 📦

* ✅ Google Drive integration (input/output)
* ✅ File chunking and embedding using Cohere
* ✅ Vector storage with Qdrant
* ✅ Q\&A with vector retrieval
* ✅ Summarization via DeepSeek or other LLM
* ✅ Clean-up for minimal storage overhead

---

## Customization 🎨

You can tailor it to your use case:

* 🧑‍🏫 Adjust summarization prompt for study notes or executive summaries
* 🌍 Add translation node for multilingual support
* 🔍 Enable long-term memory by skipping vector deletion
* 📨 Send summaries to Notion, Slack, or Email
* 🧩 Use other LLM providers (OpenAI, Claude, Gemini, etc.)

---

🌐 Explore more workflows

❤️ Buy more workflows at: [adamcrafts](https://adamcrafts.cloudysoftwares.com)
🦾 Custom workflows at: [adamcrafts@cloudysoftwares.com](mailto:adamcrafts@cloudysoftwares.com)
[adamaicrafts@gmail.com](mailto:adamaicrafts@gmail.com)

&gt; Build once, customize endlessly, and scale your video content like never before. 🚀

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, AI Agent, Question and Answer Chain, Embeddings Cohere

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
