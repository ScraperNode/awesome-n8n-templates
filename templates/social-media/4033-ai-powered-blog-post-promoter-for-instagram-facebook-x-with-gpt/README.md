# 📱 AI-powered blog post promoter for Instagram, Facebook & X with GPT

> ⚡ **1,200 views** · 📱 [Social Media & Email Marketing](../)

## Description

AI Social Media Promoter – Automated Blog Sharing Workflow
This workflow is built for bloggers, creators, and marketing teams who want to automatically promote new blog content across Instagram, Facebook, and X (Twitter). Its core purpose is to detect new blog posts from your RSS feed and instantly create platform-specific social media posts — complete with AI-generated captions and visuals — to drive traffic from social media back to your blog. Everything runs on autopilot: from detecting a new article to posting eye-catching content on each platform, while logging actions to Google Sheets and sending post previews by email. The result is a consistent and professional online presence with zero manual effort.

How it works
Once a new blog post appears in your RSS feed, the workflow kicks in. It checks Google Sheets to ensure the post hasn’t already been published. Then it calls GPT-4 to generate unique captions for Instagram, Facebook, and X, based on the post content and your brand’s tone. Simultaneously, OpenAI's GPT-Image generates a custom visual in the right format (square, portrait, or landscape). The workflow then publishes the complete posts using the Meta Graph API (for IG/FB) and X API (Twitter). All actions are logged in a Google Sheet, and a formatted email summary with images is sent to your inbox for review.

How to set up
To get started, connect the required APIs: OpenAI (for text and images), ImgBB or Cloudinary (for image hosting), Meta (Instagram/Facebook), X (Twitter), Google Sheets, and Gmail. Replace placeholder values in HTTP request nodes — such as your RSS URL, API keys, or spreadsheet ID. You can personalize the prompt content with your blog name, tone of voice, and call-to-action. Once connected, the system is fully automated. You can run it manually, or schedule it to check your blog daily with a Schedule Trigger node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, X (Formerly Twitter), Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
