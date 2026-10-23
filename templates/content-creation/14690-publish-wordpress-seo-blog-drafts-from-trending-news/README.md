# 🎬 Publish WordPress SEO blog drafts from trending news 

> ⚡ **154 views** · 🎬 [Content Creation & Video](../)

## Description

# Turn News into Articles — Automatically.


This workflow searches the internet for the latest news in your niche, selects the most interesting topics, writes complete long-form SEO articles with AI-generated images, and publishes them directly to WordPress as drafts - fully automated, on a schedule.

One run produces **3 complete, publish-ready articles**. Every day if you want.

---

## How it works

1. Searches the internet for the latest news in your niche
2. Selects the most relevant and interesting topics automatically
3. Generates a full article blueprint — outline, SEO metadata, image prompts
4. Writes each article section by section as structured HTML
5. Generates body images and a wide-format header image via AI
6. Uploads all images to your WordPress media library
7. Publishes each article as a draft with slug, excerpt, and featured image
8. Sends a Telegram notification confirming what was published

---


## Requirements

- n8n (self-hosted or cloud)
- OpenAI API key (or any other LLM)
- Brave Search API key (free tier works)
- WordPress site with Application Password enabled
- Telegram Bot and Chat ID

---

## Works for any niche

Travel, finance, health, tech, e-commerce - change one field and the workflow adapts completely.

## 🔗 Nodes Used

HTTP Request, Telegram, Wordpress, Schedule Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
