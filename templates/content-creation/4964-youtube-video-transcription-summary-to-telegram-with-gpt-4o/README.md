# 🎬 YouTube video transcription & summary to Telegram with gpt-5.6-terra

> ⚡ **1,278 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Disclaimer:** This workflow uses a **community node** and needs self-hosted n8n:
- `npm install n8n-nodes-supadata`
- Please install this before running the workflow.

![Screenshot 20250616 at 17.30.24.png](fileId:1516)

Skip the video, keep the insight. Send any YouTube link to your Telegram bot and get back a structured summary in seconds: theme, audience, key insights, problems and solutions, plus notable quotes. No need to watch the whole thing.

*Last updated: September 2026.*

## Who is this for?

**Anyone who wants quick summaries of YouTube videos**: researchers, students, analysts, or busy professionals catching up on the go.

## What problem is this workflow solving?

Long videos hide their best points behind timestamps. This automation fetches the full transcript, summarizes it with AI, and sends a clean recap to Telegram. Stay informed without the overwhelm.

## What this workflow does

* **Telegram Trigger:** Start by sending a YouTube link to your Telegram bot.
* **Get Transcript (Supadata):** Uses the **Supadata** API to retrieve the full video transcript.
* **Summarize with OpenAI gpt-5.6-terra:** Processes the transcript with a structured prompt to extract the main theme, target audience, key insights and tips, problems discussed with solutions, and notable quotes or highlights.
* **Send to Telegram:** The final summary is formatted and sent back to your Telegram chat, ready for reading or saving.

## Requirements
* **Self-hosted [n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin)**
* Supadata API Key
* OpenAI API Key
* Telegram Bot Token ([Bot API docs](https://core.telegram.org/bots))

## Output Example

The Telegram summary includes:

* Title and topic
* Key learnings
* Tips or insights
* Issues raised and solutions
* Quotes or highlights



Just send a link, and get the core message fast. Perfect for learning on the go.

### Quick Answers
**Does this run on n8n Cloud?**  
No. The Supadata community node needs a self-hosted n8n instance.  
**What do I send the bot?**  
Any YouTube video link. The transcript fetching and summarizing run automatically.  
**What comes back?**  
A structured summary: theme, audience, insights, problems with solutions, and quotes.  

---

*Made by: [khmuhtadin](https://khmuhtadin.com)*  
*Tag: youtube, summarizer, telegram, openai*  
*Category: AI Automation, Video Tools*
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](https://khmuhtadin.com)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
