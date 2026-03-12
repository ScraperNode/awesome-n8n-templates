# 🎬 Generate brand marketing shorts with GPT-4, FAL AI & ElevenLabs for social media

> ⚡ **272 views** · 🎬 [Content Creation & Video](../)

## Description

# AI‑Powered Branded Marketing Videos & Shorts (SSO-Optimized for n8n)

---

## 🧠 About This Flow

This advanced automation template allows marketing teams, content creators, and branding specialists to automatically generate and publish high-quality, visually captivating **branded short videos** across **YouTube, Instagram, and TikTok** — with zero manual effort.

The system uses **AI-powered prompt generation**, **media rendering**, and **multi-platform publishing**, combining:

- 🧠 GPT-4 via OpenRouter – to generate story-rich prompts  
- 🎨 Image creation via FAL AI  
- 🎞️ Video generation via Kling (FAL AI)  
- 🔊 Audio generation via ElevenLabs  
- 🛠️ Video compilation via Creatomate  
- 🌐 Hosting via Blotato  
- 🚀 Publishing via platform-specific authenticated endpoints  
- 📊 Logging via Google Sheets  

All credentials and settings are **SSO-enabled or environment variable driven**, making it easy to reuse across teams and environments.

---

## 🚀 How It Works

### 1. Trigger & Content Fetch

- Triggered on schedule or manually.
- Fetches the **next unpublished row** from a Google Sheet.
- Columns include: `Brand`, `Title`, `Caption`, `Status`.

### 2. AI-Powered Prompt Generation

- Uses **GPT-4 via OpenRouter** to generate:
  - `image_prompt`
  - `video_prompt`
  - `audio_prompt`

### 3. Media Generation

- **Image:** FAL Flux-Pro + polling  
- **Audio:** ElevenLabs (5s ambient loop)  
- **Video:** Kling via FAL (looped 5s animation)  

### 4. Final Video Rendering

- Uses **Creatomate** to assemble assets into a final short.

### 5. Hosting & Upload

- Hosted via **Blotato** with a public URL returned.

### 6. Platform Publishing

Auto-publishes to:
- **YouTube (unlisted)**
- **Instagram Reels**
- **TikTok (public)**

### 7. Logging

Updates Google Sheet with:
- Final video link  
- Status = Published  
- Platform-specific IDs  

---

## 🧩 Setup Instructions

### Step 1: Clone or Import the Template
- From your n8n dashboard: **Import from File** → paste the JSON.

### Step 2: Add Environment Variables

```env
GSHEET_ID=your_sheet_id_here
CREATOMATE_TEMPLATE_ID=your_template_id
CREATOMATE_API_KEY=sk_live_...
BLOTATO_API_KEY=bt_...
YOUTUBE_ACCOUNT_ID=...
INSTAGRAM_ACCOUNT_ID=...
TIKTOK_ACCOUNT_ID=...
```

### Step 3: Create OAuth Credentials

| Name | Platform | Usage |
|------|----------|-------|
| `Google-Marketing` | Google | Sheets + YouTube |
| `Meta-Marketing` | Instagram/Facebook | Reels |
| `TikTok-Marketing` | TikTok | Posting |

### Step 4: Google Sheet Setup

Use [this template](https://docs.google.com/spreadsheets/d/12Wg8llo34LtTYFbklteEZb8NewiQdyDLYPuxxZFfsgM/edit?usp=sharing).

Columns:
- `Brand`, `Title`, `Caption`, `Status`, `VideoLink`, `YouTubeID`, `InstagramID`, `TikTokID`

### Step 5: Sub-Workflows

Enable:
- `Poll-Until-Image-Ready`
- `Poll-Until-Video-Ready`

### Step 6: Run the Workflow

- Manually
- Scheduled
- Triggered by external app

---

## ✅ Best Practices

| Tip | Description |
|-----|-------------|
| Use sub-workflows | Clean separation for logic |
| Use env vars | Safer & cleaner setup |
| Preview locally | Run once with test brand |
| Log failures | Add error notifications |

---

## 💡 Customization Ideas

- Add Slack notifications  
- Add overlays via Creatomate  
- Replace GPT with Claude/Mistral  
- Publish to more platforms  
- Use Airtable/Notion instead of Google Sheets  

---

## 🏁 Final Output

Brand like `Nike` produces:
1. Image of a shoe-shaped building  
2. Video of joggers & motion  
3. Lo-fi audio  
4. Rendered short  
5. Posted on all platforms  
6. Sheet updated with URLs + IDs  

---

## 🔗 Tags

`#marketing` `#ai` `#video-automation` `#youtube` `#instagram` `#tiktok`  
`#shorts` `#branded-content` `#sso-ready` `#n8n-template`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
