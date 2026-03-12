# 🎬 Generate & publish SEO blog posts to Blogger using OpenRouter AI & Mediastack News

> ⚡ **4,614 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow automates the entire pipeline of generating, formatting, and publishing SEO-rich blog posts to a Blogger site—ideal for auto service businesses.

What it does:

⏱ Runs on a schedule via the Schedule Trigger

📰 Fetches trending news from Mediastack (technology category)

🖼 Generates relevant images using the Pexels API

🧠 Creates SEO-optimized content using AI agents (LangChain & OpenRouter)

📝 Formats content into Blogger-compatible HTML, including title, metadata, images, FAQs, and internal linking

🔄 Posts directly to Blogger via authenticated Google Blogger API

📢 Sends Telegram notifications with previews and publishing confirmations

🔐 Uses secure credentials (no hardcoded API keys)

Ideal For:

Bloggers and marketers looking to automate content creation

Auto repair, dealership, or detailing businesses maintaining a content strategy

Agencies managing multiple Blogger-based SEO campaigns

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
