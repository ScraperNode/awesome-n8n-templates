# 🔧 Arxiv paper trend search using AI, write article, send email

> ⚡ **841 views** · 🔧 [Miscellaneous](../)

## Description

This workflow gathers papers in Arxiv and specific arxiv category
AI helps to make summarized form of newsletter and send it to subscriber using gmail

## Arxive paper trend newsletter
### Setup
- Supabase
  - Table schema
    - user_email: Text - Mandatory
    - arxiv_cat: [Text]
    - interested_papers: [Text]
    - keyword: [Text]
  - Example
{
  "id": 8,
  "created_at": "2024-09-24T12:31:17.09491+00:00",
  "user_email": "test@test.com",
  "arxiv_cat": 
  [
    "cs.AI",
    "cs.LG,cs.AR"
  ],
  "interested_papers": null,
  "keyword": 
  [
    "AI architecture which includes long context problem"
  ]
}
- Qdrant vector store
  - default setup

## Setup for sub workflows
- Get arxiv category by AI for given keyword
- Get arxiv categories
- Get arxiv papers this week and scoring by AI
- Filter by keyword within given documents
- Extract paper information
- Write newsletter by AI

## 🔗 Nodes Used

Execute Sub-workflow, Gmail, Supabase, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
