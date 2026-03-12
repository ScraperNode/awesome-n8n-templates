# 🔬 Extract Clean Web Content with Anti-Bot Fallback for AI Agents & Workflows

> ⚡ **638 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

# Clean Web Content Extraction with Anti-Bot Fallback
Extract clean and structured text from any webpage with optional fallback to an anti-bot scraping service. Ideal for AI tools and content workflows.

## 🧠 How it Works
This sub-workflow enables reliable and clean scraping of any public webpage by simply passing a **url** parameter. It is designed to be embedded into other workflows or used as a tool for AI agents.

It supports two output modes:
- **fulltext:** `true` — returns *{ title, text }* with full page content
- **fulltext:** `false` — returns *{ title, url, content }* with a short excerpt

💡 If the site is protected by anti-bot systems (like Cloudflare), it will automatically fallback to [Scrape.do](https://scrape.do/), a scraping API with a generous free plan.

🧩 This template requires the [n8n-nodes-webpage-content-extractor](https://www.npmjs.com/package/n8n-nodes-webpage-content-extractor) community node, so it only works in self-hosted n8n environments.

## 🚀 Use Cases
- As a reusable sub-workflow, via **Execute Sub-workflow** node.
-  As a tool for an AI Agent, compatible with **Call n8n Workflow Tool**.

Perfect for chatbots, summarization workflows, or RSS/feed enrichment. Empowers your AI Agent with the ability to browse and extract readable content from websites automatically.

## 🔖 Parameters
- `url` (string): the webpage URL to scrape
- `fulltext` (boolean): set `true` for full page content, `false` for summarized output

## ⚙️ Setup
- Install the community node [n8n-nodes-webpage-content-extractor](https://www.npmjs.com/package/n8n-nodes-webpage-content-extractor) in your self-hosted n8n instance.
- Create a free account at [Scrape.do](https://scrape.do/) and obtain your API Token.
- In the workflow, locate the **Scrape.do HTTP Request** node and configure the credentials using your API Token.
- Detailed step-by-step instructions are available in the workflow notes.

The Scrape.do API is only used as a fallback when conventional scraping fails, helping you preserve your API credits.

## 🔗 Nodes Used

HTTP Request, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
