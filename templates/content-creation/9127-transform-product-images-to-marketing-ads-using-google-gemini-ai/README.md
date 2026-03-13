# 🎬 Transform product images to marketing ads using Google Gemini AI

> ⚡ **1,094 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Transform Product Photos into Marketing Images with AI

**Made by [Biznova](https://www.biznova.tech/en)** | **[TikTok](https://www.tiktok.com/@biznova_tech)**

---

### 🎯 Who's it for
E-commerce sellers, social media marketers, small business owners, and content creators who need professional product advertising images without expensive photoshoots or graphic designers.

### ✨ What it does
This workflow automatically transforms simple product photos into polished, professional marketing images featuring:
- Professional models showcasing your product
- Aesthetically pleasing, contextual backgrounds
- Professional lighting and composition
- Lifestyle scenes that help customers envision using the product
- Commercial-ready quality suitable for ads and e-commerce

### 🚀 How it works
1. Upload your basic product photo via the web form
2. AI analyzes your product and generates a complete marketing scene
3. Download your professional marketing image automatically
4. Use it immediately in ads, social media, or product listings

### ⚙️ Setup Requirements
1. **OpenRouter Account**: Create a free account at [openrouter.ai](https://openrouter.ai)
2. **API Key**: Generate your API key from the OpenRouter dashboard
3. **Add Credentials**: Configure the OpenRouter API credentials in the "AI Marketing Image Generator" node
4. **Test**: Upload a sample product image to test the workflow

### 🎨 How to customize
- **Edit the prompt** in the "AI Marketing Image Generator" node to match your brand style
- **Adjust file formats** in the upload form (currently accepts JPG/PNG)
- **Modify the response message** in the final form node
- **Add your branding** by including brand colors or style preferences in the prompt

### 💡 Pro Tips
- Use high-resolution product images for best results
- Test different prompt variations to find your ideal style
- Save successful prompts for consistent brand imagery
- Batch process multiple products by running the workflow multiple times


## 🔧 Quick Setup Guide

### Prerequisites
1. OpenRouter account ([Sign up here](https://openrouter.ai))
2. API key from OpenRouter dashboard

### Configuration Steps
1. Click on "AI Marketing Image Generator" node
2. Add your OpenRouter API credentials
3. Save and activate the workflow
4. Test with a product image

### Customization
**To change the image style:**
- Edit the prompt in the "AI Marketing Image Generator" node
- Add specific instructions about colors, mood, or setting
- Include brand-specific requirements

**Example custom prompt additions:**
- "Use a minimalist white background"
- "Feature a modern, urban setting"
- "Include warm, natural lighting"
- "Show the product in a luxury lifestyle context"

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
