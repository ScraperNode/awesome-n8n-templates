# 📖 Index n8n workflows and enable semantic AI search with OpenAI and Supabase

> ⚡ **81 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# n8n Workflow Intelligence (RAG): Auto Indexing & Semantic AI Search with Supabase Vector DB

This workflow automatically indexes your n8n workflows every 24 hours, converts them into vector embeddings using OpenAI and stores them in Supabase. It exposes a webhook that lets you query your workflows in natural language. The AI agent uses Retrieval-Augmented Generation (RAG) to fetch relevant workflow data and generate contextual answers—making it easy to understand, debug and reuse automation logic.

### Quick Implementation Steps

1. Enable n8n API and configure authentication (header-based).
2. Set up Supabase with `pgvector` and create the required table and function.
3. Add OpenAI credentials (for embeddings and chat model).
4. Import and activate the workflow in n8n.
5. Send a POST request to `/ask-workflows`:
   ```json
   {
     "query": "How does my webhook workflow work?"
   }
   ```
6. Receive AI-powered answers based on your workflows.


## What It Does

This workflow creates an intelligent knowledge layer on top of your n8n automations. It automatically fetches workflows from your n8n instance, processes each node and converts them into structured text chunks. These chunks are transformed into vector embeddings using OpenAI and stored in Supabase for semantic search.

Once indexed, users can query workflows through a webhook endpoint using natural language. The AI agent retrieves relevant workflow data using vector similarity search and generates meaningful responses. It can also guide users directly to workflows using links.

In short, it transforms your workflows into a searchable, AI-powered system.


## Who It's For

- Developers managing multiple n8n workflows
- Automation engineers handling complex pipelines
- Teams working on shared n8n environments
- Businesses needing faster debugging and workflow discovery
- Anyone looking to add AI-powered search to automation systems


## Requirements

**1. [n8n API Access](https://n8n.partnerlinks.io/om1efg2qgvwi)**

- Enable API in your n8n instance
- Example endpoint:
```json 
http://YOUR_N8N_HOST:5678/api/v1/workflows
```
- Requires authentication via HTTP headers (API key/token)

**2. Supabase Setups**

**Enable Extension**

```json 
create extension if not exists vector;
```
**Create Table**

```json 
create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  content text,
  metadata jsonb,
  embedding vector(1536)
);
```

**Create Match Function**

```json 
create or replace function match_documents (
  query_embedding vector(1536),
  match_count int,
  filter jsonb default '{}'::jsonb
)
returns table (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding &lt;=&gt; query_embedding) as similarity
  from documents
  where (filter = '{}'::jsonb or documents.metadata @&gt; filter)
  order by documents.embedding &lt;=&gt; query_embedding
  limit match_count;
end;
$$;
```

**3.Credentials Required**

- OpenAI API key (for embeddings and chat model)
- Supabase API credentials
- n8n API authentication (header-based)


## How It Works & Set Up

**Step 1: Auto Sync Trigger**

- Runs every 24 hours
- Keeps your vector database updated automatically

**Step 2: Fetch Workflows**

- Calls n8n API to retrieve workflows
- Current limit is set to 5 (can be increased)

**Step 3: Split Workflows**

- Splits API response into individual workflows
- Processes them one at a time

**Step 4: Clear Existing Data**

- Deletes existing vector entries for each workflow
- Ensures no duplication

**Step 5: Transform into Chunks**

Each workflow node is converted into structured text:
```json 
Workflow: "My Workflow". Node Name: "Webhook". Type: "n8n-nodes-base.webhook". Logic: {...}
```

**Step 6: Generate Embeddings**

- Uses OpenAI embedding model
- Converts chunks into vector format

**Step 7: Store in Supabase**

- Stores content, metadata and embeddings
- Enables semantic retrieval

**Step 8: Query via Webhook**

Endpoint:
```json 
/ask-workflows
```
Request:
```json 
{
  "query": "Find workflows using webhook"
}
```

**Step 9: AI Agent + RAG**

- AI agent receives query
- Uses vector search tool
- Retrieves relevant chunks
- Generates contextual answer

**Step 10: Return Response**

- Sends structured response back to user
- Includes workflow links:
```json 
http://YOUR_N8N_HOST:5678/workflow/[ID]
```


## How To Customize Nodes

- **Fetch n8n Workflows API**
  - Increase limit
  - Add filters for specific workflows
- **Transform Workflow to Chunks**
  - Include connections, credentials or triggers
- **Embedding Model**
  - Upgrade model for better accuracy
- **AI Agent Prompt**
  - Modify instructions, formatting or tone
- **Metadata**
  - Add fields like project name, owner or tags


## Add-ons (Enhancements)

- Real-time indexing via webhook trigger
- Workflow version history tracking
- UI dashboard for search
- Slack or Discord chatbot integration
- AI debugging assistant
- Workflow recommendation system


## Use Case Examples

**1. Workflow Discovery**
- “Do I already have a webhook + email automation?”

**2. Debugging Assistance**
- “Which workflow is calling this API?”

**3. Developer Onboarding**
- Explore workflows using natural language

**4. Reuse Automation Logic**
- Find and reuse existing patterns

**5. Documentation System**
- Automatically understand workflow structure
This workflow can support many more use cases depending on your automation needs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|----------------|----------|
| No workflows fetched | Incorrect API URL or authentication | Verify endpoint and headers |
| Empty responses | No indexed data available | Ensure indexing process has completed successfully |
| Supabase error | Missing table or function setup | Run the required SQL setup scripts properly |
| Duplicate entries | Delete step failed or skipped | Check metadata filter logic in delete node |
| Poor answers | Weak or improper chunking strategy | Improve workflow-to-text transformation logic |
| Embedding errors | OpenAI API issue or invalid key | Check OpenAI credentials and usage limits |


## Need Help?

If you need help setting up or extending this workflow with 

- AI-powered workflow assistants  
- Custom RAG implementations  
- Advanced n8n automation systems  
- Enterprise-grade automation solutions  

Contact our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** for expert support and custom development.

We can help you scale this into a production-ready AI automation platform.

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase, Schedule Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
