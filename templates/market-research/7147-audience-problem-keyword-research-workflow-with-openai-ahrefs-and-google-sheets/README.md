# 📊 Audience problem keyword research workflow with OpenAI, Ahrefs and Google Sheets

> ⚡ **710 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Generates relevant keywords and questions from a a customer profile. Keyword data is enriched from ahref and everything is stored in a Google Sheet. This is great for market and customer research. Understanding search intent for a well defined audience and gives relevant actionable data in a fraction of time that manual research takes.

## How it works
* We'll define a customer profile in the 'Data' node
* We use an OpenAI LLM to fetch relevant search intent as keywords and questions
* We use an SEO MCP server to fetch keyword data from ahref free tooling
* The fetched data is stored in the Google sheet

## Set up steps
* Copy Google Sheet template and add it in all Google Sheet nodes
* Make sure that n8n has read & write permissions for your Google sheet.
* Add your list of domains in the first column in the Google sheet
* Add MCP credentials for [seo-mcp](https://github.com/cnych/seo-mcp)
* Add OpenAI [API](https://docs.n8n.io/integrations/builtin/credentials/openai/#using-api-key) credentials

## 🔗 Nodes Used

Google Sheets, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
