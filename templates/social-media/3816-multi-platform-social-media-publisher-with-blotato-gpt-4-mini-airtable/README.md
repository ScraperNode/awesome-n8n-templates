# 📱 Multi-platform social media publisher with Blotato, GPT-4 Mini & Airtable

> ⚡ **2,854 views** · 📱 [Social Media & Email Marketing](../)

## Description

**How it works**  
• Automates multi-platform social media posting (Instagram, YouTube, TikTok, etc.) using AI-generated content  
• Integrates Airtable, n8n, and Blotato for full content scheduling and publishing  
• Supports both image and video uploads with dynamic text and account routing

**Set up steps**  
• Takes ~15–30 minutes to set up depending on how many platforms you connect  
• Requires Airtable personal access token and Blotato API key  
• Uses sticky notes throughout the workflow to explain config, tokens, and troubleshooting clearly

## 🔗 Nodes Used

Airtable, HTTP Request, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
