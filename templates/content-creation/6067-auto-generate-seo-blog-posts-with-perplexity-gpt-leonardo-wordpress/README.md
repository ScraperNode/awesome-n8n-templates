# 🎬 Auto-generate SEO blog posts with Perplexity, GPT, Leonardo & WordPress

> ⚡ **38,544 views** · 🎬 [Content Creation & Video](../)

## Description

## ✨ SEO Blog Post Automation with Perplexity, GPT, Leonardo AI & WordPress

This workflow automates the creation and publishing of weekly SEO-optimized blog posts using AI and publishes them directly to WordPress — with featured images and tracking in Google Sheets.

---

## 🧠 Who is this for

This automation is ideal for:

- Startup platforms and tech blogs  
- Content creators and marketers  
- Solopreneurs who want consistent blog output  
- Spanish-speaking audiences focused on startup trends  

---

## ⚙️ What it does

- ⏰ Runs every Monday at 6:00 AM via CRON  
- 📡 Uses Perplexity AI to research trending startup topics  
- 📝 Generates a 1000–1500 word article with GPT in structured HTML  
- 🎨 Creates a cinematic blog image using Leonardo AI  
- 🖼️ Uploads the image to WordPress with alt text and SEO-friendly filename  
- 📰 Publishes the post in a pre-defined category  
- 📊 Logs the post in Google Sheets for tracking  

---

## 🚀 How to set it up

1. **Connect your credentials**:
   - Perplexity API  
   - OpenAI (GPT-4.1 Mini or similar)  
   - Leonardo AI (Bearer token)  
   - WordPress (Basic Auth)  
   - Google Sheets (OAuth2)

2. **Customize your content**:
   - Adjust the prompt inside the HTTP node to fit your tone or focus  
   - Change the WordPress category ID  
   - Update scheduling if you want a different publishing day  

3. **Test the workflow manually** to ensure all steps function correctly

---

## 💡 Pro tips

- Add Slack or email nodes to get notified when a post goes live  
- Use multiple categories or RSS feeds for content diversification  
- Adjust GPT prompt to support different languages or tones  
- Add post-validation rules if needed before publishing  

---

## 🎯 Why this matters

This workflow gives you a full editorial process on autopilot: research, writing, design, publishing, and tracking — all powered by AI. No more blank pages or manual posting.

**Use it to scale your content strategy, boost your SEO, and stay relevant — 100% hands-free.**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
