# 📱 Post daily AI-generated Instagram images from Google Sheets with GPT-4.1 Nano and Google Gemini

> ⚡ **361 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

A fully automated n8n workflow that runs every day at **1:10 PM IST** and publishes a 
fresh AI-generated image to Instagram — zero manual effort required after setup.

It reads content ideas from a Google Sheet, uses **GPT-4.1 Nano** to craft a 
cinematic image prompt and a niche-matched caption, generates the image with 
**Google Gemini 2.5 Flash**, uploads it to a public CDN called Upload to Url (https://uploadtourl.com) , posts it to Instagram, 
and logs everything back to the sheet.

---

## ✨ What This Workflow Does

1. **Triggers daily** at 1:10 PM IST via Schedule Trigger
2. **Fetches a pending idea** from a Google Sheet where `Status = "Ready"`
3. **Generates an image prompt + caption** using GPT-4.1 Nano — tailored to the 
   niche's aesthetic (luxury, minimalist, vibrant, etc.)
4. **Creates the image** using Google Gemini 2.5 Flash Image model
5. **Uploads the image** to a public CDN via UploadToURL (https://uploadtourl.com)
6. **Posts to Instagram** as a feed post with the AI-generated caption
7. **Updates the Google Sheet row** with the prompt, caption, image URL, and 
   status `"Posted"`

---

## 🛠 Tools & Services Used

| Tool | Purpose |
|---|---|
| **n8n Schedule Trigger** | Fires the workflow daily at 13:10 |
| **Google Sheets** | Stores content ideas and tracks post status |
| **OpenAI GPT-4.1 Nano** | Generates image prompts and Instagram captions |
| **Google Gemini 2.5 Flash Image** | Generates the AI image from the prompt |
| **UploadToURL** | Hosts the image on a public CDN |
| **Instagram Graph API** | Publishes the image as a feed post |

---

## 📋 Google Sheet Structure

Your sheet (`Instagram Posting`) needs these columns:

| Column | Description |
|---|---|
| `Idea/Niche` | The content topic (e.g. *Minimalist Home*, *Luxury Cars*) |
| `Status` | Set to `Ready` to queue a post; auto-updated to `Posted` |
| `Prompt` | Auto-filled with the AI-generated image prompt |
| `Caption` | Auto-filled with the AI-generated Instagram caption |
| `Image_URL` | Auto-filled with the CDN-hosted image link |

---

## ⚙️ Setup Requirements

- **Google Sheets OAuth2** credentials connected to your spreadsheet
- **OpenAI API** key (GPT-4.1 Nano)
- **Google Gemini (PaLM) API** key
- **UploadToURL** account and API credentials
- **Instagram Graph API** credentials (connected Business/Creator account)

---

## 💡 How to Use

1. Add your content ideas to the Google Sheet with `Status = "Ready"`
2. Import this workflow into your n8n instance
3. Connect all credentials
4. Activate the workflow — it will auto-post daily at 1:10 PM IST

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
