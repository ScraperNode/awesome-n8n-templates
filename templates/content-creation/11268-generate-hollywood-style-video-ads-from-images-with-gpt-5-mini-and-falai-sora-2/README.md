# 🎬 Generate Hollywood-style video ads from images with GPT-5 Mini and Fal.ai Sora-2

> ⚡ **157 views** · 🎬 [Content Creation & Video](../)

## Description

## 🎬 Hollywood-Style Ads in Seconds (Fal.ai Sora-2 Version)

Turn a **single product image + short text description** into a cinematic 8-second ad using **Fal.ai’s Sora-2 Image-to-Video model**. Perfect for ad agencies, marketing teams, and UGC creators who want to produce high-quality video ads instantly without editors or camera crews.

---

## 🧩 Problem It Solves
Producing ad videos usually requires writers, editors, equipment, and several review cycles.  
This workflow replaces that process with a fully automated pipeline that generates **studio-quality ads on demand**.

---

## 🏢 Real Use Cases
### 1. Ad Agencies  
Deliver Hollywood-style ads to clients instantly from a simple image upload.

### 2. UGC Creators  
Create multiple ad variations in minutes instead of spending hours filming.

### 3. SMB Marketing  
Generate product promo videos for websites, social media, and email campaigns.

---

## ⚙️ How It Works  
1. Your frontend sends **image + text** to the workflow webhook.  
2. Image is resized to 1280×720.  
3. GPT-5 Mini writes a cinematic Sora-2 compatible prompt.  
4. Fal.ai Sora-2 generates a realistic 8-second lifestyle ad.  
5. Workflow polls status and retrieves the final video.  
6. Sends the video URL back to your frontend.  
7. Optional: Sends a Telegram notification.  

---

## 🧪 Requirements  
- Fal.ai API Key  
- Cloudinary Account (optional, for image storage)  
- n8n (latest recommended version)  
- Frontend (Lovable / AI Studio / Bubble / React)

---

## 🎨 Template Metadata  
**Template Author:** Sandeep Patharkar  
**Category:** Content Generation / Video Ads  
**Difficulty:** Intermediate  
**Setup Time:** 10–12 minutes  

---

## 📬 Connect With Me  
LinkedIn → www.linkedin.com/in/sandeeppatharkar  
YouTube → https://www.youtube.com/@fasttrackaimastery  
Website → https://fasttrackaimastery.com  
Skool Community → https://www.skool.com/aic-plus

## 🔗 Nodes Used

Edit Image, HTTP Request, Webhook, Telegram, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
