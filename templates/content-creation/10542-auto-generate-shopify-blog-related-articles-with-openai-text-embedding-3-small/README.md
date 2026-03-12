# 🎬 Auto-generate Shopify blog related articles with OpenAI text-embedding-3-small

> ⚡ **160 views** · 🎬 [Content Creation & Video](../)

## Description

### 🪐 Use case

Automatically surface and insert the three most relevant “Related articles” at the end of every Shopify blog post to boost session depth, SEO, and reader engagement.

---

### ⚙️ What this workflow does

* Pulls all published articles from a selected **Shopify Blog** using the Admin API.
* Cleans the HTML content (removes existing `.related-articles` blocks) and extracts text for embeddings.
* Generates **OpenAI embeddings** (`text-embedding-3-small`) and stores them in **n8n Data Tables**.
* Calculates **semantic similarity** (cosine distance) between articles to identify the top matches.
* Selects the **Top 3** most relevant related posts for each article (configurable).
* Dynamically builds a `<div>` HTML section and updates the article on Shopify.
* Runs on a weekly schedule to keep relations fresh as new content is added.

---

### 🧩 Setup

1. **Create 3 Data Tables**:

   * `articles`
   * `article_relations`
   * `article_related_links_snapshot`

2. **Add credentials**:

   * Shopify Admin API Access Token
   * OpenAI API Key

3. **Set environment variables** in the *Workflow Configuration* node:

   * `shopifyBlogId`
   * `shopifyBlogDomain`
   * `shopifyStoreName`
   * `shopApiVersion`
   * `percent_minimum_similarity` (default `70`)

4. *(Optional)* Keep or modify the **Schedule Trigger** (default: every week at 20:00).

---

### 🛠️ How to adjust this template

* Modify the similarity threshold or number of related posts displayed.
* Edit the HTML snippet or CSS classes for the related section.
* Integrate a second OpenAI model to rewrite link titles or summaries for better UX.

---

### 💡 Ideal for

Shopify content teams and SEO strategists who want **automated, context-aware internal linking** to improve engagement and organic ranking.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
