# 🎬 YouTube to telegram summary bot with Decodo & Gemini AI

> ⚡ **424 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Stop watching, start knowing. This **[n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow** is your personal "TL;DW" (Too Long; Didn't Watch) assistant. It pulls YouTube transcripts with Decodo, analyzes them with Google Gemini, and sends a detailed summary straight to Telegram.

*Last updated: September 2026.*

## Why You Need This
* **Save Time:** Turn a 2-hour video into a 5-minute read (95% faster).
* **Don't Miss a Thing:** Key points, chapters, tools mentioned, and quotes you would miss while skimming.
* **Instant Results:** A structured summary in Telegram within 30-60 seconds.
* **Multi-Language:** Works with any video language that has YouTube captions.

## Who Is This For?
* **Creators & Marketers:** Check competitor strategies and extract tools without watching endless footage.
* **Students:** Turn lecture recordings into instant study notes.
* **Busy Pros:** Digest conference talks and webinars on the go.

## How It Works
1.  **Send Link:** You message a YouTube link to your Telegram bot.
2.  **Scrape:** The bot uses the **[Decodo API](https://dashboard.decodo.com/register?referral_code=744f4d340e73d131117de4af6a3129e343f0f8e4)** to grab the video transcript and metadata (views, chapters, etc.).
3.  **Analyze:** **Google Gemini** reads the text and writes a structured summary (overview, takeaways, tools).
4.  **Deliver:** You receive the formatted summary in chat.



## Setup Guide

### What You Need
* **[n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin)** (to run the workflow)
* **Telegram Bot Token** (free via [@BotFather](https://t.me/botfather), [tutorial](https://core.telegram.org/bots/tutorial))
* **[Decodo API](https://visit.decodo.com/1G9ox6)** (for YouTube data - [Get it here](https://visit.decodo.com/1G9ox6))
* **Google Gemini API Key** (for the AI - [Get it here](https://makersuite.google.com/app/apikey))

### Quick Installation
1.  **Import:** Load the JSON file into your [n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin).
2.  **Credentials:** Add your API keys for Telegram, [Decodo API](https://visit.decodo.com/1G9ox6), and Google Gemini in the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) credentials section.
3.  **Configure:**
    * In the "Alert Admin" node, set the `chatId` to your Telegram User ID (find it via @userinfobot).
    * (Optional) Change the `languageCode` in the Config node if you want non-English transcripts.
4.  **Test:** Send a YouTube link to your bot. You should see a "Processing..." message followed by your summary!

## Troubleshooting & Tips
* **"Not a YouTube URL":** Make sure you are sending a standard `youtube.com` or `youtu.be` link.
* **No Transcript:** The video must have captions (auto-generated or manual) for this to work.
* **Customization:** You can edit the AI Prompt in the "Generate TLDR" node to change how the summary looks (e.g., "Make it funny" or "Focus on technical details").

### Quick Answers
**How fast is the summary?**  
30-60 seconds after you send the link, with a "Processing..." message in between.  
**Does it work in my language?**  
Yes, as long as the video has captions. Set `languageCode` in the Config node for non-English transcripts.  
**What if there is no transcript?**  
It needs captions (auto or manual). Videos without any captions cannot be summarized.  

---

**Made by:** [khmuhtadin](https://khmuhtadin.com)
**Category:** AI-Powered Automation
**Tags:** YouTube, AI, Telegram, Summarization, Decodo, Gemini
**Need custom workflows?** [Contact me](https://khmuhtadin.com/contact)

**Connect with the creator:**
[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
