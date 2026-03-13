# 📱 Automate RSS to Instagram with AI-generated content and Cloudinary

> ⚡ **81 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

### **What it does**
- Reads and aggregates news from one or more RSS feeds (customizable by category).
- Uses AI to select the most relevant or engaging articles.
- Generates a caption and headline with a natural, professional tone.
- Creates a realistic AI-generated image to match the topic.
- Uploads the image to Cloudinary and publishes the post directly to Instagram through the Meta Graph API.
- Runs automatically on schedule (default: every 5 hours) — no manual steps required.

### **Why it’s different**
- Works with any subject or niche, from tech to fashion, news, travel, and more.
- Includes a guide with curated RSS feed sources by category — ready to plug in.
- AI-driven content generation for text and visuals, tuned for professional results.
- Fully automated workflow — from discovery to publishing.
- Self-hosted and scalable, with no vendor lock-in.

### **What’s included**
- Workflow JSON file (import-ready for n8n).
- PDF deployment guide (written together), covering:
- how to set up RSS sources by category;
- configuring APIs (OpenAI, Cloudinary, Meta Graph);
- scheduling and testing the workflow;
- recommended best practices for stability and scaling.

## 🔗 Nodes Used

Edit Image, RSS Read, Facebook Graph API, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
