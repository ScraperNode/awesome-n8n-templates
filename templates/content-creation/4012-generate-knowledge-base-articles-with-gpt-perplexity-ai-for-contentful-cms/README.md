# 🎬 Generate knowledge base articles with GPT & Perplexity AI for Contentful CMS

> ⚡ **5,906 views** · 🎬 [Content Creation & Video](../)

## Description

## Workflow: Auto Knowledge Base Article Generator

### ⚡ About the Creators
This workflow was created by [Varritech Technologies](https://varritech.com), an innovative agency that leverages AI to engineer, design, and deliver software development projects 500% faster than traditional agencies. Based in New York City, we specialize in custom software development, web applications, and digital transformation solutions. If you need assistance implementing this workflow or have questions about content management solutions, please reach out to our team.

### 🏗️ Architecture Overview  
This workflow automates the end-to-end creation of a structured knowledge-base article from a simple chat prompt:

1. **Chat Trigger** → Receives user request  
2. **AI Drafting Loop** → Generates & refines JSON article via AI agents  
3. **Perplexity Research Call** → Deep-dive content generation  
4. **Editorial Loop** → Up to 3 AI-driven revisions  
5. **Contentful Publish** → Pushes final JSON into CMS  

---

### 📦 Node-by-Node Breakdown

```mermaid
flowchart LR
  A[Webhook: Chat Trigger] --&gt; B[AI Writer Agent]
  B --&gt; C[HTTP Request: Perplexity Content]
  C --&gt; D[Function: Format Output & Citations]
  D --&gt; E[Loop Start: Initialize Count]
  E --&gt; F[AI Editor Agent]
  F --&gt; G{action == "rewrite"?}
  G -- yes --&gt; H[Function: Merge Improvements]
  H --&gt; I[Increment Count] --&gt; F
  G -- no --&gt; J[Stop Loop]
  J --&gt; K[HTTP Request: Publish to Contentful]
```

### Webhook: Chat Trigger

**Type**: HTTP Webhook (POST /webhook/knowledge-article)

**Payload**:

```
{ 
	"chatInput": "What topics should I write about?" 
}
```

**Purpose**: Kicks off the workflow on that chat prompt.

### AI Writer Agent

**Inputs**: chatInput or existing article JSON

**Outputs**:

```
{
  "title": "...",
  "slug": "...",
  "category.id": "...",
  "description": "...",
  "keywords": [...],
  "content": "...",
  "metaTitle": "...",
  "metaDescription": "...",
  "readingTime": 5,
  "difficulty": "intermediate"
}
```

**Purpose**: Generates the article skeleton (metadata + initial content).

# HTTP Request: Perplexity Content

**Method:** POST

**URL:** https://api.perplexity.ai/research

**Body:**
```json
{
  "model": "sonar-deep-research",
  "query": "{{ $json.title }}",
  "length": 1000
}
```

**Purpose:** Retrieves a long-form, deeply researched draft for the article body.

## Function: Format Output & Citations

**Logic:**

- Parse raw Perplexity response
- Extract source URIs
- Append them under a sources markdown list

## Editorial Loop

1. Initialize Counter to 0
2. AI Editor Agent
   - Reads draft JSON
   - Returns either:
     - `action: "rewrite" + improvements: [...]`
     - or `action: "submit"`
3. Merge Improvements (if rewriting)
   - Applies suggested updates to JSON fields
4. Limit Check
   - Stops after 3 iterations or on "submit"

## HTTP Request: Publish to Contentful

**Method:** PUT

**URL:** https://cdn.contentful.com/spaces/{space}/environments/master/entries/{entryId}

**Headers:**
- Authorization: Bearer &lt;token&gt;
- Content-Type: application/vnd.contentful.management.v1+json

**Body:** Maps JSON → Contentful entry fields

**Outcome:** Publishes the finalized article live.

## 🔍 Design Rationale & Best Practices

### Separation of Concerns
Writer vs. Editor agents isolate creative drafting from quality review.

### Idempotent Loop
Counter + action flags prevent infinite retries.

### Extensibility
Swap in different research APIs or CMS targets with minimal changes.

### Structured JSON
Ensures predictable input/output for each node.

## 🔗 Nodes Used

Function, HTTP Request, Execute Sub-workflow, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
