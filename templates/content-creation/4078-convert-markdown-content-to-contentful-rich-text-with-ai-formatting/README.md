# 🎬 Convert Markdown content to Contentful rich text with AI formatting

> ⚡ **898 views** · 🎬 [Content Creation & Video](../)

## Description

# Workflow: Publish to Contentful with Rich Text Formatting

## ⚡ About the Creators
This workflow was created by **Varritech** Technologies, an innovative agency that leverages AI to engineer, design, and deliver software development projects 500% faster than traditional agencies. Based in New York City, we specialize in custom software development, web applications, and digital transformation solutions. If you need assistance implementing this workflow or have questions about content management solutions, please reach out to our team.

## 🏗️ Architecture Overview  
This workflow takes a JSON article payload, splits its markdown content into logical chunks, converts each chunk into Contentful Rich Text JSON via an AI agent, merges the resulting rich text nodes back into a single document, formats the entire entry according to Contentful's field schema, and finally publishes it to Contentful.

1. **Trigger** → Executes when called by another workflow  
2. **Split by Headings** → Breaks markdown into `##`-delimited chunks  
3. **Markdown → Rich Text** → AI agent converts each chunk to Contentful Rich Text JSON  
4. **Combine Rich Text Objects** → Aggregates all chunk outputs into one document  
5. **Format Entry** → Wraps metadata and rich-text content into Contentful schema  
6. **Publish Entry** → HTTP POST to Contentful API  

---

## 📦 Node-by-Node Breakdown

```mermaid
flowchart LR
  A[When Executed by Another Workflow] --&gt; B[Split by Headings]
  B --&gt; C[Markdown to Contentful format]
  C --&gt; D[Combine Rich Text Objects]
  D --&gt; E[Merge1]
  E --&gt; F[Format1]
  F --&gt; G[Create newly formatted Contentful Entry]
```

### 1. When Executed by Another Workflow
**Type:** Execute Workflow Trigger

**Input Example:**
- title, slug, category.id, description, keywords, content, metaTitle, metaDescription, readingTime, difficulty

**Purpose:** Receives the JSON payload from the upstream workflow.

### 2. Split by Headings
**Type:** Code

**Logic:**
- Splits input.content into an array of markdown chunks at each second-level heading (##).
- Emits one item per chunk with index, slug, title, and contentChunk.

### 3. Markdown to Contentful format
**Type:** LangChain Agent (+ OpenAI Chat model)

**System Prompt:**
- Defines rules for generating valid Contentful Rich Text JSON (must include nodeType, data:{}, content:[], etc.).
- Provides examples for paragraphs, headings, lists, links, and images.

**User Prompt:**

Here is the markdown content to convert:
```{{ $json.contentChunk }}```

**Purpose:** Converts each markdown chunk into an array of rich-text nodes.

### 4. Combine Rich Text Objects
**Type:** Code

**Logic:**
- Parses and merges all content arrays returned by the AI agent into one combined content array under a document root.

### 5. Merge1
**Type:** Merge

**Purpose:** Joins the original item (with metadata) and the combined rich-text document into a single data stream.

### 6. Format1
**Type:** Code

**Logic:**
- Maps workflow data into the Contentful entry schema by setting each field (title, slug, category link, description, keywords, rich-text content, metaTitle, metaDescription, readingTime, difficulty) under the appropriate locale and structure required by Contentful.

### 7. Create newly formatted Contentful Entry
**Type:** HTTP Request

**Method:** POST

**URL:**
https://api.contentful.com/spaces

**Headers:**
- Authorization: Bearer token for Contentful Management API
- Content-Type: application/vnd.contentful.management.v1+json
- X-Contentful-Version: entry version number
- X-Contentful-Content-Type: content type ID

**Body:** The formatted fields object produced by the previous node

**Purpose:** Publishes the new entry with rich-text content to Contentful.

## 🔍 Design Rationale & Best Practices
### Chunked Conversion
Splitting by headings prevents AI context limits and keeps conversions modular.

### Strict Rich Text Schema
Enforcing nodeType, data, and content structure avoids validation errors on Contentful.

### Two-Phase Merge
Separating "combine AI outputs" and "format entry" keeps transformations clear and testable.

### Idempotent Publish
Uses explicit versioning and content type headers to ensure correct entry creation.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
