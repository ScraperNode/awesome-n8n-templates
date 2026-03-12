# 🎬 AI video automation engine - generate & publish YT shorts with Veo-3 or Sora 2

> ⚡ **783 views** · 🎬 [Content Creation & Video](../)

## Description

# Product Overview

Scale short-form content without scaling your team. This template turns **idea discovery → prompt & text generation → Veo-3 video rendering → vertical formatting → multi-channel publishing** into one cohesive pipeline. It’s built natively on **n8n**, so you keep full control, self-host if you want, and extend every step with your own logic.

---

## What’s Inside (Modular Building Blocks)

- **Idea Engine** – AI generates concise, surprising facts and a visual metaphor per topic (swappable LLM/provider).  
- **Prompt & Text Composer** – Crafts an 8-second, cinematic Veo-3 prompt + title, caption, description, hashtags, tags in a consistent brand voice.  
- **Renderer Integration** – Kie.ai → Veo-3 (16:9, 1080p) for fast, cinematic clips.  
- **Vertical Formatter** – FFmpeg pipeline converts to 1080×1920, adds top/bottom text bands (15–20 words), and preserves loop smoothness.  
- **Multi-Channel Distribution** – Uploads to YouTube Shorts and Telegram for internal review/approvals.  
- **Scheduler & Orchestration** – CRON triggers, retries, and lightweight polling make the system dependable for daily publishing.  

---

## Why These Components (and why they work together)

- **Veo-3 via Kie.ai** provides a sweet spot of **quality + speed**, ideal for short loops where style coherence matters.  
- **n8n** brings **vendor-neutral orchestration**: swap LLMs, add rate limits, branch flows, or trigger on events—without rewriting your stack.  
- **FFmpeg** ensures a **platform-native look** (9:16, crisp text bands, no blurry hacks).  
- **Separation of concerns** (idea → text → render → edit → publish) makes it easy to **A/B test** any stage independently.  

---

## Key Benefits

- **Hands-Free Consistency** – Daily output with a repeatable creative pattern that audiences recognize.  
- **Brand-Safe Copy** – Titles, descriptions, and hashtags follow a controlled structure—polished by design.  
- **Time Savings** – Replace fragmented tooling with one pipeline; no manual re-formatting, captioning, or re-uploads.  
- **Creator-Grade Quality** – Cinematic loops optimized for watch time and retention on Shorts/Reels.  
- **Own Your Stack** – Self-hosted orchestration and storage; no lock-in.  

---

## Reuse & Extension Ideas

- **Topic CMS** – Feed topics from Google Sheets / Notion and mark each as “published”—perfect for content calendars.  
- **Multi-Language** – Duplicate the text composer for EN/DE outputs; upload the same clip with localized metadata.  
- **Thumbnail/Preview Track** – Add an image generator step for platform cards or YouTube custom thumbnails.  
- **Analytics Feedback Loop** – Fetch video performance, score ideas, and prioritize winning angles automatically.  
- **Compliance & Fact Trails** – Store sources next to each post for quick audits and edits.  
- **Storage & Delivery** – Push masters to S3/Backblaze, serve via CDN for faster IG ingestion.  
- **More Channels** – Add TikTok, X, LinkedIn publishers or a newsletter export.  
- **A/B Creative** – Render multiple Veo-3 seeds, rotate captions/CTAs, and compare retention.  

---

## Who It’s For

- **Agencies** wanting repeatable, branded Shorts at scale.  
- **Creators & Media Teams** who need daily output with minimal overhead.  
- **Product Marketing** looking to convert docs/reports into snackable, evergreen video facts.  
- **Startups** building audience fast without adding headcount.  

---

## Technical Notes (at a glance)

- **Orchestration:** n8n (self-hosted or cloud)  
- **Video:** Veo-3 via Kie.ai (16:9 render → FFmpeg vertical remaster 1080×1920)  
- **Text Stack:** Any LLM provider (swappable); outputs normalized for each platform  
- **Distribution:** YouTube Data API v3,  Telegram Bot API  
- **Security:** API keys via n8n credentials/ENV; public URL endpoint only serves whitelisted `.mp4` filenames with proper headers  
- **Reliability:** CRON triggers, bounded retries/polling, and safe fallbacks to avoid stuck runs  

---
## Who to use it

To enhance the completeness, add specific **step-by-step setup instructions** for users to implement the workflow easily:

1. **Install Prerequisites**
   - Set up **n8n** on your server or local machine (production mode with reverse proxy).
   - Install **FFmpeg** and ensure fonts (e.g., *DejaVu Sans*) are available.

2. **Configure API Credentials**
   - Get a **Perplexity API key** for idea generation.
   - Request a **Kie.ai API key** for Veo-3 video rendering.
   - Set up **YouTube OAuth2** (enable YouTube Data API v3 in Google Cloud Console).
   - Create a **Telegram bot token** via BotFather.
   - Store all keys as **environment variables** in n8n (avoid hardcoding).

3. **Prepare Storage**
   - Create a working directory accessible by n8n with read/write rights.
   - Ensure enough disk space for video caching (approx. 50–200 MB per run).

4. **Set Scheduling**
   - Add **CRON triggers** for automatic execution (e.g., twice daily).
   - Example:
     ```
     0 12 04 * * * → 04:12 AM daily
     0 12 16 * * * → 04:12 PM daily
     ```

5. **Define Variables**
   - File naming conventions:
     - `name_vorher` = raw 16:9 video
     - `name_nachher` = final 9:16 video
   - Set `topic` = content niche (e.g., *history, ocean, futurism*).

6. **Build Workflow Steps in n8n**
   - **Idea Generation:** Perplexity node for viral fact.
   - **Prompt Agent:** Expand into full package (prompt, caption, hashtags).
   - **Video Generation:** Kie.ai Veo-3 API request (poll until success).
   - **Download & Edit:** Save raw file, convert to 9:16 with FFmpeg overlays.
   - **Notifications & Uploads:**
     - Telegram node → send video.
     - YouTube node → upload with title, description, tags.
     

7. **Test End-to-End**
   - Run the workflow manually once.
   - Verify video rendering, FFmpeg subtitles, Telegram message, YouTube & IG uploads.

8. **Go Live**
   - Enable CRON triggers.
   - Monitor first runs for errors (API limits, FFmpeg paths, token expiry).

---

## Why Buy This Template

You’re not buying a script—you’re buying a **production-ready system** with a deliberate creative pattern, best-practice formatting, and shipping-grade integrations. It reduces ramp-up from weeks to hours and gives you a flexible base you can keep evolving.

---

## 🔗 Nodes Used

HTTP Request, Telegram, YouTube, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
