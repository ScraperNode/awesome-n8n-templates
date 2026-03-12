# 🎬 Research-based article generator with OpenAI and web search for high SEO scores

> ⚡ **4,191 views** · 🎬 [Content Creation & Video](../)

## Description

Generate research-backed article with n8n

## Who’s it for

Content marketers, SEO teams, and founders who need fast, research-grounded blog posts or long-form articles—multi-language included. Works well for teams that want citations, outlines, and section-by-section drafting with minimal manual effort.

## How it works / What it does

Use a  **Form** to collects domain, keywords, and target language.

The workflow refines keywords, finds recent articles and authoritative citations, then synthesizes a  master outline and loops through each section: generate search queries → fetch web results → summarize findings → write the section with the advanced model. 

Finally, it aggregates all sections into a clean Markdown article. Optional delivery nodes (Email, Telegram) and an AI Agent are included but disabled by default.&#x20;

## How to set up

1. Import the workflow JSON into n8n.
2. Add your **OpenAI** credential
3. Set `simple_model` / `advanced_model` in **LLM Params**

## Requirements

* n8n instance with outbound internet access.
* OpenAI API access (Responses API + `web_search_preview`).
* (Optional) Email/Telegram credentials if you want to deliver results async

## How to customize the workflow

* Edit prompts in **LLM Params** and **Section Prompts** to match tone, structure, and SEO style
* Tweak recency and source rules in **Search Articles** / **Search Citations**.&#x20;
* Insert a **human review step** before “Write Section”,  enable delivery nodes
* Change working/output languages in the **Language** node

## 🔗 Nodes Used

Send Email, HTTP Request, Telegram, Markdown, AI Agent, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
