# 🎬 Generate daily business briefing podcasts with OpenAI, Azure TTS, HubSpot, Zendesk, Pipedrive, Discord, Twilio and Confluence

> ⚡ **101 views** · 🎬 [Content Creation & Video](../)

## Description

Keep your leadership team informed with a data-driven, automated morning briefing. This workflow pulls live metrics from HubSpot, Zendesk, and Pipedrive, then uses AI and Neural TTS to generate a professional audio briefing delivered via Discord, SMS, and Confluence.

---

## 🎯 What This Workflow Does

This template acts as an automated newsroom, executing a "Fetch → Analyze → Broadcast" cycle every weekday morning.

---

### ⏰ Step 1 — Intelligent Triggering

- **Schedule:** Runs Monday–Friday at 7:30 AM  
- **Weekday Guard:** Skips weekends automatically  
- **Date Context:** Generates standardized timestamps for API calls  

---

### 🔀 Step 2 — Parallel Metric Fetching

- **HubSpot:** Fetches new leads and deal values  
- **Zendesk:** Retrieves ticket volume and response metrics  
- **Pipedrive:** Pulls pipeline health and deal status  
- **Merge:** Waits for all APIs before proceeding  

---

### 🤖 Step 3 — AI Scripting & Trend Analysis

- **Historical Comparison:** Reads previous data to calculate trends  
- **AI Script Generation:** Uses OpenAI to create a natural, spoken-style briefing  

---

### 🔊 Step 4 — Neural TTS & Hosting

- **Voice Generation:** Uses Azure Neural TTS for high-quality audio  
- **CDN Hosting:** Uploads MP3 via UploadToURL for public access  

---

### 📡 Step 5 — Multi-Channel Broadcast

- **Discord:** Sends rich message with audio link  
- **Twilio SMS:** Delivers summary + link to leadership  
- **Confluence:** Logs full report with embedded audio  

---

## ✨ Key Features

- **Parallel Processing:** Faster execution with simultaneous API calls  
- **Trend Intelligence:** Automatically calculates day-over-day changes  
- **Mobile Friendly:** SMS delivery for on-the-go access  
- **Premium Audio:** Natural-sounding Neural TTS voices  

---

## 🔧 Setup Requirements

### Required Integrations

- **HubSpot, Zendesk, Pipedrive:** API access  
- **OpenAI:** API key + Assistant ID  
- **Azure Speech:** Subscription key  
- **Twilio:** SMS credentials  
- **Confluence:** API token + space access  
- **UploadToURL:** CDN hosting for audio  

---

Turn your metrics into a daily executive briefing. Import this template and start broadcasting insights automatically.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
