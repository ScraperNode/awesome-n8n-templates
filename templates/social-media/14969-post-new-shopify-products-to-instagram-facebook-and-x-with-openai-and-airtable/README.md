# 📱 Post new Shopify products to Instagram, Facebook and X with OpenAI and Airtable

> ⚡ **133 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Automate your social media marketing by instantly promoting new Shopify products. This workflow polls your store for new arrivals, generates AI-powered captions, and publishes them across Instagram, Facebook, and Twitter/X—while maintaining a deduplication log in Airtable.

---

## 🎯 What This Workflow Does

This workflow acts as a 24/7 social media manager, ensuring every new product gets immediate visibility without manual effort.

---

### ⏱️ Step 1 — Poll, Fetch & Deduplicate

- **Schedule Trigger:** Polls Shopify every 10 minutes for products published in the last 15 minutes  
- **Deduplication Logic:** Checks Airtable (`ProductPostLog`) to avoid reposting the same product  

---

### 🖼️ Step 2 — Data Enrichment & Media Hosting

- **Normalization:** Cleans and maps product fields (title, price, vendor)  
- **CDN Hosting:** Downloads product image and uploads via UploadToURL to generate a public HTTPS URL  

---

### 🤖 Step 3 — Platform-Specific AI Captions

- **Instagram:** Storytelling style, emojis, 10+ hashtags  
- **Facebook:** Conversational, CTA-driven, link preview optimized  
- **Twitter/X:** Short-form (under 260 chars), includes price and link  

---

### 📤 Step 4 — Multi-Platform Publishing & Logging

- **Instagram:** Create container → publish via Graph API  
- **Facebook:** Post image + caption to Page  
- **Twitter/X:** Publish tweet via native node  
- **Airtable Log:** Store status, timestamp, and image URL for tracking  

---

## ✨ Key Features

- **Intelligent Deduplication:** Prevents duplicate posts using Airtable log  
- **Sequential Processing:** Handles products one-by-one to avoid rate limits  
- **Custom AI Tones:** Tailored captions for each platform  
- **Reliable Media Hosting:** UploadToURL ensures valid public image URLs  

---

## 🔧 Setup Requirements

### Required Integrations

- **Shopify:** Admin API with `read_products` scope  
- **Airtable:** Base with `ProductPostLog` table  
- **OpenAI:** API credentials for caption generation  
- **Facebook & Instagram:** Page token with posting permissions  
- **Twitter/X:** OAuth1 credentials  
- **UploadToURL:** CDN hosting for images  

---

### Environment Variables

- `SHOPIFY_STORE_DOMAIN`  
- `SHOPIFY_ACCESS_TOKEN`  
- `IG_ACCOUNT_ID`  
- `FB_ACCESS_TOKEN`  
- `FB_PAGE_ID`  

---

Ready to launch? Import this template and connect your Shopify store to turn every new product into a viral social media event!

## 🔗 Nodes Used

Airtable, HTTP Request, X (Formerly Twitter), Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
