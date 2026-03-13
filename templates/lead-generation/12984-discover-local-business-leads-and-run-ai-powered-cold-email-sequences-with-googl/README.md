# 🎣 Discover local business leads and run AI-powered cold email sequences with Google Maps and Gmail

> ⚡ **41 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Discover local business leads and run automated cold email sequences with Google Maps and Gmail

This workflow is a complete outbound automation system that discovers local businesses, extracts contact emails, generates personalized cold emails using AI, and runs a multi-step follow-up sequence — fully automated.

It is designed for founders, agencies, and consultants who want to generate leads at scale without manual scraping or repetitive email work.

---

## Use cases

- Local service lead generation (marketing agencies, SaaS, consultants)
- B2B prospecting by location and category
- Automated cold outreach campaigns
- Market research and business discovery
- Sales pipeline bootstrapping

---

## How it works

1. Reads ZIP codes and business categories from Google Sheets  
2. Queries Google Maps API for matching businesses  
3. Visits each website and extracts public emails  
4. Stores leads in Google Sheets  
5. Uses AI to generate intro + 2 follow-up emails  
6. Sends emails via Gmail  
7. Automatically schedules follow-ups  
8. Tracks status and prevents duplicates  

Everything runs on schedules and updates itself.

---

## How to use

1. Create a Google Sheet with:
   - `Zips` tab (ZIP codes)
   - `Google Maps Categories` tab
   - `Results` tab

2. Add:
   - Google Maps API key
   - Gmail account
   - Google Sheets credentials

3. Replace placeholders:
   - Company name
   - Logo URL
   - CTA text

4. Enable schedule triggers.

That’s it. The system runs continuously.

---

## Requirements

- Google Maps API key  
- Google account (Sheets + Gmail)  
- Gemini / OpenAI API key  
- Public company logo URL  

No paid scraping tools required.

---

## Good to know

- Uses exponential backoff to handle API limits safely  
- Prevents duplicate leads using place_id  
- Tracks email status and send dates  
- Follow-ups only send if intro was delivered  
- All data stays in your Google Sheets  

---

## Customising this workflow

You can easily:

- Change email copy style in the AI prompt  
- Adjust follow-up delays  
- Add more follow-up steps  
- Replace Gmail with Outlook or SMTP  
- Push leads into CRM instead of Sheets  

This workflow is modular and extensible.

---

## What this n8n template demonstrates

- Real-world lead generation automation  
- Web scraping with fallback logic  
- AI-powered copy generation  
- Stateful workflow design  
- Multi-trigger scheduling  
- Error handling and retries  
- Production-grade outbound system  

This is not a demo — it’s a deployable business workflow.

---

## Need a custom setup?

If you want a similar system built for your business (custom data sources, CRM integration, WhatsApp bots, booking systems, dashboards, or private deployments), feel free to reach out at dinakars2003@gmail.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Stop and Error, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
