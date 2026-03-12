# 🎬 Create AI viral videos using NanoBanana 2 PRO & VEO3.1 and publish via Blotato

> ⚡ **33,330 views** · 🎬 [Content Creation & Video](../)

## Description

# 💥 Create AI Viral Videos using NanoBanana 2 PRO & VEO3.1 and Publish via Blotato

![Workflow Overview](https://www.dr-firas.com/nanobananaPro.png)

### Who is this for?

This template is for **content creators, marketers, agencies, and UGC studios** who want to turn a simple Telegram message into **AI-generated vertical videos**, automatically published across multiple social platforms using **[Blotato](https://blotato.com/?ref=firas)**.  

---

### What problem is this workflow solving? / Use case

Creating short-form video ads usually requires:
- Designing visuals
- Writing hooks and captions
- Generating or editing video
- Manually uploading to TikTok, Instagram, YouTube, Facebook, LinkedIn, X, etc.

This workflow solves that by automating the full pipeline from **image + idea → edited image → AI video → multi-platform post**.

---

### What this workflow does

1. **Create Image with NanoBanana 2 PRO**  
   - User sends a photo + caption idea to a Telegram bot.  
   - OpenAI Vision analyzes the reference image.  
   - An LLM builds a UGC-style image prompt.  
   - **NanoBanana 2 PRO** generates an enhanced, UGC-friendly image.  

2. **Generate Video with VEO3.1**  
   - An AI Agent structures a detailed Veo prompt (scene, camera, lighting, audio).  
   - Prompt is optimized and sent to **VEO3.1 reference-to-video**.  
   - The result is a **9:16, ~8s vertical video** downloaded back into n8n.

3. **Publish with Blotato**  
   - Video is uploaded to **Blotato**.  
   - Posts are created for TikTok, Instagram, YouTube, Facebook, LinkedIn, and X using the AI-generated caption, title, and hashtags.  
   - A final “Published” message is sent on Telegram.

---

### Setup

1. Create and configure:
   - **Telegram bot** (token in `Set: Bot Token (Placeholder)` node).
   - **OpenAI** credentials.
   - **Fal.ai API key** (for NanoBanana 2 PRO + VEO3.1).
   - **[Blotato](https://blotato.com/?ref=firas)** account + API credentials and connected social accounts.
2. Import the template into n8n and update all credential references.
3. Test by sending a product image + short idea to your Telegram bot.

---

### How to customize this workflow to your needs

- Edit the **UGC image prompt system message** to change visual style (more cinematic, minimal, etc.).
- Adjust the **VEO prompt optimizer** to tweak duration, mood, or camera movement.
- Enable/disable specific **Blotato platforms** depending on where you want to publish.
- Modify the caption/hashtag generation logic to match your brand tone, language, or niche.

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/NonoBanan-PRO-2-2b53d6550fd981a5acbecf7cf50aeb3c?source=copy_link)
### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
