# 💬 Convert Supabase support FAQs to audio with Google Cloud TTS and Webflow

> ⚡ **34 views** · 💬 [Support Chatbots](../)

## Description

Enhance your support documentation with an audio-first experience. This workflow converts Supabase FAQ entries into high-quality audio using Google Cloud TTS, hosts them via a CDN, and embeds them into your Webflow support pages.

---

## 🎯 What This Workflow Does

This template transforms static FAQ content into a professional audio library through a multi-stage process.

---

### 🔔 Step 1 — Webhook Intake & Intelligent Fetch

- **Webhook Trigger:** Processes specific FAQ IDs or categories on demand  
- **Supabase Query:** Fetches unprocessed or requested FAQ records  

---

### 📋 Step 2 — Data Enrichment & SSML Preparation

- **Deduplication:** Ensures each FAQ is processed only once  
- **SSML Formatting:** Adds pauses and emphasis for natural speech delivery  

---

### 🗣️ Step 3 — Google Cloud TTS & Hosting

- **Audio Generation:** Converts text to MP3 using Google Cloud TTS (WaveNet)  
- **CDN Hosting:** Uploads audio via UploadToURL to generate a public URL  

---

### 🌐 Step 4 — CMS Update & Database Write-Back

- **Webflow Update:** Inserts audio URL into FAQ pages for playback  
- **Supabase Update:** Marks records as published with timestamps  

---

### 💼 Step 5 — Reporting & Confirmations

- **Microsoft Teams Alert:** Sends summary with audio links  
- **Webhook Response:** Returns JSON confirmation to trigger source  

---

## ✨ Key Features

- **Accessibility First:** Enables audio-based support consumption  
- **SSML Intelligence:** Improves clarity with structured speech formatting  
- **Rate-Limit Safe:** Processes items sequentially to avoid API limits  
- **Reliable Hosting:** UploadToURL ensures stable public audio URLs  

---

## 🔧 Setup Requirements

### Required Integrations

- **Supabase:** FAQ table  
- **Google Cloud TTS:** API enabled  
- **Webflow:** CMS API access  
- **UploadToURL:** CDN hosting  
- **Microsoft Teams:** Webhook URL  

---

Upgrade your support experience. Import this template to turn your FAQ library into a voice-enabled support center.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
