# 🎣 Generate Reddit customer leads from a product URL with OpenAI and Firecrawl

> ⚡ **26 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Reddit Lead Generator - Frontend Integrated (Productized Version)

## Overview
Production-ready Reddit lead generation system with progressive data loading for optimal UX. This workflow integrates with a web frontend, sending results in real-time as they're processed instead of waiting for everything to complete.

## Key Features

✅ **Progressive Loading** - Users see results as they come in (website analysis → keywords → conversations)  
✅ **5 Response Stages** - Data sent in batches for better UX  
✅ **Webhook Authentication** - Secured with API key headers  
✅ **Frontend Ready** - Built to work with the companion web app  
✅ **Real-Time Updates** - No waiting for 2-minute batch processing  

## What This Workflow Does

1. Receives product URL from frontend via webhook
2. Immediately responds "processing started"
3. Analyzes website with Firecrawl → sends data to frontend
4. Generates 10 keywords with OpenAI → sends to frontend
5. Searches Reddit and filters conversations → sends in 3 batches
6. Frontend displays results progressively as they arrive

## Response Flow

**Stage 1:** `website_analysis` - Product details, favicon, summary  
**Stage 2:** `keywords_generated` - All 10 keywords  
**Stage 3:** `conversations_partial1` - First keyword results  
**Stage 4:** `conversations_partial2` - Second keyword results  
**Stage 5:** `conversations_final` - Remaining keywords (3-10) in markdown  

## Quick Setup

1. **Set Environment Variables** in the "Set Environment Variables" node:
   - `BACKEND_API_URL` - Your frontend API endpoint
   - `WEBHOOK_API_KEY` - Your webhook security key

2. **Configure Credentials:**
   - Firecrawl API
   - Reddit OAuth2
   - OpenAI API

3. **Deploy Frontend & Backend:**
   - Clone repo: https://github.com/juppfy/leads-gen
   - Deploy frontend on Vercel
   - Deploy backend on Railway
   - Full instructions in the repo README

4. **Activate Workflow** and update your frontend with the webhook URL

## Requirements

- n8n (cloud or self-hosted)
- Firecrawl API key
- Reddit Developer Account
- OpenAI API key
- Frontend + Backend deployed (see GitHub repo)

## Resources

📖 **Complete Setup Guide:** https://bit.ly/mediumarticleredditworkflow  
🎥 **Video Tutorial:** https://bit.ly/youtubetutorialredditworkflow  
💻 **GitHub Repo:** https://github.com/juppfy/leads-gen  

## Frontend Integration

This workflow requires the companion web app to receive and display results. The frontend handles:
- User input and URL validation
- Real-time result display
- Conversation cards with pagination
- Request tracking by `searchId`

Deploy instructions and complete code available in the GitHub repo above.

## Difference from Batch Version

**This Version (Frontend):**
- Progressive data loading
- Real-time updates
- Production-ready UX
- Requires frontend deployment

**Batch Version:**
- Single output at end
- No frontend needed
- Perfect for testing/scheduled runs
- Simpler setup

## Support

Questions? Check the Medium article or YouTube tutorial first. Both have detailed setup instructions and troubleshooting tips.

---

## 🔗 Nodes Used

HTTP Request, Webhook, Reddit, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
