# 📱 Generate LinkedIn posts from books using OpenAI, LangChain & Pinecone vector search

> ⚡ **957 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

Automates the process of generating, storing, and publishing engaging LinkedIn posts derived from books (PDFs) using AI and vector search.

---

## 🧠 Overview

This workflow:
1. **Watches a Google Drive folder** for new or updated book PDFs.
2. **Extracts and embeds** the content using OpenAI.
3. **Stores the data** in a Pinecone vector database.
4. **Uses a LangChain agent** to generate post ideas.
5. **Creates concise LinkedIn posts** with hook, insight, CTA.
6. **Updates a Google Sheet** and posts to LinkedIn.

---

## 🛠 Workflow Breakdown

### 📥 1. Google Drive Trigger
- **Trigger:** Watches a folder for new or updated PDF files.
- **Action:** Downloads the updated PDF.

### 📄 2. Extract and Embed Content
- **Extract from File:** Parses PDF to extract text.
- **Text Splitter:** Breaks text into chunks.
- **Embeddings (OpenAI):** Converts chunks into vector embeddings.
- **Pinecone Vector Store:** Saves the embeddings with the book name as namespace.

### 🧠 3. Post Idea Generation (LangChain Agent)
- Uses a prompt to:
  - Search Pinecone DB
  - Extract insights
  - Format into 5 LinkedIn post ideas with:
    - **Hook**
    - **Insight**
    - **CTA**
- **Memory buffer** and structured output parser are used for clean AI interaction.

### ✍️ 4. Post Creation
- Each idea is:
  - **Split**
  - Rewritten with a GPT model prompt to match LinkedIn tone
  - Styled for under 600 characters
  - Includes emojis, hashtags, and tone guidelines

### 📊 5. Google Sheet Integration
- Saves all generated posts to a **Google Sheet**.
- Marks status: `"published"` or `"no"`.

### 🔁 6. Scheduled Publishing
- Every day:
  - Pulls an unpublished post
  - Publishes it to LinkedIn
  - Updates the post's status and timestamp in the Google Sheet

---

## ⚙️ Setup Guide

### 📂 Google Drive
- Create a folder for book PDFs
- Connect your Google Drive account to n8n
- Provide access token with file read permission

### 📊 Google Sheets
- Create a Google Sheet with columns:
  - `bookname`, `hook`, `insight`, `cta`, `postContent`, `published`, `date`
- Add credentials in n8n with read/write permission

### 🧠 Pinecone
- Set up a Pinecone project and index (`linkdenpost`)
- Namespace will be auto-named using the book filename

### 🔑 API Credentials Required
- **OpenAI API** (for embeddings and post generation)
- **Pinecone API** (for vector storage and retrieval)
- **LinkedIn OAuth2** (to publish posts)
- **Google Drive & Sheets** credentials

---

## 🔁 Flow Summary

```mermaid
graph TD
  A[Google Drive Trigger] --&gt; B[Download PDF]
  B --&gt; C[Extract Text]
  C --&gt; D[Text Splitter]
  D --&gt; E[Create Embeddings]
  E --&gt; F[Pinecone Vector Store]
  F --&gt; G[LangChain Agent]
  G --&gt; H[Structured Output (5 Post Ideas)]
  H --&gt; I[Split Ideas]
  I --&gt; J[Format as LinkedIn Post (GPT)]
  J --&gt; K[Store in Google Sheet]
  L[Schedule Trigger] --&gt; M[Get Unpublished Post]
  M --&gt; N[Post to LinkedIn]
  N --&gt; O[Mark as Published]
```

---

## 🧪 Prompt Example (Used in LangChain Agent)

```text
You are a content strategist. Search the Pinecone vector DB containing a book. Generate 5 unique LinkedIn post ideas with:
- A Hook (curiosity driven)
- Insight (summary &lt; 100 words)
- CTA ("Agree or disagree?", etc.)

Respond in structured JSON:
[
  { "Hook": "...", "Insight": "...", "CTA": "..." },
  ...
]
```

---

## ✅ Output Sample

```json
{
  "Hook": "Why your lab's results might be invalid 😱",
  "Insight": "ISO/IEC 17025 stresses that labs must plan and address risks to impartiality and validity.",
  "CTA": "Does your lab audit for these risks?"
}
```

---

## 📆 Schedule Control

- Uses **Schedule Trigger** to post daily at a set time.
- Ensures automation with LinkedIn and accurate Google Sheet syncing.

---

## 📝 Notes

- Posts remain **professional and concise** for a LinkedIn audience
- Works with **any PDF book**
- Supports multi-book pipelines
- You can filter and tag books by filename or folder for segmenting post styles

## 🔗 Nodes Used

Google Sheets, Google Drive, LinkedIn, Google Drive Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
