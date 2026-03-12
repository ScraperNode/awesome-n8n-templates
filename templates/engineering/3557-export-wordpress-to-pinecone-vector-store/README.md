# ⚒️ Export Wordpress to PineCone vector store

> ⚡ **419 views** · ⚒️ [Engineering](../)

## Description

**[Click here to access this Workflow for free](https://www.bonzai.pro/auth?action=buyPrice%2Cpri_2mR5_5248)**.

---

# Make your website the knowledge base of your LLM chatbot
![wp.png](fileId:1735)

This workflow automatically syncs your WordPress content (Pages and Posts) into a vector database like Pinecone, making it searchable and usable by AI agents through embeddings. This allows your AI chatbot to stay continuously up to date with your latest site content — without manual uploads or retraining steps.

It pulls all published and private content via WordPress's REST API, processes the data into clean JSON, and sends it to Pinecone using vector embeddings (OpenAI by default, but swappable). This enables a dynamic AI knowledge base that grows with your website.

Best of all, you don’t need to modify your workflow: keep managing your content in WordPress — this automation takes care of the rest.

---

## Requirements

- A WordPress site with API access
- Pinecone account credentials (API Key + Environment)
- OpenAI account (or any LLM with embedding capabilities)
- An n8n instance (cloud or self-hosted)

---

## Setup

1. **Configure WordPress Access:**
   - Create HTTP credentials in n8n with your WordPress site's base URL and authentication.
   - This workflow uses the REST API to fetch `pages` and `posts`.

2. **Connect Pinecone and OpenAI:**
   - Set up credentials for both Pinecone and OpenAI in n8n's Credentials Manager.
   - The workflow automatically uses them in the relevant nodes.

3. **Set Your Schedule:**
   - The workflow starts with a Schedule node. Open it to adjust how often the sync runs (e.g., daily, weekly).

4. **Check the Nodes:**
   - Make sure your folder structure and API URLs match your WordPress setup.
   - Adjust filters if needed (only published and private content is fetched by default).

---

## Usage

Once the workflow is active:

- It runs on a defined schedule.
- It fetches all WordPress Pages and Posts.
- It converts them into structured JSON, including metadata (title, tags, URL, categories, etc.).
- It generates embeddings (via OpenAI) and sends them to Pinecone.
- All vectors are stored with rich metadata for easy use in search/chat-based AI tools.

You’ll have a continuously refreshed, vectorized copy of your WordPress site content.

---

## Customization

- **Replace Pinecone:** You can swap Pinecone for any other vector database by updating the vector node.
- **Swap Embedding Provider:** You’re not limited to OpenAI — just replace the embedding step with your LLM of choice.
- **Selective Sync:** If you want to sync only posts or only pages:
  - Delete the node that fetches the type you don’t want.
  - Remove the associated Merge node.
- **Schedule:** Edit the first node to control how often the automation runs.

---
### If you need any help, or have any question, feel free to come discuss about it on **[Telegram](https://www.bonzai.pro/theo_marcadet/lp/7018)**

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Embeddings OpenAI, Token Splitter, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
