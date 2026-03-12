# 🎬 Automated blog generation with Gemini AI, GitHub & Jekyll publishing

> ⚡ **922 views** · 🎬 [Content Creation & Video](../)

## Description

## 📝 Use Case

This n8n workflow automates the creation and publication of technical blog posts based on a list of topics stored in Google Sheets. It fetches context using **Tavily** and **Wikipedia**, generates Markdown-formatted content with **Gemini AI**, commits it to a **GitHub repository**, and updates a **Jekyll-powered blog** — all without manual intervention.

Ideal for developers, bloggers, or content teams who want to streamline technical content creation and publishing.

---

## ⚙️ Setup Instructions

### 🔑 Prerequisites

- n8n (cloud or self-hosted)
- Tavily API key
- Google Sheets with blog topics
- Gemini (Google Palm) API key
- GitHub repository (Jekyll enabled)
- GitHub OAuth2 credentials
- Google OAuth2 credentials

### 🧩 Setup Steps

1. **Import** the workflow JSON into your n8n instance.
2. Set up the following credentials in n8n:
   - `Tavily API`
   - `Google Sheets OAuth2`
   - `Google Palm/Gemini AI`
   - `GitHub OAuth2`
3. Prepare your **Google Sheet**:
   - Columns: `Title`, `status`, `row_number`
   - Set `status` to blank for topics to be picked up.
4. Configure:
   - GitHub repo and `_posts/` path
   - Jekyll setup (front matter, `_config.yml`, GitHub Pages)
5. Adjust prompt/custom parameters if needed.
6. Enable and deploy the workflow. Schedule it daily or trigger manually.

---

## 🔄 Workflow Details

| Node | Function |
|------|----------|
| **Schedule Trigger** | Triggers the flow at a set interval |
| **Google Sheets (Get Topic)** | Fetches the next incomplete blog topic |
| **Extract Topic** | Parses topic text from the sheet |
| **Tavily Search** | Gathers up-to-date content related to the topic |
| **Wikipedia Tool** | Optionally adds more context or images |
| **Summarize Results** | Formats the context for the AI |
| **Gemini AI Agent (LangChain)** | Generates a Markdown blog post with YAML front matter |
| **Set File Parameters** | Prepares the filename, content, and commit message |
| **GitHub Commit** | Uploads the `.md` file to the `_posts/` directory |
| **Update Google Sheet** | Marks topic as `done` after successful commit |

---

## 🛠️ Customization Options

- Change LLM prompt (e.g. tone, depth, format).
- Use OpenAI instead of Gemini by switching nodes.
- Modify filename pattern or GitHub repo path.
- Add Slack/Discord notifications after publish.
- Extend flow to upload images or embed YouTube links.

---

## ⚠️ Community Nodes Used

This workflow uses the following **community nodes**:

- `@tavily/n8n-nodes-tavily.tavily` – for deep search

&gt; ⚠️ Ensure these are installed and enabled in your n8n instance.

---


## 💡 Pro Tips

- Use GitHub Actions to trigger an automatic Jekyll build post-commit.
- Structure blog posts with front matter, headings, and table of contents for SEO.
- Set `Schedule Trigger` to daily at a fixed time to keep content flowing.
- Enhance formatting in AI output using code blocks, images, and lists.

---

## ✅ Example Output

```markdown
---
title: "How LLMs Are Changing Web Development"
date: "2025-07-25"
categories: [webdev, AI]
tags: [LLM, Gemini, n8n, automation]
excerpt: "Learn how LLMs like Gemini are transforming how we generate and deploy developer content."
author: "Saswat Saubhagya"
---

## Table of Contents
- [Introduction](#introduction)
- [Understanding LLMs](#understanding-llms)
- [Use Cases in Web Development](#use-cases-in-web-development)
- [Challenges](#challenges)
- [Conclusion](#conclusion)

...

## 🔗 Nodes Used

GitHub, Google Sheets, Schedule Trigger, AI Agent, Wikipedia, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
