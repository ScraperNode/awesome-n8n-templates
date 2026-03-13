# 🎬 Auto-create & post social media reels with Google Veo-3 AI and GPT

> ⚡ **4,252 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

🚀 GPT-5 + Veo-3 Instagram Reel Auto-Creator & Auto-Poster

Description:
This n8n workflow is a fully automated short-form video content engine that takes your creative idea, turns it into a cinematic video using Google Veo-3 via Wavespeed API, writes an engaging Instagram caption with GPT-5, and instantly posts it to Instagram via Postiz—all without lifting a finger.

It’s designed for content creators, social media managers, and brands who want to produce high-quality, on-brand reels at scale without manual editing or posting.

Watch Step-by-step build:
www.youtube.com/@automatewithmarc

💡 Key Features:
💬 Chat-Triggered Automation (You can replace this with On Schedule trigger for automated generation) – Start the workflow with a simple message describing your video idea.

🧠 GPT-5 Video Prompt Agent – Transforms your concept into a visually rich, cinematic prompt optimized for Veo-3.

🎥 Veo-3 AI Video Generation – Creates a polished short-form reel with cinematic motion, effects, and branding.

✍️ GPT-5 Caption Writer – Crafts an impactful, scroll-stopping caption tailored for Instagram engagement.

📤 Auto-Posting with Postiz – Uploads and schedules (or instantly posts) your reel to Instagram without manual steps.

⏳ Automated Progress Checking – Wait & retry logic ensures posting only happens when the video is fully generated.

🔧 Tech Stack:
GPT-5 via OpenAI API – AI for prompt engineering & caption creation.

Google Veo-3 (via Wavespeed API) – Next-gen text-to-video model for short-form content.

Postiz API – Multi-platform social media posting automation.

n8n – Orchestration & automation engine.

📌 Ideal Use Cases:
Instagram Reels / TikTok Creators who want to post daily without editing.

Fitness, Fashion, Travel & Lifestyle Brands looking for high-quality, thematic reels.

Social Media Agencies producing client content at scale.

Event Marketers creating same-day recap videos.

🛠 Setup Instructions:
Add your API keys for OpenAI (GPT-5), Wavespeed (Veo-3), and Postiz.

Connect Postiz to your Instagram account.

Trigger the workflow with a chat message describing your desired video.

Watch your idea transform into a reel—fully captioned and posted automatically.

🎯 Why This Workflow Stands Out:
End-to-end automation from idea → video → caption → Instagram post.

AI-driven creative consistency for brand identity.

Scales your content production without hiring editors.

SEO & engagement-ready captions crafted for social virality.

## 🔗 Nodes Used

HTTP Request, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
