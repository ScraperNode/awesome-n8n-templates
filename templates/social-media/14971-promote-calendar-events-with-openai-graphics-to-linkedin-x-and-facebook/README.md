# 📱 Promote calendar events with OpenAI graphics to LinkedIn, X, and Facebook

> ⚡ **66 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Never let an event go unpromoted. This workflow monitors your Google Calendar, generates branded promotional graphics, and schedules a staggered social media countdown across LinkedIn, Twitter/X, and Facebook.

---

## 🎯 What This Workflow Does

This template automates the full lifecycle of event promotion—from creation to multi-platform publishing.

---

### 📅 Step 1 — Calendar Trigger & Intelligence

- **Instant Trigger:** Fires when a new event is created in Google Calendar  
- **Data Enrichment:** Extracts title, location, and formatted date/time  
- **Safety Gate:** Skips events starting in less than 2 hours  

---

### 🖼️ Step 2 — Programmatic Design & CDN Hosting

- **Dynamic Graphic Creation:** Uses Edit Image node to overlay event details on a banner  
- **CDN Hosting:** Uploads the image via UploadToURL to generate a public URL  
- **Schedule Calculation:** Sets post timings at 48h, 24h, and 1h before the event  

---

### 🔁 Step 3 — Staggered Countdown & AI Copy

- **Loop Execution:** Iterates through each scheduled post time  
- **Smart Wait:** Delays execution until the exact posting time  
- **AI Captions:** Generates time-based captions using OpenAI  

---

### 📊 Step 4 — Audit Logging & Admin Alerts

- **Google Sheets Log:** Stores platform status and image URLs for each post  
- **Telegram Alerts:** Sends a final campaign summary to the admin  

---

## ✨ Key Features

- **Automated Graphic Design:** Creates visuals for every event  
- **Persistent Wait Logic:** Handles long delays within a single workflow  
- **Multi-Platform Posting:** Publishes to LinkedIn, Twitter/X, and Facebook  
- **CDN Media Bridge:** UploadToURL ensures valid public image URLs  

---

## 🔧 Setup Requirements

### Required Integrations

- **Google Calendar:** OAuth2 credentials  
- **Social Platforms:** LinkedIn, Twitter/X, Facebook Page credentials  
- **OpenAI:** API key for captions  
- **Google Sheets:** Sheet for logging  
- **UploadToURL:** API key  
- **Telegram:** Bot token and chat ID  

---

### Required Assets

- Public URL of your base banner template image  

---

Automate your event marketing. Import this template and connect your Google Calendar to start promoting events effortlessly!

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Telegram, X (Formerly Twitter), LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
