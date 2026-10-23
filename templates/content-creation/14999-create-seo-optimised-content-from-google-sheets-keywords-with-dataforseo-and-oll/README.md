# 🎬 Create SEO-optimised content from Google Sheets keywords with DataForSEO and Ollama

> ⚡ **38 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow creates content for your primary keywords in a Google Sheet by using SERP data and natural language skills of LLMs to create content at scale.

Steps:
1) Fetch Rows from a Google Sheet with keywords in Column 'Keyword'
2) Use DataforSEO API (or any other SERP API) to fetch top results, AI Overview, related searches, PAA, etc., and compile them for a prompt.
3) Feed the SERP Data and SEO Guidelines to an AI Agent with a locally run LLM Model (to save cost) to create the content.
4) Add the data in the same Google Sheet in the column header 'Output'.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, Ollama Chat Model, MongoDB Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
