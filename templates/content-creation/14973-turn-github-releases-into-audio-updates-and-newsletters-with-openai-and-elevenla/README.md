# 🎬 Turn GitHub releases into audio updates and newsletters with OpenAI and ElevenLabs

> ⚡ **45 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Deliver your product updates in a modern, accessible format. This workflow automatically transforms GitHub releases into podcast-style audio announcements and distributes them via email and Slack.

---

## 🎯 What This Workflow Does

This template bridges your development cycle with your marketing and communication channels.

---

### 🐙 Step 1 — GitHub Trigger & Notion Synthesis

- **GitHub Trigger:** Fires when a new release is published  
- **Parsing:** Converts raw markdown into structured categories (features, fixes, improvements)  
- **Notion Merge:** Enriches data with additional context from your Notion changelog database  

---

### 🎙️ Step 2 — AI Scriptwriting & Professional TTS

- **Script Generation:** OpenAI converts technical notes into a conversational 60–90 sec script  
- **Voice Generation:** ElevenLabs turns the script into high-quality audio  
- **CDN Hosting:** Uploads MP3 via UploadToURL to generate a public URL  

---

### 📧 Step 3 — Multimedia Newsletter Delivery

- **Subscriber Fetch:** Loads email list from Google Sheets  
- **Email Creation:** Builds a rich HTML email with embedded audio player  
- **Distribution:** Sends via Gmail using BCC list  

---

### 💬 Step 4 — Internal Sync & Database Update

- **Slack Alert:** Posts update with audio preview to team channel  
- **Notion Update:** Marks entry as published and stores audio URL  

---

## ✨ Key Features

- **Bidirectional Notion Sync:** Reads and updates changelog entries  
- **Conversational AI:** Converts technical updates into human-friendly audio  
- **Dynamic HTML Emails:** Includes inline audio playback  
- **High-Quality Voice:** Uses ElevenLabs for realistic narration  

---

## 🔧 Setup Requirements

### Required Integrations

- **GitHub:** Personal Access Token (repo read scope)  
- **Notion:** Integration token + changelog database  
- **ElevenLabs:** API key + Voice ID  
- **OpenAI:** API key  
- **UploadToURL:** For MP3 hosting  
- **Slack:** Bot token  

---

### Environment Variables

- `NOTION_DATABASE_ID`  
- `APPROVER_EMAIL`  
- `DISCORD_WEBHOOK_URL`  
- `SLACK_CHANNEL_ID`  

---

Humanize your software updates. Import this template and start broadcasting your product journey with audio.

## 🔗 Nodes Used

Github Trigger, Google Sheets, HTTP Request, Slack, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
