# 🎬 Generate social media ad images for FB/IG/Pinterest with Google Gemini Imagen

> ⚡ **176 views** · 🎬 [Content Creation & Video](../)

## Description

## **Purpose & Audience**  
Perfect for **marketing teams, agencies, solopreneurs, and e-commerce brands** who need fast, professional-quality ad creatives — without hiring designers or using Canva. This workflow automates image generation for Facebook, Instagram, and Pinterest using **Google’s Imagen 3.0** (via Gemini API).

## **What It Does**  
1. Presents a user-friendly form to collect:  
   - Business context  
   - Offer/message  
   - Brand colors  
   - Target platform (FB/IG/Pinterest)  
   - Desired ad dimensions (7 formats supported)  
2. Uses **Google Gemini’s Imagen 3.0 model** to generate platform-optimized images  
3. Delivers each image directly to your **Telegram chat** with clear captions  

✅ Supports **7 ad formats**:  
- Facebook Feed (1200×630)  
- Facebook Story (1080×1920)  
- Instagram Feed (1080×1080)  
- Instagram Story & Reel (1080×1920)  
- Pinterest Pin (1000×1500)  
- Pinterest Story (1080×1920)  

## **How to Set Up**  
1. **Get a Google Gemini API key** at [ai.google.dev](https://ai.google.dev/) (enable Imagen API)  
2. **Create a Telegram bot** via [@BotFather](https://t.me/BotFather) and note your **Bot Token + Chat ID**  
3. In n8n:  
   - Import this workflow  
   - Add **Google Gemini credentials** (use your API key)  
   - Add **Telegram credentials** (use your Bot Token)  
   - Replace `={{ $json.telegramChatId }}` in Telegram nodes with your actual **numeric Chat ID**  
4. Activate the workflow and share the **Form Trigger URL** with your team!

💡 **Pro Tip**: Enhance prompts in Gemini nodes with style keywords (e.g., “minimalist”, “vibrant”, “corporate”) for better results.

✨ **100% free to use** — only pay for Google Imagen API usage. Telegram delivery is free forever.

## 🔗 Nodes Used

Telegram, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
