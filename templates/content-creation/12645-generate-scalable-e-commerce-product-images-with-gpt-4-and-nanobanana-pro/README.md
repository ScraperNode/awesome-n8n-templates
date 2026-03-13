# 🎬 Generate scalable e-commerce product images with GPT-4 and NanoBanana Pro

> ⚡ **1,965 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## 🚀 AI Image Generation Workflow – Scalable E-commerce Product Images

This workflow automates the creation of high-quality, AI-generated product images using **NanoBanana Pro**.  
It analyzes multiple reference images, generates a professional photoshoot-style prompt, creates a new image, and stores the final result with a public URL for reuse.


![Workflow Overview](https://www.dr-firas.com/scalable_e.png)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Create-scalable-e-commerce-product-images-from-photos-using-NanoBanana-Pro-2e33d6550fd9808e8891f7d606b49df7?source=copy_link)

## 👤 Who is this for?

This workflow is designed for:

- E-commerce store owners  
- Digital marketers and growth teams  
- Creative agencies  
- Automation builders using n8n  
- Anyone who wants to generate scalable, consistent product images from existing photos  

No advanced coding skills are required.

---

## ❓ What problem does this workflow solve? / Use case

Creating professional product images at scale is expensive, slow, and inconsistent.

This workflow solves:
- Manual photoshoot costs  
- Inconsistent visual branding  
- Time wasted on prompt writing  
- Difficulty generating AI-ready public image URLs  
- Repetitive image upload and storage steps  

**Typical use case:**  
Transform 3 reference photos (model + product) into a studio-quality fashion image automatically.

---

## ⚙️ What this workflow does

1. Collects **exactly 3 images** via a form upload  
2. Validates inputs to ensure all required images are present  
3. Splits images into individual processing paths  
4. Uploads original images to Google Drive (permanent storage)  
5. Generates public, crawlable image URLs  
6. Analyzes each image using AI vision (GPT-4O)  
7. Aggregates image descriptions into a structured context  
8. Generates a professional photoshoot prompt using an AI agent  
9. Creates a new image via NanoBanana Pro 
10. Polls the API until the image generation is completed  
11. Downloads the final image as a binary file  
12. Uploads the final image to Google Drive  
13. Logs results (images + descriptions) into Google Sheets  

---

## 🛠️ Setup

### Required credentials
- Google Drive (OAuth)  
- Google Sheets (OAuth)  
- OpenAI API key  
- AtlasCloud API key  

### Required configuration
1. Replace all `&lt;__PLACEHOLDER_VALUE__&gt;` fields:
   - Google Drive folder IDs  
   - Google Sheets document ID and sheet name  
   - AtlasCloud API key  
2. Ensure Google Drive folders have write permissions  
3. Confirm tmpfiles.org is reachable from your environment  

### Important notes
- The workflow expects **exactly 3 images**
- The final image is downloaded as binary before upload
- Public URLs are normalized to `https://tmpfiles.org/dl/...` for maximum AI compatibility

### 🎥 [Watch This Tutorial](https://youtu.be/EVIvyyoNrQE)

![SORA2 logo](https://www.dr-firas.com/scalle-e.png)

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)


### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
