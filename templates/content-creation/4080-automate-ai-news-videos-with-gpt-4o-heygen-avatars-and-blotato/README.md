# 🎬 Automate AI news videos with GPT-4o, Heygen Avatars, and Blotato

> ⚡ **856 views** · 🎬 [Content Creation & Video](../)

## Description

**Turn your ideas into engaging videos, talking avatars, and scheduled posts — all on autopilot.**

🚀 How It Works: 3 Steps to AI-Generated Video Posts

1. 🤖 AI Researches & Creates Your Video Script

Automatically fetches trending AI/LLM stories from Hacker News
Generates a 30-second viral video script with:
Attention-grabbing hook
Balanced analysis with statistics
Call-to-action ("Hit follow to stay ahead in AI!")
Writes two caption versions:
Long (50 words + hashtags)
Short (2 sentences for platforms like Twitter/Threads)
2. 🎥 Heygen Generates the AI Avatar Video

Uses your preferred Heygen avatar/voice (configure in "Setup Heygen")
Applies a professional background video (included)
Processes the video in ~8 minutes (wait time adjustable)
3. 📣 Auto-Publishes to 10+ Platforms via Blotato

Uploads video to Blotato’s CDN
Publishes natively to:
✅ Instagram | ✅ YouTube | ✅ TikTok | ✅ LinkedIn
✅ Twitter/X | ✅ Facebook | ✅ Threads (coming soon)
Platform-specific optimizations:
Instagram/YouTube: Long captions + hashtags
Twitter/Threads: Short captions
TikTok: Vertical video formatting
⏱️ Full Automation Timeline

AI Research → Scriptwriting → Video Generation → Multi-Platform Publishing
(Runs daily at 10 AM or your custom schedule)

🛠️ Key Features

No Manual Work: Fully hands-off after setup

Customizable: Adjust AI prompts, avatars, or add platforms

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
