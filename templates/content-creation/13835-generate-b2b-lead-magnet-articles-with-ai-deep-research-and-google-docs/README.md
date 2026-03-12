# 🎬 Generate B2B lead magnet articles with AI deep research and Google Docs

> ⚡ **19 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?

This workflow is built for B2B marketers, consultants, founders, and agency owners who need to produce high-quality, research-backed thought leadership content — without spending hours on research and writing.

## What this workflow does

This agent-powered workflow takes a simple topic input and transforms it into a comprehensive, professionally formatted lead magnet article saved directly to Google Docs. It runs parallel deep research across 5 strategic angles, compiles the findings, and produces a polished long-form article ready for LinkedIn, your blog, or a downloadable PDF.

## How it works

1. **Topic Input** — You submit a topic via the built-in chat trigger.
2. **Strategic Query Generation** — An AI agent refines your topic into 5 targeted research queries covering market context, pain points, frameworks, case studies, and future trends.
3. **Parallel Deep Research** — Each query is researched independently by an AI agent, producing 400–600 words of data-rich content per section.
4. **Compilation & Structuring** — All research is merged into a structured article with a table of contents, statistics, and sources.
5. **Final Writing & Editing** — A writing agent produces the complete 2,500–4,000 word article with proper formatting.
6. **Google Docs Output** — The article is created as a formatted Google Doc with bold text, headings, and a shareable link.
7. **Tracking** — Each generated article is logged to a Google Sheet for tracking.

## Setup steps

1. **Connect your Ollama instance** — Set up your Ollama API credentials (or swap the LLM node for OpenAI, Anthropic, etc.).
2. **Connect Google Docs OAuth2** — Create OAuth2 credentials for the Google Docs API.
3. **Connect Google Drive OAuth2** — Create OAuth2 credentials for the Google Drive API (used to make the doc shareable).
4. **Connect Google Sheets OAuth2** — Create OAuth2 credentials and update the Sheet URL in the "Log to Tracking Sheet" node to point to your own spreadsheet.
5. **Update author name** — In the "Validate Queries" Code node, change `YOUR_AUTHOR_NAME` to your name.
6. **Activate and test** — Open the chat trigger URL and submit a topic.

## Requirements

- n8n instance (self-hosted or cloud)
- Ollama running locally (or substitute with any supported LLM provider)
- Google Cloud project with Docs, Drive, and Sheets APIs enabled
- OAuth2 credentials for Google services

## How to customize

- **Swap the LLM** — Replace the Ollama Chat Model node with OpenAI, Anthropic, Google Gemini, or any LangChain-compatible model.
- **Change the output format** — Modify the "Final Editor and Polish" system prompt to produce blog posts, whitepapers, or email sequences instead.
- **Adjust research depth** — Edit the number of strategic queries or word count targets in the agent prompts.
- **Add distribution** — Extend the workflow to post directly to LinkedIn, send via email, or upload to your CMS.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Ollama Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
