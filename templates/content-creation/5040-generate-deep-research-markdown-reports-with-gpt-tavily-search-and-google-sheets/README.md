# 🎬 Generate deep research markdown reports with GPT, Tavily Search, and Google Sheets

> ⚡ **588 views** · 🎬 [Content Creation & Video](../)

## Description

**This workflow generates deep researched report in markdown format and saves it in Google Sheet, that I then use for generating blogs for my website - [Architjn Blogs](https://architjn.com/blog)**

## How it works
1. User submits a search topic through a form.
2. AI generates five deep-dive subtopics for that main topic.
3. AI creates a research report intro, title, and table of contents based on those topics.
4. Each subtopic is sent to a search API (Tavily) to collect top 5 sources.
5. AI writes detailed Markdown content for each subtopic using retrieved sources.
6. Final content, ToC, intro, and clickable sources are saved to a Google Sheet.

## Set up steps
- Requires connections to OpenRouter (AI), Tavily (search API), and Google Sheets.
- Import into n8n and connect credentials for the above services.
- Configure Google Sheet with proper column headers and grant edit access.
- Estimated setup time: 20–30 minutes with working API keys.
- Includes embedded instructions and markdown-style annotations for guidance.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Structured Output Parser, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
