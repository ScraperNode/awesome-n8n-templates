# 🎬 Generate YouTube shorts from prompts with OpenAI, ElevenLabs and Pexels

> ⚡ **5,348 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a prompt from an n8n form, uses OpenAI to generate a YouTube Shorts script, then creates an ElevenLabs voiceover, pulls matching portrait stock video from Pexels, merges audio and video via fal.run’s FFmpeg API, and uploads the finished short to YouTube.

## How it works
1. Receives a prompt submission from an n8n form.
2. Uses OpenAI to generate a short title, a 60-second voiceover script, and an English stock-footage keyword.
3. Sends the script to ElevenLabs Text-to-Speech, then uploads the resulting audio file to an FTP server.
4. Searches Pexels for a portrait stock video clip matching the generated keyword.
5. Submits the Pexels video URL and hosted audio URL to fal.run’s FFmpeg API to merge them, then polls the request status until it completes.
6. Downloads the merged video file and uploads it to YouTube with the generated title and the original prompt as the description.

## Setup
1. Configure the form trigger and copy its public URL if you want to embed or share the form.
2. Add credentials for OpenAI, ElevenLabs (HTTP Header Auth), Pexels (HTTP Header Auth), fal.run (HTTP Header Auth), and YouTube OAuth2.
3. Set up an FTP destination (for example, BunnyCDN Storage) and update the upload path and the public base URL used to construct the audio_url.
4. Verify the YouTube upload settings (category, region, and description text) and replace the placeholder channel name used in the script prompt.

## Additional info
### MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I'll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### Need help customizing?
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

HTTP Request, FTP, YouTube, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
