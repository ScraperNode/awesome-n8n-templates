# 🎬 Generate cinematic videos from text prompts with GPT-4o, Fal.AI Seedance & Audio

> ⚡ **24,550 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Who’s it for?

This workflow is built for:
- **AI storytellers**, **content creators**, **YouTubers**, and **short-form video marketers**
- Anyone looking to transform text prompts into **cinematic AI-generated videos** fully automatically
- **Educators**, **trainers**, or **agencies** creating story-based visual content at scale

---

###  What It Does

This n8n workflow allows you to automatically turn a **simple text prompt** into a **multi-scene cinematic video**, using the powerful **Fal.AI Seedance V1.0** model (developed by **ByteDance** — the creators of TikTok).

It combines the creativity of **GPT-4o**, the motion synthesis of **Seedance**, and the automation power of **n8n** to generate AI videos with ambient sound and publish-ready format.

---

### How It Works

1. Accepts a prompt from **Google Sheets** (configurable fields like duration, aspect ratio, resolution, scene count)
2. Uses **OpenAI GPT-4o** to write a vivid cinematic **narrative**
3. Splits the story into **n separate scenes**
4. For each scene:
   - GPT generates a structured cinematic description (characters, camera, movement, sound)
   - The **Seedance V1.0 model (via Fal.AI API)** renders a 5s animated video
   - Optional: Adds ambient **audio via Fal’s MM-Audio model**
5. Finally:
   - Merges all scene videos using **Fal’s FFmpeg API**
   - Optionally **uploads to YouTube automatically**

---

###  Why This Is Special

- **Fal.AI Seedance V1.0** is a highly advanced motion video model developed by ByteDance, capable of generating expressive, stylized 5–6 second cinematic clips from text.
- This workflow supports full looping, scene count validation, and wait-polling for long render jobs.
- The entire story, breakdown, and scene design are AI-generated — no manual effort needed.
- Output is export-ready: MP4 with sound, ideal for YouTube Shorts, Reels, or TikTok.

---

### Requirements

- n8n (Self-hosted recommended)
- API Keys:
  -  `Fal.AI` (https://fal.ai)
  -  `OpenAI` (GPT-4o or 3.5)
  -  `Google Sheets` [Example Google Sheet](https://docs.google.com/spreadsheets/d/1FuDdvkzq5TZ3Evs92BxUxD4qOK0EDLAzB-SayKwpAdw)

---

### How to Set It Up

1. Clone the template into your n8n instance
2. Configure credentials:
   - Fal.AI Header Token
   - OpenAI API Key
   - Google Sheets OAuth2
   - (Optional) YouTube API OAuth
3. Prepare a Google Sheet with these columns:
   - `story` (short prompt)
   - `number_of_scene`
   - `duration` (per clip)
   - `aspect_ratio`, `resolution`, `model`
4. Run manually or trigger on Sheet update.

---

### How to Customize

- Modify the storytelling tone in GPT prompts (e.g., switch to fantasy, horror, sci-fi)
- Change Seedance model params like style or seed
- Add subtitles or branding overlays to final video
- Integrate LINE, Notion, or Telegram for auto-sharing

---

### Example Output

**Prompt**: *“A rabbit flies to the moon on a dragonfly and eats watermelon together”*  
→ Result: 3 scenes, each 5s, cinematic camera pans, soft ambient audio, auto-uploaded to YouTube
[Result](https://youtu.be/_PKvi0Sfs84)

## 🔗 Nodes Used

Google Sheets, HTTP Request, YouTube, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
