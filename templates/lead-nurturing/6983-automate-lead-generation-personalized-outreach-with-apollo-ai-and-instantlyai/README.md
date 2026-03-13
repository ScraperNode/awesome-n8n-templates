# 💬 Automate lead generation & personalized outreach with Apollo, AI, and Instantly.ai

> ⚡ **3,274 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# **Title:**

🤖 AI-Powered BDR Engine: Apollo to Instantly.ai (Airtable + n8n)

![Screenshot 20250721 at 14.21.52.png](fileId:1940)

# Overview:
This is a full-stack, end-to-end AI-powered BDR workflow that automates your entire outbound process. Go from sourcing raw leads in Apollo to launching a hyper-personalized, multi-sequence campaign in Instantly.ai, all orchestrated by n8n and managed from a user-friendly Airtable interface.

This template is a game-changer for founders, agencies, and sales teams. It replaces 80% of the manual work of a BDR team at a fraction of the cost, with a smarter, more efficient workflow designed to save you money on every lead.

## How This Workflow Works (The Upgraded Process):

- Lead Generation 🎯: Automatically sources targeted leads from Apollo.io and pushes the data to your Airtable base.

- Deep Lead Enrichment 📚: Enriches each lead with crucial context by scraping information from various sources:
    - Company business summary and key details.
    - The lead's most recent LinkedIn post.
    - Recent company news releases from across the web.

- Intelligent Lead Qualification ✅: (NEW!) A dedicated node qualifies each lead based on your custom criteria (set in Airtable). This ensures a perfect ICP match and prevents unnecessary spending.

- Optimized Email Verification 📧: Emails are now verified for deliverability only after a lead has been qualified. This saves significant credits and protects your email account's sender reputation.

- AI-Powered Personalization ✍️: AI models craft a sequence of three highly personalized emails (subject and body) using the enriched data. An integrated "remake" option allows you to manually adjust messages as needed.

- Instantly.ai Campaign Push 🚀: The fully enriched, qualified, and personalized lead list is seamlessly pushed to Instantly.ai, where it automatically creates and launches a new campaign.

## Why This Template is Unique:

- End-to-End Automation: A single workflow handles the entire BDR process, eliminating the need to stitch together multiple automations.

- Cost Efficiency: The new pre-verification qualification step dramatically reduces API costs for email verification, making your campaigns roughly 30% cheaper than many market tools.

- Unmatched Personalization: Leverages multiple enrichment APIs and AI models to create truly unique and relevant email sequences.

- Scalable & User-Friendly: The Airtable-based UI makes it easy for non-technical users to manage campaigns, while n8n provides a robust, scalable backend.

## Requirements:

- An n8n instance (Cloud or self-hosted)

- Airtable account

- API access for: Apollo, Apify, Instantly.ai, Emailable, Jina AI, Perplexity, OpenAI/Anthropic

## Demo Video:

Youtube: 
[Presentation Video ](https://youtu.be/jRzndhzLRnE)

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Filter, OpenAI, Jina AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
