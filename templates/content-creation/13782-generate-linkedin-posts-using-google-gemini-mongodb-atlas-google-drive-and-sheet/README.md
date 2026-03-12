# 🎬 Generate LinkedIn posts using Google Gemini, MongoDB Atlas, Google Drive and Sheets

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## 🚀 How the System Works

This automation operates in three distinct phases: **Ingestion**, **Storage**, and **Generation**.

| Phase | Component | What Happens |
| --- | --- | --- |
| **1. The Trigger** | Google Drive | Every time you update your `rag_posts.csv` in your Drive folder, the system wakes up. |
| **2. The Brain** | Gemini Embeddings | It turns your text into "Vectors" (numbers) so the AI understands the *meaning* of your writing style, not just the words. |
| **3. The Vault** | MongoDB Atlas | Your posts are stored in a vector database, acting as a "Style Library" the AI can browse instantly. |
| **4. The Writer** | AI Agents | When you ask for a post, the AI searches your vault, finds the best matches, and mimics the formatting exactly. |

---

## 🛠️ Step-by-Step Setup Guide

### 1. Prepare Your Data Source

* Create a **Google Drive Folder** and note its ID (the long string of characters in the URL).
* Create a **CSV file** named `rag_posts.csv`.
* **Columns needed:** `Post Text`, `Hook Type`, `Engagement`, `Category`.
* Upload it to that folder.

### 2. Configure MongoDB Atlas (The Vector Store)

* Sign up for a free **MongoDB Atlas** account.
* Create a Cluster and a Database named `n8n_rag_data`.
* **Crucial Step:** Create an **Atlas Vector Search Index** on your collection.
* Name the index `data_index`.

### 3. Google Gemini API

* Go to the **Google AI Studio**.
* Generate an **API Key**. This will power both the "Embeddings" (understanding the text) and the "Chat" (writing the post).

### 4. Connect the n8n Nodes

* **Google Drive Trigger:** Paste your Folder ID and select `fileUpdated`.
* **MongoDB Nodes:** Enter your Connection String (SRV) and credentials.
* **Gemini Nodes:** Paste your API Key into the Credentials section.
* **Google Sheets Tool:** Link your specific spreadsheet ID so the "Knowledge Base Agent 1" can read specific rows.

---

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, AI Agent, Simple Memory, Default Data Loader, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
