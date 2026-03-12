# 📱 The title is very good, clearly conveying the template's purpose while mentioning key technologies

> ⚡ **603 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works
- Collects articles from your preferred RSS feeds. 
- Rates and tags each article using an AI model (e.g., QWEN 14B-s4), filtering for relevance and quality. 
- Summarizes high-rated articles with a language model (e.g., Gemma3 4B) for quick, digestible reading. 
- Checks for duplicates to avoid sending the same article twice. 
- Formats and sends the top articles as an HTML newsletter via Gmail, using OAuth2 authentication. 
- Stores records in a Postgres database, tracking which articles have been sent and their ratings.

## Requirements
- Postgres Account
- AI Models (if you work localy use Ollama)
- In the cloud you have to change Ollama node to your prefered Model Node
- RSS Feed of your desire
- Google Auth2, if you want to use Gmail

## Recommendations
- Use n8n local version for this workflow
- Here are some more informations: https://github.com/falks-ai-workbench/n8n_newsletter

## 🔗 Nodes Used

Postgres, RSS Read, Gmail, Schedule Trigger, Basic LLM Chain, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
