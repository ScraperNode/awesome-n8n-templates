# 🎬 Transform YouTube videos into LinkedIn posts with SearchAPI & OpenAi

> ⚡ **82 views** · 🎬 [Content Creation & Video](../)

## Description

# 🎥 YouTube to LinkedIn Poster – n8n Workflow Template

Turn any YouTube video into a high-performing LinkedIn post — automatically.

This AI-powered n8n workflow takes a YouTube video ID, fetches the transcript using SearchAPI.io, and transforms it into a professional, engaging LinkedIn post using OpenAI (via OpenRouter). Customize the writing style, automate your content repurposing, and scale your thought leadership.

---

## ⚡ What It Does

- 📥 Accepts a YouTube video ID + preferred writing profile

- 📄 Retrieves transcript via SearchAPI.io

- 🧠 Uses LLM (OpenRouter / GPT-compatible) to generate a polished LinkedIn post

- ✍️ Supports writing style customization (e.g., educational, inspirational, storytelling)

- 🔁 Handles fallback if no transcript is found

---

## 📦 What’s Included

- ✅ Webhook-based trigger (compatible with any frontend)

- ✅ YouTube transcript fetcher using SearchAPI.io

- ✅ Conditional logic to handle errors

- ✅ OpenAI content generation node with injected personality prompt

- ✅ Clean text response via webhook

---

## 🛠 Requirements

- 🧠 n8n (self-hosted or cloud)

- 🔐 API key for [SearchAPI.io](https://www.searchapi.io/)

- 🧠 OpenRouter API key (free or paid)

- 🌐 A frontend form (e.g. WordPress + fetch(), Fillout, Postman, etc.)

---

## 🚀 Installation Guide

1. Import the Workflow

   - Go to your n8n dashboard

   - Click Import and upload the JSON file

2. Configure SearchAPI

   - Sign up at [SearchAPI.io](https://www.searchapi.io/)

   - Add your API key inside the HTTP Request node labeled Get YouTube Transcript

3. Set Up OpenRouter

   - Go to Credentials → Add a new OpenRouter API credential

   - Paste your API key from [OpenRouter.ai](https://openrouter.ai/)

4. Test with Postman or UI

   - Send a POST to the webhook URL with JSON:

     ```json

     {

       "video_id": "T1nX2yDeSzM",

       "llm_profile": "educational tone"

     }

     ```

---

## 🧩 Customizing

- 🎨 Change llm_profile to match different tones (e.g., "inspirational", "founder voice", "storyteller")

- 🔗 Integrate output directly into LinkedIn via a social media scheduler API

- ✏️ Edit the prompt in the OpenAI node for different content types (Twitter threads, blog intros)

- 🚨 Add rate limiting or credit logic using WordPress + myCred or n8n queue control

---

## 💡 Use Cases

- Content repurposing agency automating short-form content from videos

- Personal brand managers scaling 1 → many posts from long-form video

- Micro-SaaS founders turning webinars, tutorials, and walkthroughs into professional posts

- YouTube creators expanding audience reach on LinkedIn

---

## 🚀 How I Used It in My MicroSaaS

I used this exact workflow as the backend for a lead magnet SaaS tool that converts YouTube videos into LinkedIn posts. With a simple UI and webhook, users paste a video link, choose a tone, and instantly receive a high-quality post they can copy and share. It increased lead generation and engagement while costing nothing in backend dev. Check it out here: **[Youtube -&gt; LinkedIn Post](https://trafficabc.com/youtube-to-linkedin-poster-with-ui/)**

The best part? I only used:

- n8n + Webhook

- SearchAPI.io

- OpenRouter API

- A WordPress front-end with credit gating

---

## 📩 Questions?

DM me on Twitter or reach out via email for setup help or white-label licensing: https://www.linkedin.com/in/gerald-akhidenor-1ab1a45/ or denorgerald@gmail.com

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
