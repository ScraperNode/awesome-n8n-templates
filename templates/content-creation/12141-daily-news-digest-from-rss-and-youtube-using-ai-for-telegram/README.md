# 🎬 Daily news digest from RSS and YouTube using AI for Telegram

> ⚡ **561 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

### Description: 
Start your day with a **personalized news podcast** delivered directly to your Telegram. This workflow helps you stay informed without scrolling through endless feeds. It automatically collects news from your favorite websites and YouTube channels, filters out the noise, and uses AI to turn them into a short, listenable audio briefing. It’s like having a personal news assistant that reads the most important updates to you while you commute or drink your morning coffee.
## Who is this for
This template is **perfect** for **busy professionals, commuters, and learners** who want to keep up with specific topics (like Tech, Finance, or AI) but don't have time to read dozens of articles every morning.
## How it works
1. **Collects News:** The workflow automatically checks your chosen RSS feeds (e.g., TechCrunch, BBC) and searches for trending YouTube videos on topics you care about.

2. **Filters Noise:** It smartly removes duplicate stories and filters out promotional content or spam, ensuring you only get high-quality news.

3. **Summarizes:** Google Gemini (AI) reads the collected data, picks the top stories, and rewrites them into a clear, engaging script.

4. **Creates Audio:** OpenAI turns that script into a natural-sounding MP3 file (Text-to-Speech).

5. **Delivers:** You receive a neat text summary and the audio file in your Telegram chat, ready to play.

## Requirements

**API Keys:**

- Google Gemini (PaLM)
- OpenAI
- YouTube Data API
- Telegram Bot Token
## How to set up
1. **Get Credentials:** Sign up for the required services (Google, OpenAI, Telegram) and get your API keys.

2. **Connect Nodes:** Use your API credentials into the respective nodes in the workflow.

3. **Set Chat ID:** Enter your Telegram Chat ID in the Telegram nodes (or set it as a variable) so the bot knows where to send the message.

4. **Turn on:** Activate the workflow switch to let it run automatically every morning at 7:00 AM (or any time you want).
## How to customize the workflow
- **Your Interests:** Simply change the URLs in the RSS Feed Read nodes to follow your favorite blogs.

- **Your Topics:** Update the keywords in the YouTube - Search node (e.g., change "AI" to "Football" or "Marketing") to get relevant video news.

- **Your Voice:** You can change the voice style (e.g., from `alloy` to `echo`) in the `Code - Build TTS Payload` node to suit your preference.
## Contact me for consulting and support
Email: cuongnguyen@aiops.vn

## 🔗 Nodes Used

HTTP Request, RSS Read, Telegram, YouTube, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
