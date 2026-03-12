# 📱 Repurpose blog articles into social media posts with Google Gemini AI

> ⚡ **27 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for
Content creators, marketers, and solopreneurs who want to maximize reach from every blog post without spending hours manually adapting content for each social platform.

## What this workflow does

This workflow automatically transforms any blog article into ready-to-publish social media content using Google Gemini AI (free API). Send a blog URL via webhook, and receive structured JSON output containing:

- **Summary**: 2-3 sentence article overview
- **Twitter**: Platform-optimized tweet with hashtags (280 chars)
- **LinkedIn**: Professional post with hook, insights, and CTA (150-300 words)
- **Instagram**: Engaging caption with emojis and 20-30 hashtags
- **Key Takeaways**: 3-5 actionable bullet points

## How to set up
1. Get a free Google Gemini API key from Google AI Studio
2. Add it as a **Google Gemini (PaLM) Api** credential in n8n
3. Select the credential in the Google Gemini Chat Model node
4. Customize language and tone in the Config node
5. Activate and send a POST request with `{"url": "https://your-blog-post.com"}`

## Requirements

- Google Gemini API key (free tier available)
- n8n instance (cloud or self-hosted)

## How to customize

- Edit the **Config** node to change output language or tone
- Modify the AI prompt to add platforms (TikTok, Pinterest, etc.)

- Replace webhook response with Google Sheets, Notion, or Slack output

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
