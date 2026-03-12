# 🎬 Fully automate blog creation with GPT & publish to WordPress via Google Sheets

> ⚡ **809 views** · 🎬 [Content Creation & Video](../)

## Description

Creating high-quality, SEO-friendly blog posts consistently can be time-consuming. This template helps content creators, bloggers, SEO specialists, and agencies fully automate their blogging workflow. By combining AI content generation (GPT), Google Sheets for keyword management, and WordPress for direct publishing, this workflow saves hours of manual work and ensures professional results.

## ⚡ Use Cases

Automate content creation for niche blogs.

Generate SEO-optimized articles from keyword lists.

Keep a consistent publishing schedule without manual effort.

Scale content production for agencies or affiliate sites.

## ✅ Pre-requirements

Before using this template, you will need:

Google Sheets API credentials (for managing topics & keywords).

AI API key (e.g., OpenAI, LM Studio, Ollama, or any connected model).

WordPress credentials with API access.

Basic understanding of n8n workflow editor.

## 🔧 Step-by-Step Setup

- Connect Google Sheets:
- Add your API credentials.-
- Use the sheet to store keywords, titles, and categories.
- Integrate AI Model (GPT or others):
- Insert your API key into the AI node.
- Customize the SEO writing prompt for Rank Math 90+ score.

## Content Processing:

The workflow will fetch one keyword at a time.

AI will generate a 1200–1500+ word SEO blog post.

Output is cleaned into proper HTML.

## Publish to WordPress:

Configure the WordPress node with your site credentials.

Automatically post as Draft or Published.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
