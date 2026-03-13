# 🎣 Automated local business lead generator with AI, social media & WhatsApp links

> ⚡ **2,730 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automated Local Business Lead Generator with AI, Social Media & WhatsApp Links

This workflow automates the process of generating and managing local business leads by scraping Google Maps data, analyzing business information with AI, and creating personalized outreach messages. The system searches for local businesses based on keywords and locations, extracts their contact information and reviews, then generates professional outreach messages tailored to each business. Results are stored in Google Sheets and notifications are sent via Telegram.


📊 **Google Sheets Template**
Use this template: [Local Business Lead Generator](https://docs.google.com/spreadsheets/d/1s1N_cAFoKtCsolQh4v3QZpqr8KmVzi7agKHr5MdBEBs/edit?usp=sharing)


## 🔑 Key Features
- 🔍 Searches Google Maps for local businesses using SerpAPI based on keywords and location parameters  
- 📋 Collects comprehensive business information including name, address, rating, reviews, phone numbers, and websites  
- 🤖 Uses OpenRouter's LLM to analyze business data and generate personalized outreach messages  
- 🌐 Analyzes business websites to provide targeted improvement suggestions  
- 📱 Automatically detects Instagram and TikTok profiles from business websites  
- 🗣️ Generates messages in the local language based on country code settings  
- 📊 Organizes and stores all collected data in Google Sheets with proper categorization  
- 🚀 Sends real-time updates and lead summaries via Telegram bot  
- 💬 Automatically creates WhatsApp links for easy business communication  

---

## 🔧 Requirements
- **SerpAPI Account + API Key** – For Google Maps business data extraction  
- **OpenRouter Account + API Key** – For AI-powered message generation and analysis  
- **Telegram Bot + API Token** – For notifications and bot interactions  
- **Google Sheets** – Connected to n8n for data storage  
- **Google Sheets Template** – Pre-configured with proper column structure  

---

## 🎁 Benefits
- Fully automated lead generation and outreach system  
- Saves time and increases efficiency for local business marketing  
- High personalization improves engagement and response rate  
- Scalable for any niche or location

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
