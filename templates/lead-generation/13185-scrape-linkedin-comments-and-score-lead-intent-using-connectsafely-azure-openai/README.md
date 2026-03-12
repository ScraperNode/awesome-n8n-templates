# 🎣 Scrape LinkedIn comments and score lead intent using ConnectSafely, Azure OpenAI, and Google Sheets

> ⚡ **103 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## 📊 Description
Automate LinkedIn lead discovery by identifying high-intent prospects directly from post comments using ConnectSafely and AI 🤖. This workflow searches LinkedIn posts related to common sales pain points, extracts all comments safely, and evaluates each commenter’s buying intent using AI. The scored leads are automatically stored in Google Sheets for easy follow-up and prioritization 📈. Perfect for sales, growth, and RevOps teams looking to turn conversations into qualified opportunities.

## 🔍 What This Template Does
🔎 Searches LinkedIn posts via SerpAPI using predefined pain-point keywords
🔗 Filters and validates relevant LinkedIn post URLs
🛡️ Fetches all post comments using ConnectSafely (safe, compliant LinkedIn access)
📄 Flattens comments into individual lead records
🤖 Uses AI to analyze each comment and score buying intent (0–100)
📊 Saves enriched lead data into Google Sheets automatically

## ✅ Key Benefits
✅ Discover warm LinkedIn leads from real conversations
✅ Uses ConnectSafely for reliable and compliant comment extraction
✅ AI-powered intent scoring removes manual lead qualification
✅ Automatically prioritizes high-intent prospects
✅ Centralized lead tracking in Google Sheets
✅ Zero manual scraping or copy-pasting

## ⚙️ Features
- LinkedIn post discovery via SerpAPI
- Comment scraping powered by ConnectSafely
- AI intent detection using Azure OpenAI (GPT-4o-mini)
- Intent labels: No-Intent → High-Intent
- Google Sheets integration for lead storage
- Modular, customizable n8n workflow

## 🔐 Requirements
- SerpAPI account
- ConnectSafely LinkedIn API credentials
- Azure OpenAI account (GPT-4o-mini deployment)
- Google Sheets OAuth credentials
- n8n instance (self-hosted or cloud)

## 🎯 Target Audience
- B2B sales teams & SDRs
- Growth marketers & lead generation agencies
- RevOps & automation specialists
- Founders using LinkedIn for outbound prospecting

## 🔗 Nodes Used

Google Sheets, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
