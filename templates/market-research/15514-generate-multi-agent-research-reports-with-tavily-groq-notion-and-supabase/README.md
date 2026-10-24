# 📊 Generate multi-agent research reports with Tavily, Groq, Notion and Supabase

> ⚡ **108 views** · 📊 [Market Research & Insights](../)

## Description

How it works
- A manual trigger sets the research topic and generates three parallel Tavily web search queries
- A Summarizer Agent (Groq Llama 3.3 70B) and an Analyst Agent (OpenRouter GPT) process the search results simultaneously, producing a factual summary and a deep trend analysis
- A Synthesis Agent (Groq Llama 3.3 70B) combines both outputs into a structured executive report with key findings, strategic implications, and recommended actions
- The report is chunked and saved as a new Notion database page, then embedded with OpenAI and indexed in Supabase for semantic search

Set up steps
- Add your Tavily, Groq, and OpenRouter API credentials (~10 min)
- Connect Notion OAuth2 and point the node to your target database
- Add your Supabase credentials and confirm your documents table has a vector column![faa.png](fileId:6111)

## 🔗 Nodes Used

HTTP Request, Notion, AI Agent, Embeddings OpenAI, Recursive Character Text Splitter, Supabase Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
