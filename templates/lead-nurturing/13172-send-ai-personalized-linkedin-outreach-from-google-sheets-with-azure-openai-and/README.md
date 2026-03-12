# 💬 Send AI-personalized LinkedIn outreach from Google Sheets with Azure OpenAI and ConnectSafely

> ⚡ **257 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## 📊 Description
Automate personalized LinkedIn outreach at scale using AI and real prospect data. 🤖📧
This workflow pulls leads from Google Sheets, generates human-like LinkedIn messages with Azure OpenAI, and sends them safely via the ConnectSafely LinkedIn API. It intelligently avoids duplicate messages, validates delivery, and updates message status back into your sheet automatically. Perfect for consistent, non-salesy B2B outreach with zero manual effort.

## What This Template Does

⏰ Triggers automatically on a daily schedule to start LinkedIn outreach.

📄 Fetches prospect details from Google Sheets for processing.

🔁 Loops through prospects in controlled batches to avoid API limits.

🧠 Uses AI to generate personalized LinkedIn messages based on role, company, industry, and activity.

✅ Checks if a message already exists to prevent duplicates.

💾 Saves generated messages back to Google Sheets for tracking.

🔍 Fetches LinkedIn profile data and profile URNs via ConnectSafely.

💬 Sends personalized LinkedIn messages safely using the ConnectSafely API.

📊 Updates Google Sheets with message delivery status and LinkedIn profile links.

## Key Benefits
✅ Fully automated LinkedIn outreach with no manual copywriting
✅ AI-driven personalization for higher reply rates
✅ Prevents duplicate messages automatically
✅ Centralized tracking inside Google Sheets
✅ Safe LinkedIn messaging using ConnectSafely APIs
✅ Scalable daily outreach without risking account limits

## Features
- Scheduled trigger for daily LinkedIn outreach
- Google Sheets integration for lead management
- Azure OpenAI (GPT-4o-mini) for AI message generation
- Batch processing for rate-limit safety
- Conditional logic to validate message creation
- ConnectSafely LinkedIn API for profile lookup and message sending

## Requirements
- Google Sheets account with prospect data
- Azure OpenAI credentials (GPT-4o-mini access)
- ConnectSafely LinkedIn API credentials
- n8n instance with scheduled workflows enabled

## Target Audience
- B2B founders and agency owners doing LinkedIn outreach
- Sales and lead generation teams
- Growth marketers running outbound campaigns
- Automation consultants building LinkedIn workflows

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
