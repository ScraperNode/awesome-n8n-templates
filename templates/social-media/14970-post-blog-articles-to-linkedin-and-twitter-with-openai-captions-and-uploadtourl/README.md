# 📱 Post blog articles to LinkedIn and Twitter with OpenAI captions and UploadToURL

> ⚡ **138 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Turn your blog into a self-driving social media machine. This workflow monitors your RSS feed, extracts new content, and uses AI to craft platform-perfect posts for LinkedIn and Twitter/X, complete with hosted images.

---

## 🎯 What This Workflow Does

This workflow automates the transition from "published on blog" to "live on social" in three primary stages:

---

### 🔁 Step 1 — RSS Trigger & Filter

- **RSS Feed Trigger:** Polls your blog every 15 minutes to detect new articles  
- **Validation:** Ensures each item has a title and cover image before proceeding  

---

### ☁️ Step 2 — Media Hosting Bridge

- **Fetch Binary:** Downloads the blog’s cover image  
- **UploadToURL:** Uploads the image to a public CDN and returns a stable URL for social platforms  

---

### 🤖 Step 3 — AI Multi-Platform Posting

- **OpenAI Captions:** Generates:
  - LinkedIn → professional, long-form post  
  - Twitter/X → short, punchy tweet with hashtags  
- **Parallel Publishing:** Posts simultaneously to both platforms  
- **Success Logging:** Tracks hosted image URLs and caption details  

---

## ✨ Key Features

- **Built-in Deduplication:** RSS ensures no duplicate posts  
- **Clean Data Processing:** Strips HTML for better AI output  
- **Fallback Logic:** Uses default caption if AI fails  
- **Reliable Media Hosting:** UploadToURL ensures public image access  

---

## 🔧 Setup Requirements

### Required Credentials

- **OpenAI:** API key  
- **LinkedIn:** OAuth2 credentials  
- **Twitter/X:** OAuth1 credentials  
- **UploadToURL:** API key  

---

### Configuration

- Add your blog’s RSS Feed URL  
- Adjust polling interval (default: 15 minutes)  

---

Ready to boost your blog’s reach? Import this template and automate your social presence instantly!

## 🔗 Nodes Used

HTTP Request, X (Formerly Twitter), LinkedIn, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
